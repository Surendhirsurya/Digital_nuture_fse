package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String,String> authenticate(

            @RequestHeader("Authorization") String authHeader){

        String base64Credentials = authHeader.substring("Basic ".length());

        byte[] decodedBytes =
                Base64.getDecoder().decode(base64Credentials);

        String credentials = new String(decodedBytes);

        String username = credentials.split(":")[0];

        String token = JwtUtil.generateToken(username);

        Map<String,String> map = new HashMap<>();

        map.put("token", token);

        return map;

    }

}