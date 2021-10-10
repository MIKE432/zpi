package com.example.sztoswro.config

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler
import org.springframework.stereotype.Component
import java.util.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


data class LoginResponse(
    val token: String
)

@Component
class RestAuthenticationSuccessHandler(
        @Value("\${jwt.expirationTime}") private val expirationTime: Long,
        @Value("\${jwt.secret}") private val secret: String
) : SimpleUrlAuthenticationSuccessHandler() {
    private val mapper = jacksonObjectMapper()
    override fun onAuthenticationSuccess(request: HttpServletRequest, response: HttpServletResponse, auth: Authentication) {
        val token: String = JWT.create()
                .withSubject((auth.principal as UserDetails).username)
                .withExpiresAt(Date(System.currentTimeMillis() + expirationTime))
                .sign(Algorithm.HMAC256(secret))

        response.addHeader("Authorization", "Bearer $token")
        response.writer.write(mapper.writeValueAsString(LoginResponse(token)))
        response.writer.flush()
    }
}