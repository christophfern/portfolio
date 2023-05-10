package com.cfern.portfolio.entity.validators;

import jakarta.validation.Constraint;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import jakarta.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import org.springframework.util.StringUtils;

@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EqualsValidator.class)
public @interface Equals {
  String message() default "";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};

  String value();

}

class EqualsValidator implements ConstraintValidator<Equals, String> {

  private String value;
  private String message;


  @Override
  public void initialize(Equals constraintAnnotation) {
    value = constraintAnnotation.value();
    message = constraintAnnotation.message();
  }

  @Override
  public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
    if (StringUtils.hasText(str) && StringUtils.hasText(value) && value.equals(str)) {
      return true;
    }

    constraintValidatorContext.disableDefaultConstraintViolation();
    constraintValidatorContext.buildConstraintViolationWithTemplate(message)
        .addConstraintViolation();
    return false;
  }
}

