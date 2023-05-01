package com.cfern.portfolio.entity;

import lombok.Data;

/**
 * Base article entity.
 */
@Data
public class Article {
  String id;
  String title;
  String content;
  String author;
  String date;
}
