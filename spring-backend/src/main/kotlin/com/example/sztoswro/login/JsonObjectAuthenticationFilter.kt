package com.example.sztoswro.login

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class JsonObjectAuthenticationFilter(private val objectMapper: ObjectMapper): UsernamePasswordAuthenticationFilter() {

    override fun attemptAuthentication(request: HttpServletRequest?, response: HttpServletResponse?): Authentication? {
        var reader = request?.reader
        var sb = StringBuilder()
        var line: String
        if (reader != null) {

           while(true) {
               line = reader.readLine()
               if (line == null)
                   break
               else {
                   sb.append(line)
               }
           }

            var authRequest: LoginCredentials = objectMapper.readValue(sb.toString(), LoginCredentials::class.java)
            var token: UsernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(authRequest.username,
            authRequest.password)

            setDetails(request, token)
            return this.authenticationManager.authenticate(token)
        }
        return null
    }
}