package com.stark.morsocode.DAO.repository;

import com.stark.morsocode.DAO.Entity.MessageModel;
import com.stark.morsocode.service.MessageService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



public interface MessageRepository extends JpaRepository<MessageModel, Integer> {


}
