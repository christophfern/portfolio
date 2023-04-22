package com.cfern.portfolio.http.response;

import lombok.Data;

@Data
public class Article {
    String id;
    String title;
    String content;
    String author;
    String date;
}
