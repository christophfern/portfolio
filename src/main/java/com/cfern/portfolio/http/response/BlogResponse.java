package com.cfern.portfolio.http.response;

import java.util.List;
import lombok.Data;

/**
 * Base class for a blog response.
 */
@Data
public class BlogResponse {
  List<Article> articles;
}
