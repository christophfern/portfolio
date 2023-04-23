package com.cfern.portfolio.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.cfern.portfolio.aws.S3Connector;
import com.cfern.portfolio.aws.SNSConnector;
import com.cfern.portfolio.http.request.ContactMeRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ContactMeMessageService {

    @NonNull
    private final S3Connector s3Connector;

    @NonNull
    private final SNSConnector snsConnector;

    @NonNull
    private final ObjectMapper objectMapper;

    @NonNull
    private final DateFormat dateFormat;

    @NonNull
    private final String prefix;

    public ContactMeMessageService(@NonNull S3Connector s3Connector, @NonNull SNSConnector snsConnector, @NonNull ObjectMapper objectMapper,
                                   @NonNull @Value("${aws.s3.bucket.contactme.prefix}") String prefix) {
        this.s3Connector = s3Connector;
        this.snsConnector = snsConnector;
        this.objectMapper = objectMapper;
        this.prefix = prefix;
        this.dateFormat = new SimpleDateFormat("dd:MM:yy_HH:mm:ss");
    }

    public void processContactMeMessage(ContactMeRequest request) {
        log.info("Beginning to process contact me message: {}", request.toString());
        String jsonRequest = createJsonString(request);
        saveMessageToS3(generateFileName(request.getName()), jsonRequest);
        publishMessageToSNS(jsonRequest);
    }

    void publishMessageToSNS(String jsonRequest) {
        log.info("Attempting to publish message to SNS with content: {}", jsonRequest);
        snsConnector.publishMessage(jsonRequest);
    }

    String createJsonString(ContactMeRequest request) {
        String s;
        try {
            s = objectMapper.writeValueAsString(request);
        } catch (JsonProcessingException e) {
            log.error("Unable to create json string", e);
            return null;
        }
        return s;
    }

    void saveMessageToS3(String fileName, String jsonRequest) {
        try {
            log.info("Attempting to save {} to S3 with content: {}", fileName, jsonRequest);
            s3Connector.uploadFile(fileName, jsonRequest);
        } catch (Exception e) {
            log.error("Unable to save message to S3", e);
        }
    }

    String generateFileName(String name) {
        String fileName = name.replaceAll(" ", "_");
        fileName = prefix + fileName + "_" + dateFormat.format(new Date()) + ".json";
        return fileName;
    }

}
