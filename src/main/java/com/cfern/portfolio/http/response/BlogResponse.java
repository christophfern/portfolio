package com.cfern.portfolio.http.response;

import com.cfern.portfolio.entity.Article;
import lombok.Data;

import java.util.List;

/**
 * Base class for a blog response.
 */
@Data
public class BlogResponse {
  List<Article> articles;
}
