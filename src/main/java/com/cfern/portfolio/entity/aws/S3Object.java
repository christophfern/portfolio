package com.cfern.portfolio.entity.aws;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Valid
public class S3Object {

  @NotNull
  @JsonProperty("bucket")
  @Valid
  private Bucket bucket;

  @NotNull
  @JsonProperty("object")
  @Valid
  private S3ObjectDetails objectDetails;

}