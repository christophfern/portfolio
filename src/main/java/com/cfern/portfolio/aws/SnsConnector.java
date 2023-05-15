package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSAsyncClientBuilder;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * The connector for SNS.
 * Note that if another sns arn is introduced to this project (probably not). Then create
 * subclasses for each arn and have the extend this class.
 */
@Component
public class SnsConnector {

  @NonNull
  private final AmazonSNS snsClient;

  @NonNull
  private final String topicArn;

  public SnsConnector(@NonNull @Value("${aws.sns.contactme.arn}") String topicArn) {
    this.snsClient = AmazonSNSAsyncClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
    this.topicArn = topicArn;
  }

  public void publishMessage(String message) {
    snsClient.publish(topicArn, message);
  }
}
