package com.example.sztoswro.config

import com.auth0.jwt.JWT
import com.example.sztoswro.member.LoginCredentials
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import java.io.BufferedReader
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class JsonObjectAuthenticationFilter(private val objectMapper: ObjectMapper) : UsernamePasswordAuthenticationFilter() {

    private fun getContentFromRequest(request: HttpServletRequest?): String {
        val reader: BufferedReader? = request?.reader
        val sb = StringBuilder()
        var line: String? = reader?.readLine()

        while (line != null) {
            sb.append(line)
            line = reader?.readLine()
        }

        return sb.toString()
    }

    private fun getTokenFromRequest(request: HttpServletRequest?): UsernamePasswordAuthenticationToken {
        val content = getContentFromRequest(request)
        val authRequest = objectMapper.readValue(content, LoginCredentials::class.java)
        return UsernamePasswordAuthenticationToken(authRequest.email, authRequest.password)
    }

    override fun attemptAuthentication(request: HttpServletRequest?, response: HttpServletResponse?): Authentication {
        return try {
            val token = getTokenFromRequest(request)
            setDetails(request, token)
            authenticationManager.authenticate(token)
        } catch (e: IOException) {
            throw IllegalAccessError()
        }
    }
}