package com.cfern.portfolio.entity;

import lombok.Data;

@Data
public class S3CopyObject {

  private String source;

  private String destination;
}
