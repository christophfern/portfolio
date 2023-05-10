package com.cfern.portfolio.service;

import com.cfern.portfolio.aws.S3Connector;
import com.cfern.portfolio.component.ArticlesCache;
import org.springframework.stereotype.Service;

@Service
public class S3TechnicalArticleService extends S3ArticlesService {

    public S3TechnicalArticleService(S3Connector s3Connector, ArticlesCache articlesCache) {
        super("technical-blogs", s3Connector, articlesCache);
    }

}
