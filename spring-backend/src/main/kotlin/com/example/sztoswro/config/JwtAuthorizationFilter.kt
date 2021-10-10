package com.example.sztoswro.config

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.exceptions.TokenExpiredException
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class JwtAuthorizationFilter(authManager: AuthenticationManager, private val userDetailsService: UserDetailsService?) : BasicAuthenticationFilter(authManager) {
    private val TOKEN_HEADER = "Authorization"
    private val TOKEN_PREFIX = "Bearer "
    private val secret = "ad7a6ds87a6da8dasd76asd876ads8ad7a6ds8a6sasda"

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        try {
            val authentication = getAuthentication(request)
            if (authentication == null) {
                filterChain.doFilter(request, response)
                return
            }
            SecurityContextHolder.getContext().authentication = authentication
            filterChain.doFilter(request, response)
        } catch (e: TokenExpiredException) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.message)
        }
    }

    private fun getAuthentication(request: HttpServletRequest): UsernamePasswordAuthenticationToken? {
        val token = request.getHeader(TOKEN_HEADER)
        if (token != null && token.startsWith(TOKEN_PREFIX)) {
            val userName = JWT.require(Algorithm.HMAC256(secret))
                    .build()
                    .verify(token.replace(TOKEN_PREFIX, ""))
                    .subject
            if (userName != null) {
                val userDetails = userDetailsService!!.loadUserByUsername(userName)
                return UsernamePasswordAuthenticationToken(userDetails.username, null, userDetails.authorities) // 8
            }
        }
        return null
    }
}