package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SNSConnector {

    @NonNull
    private final AmazonSNS snsClient;

    @NonNull
    private final String topicArn;

    public SNSConnector(@NonNull @Value("${aws.sns.contactme.sns}") String topicArn) {
        this.snsClient = AmazonSNSClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
        this.topicArn = topicArn;
    }

    public void publishMessage(String message) {
        snsClient.publish(topicArn, message);
    }
}
