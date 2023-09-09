package com.stark.morsocode.controller;


import com.stark.morsocode.DTO.MessageDTO;
import com.stark.morsocode.service.MessageService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("v1/api")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping
    public List<String> getMessages(){
        return messageService.getMessages();
    }

    @PostMapping
    public void postMessage(@RequestParam MessageDTO message){
        messageService.putmessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable int id){
        messageService.deleteMessage(id);
    }
}
