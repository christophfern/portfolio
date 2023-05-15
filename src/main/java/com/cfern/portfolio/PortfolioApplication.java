package com.cfern.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * The entry point of the Spring Boot application.
 */
@SpringBootApplication
@EnableScheduling
public class PortfolioApplication {

  public static void main(String[] args) {
    SpringApplication.run(PortfolioApplication.class, args);
  }

}
