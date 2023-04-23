package com.cfern.portfolio.http.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactMeRequest {
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Name must contain only letters")
    @Size(min = 1, max = 100, message = "Name must be between 1 and 50 characters long")
    private String name;

    @Email(message = "Invalid email address")
    private String email;

    @Pattern(regexp = "^\\d{3}[-]?\\d{3}[-]?\\d{4}$", message = "Must be a valid phone number")
    private String phoneNumber;

    @Size(max = 1000, min = 1, message = "Message must be less than 1000")
    private String message;
}
