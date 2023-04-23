package com.cfern.portfolio.repository;

import com.cfern.portfolio.entity.DbContactMeMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMeMessageRepository extends JpaRepository<DbContactMeMessage, Long> {

}
