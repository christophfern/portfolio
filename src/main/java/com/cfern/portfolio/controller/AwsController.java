package com.cfern.portfolio.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/aws")
@RequiredArgsConstructor
public class AwsController {

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

  @RequestMapping(value = "/contact-me")
  public ResponseEntity<String> contactMe() {
    return null;
  }
}
