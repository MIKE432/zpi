package com.example.sztoswro.login

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController {

    @PostMapping("/login")
    fun login(@RequestBody credentials: LoginCredentials) {

    }
}