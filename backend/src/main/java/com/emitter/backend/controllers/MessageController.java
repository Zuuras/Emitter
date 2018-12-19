package com.emitter.backend.controllers;

import com.emitter.backend.entity.User;
import com.emitter.backend.entity.Message;
import com.emitter.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class MessageController {
    @Autowired
    private MessageService messageService;


    @GetMapping("/messages")
    public ArrayList<Message> getMessageList() {
        ArrayList<Message> messages = new ArrayList<Message>();
        messages.add(new Message());
        return messages;
    }

    @GetMapping("/messages/{id}")
    public Message getMessage(@PathVariable("id") Long id) {
        return new Message();
    }

    @PutMapping("/messages")
    public Message putMessage(@RequestBody Message messageData) {
        Message message = new Message();
        message.setFromUserId(1); //@TODO БЛЯ, ШО ЗДЕСЬ ДОЛЖНО БЫТЬ
        message.setToUserId(messageData.getToUserId());
        message.setMessage(messageData.getMessage());
        //message.save(); //@TODO что-то с наследованием не так
        Message m = this.messageService.getById((long) 2);
        this.messageService.save();
        m.save();
        return null;
    }
}
