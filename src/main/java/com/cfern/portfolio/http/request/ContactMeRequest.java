package com.cfern.portfolio.http.request;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.Data;

@Data
public class ContactMeRequest {

    private String name;
    private String email;
    private String phoneNumber;
    private String message;
}
