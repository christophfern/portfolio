package com.cfern.portfolio.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.atMost;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.cfern.portfolio.aws.S3Connector;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@SpringBootTest
public class AwsControllerTest {

  public static String snsMessage = """
      {
        "Records": [
          {
            "eventVersion": "2.0",
            "eventSource": "aws:s3",
            "awsRegion": "us-west-2",
            "eventTime": "2016-09-25T19:59:29.079Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
              "principalId": "EXAMPLE"
            },
            "requestParameters": {
              "sourceIPAddress": "192.168.1.1"
            },
            "responseElements": {
              "x-amz-request-id": "C3D13FE58DE4C810",
              "x-amz-id-2": "oRtXV/CHBnKWLuQOWV+5G49Q9uY21sNFiMpnPvI1Wf09+SQiz1jfuepTA2lJQFiS"
            },
            "s3": {
              "s3SchemaVersion": "1.0",
              "configurationId": "testConfigRule",
              "bucket": {
                "name": "example-bucket",
                "ownerIdentity": {
                  "principalId": "EXAMPLE"
                },
                "arn": "arn:aws:s3:::chris-portfolio-blog-bucket"
              },
              "object": {
                "key": "example-object",
                "size": 1024,
                "eTag": "0123456789abcdef0123456789abcdef",
                "versionId": "0123456789abcdef0123456789abcdef",
                "sequencer": "0A1B2C3D4E5F678901"
              }
            }
          }
        ]
      }
      """;
  @Autowired
  private WebApplicationContext context;
  @MockBean
  private S3Connector mockS3Connector;
  private MockMvc mockMvc;

  @BeforeEach
  public void setup() {
    mockMvc = MockMvcBuilders
        .webAppContextSetup(context)
        .build();
  }

  @Test
  public void controllerTest() throws Exception {
    verify(mockS3Connector, atMost(1)).getFilesForPrefix("blogs/technical-blog/new/");
    verify(mockS3Connector, atMost(1)).moveObject(any());
    mockMvc.perform(post("/aws/new-technical-article")
            .contentType(MediaType.APPLICATION_JSON).content(snsMessage))
        .andExpect(status().isOk());
  }
}
