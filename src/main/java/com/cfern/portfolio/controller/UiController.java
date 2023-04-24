package com.cfern.portfolio.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller for the UI used to intercept UI requests.
 */
@Controller
public class UiController {
  /**
   * Routing every that is not /api/** to the index.html which is the React app
   * The React app with control the routing
   */
  @RequestMapping(value = {"/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}"})
  public String getIndex(HttpServletRequest request) {
    return "/index.html";
  }

}
