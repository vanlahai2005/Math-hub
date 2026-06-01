package com.mathhub.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mathhub.backend.dto.RegisterRequest;
import com.mathhub.backend.entity.Users;
import com.mathhub.backend.repository.UserRepository;

@Service


public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Users registerUser(RegisterRequest request) {
        // Kiểm tra nếu email đã tồn tại
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email đã tồn tại");
        }

        // Tạo người dùng mới
        Users newUser = new Users();
        newUser.setEmail(request.getEmail());
        newUser.setPasswordHash(request.getPassword()); // Lưu mật khẩu dưới dạng hash trong thực tế

        // Lưu người dùng vào cơ sở dữ liệu
        return userRepository.save(newUser);
    }    
}
