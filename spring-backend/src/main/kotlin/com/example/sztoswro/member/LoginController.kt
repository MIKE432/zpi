package com.example.sztoswro.member

import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"])
@RestController
class LoginController {

    @PostMapping("/login")
    fun login(@RequestBody loginCredentials: LoginCredentials){}
}