package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * The connector for S3.
 * Note that if another bucket is introduced to this project (probably not). Then create
 * subclasses for each bucket and have the extend this class.
 */
@Slf4j
@Component
public class S3Connector {

  private final String bucketName;

  private final AmazonS3 s3Client;

  /**
   * Creates a new instance of S3Connector. This instance has a connection to the bucketName.
   *
   * @param bucketName the name of the bucket to connect to
   */
  public S3Connector(@Value("${aws.s3.bucket.name:\"\"}") String bucketName) {
    if (bucketName == null || bucketName.isEmpty()) {
      throw new IllegalArgumentException("Please provide a bucket name");
    }

    this.bucketName = bucketName;
    this.s3Client = AmazonS3ClientBuilder.standard()
        .withRegion(Regions.US_EAST_1)
        .build();
  }


  /**
   * uploads a file to S3.
   *
   * @param key         the key of the file to upload
   * @param fileContent the content of the file to upload
   */
  public void uploadFile(String key, String fileContent) {
    s3Client.putObject(bucketName, key, fileContent);
  }

  /**
   * gets all files from S3 under a prefix.
   *
   * @param folderPath the prefix to get all files from
   */
  public List<S3ObjectSummary> getFilesForPrefix(String folderPath) {
    ListObjectsV2Request request = new ListObjectsV2Request();
    request.setBucketName(bucketName);
    request.setPrefix(folderPath);
    ListObjectsV2Result result;
    List<S3ObjectSummary> objects = new ArrayList();
    do {
      result = s3Client.listObjectsV2(request);
      objects.addAll(result.getObjectSummaries());
      // Process the list of objects here
      for (S3ObjectSummary object : objects) {
        System.out.println(object.getKey());
      }
      request.setContinuationToken(result.getNextContinuationToken());
    } while (result.isTruncated());

    return objects;

  }

  /**
   * checks if there are any files under the specified folderPath.
   *
   * @param folderPath the folderPath to check
   */
  public boolean doesKeyExist(String folderPath) {
    ListObjectsV2Request request = new ListObjectsV2Request();
    request.setBucketName(bucketName);
    request.setPrefix(folderPath);

    ListObjectsV2Result result = s3Client.listObjectsV2(request);

    return result.getObjectSummaries().size() > 0;
  }


}
