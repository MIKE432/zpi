package com.example.sztoswro.login

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class JwtAuthorizationFilter(val authManager: AuthenticationManager,
                             val userDetailsService: UserDetailsService,
                             val secret: String
                             ): BasicAuthenticationFilter(authManager) {

    private val TOKEN_HEADER: String = "Authorization"
    private val TOKEN_PREFIX: String = "Bearer "


    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val authentication: UsernamePasswordAuthenticationToken? = getAuthentication(request)
        if(authentication == null) {
            chain.doFilter(request, response)
            return
        }
        SecurityContextHolder.getContext().authentication = authentication
        chain.doFilter(request, response)
    }

    private fun getAuthentication(request: HttpServletRequest): UsernamePasswordAuthenticationToken? {
        val token: String = request.getHeader(TOKEN_HEADER).orEmpty()
        if(token.startsWith(TOKEN_PREFIX)) {
            val userName: String = JWT.require(Algorithm.HMAC256(secret))
                    .build()
                    .verify(token.replace(TOKEN_PREFIX, ""))
                    .subject
            userName.let {
                val userDetails: UserDetails = userDetailsService.loadUserByUsername(userName)
                return UsernamePasswordAuthenticationToken(userDetails.username, null, userDetails.authorities)
            }
        }
        return null
    }
}