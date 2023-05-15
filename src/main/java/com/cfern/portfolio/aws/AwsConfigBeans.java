package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.sns.AmazonSNSAsync;
import com.amazonaws.services.sns.AmazonSNSAsyncClientBuilder;
import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.AmazonSQSClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configurations for setting up AWS clients
 */
@Configuration
public class AwsConfigBeans {

  /**
   * @return bean to interact with AmazonSQS, only receiving messages doesn't need to be async
   */
  @Bean
  public AmazonSQS sqsClient() {
    return AmazonSQSClient.builder().withRegion(Regions.US_EAST_1).build();
  }

  /**
   * @return bean to interact with AmazonSNS, sending messages so use async
   */
  @Bean
  public AmazonSNSAsync snsAsyncClient() {
    return AmazonSNSAsyncClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
  }

  @Bean
  public AmazonS3 s3Client() {
    return AmazonS3ClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
  }

}
