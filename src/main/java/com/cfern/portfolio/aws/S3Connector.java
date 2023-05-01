package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CopyObjectRequest;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.cfern.portfolio.entity.S3CopyObject;
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
  public List<S3Object> getFilesForPrefix(String folderPath) {
    List<S3Object> objects = new ArrayList<>();
    try {
      log.info("Getting all files for prefix: {}", folderPath);
      ListObjectsV2Request request = new ListObjectsV2Request()
          .withBucketName(bucketName)
          .withPrefix(folderPath);
      ListObjectsV2Result result;

      do {
        result = s3Client.listObjectsV2(request);

        // Process the list of objects here
        for (S3ObjectSummary object : result.getObjectSummaries()) {
          GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, object.getKey());
          objects.add(s3Client.getObject(getObjectRequest));
        }
        request.setContinuationToken(result.getNextContinuationToken());
      } while (result.isTruncated());
    } catch (Exception e) {
      log.error("Something went wrong trying to get files with prefix {} in bucket {}", folderPath,
          bucketName);
    }
    return objects;
  }

  public void moveObjects(List<S3CopyObject> copyObjects) {
    for (S3CopyObject s3CopyObject : copyObjects) {
      moveObject(s3CopyObject);
    }
  }

  public void moveObject(S3CopyObject s3CopyObject) {
    log.info("Moving object from {} to {}. This requires a copy and a delete",
        s3CopyObject.getSource(), s3CopyObject.getDestination());
    copyObject(s3CopyObject);
    deleteObject(s3CopyObject);
  }

  public void copyObject(S3CopyObject s3CopyObject) {
    try {
      log.info("Copying object from {} to {}.", s3CopyObject.getSource(),
          s3CopyObject.getDestination());
      CopyObjectRequest copyObjectRequest = new CopyObjectRequest()
          .withDestinationKey(s3CopyObject.getDestination())
          .withSourceKey(s3CopyObject.getSource())
          .withSourceBucketName(bucketName)
          .withDestinationBucketName(bucketName);
      s3Client.copyObject(copyObjectRequest);
    } catch (Exception e) {
      log.error("Something went wrong when trying to copy object {}", s3CopyObject, e);
    }
  }

  public void deleteObject(S3CopyObject s3CopyObject) {
    try {
      log.info("Deleting object from {}.", s3CopyObject.getSource());
      DeleteObjectRequest deleteObjectRequest =
          new DeleteObjectRequest(bucketName, s3CopyObject.getSource());
      s3Client.deleteObject(deleteObjectRequest);
    } catch (Exception e) {
      log.error("Something went wrong when trying to delete object {}", s3CopyObject, e);
    }
  }

}
