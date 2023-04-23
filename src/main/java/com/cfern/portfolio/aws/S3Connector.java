package com.cfern.portfolio.aws;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class S3Connector {

    private final String bucketName;

    private final AmazonS3 s3Client;

    public S3Connector(@Value("${aws.s3.bucket.name:\"\"}") String bucketName) {
        if (bucketName == null || bucketName.isEmpty()) {
            throw new IllegalArgumentException("Please provide a bucket name");
        }

        this.bucketName = bucketName;
        this.s3Client = AmazonS3ClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .build();
    }

    public void uploadFile(String key, String fileContent) {
        s3Client.putObject(bucketName, key, fileContent);
    }

    public void getFilesForPrefix(String folderPath) {
        ListObjectsV2Request request = new ListObjectsV2Request();
        request.setBucketName(bucketName);
        request.setPrefix(folderPath);
        ListObjectsV2Result result = s3Client.listObjectsV2(request);

    }

    public boolean doesKeyExist(String folderPath) {
        ListObjectsV2Request request = new ListObjectsV2Request();
        request.setBucketName(bucketName);
        request.setPrefix(folderPath);

        ListObjectsV2Result result = s3Client.listObjectsV2(request);

        return result.getObjectSummaries().size() > 0;
    }


}
