package com.cfern.portfolio.entity.aws;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Data;

@Valid
@Data
public class SnsMessage {

  @NotNull
  @JsonProperty("Records")
  @Valid
  private List<Record> records;

}
