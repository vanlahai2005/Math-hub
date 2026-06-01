package com.mathhub.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mathhub.backend.dto.RegisterRequest;
import com.mathhub.backend.entity.Users;
import com.mathhub.backend.exception.DuplicateEmailException;
import com.mathhub.backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Users registerUser(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new DuplicateEmailException("Email đã tồn tại");
        }

        Users newUser = new Users();
        newUser.setEmail(request.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(newUser);
    }
}
