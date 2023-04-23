package com.cfern.portfolio.service;

import com.cfern.portfolio.entity.DbContactMeMessage;
import com.cfern.portfolio.http.request.ContactMeRequest;
import com.cfern.portfolio.repository.ContactMeMessageRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ContactMeMessageService {

    @NonNull
    private final ContactMeMessageRepository repository;

    public void processContactMeMessage(ContactMeRequest request) {
        log.info("Beginning to process contact me message: {}", request.toString());
        saveMessageToDatabase(request);
        log.info("Message saved to database");
    }

    void saveMessageToDatabase(ContactMeRequest request) {
        DbContactMeMessage dbContactMeMessage = mapRequestToDbMessage(request);
        repository.save(dbContactMeMessage);
    }

    DbContactMeMessage mapRequestToDbMessage(ContactMeRequest request) {
        DbContactMeMessage dbMessage = new DbContactMeMessage();
        dbMessage.setMessage(request.getMessage());
        dbMessage.setEmail(request.getEmail());
        dbMessage.setName(request.getName());
        dbMessage.setPhone(request.getPhoneNumber());
        return dbMessage;
    }


}
