package com.cfern.portfolio.component;

import com.amazonaws.services.s3.model.S3Object;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@Data
@Slf4j
public class ArticlesCache {
    private Map<String, List<S3Object>> cache;

    @Autowired
    public ArticlesCache() {
        this.cache = new HashMap<>();
    }

    public void put(String key, List<S3Object> objects) {
        cache.put(key, objects);
    }

    public List<S3Object> get(String key) {
        return cache.get(key);
    }

    public boolean containsKey(String key) {
        return cache.containsKey(key);
    }

    public void manualAddToCacheList(String key, List<S3Object> s3Object) {
        List<S3Object> value = cache.get(key);
        if (value == null) {
            throw new RuntimeException(String.format("Cache does not contain key: %s", key));
        } else {
            value.addAll(s3Object);
        }
    }

    public void clear() {
        this.cache = new HashMap<>();
    }
}
