package com.cfern.portfolio.service;

import com.cfern.portfolio.entity.Article;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class S3TechnicalArticleServiceTest {
    @Autowired
    S3TechnicalArticleService s3TechnicalArticleService;

    @Test
    public void testGetNewArticlesFromS3() {
        List<Article> articles = s3TechnicalArticleService.getNewArticles();
        System.out.println();
    }
}
