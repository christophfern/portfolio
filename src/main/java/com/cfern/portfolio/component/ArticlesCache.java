package com.cfern.portfolio.component;

import com.cfern.portfolio.entity.Article;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * A cache to hold onto Articles that have already been retrieved from s3.
 * Avoid giving Jeffery Bezos as much money as possible.
 */
@Component
@Data
@Slf4j
public class ArticlesCache {
    private Map<String, List<Article>> cache;

    @Autowired
    public ArticlesCache() {
        this.cache = new HashMap<>();
    }

    public void put(String key, List<Article> objects) {
        cache.put(key, objects);
    }

    public List<Article> get(String key) {
        return cache.get(key);
    }

    public boolean containsKey(String key) {
        return cache.containsKey(key);
    }

    /**
     * Use this to add objects to an existing key. Not really how a cache works, but oh well.
     * Avoid paying Amazon.
     *
     * @param key       - to be added to
     * @param s3Objects - objects to add
     */
    public void manualAddToCacheList(String key, List<Article> s3Objects) {
        List<Article> value = cache.get(key);
        if (value == null) {
            throw new RuntimeException(String.format("Cache does not contain key: %s", key));
        } else {
            value.addAll(s3Objects);
        }
    }

    public void clear() {
        this.cache = new HashMap<>();
    }
}
