package com.cfern.portfolio.service;

import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.cfern.portfolio.aws.S3Connector;
import java.util.List;

public class S3ArticlesService {

  private final String prefix;

  private final S3Connector s3Connector;

  public S3ArticlesService(String prefix, S3Connector s3Connector) {
    this.prefix = prefix;
    this.s3Connector = s3Connector;
  }

  public void getNewArticles() {
    String fullPrefix = prefix + "/new/";

    List<S3ObjectSummary> s3ObjectSummaries = s3Connector.getFilesForPrefix(fullPrefix);
    //write some process code here

  }
}
