package com.cfern.portfolio.controller;

import com.cfern.portfolio.http.request.ContactMeRequest;
import com.cfern.portfolio.http.response.BlogResponse;
import com.cfern.portfolio.service.ContactMeMessageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
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

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class APIController {

    @NonNull
    private final ObjectMapper mapper;

    @NonNull
    private final ContactMeMessageService contactMeMessageService;

    @RequestMapping
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> defaultHandler(HttpServletRequest request) {
        String errorMessage = "No mapping found for " + request.getMethod() + " " + request.getRequestURI();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    @PostMapping("/post-contact-me/v0")
    public ResponseEntity<Void> postContactMe(HttpServletRequest request, @RequestBody @Valid ContactMeRequest requestBody) throws JsonProcessingException {
        ResponseEntity<Void> response = new ResponseEntity<>(HttpStatus.CREATED);
        contactMeMessageService.processContactMeMessage(requestBody);
        return response;
    }

    @GetMapping("/get-technical-articles/v0")
    public ResponseEntity<BlogResponse> getTechnicalPortfolio() throws JsonProcessingException {
        BlogResponse blogResponse = mapper.readValue(BlOG_TEST_DATA, BlogResponse.class);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.add("Access-Control-Allow-Origin", "*");
        ResponseEntity<BlogResponse> response = new ResponseEntity<>(blogResponse, httpHeaders, HttpStatus.OK);
        return response;
    }

    @GetMapping("/get-personal-articles/v0")
    public ResponseEntity<BlogResponse> getPersonalPortfolio() throws JsonProcessingException {
        BlogResponse blogResponse = mapper.readValue(BlOG_TEST_DATA, BlogResponse.class);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.add("Access-Control-Allow-Origin", "*");
        ResponseEntity<BlogResponse> response = new ResponseEntity<>(blogResponse, httpHeaders, HttpStatus.OK);
        return response;
    }

    public static String BlOG_TEST_DATA = """
            {
              "articles": [
                {
                  "id": 1,
                  "title": "A Beginner's Guide to React",
                  "content": "In this article, we'll explore the basics of React and how to build a simple web application using React.",
                  "author": "John Doe",
                  "date": "2022-01-01"
                },
                {
                  "id": 2,
                  "title": "Introduction to Node.js",
                  "content": "Node.js is a powerful platform for building scalable and efficient server-side applications. In this article, we'll explore the basics of Node.js and how to get started with it.",
                  "author": "Jane Smith",
                  "date": "2022-02-01"
                },
                {
                  "id": 3,
                  "title": "Advanced CSS Techniques",
                  "content": "CSS can be used to create stunning visual effects and layouts on the web. In this article, we'll explore some advanced techniques for working with CSS, including flexbox, grid, and animations.",
                  "author": "Bob Johnson",
                  "date": "2022-03-01"
                }
              ]
            }
            """;
}