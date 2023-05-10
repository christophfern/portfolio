package com.cfern.portfolio.controller;

import com.cfern.portfolio.entity.Article;
import com.cfern.portfolio.entity.aws.SnsMessage;
import com.cfern.portfolio.service.PersonalArticleService;
import com.cfern.portfolio.service.TechnicalArticleService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import java.util.List;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Rest controller for receiving request from AWS.
 */
@RestController
@RequestMapping(value = "/aws")
@RequiredArgsConstructor
@Slf4j
@Validated
public class AwsController {

  @NonNull
  private PersonalArticleService personalArticleService;

  @NonNull
  private TechnicalArticleService technicalArticleService;

  /**
   * Default handler for all requests that do not match an endpoint that has been created.
   *
   * @param request the request
   * @return 404 Response code with the not found message
   */
  @RequestMapping
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ResponseEntity<String> defaultHandler(HttpServletRequest request) {
    String errorMessage =
        "No mapping found for " + request.getMethod() + " " + request.getRequestURI();
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
  }

  @PostMapping(value = "/new-technical-article")
  public ResponseEntity<String> newTechnicalArticles(@Valid @RequestBody SnsMessage s) {
    List<Article> articles = technicalArticleService.processNewArticles();
    log.info("There were {} new technical articles processed.", articles.size());
    return ResponseEntity.status(HttpStatus.OK).build();
  }

  @PostMapping(value = "/new-personal-article")
  public ResponseEntity<String> newPersonalArticles(@Valid @RequestBody SnsMessage s) {
    List<Article> articles = personalArticleService.processNewArticles();
    log.info("There were {} new personal articles processed.", articles.size());
    return ResponseEntity.status(HttpStatus.OK).build();
  }
}
