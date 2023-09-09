package com.stark.morsocode.service;

import com.stark.morsocode.DAO.Entity.MessageModel;
import com.stark.morsocode.DAO.repository.MessageRepository;
import com.stark.morsocode.DTO.MessageDTO;
import org.aspectj.bridge.Message;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class MessageService {
    private  final MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }
    public List<String> getMessages() {
        try {
            return repository.findAll()
                    .stream()
                    .map(element -> element.getMessage())
                    .collect(Collectors.toList());
        } catch (EmptyResultDataAccessException ex) {

            return Collections.emptyList();
        }
    }

    public void putmessage(MessageDTO message) {
        MessageModel model = new MessageModel();
        model.setMessage(message.getMessage());
        repository.save(model);
    }

    public void deleteMessage(int id) {
       repository.delete(repository.findById(id).orElseThrow()) ;
    }
}
