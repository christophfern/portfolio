package com.cfern.portfolio.aws;

import com.amazonaws.services.sqs.AmazonSQS;
import com.cfern.portfolio.service.ArticlesService;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class TechnicalSqsConnector extends SqsConnector {

  public TechnicalSqsConnector(@NonNull @Value("${aws.sqs.technical.url}") String sqsUrl,
                               @NonNull ArticlesService technicalArticleService,
                               @NonNull AmazonSQS sqsClient) {
    super(sqsUrl, technicalArticleService, sqsClient);
  }

  //AWS gives you 1,000,000 free request per month
  //polling once every minute for a month is a max of 44,640 per month
  @Scheduled(initialDelay = 1000, fixedDelay = 60_000)
  @Override
  public void receiveMessage() {
    super.receiveMessage();
  }
}
