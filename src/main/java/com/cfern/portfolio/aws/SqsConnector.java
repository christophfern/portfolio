package com.cfern.portfolio.aws;

import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.model.DeleteMessageRequest;
import com.amazonaws.services.sqs.model.Message;
import com.amazonaws.services.sqs.model.ReceiveMessageResult;
import com.cfern.portfolio.entity.Article;
import com.cfern.portfolio.service.ArticlesService;
import java.util.Date;
import java.util.List;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

/**
 * The connector for SNS.
 * Note that if another sns arn is introduced to this project (probably not). Then create
 * subclasses for each arn and have the extend this class.
 */
@Slf4j
public class SqsConnector {

  @NonNull
  private final AmazonSQS sqsClient;

  @NonNull
  private final String sqsUrl;

  @NonNull
  private final ArticlesService service;

  protected int LOG_POLL;

  public SqsConnector(@NonNull String sqsUrl, @NonNull ArticlesService service,
                      @NonNull AmazonSQS sqsClient) {
    this.service = service;
    this.sqsClient = sqsClient;
    this.sqsUrl = sqsUrl;
  }


  public void receiveMessage() {
    if (LOG_POLL % 10 == 0) {
      log.info("Polling queue '{}'. Time: {}", sqsUrl, new Date());
    }

    ReceiveMessageResult result = sqsClient.receiveMessage(sqsUrl);

    if (result.getMessages().size() > 0) {
      processMessage(result.getMessages());
    }
  }

  private void processMessage(List<Message> messages) {
    log.info("'{}' new messages about articles from '{}'. Going to process the new messages",
        messages.size(),
        sqsUrl);

    try {
      //do I need to do anything besides get the new ones??
      List<Article> articlesProcessed = service.processNewArticles();

      if (articlesProcessed.size() == messages.size()) {
        log.warn("Number of articles processed '{}' does not match number of messages '{}'",
            articlesProcessed.size(), messages.size());
      }

      for (Message message : messages) {
        DeleteMessageRequest deleteMessageRequest =
            new DeleteMessageRequest()
                .withQueueUrl(sqsUrl)
                .withReceiptHandle(message.getReceiptHandle());

        log.info("Deleting message '{}' from queue '{}'", message.getMessageId(), sqsUrl);
        sqsClient.deleteMessage(deleteMessageRequest);
      }

    } catch (Exception e) {
      log.error("Something went wrong processing the message.", e);
    }

  }
}
