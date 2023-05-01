package com.cfern.portfolio.service;

import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import com.cfern.portfolio.aws.S3Connector;
import com.cfern.portfolio.component.ArticlesCache;
import com.cfern.portfolio.entity.Article;
import com.cfern.portfolio.entity.S3CopyObject;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

/**
 * Parent class for the articles services.
 */
@Slf4j
public class S3ArticlesService {

    private final String prefix;

    private final S3Connector s3Connector;

    private final ArticlesCache articlesCache;

    /**
     * New instance of this  bad boy.
     *
     * @param prefix        the prefix for the articles the use the structure /blogs/{prefix}/{new|old}
     * @param s3Connector   our connector
     * @param articlesCache the cash saving cache
     */
    public S3ArticlesService(@NonNull String prefix, @NonNull S3Connector s3Connector,
                             @NonNull ArticlesCache articlesCache) {
        this.prefix = prefix;
        this.s3Connector = s3Connector;
        this.articlesCache = articlesCache;
    }

    /**
     * Retrieve all the new articles from s3.
     *
     * @return the articles
     */
    public List<Article> getNewArticles() {
        log.info("Retrieving new {} articles", prefix);
        String fullPrefix = "blogs/" + prefix + "/new/";
        List<S3Object> s3Objects = s3Connector.getFilesForPrefix(fullPrefix);

        List<Article> articles = mapS3Objects(s3Objects);
        log.info("There were {} new articles found", articles.size());

        //Make this async with a queue if it's ever too slow.
        //you'll have to write a lot of articles really fast for that!
        s3Connector.moveObjects(generateCopyObjects(s3Objects));
        if (articlesCache.containsKey(prefix)) {
            articlesCache.manualAddToCacheList(prefix, articles);
        }
        return articles;
    }

    /**
     * Retrieve all the published articles either cache or s3.
     *
     * @return the articles
     */
    public List<Article> getPublishedArticles() {
        log.info("Retrieving published {} articles", prefix);

        if (articlesCache.containsKey(prefix)) {
            return articlesCache.get(prefix);
        }

        String fullPrefix = "blogs/" + prefix + "/published/";
        List<S3Object> s3Objects = s3Connector.getFilesForPrefix(fullPrefix);
        List<Article> articles = mapS3Objects(s3Objects);
        log.info("There were {} new articles found", articles.size());

        articlesCache.put(prefix, articles);

        return articles;
    }

    List<S3CopyObject> generateCopyObjects(List<S3Object> s3Objects) {
        List<S3CopyObject> copyObjects = new ArrayList<>();

        for (S3Object s3Object : s3Objects) {
            S3CopyObject s3CopyObject = new S3CopyObject();
            s3CopyObject.setSource(s3Object.getKey());
            s3CopyObject.setDestination(s3Object.getKey().replace("new", "published"));
            copyObjects.add(s3CopyObject);
        }

        return copyObjects;
    }

    List<Article> mapS3Objects(List<S3Object> s3Objects) {
        List<Article> articles = new ArrayList<>();
        for (S3Object s3Object : s3Objects) {
            Article article = new Article();
            if (s3Object.getObjectMetadata() != null) {
                article.setAuthor(s3Object.getObjectMetadata().getUserMetaDataOf("author"));
                article.setDate(s3Object.getObjectMetadata().getUserMetaDataOf("date"));
                article.setTitle(s3Object.getObjectMetadata().getUserMetaDataOf("title"));
            } else {
                log.error("Object metadata is null");
            }
            try (s3Object) {
                article.setContent(getObjectAsString(s3Object));
            } catch (IOException ioException) {
                log.error("Error reading content: ", ioException);
            }
            articles.add(article);
        }
        return articles;
    }

    String getObjectAsString(S3Object s3Object) throws IOException {
        try (InputStream inputStream = s3Object.getObjectContent()) {
            return IOUtils.toString(inputStream);
        }
    }
}
