package com.emitter.backend.service;

import org.springframework.http.ResponseEntity;
import com.emitter.backend.entity.Message;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageService {
    List<Message> getAll();

    void addMessage(Message message);

    Message getById(Long id);

    String testError();


    void save();
}
