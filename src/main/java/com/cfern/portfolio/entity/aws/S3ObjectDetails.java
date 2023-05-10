package com.cfern.portfolio.entity.aws;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Valid
public class S3ObjectDetails {

  @NotBlank
  @JsonProperty("key")
  private String key;

}