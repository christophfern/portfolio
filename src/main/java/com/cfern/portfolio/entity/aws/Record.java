package com.cfern.portfolio.entity.aws;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Valid
public class Record {

  @NotBlank
  @JsonProperty("eventVersion")
  private String eventVersion;

  @NotBlank
  @JsonProperty("eventSource")
  private String eventSource;

  @NotNull
  @JsonProperty("s3")
  @Valid
  private S3Object s3Object;

}