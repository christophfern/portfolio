package com.cfern.portfolio.entity.aws;

import com.cfern.portfolio.entity.validators.Equals;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Valid
public class Bucket {

  @NotBlank
  @JsonProperty("name")
  private String name;

  @NotBlank
  @Equals(value = "arn:aws:s3:::chris-portfolio-blog-bucket", message = "arn is not correct")
  private String arn;

}