package com.cfern.portfolio.http.response;

import lombok.Data;

import java.util.List;

@Data
public class BlogResponse {
    List<Article> articles;
}
