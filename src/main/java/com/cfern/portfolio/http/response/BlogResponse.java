package com.cfern.portfolio.http.response;

import com.cfern.portfolio.entity.Article;
import java.util.List;
import lombok.Data;

/**
 * Base class for a blog response.
 */
@Data
public class BlogResponse {
  List<Article> articles;
}
