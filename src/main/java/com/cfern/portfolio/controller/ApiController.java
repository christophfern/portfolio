package com.cfern.portfolio.controller;

import com.cfern.portfolio.http.request.ContactMeRequest;
import com.cfern.portfolio.http.response.BlogResponse;
import com.cfern.portfolio.service.ContactMeMessageService;
import com.cfern.portfolio.service.PersonalArticleService;
import com.cfern.portfolio.service.TechnicalArticleService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import java.util.List;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


/**
 * Main controller for the all endpoints that are exposed to the front end.
 */
@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
@Slf4j
public class ApiController {

  @NonNull
  private final ObjectMapper mapper;
  @NonNull
  private final ContactMeMessageService contactMeMessageService;
  @NonNull
  private final TechnicalArticleService technicalArticleService;
  @NonNull
  private final PersonalArticleService personalArticleService;

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

  /**
   * The contact me endpoint.
   *
   * @param request     the request
   * @param requestBody the request body
   * @return 201 on success
   */
  @PostMapping("/post-contact-me/v0")
  public ResponseEntity<Void> postContactMe(HttpServletRequest request,
                                            @RequestBody @Valid ContactMeRequest requestBody) {
    log.info("Received post request to contact-me: {}", requestBody);
    ResponseEntity<Void> response = new ResponseEntity<>(HttpStatus.CREATED);
    contactMeMessageService.processContactMeMessage(requestBody);
    return response;
  }

  /**
   * The technical articles endpoint.
   *
   * @return 200 on success
   */
  @GetMapping("/get-technical-articles/v0")
  public ResponseEntity<BlogResponse> getTechnicalPortfolio() throws JsonProcessingException {
    log.info("Received get request for get-technical-articles");
    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);
    httpHeaders.setAccessControlAllowHeaders(List.of("*"));
    httpHeaders.setAccessControlAllowOrigin("*");
    BlogResponse blogResponse = new BlogResponse();
    blogResponse.setArticles(technicalArticleService.getPublishedArticles());

    return new ResponseEntity<>(blogResponse, httpHeaders, HttpStatus.OK);
  }

  /**
   * The personal articles endpoint.
   *
   * @return 200 on success
   */
  @GetMapping("/get-personal-articles/v0")
  public ResponseEntity<BlogResponse> getPersonalPortfolio() throws JsonProcessingException {
    log.info("Received get request for get-personal-articles");

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);
    httpHeaders.setAccessControlAllowHeaders(List.of("*"));
    httpHeaders.setAccessControlAllowOrigin("*");
    BlogResponse blogResponse = new BlogResponse();
    blogResponse.setArticles(personalArticleService.getPublishedArticles());

    return new ResponseEntity<>(blogResponse, httpHeaders, HttpStatus.OK);
  }
}