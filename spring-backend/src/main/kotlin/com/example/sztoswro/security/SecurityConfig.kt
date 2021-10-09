package com.example.sztoswro.security

import com.example.sztoswro.config.JsonObjectAuthenticationFilter
import com.example.sztoswro.config.JwtAuthorizationFilter
import com.example.sztoswro.config.RestAuthenticationFailureHandler
import com.example.sztoswro.config.RestAuthenticationSuccessHandler
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.authentication.HttpStatusEntryPoint


@Configuration
@EnableWebSecurity
class WebSecurityConfig(
        val customUserDetails: CustomUserDetailsService,
        private val objectMapper: ObjectMapper,
        private val successHandler: RestAuthenticationSuccessHandler,
        private val failureHandler: RestAuthenticationFailureHandler
) : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/v2/**").permitAll()
                .antMatchers("/webjars/**").permitAll()
                .antMatchers("/swagger-resources/**").permitAll()
                .antMatchers("/swagger-ui.html").permitAll()
                .antMatchers("/").permitAll()
                .antMatchers("/member").permitAll()
                .anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().httpBasic()
                .and()
                .addFilter(authenticationFilter())
                .addFilter(JwtAuthorizationFilter(authenticationManager(), customUserDetails))
                .exceptionHandling()
                .authenticationEntryPoint(HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .headers().frameOptions().disable();
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(customUserDetails).passwordEncoder(BCryptPasswordEncoder())
    }

    private fun authenticationFilter(): JsonObjectAuthenticationFilter {
        val authFilter = JsonObjectAuthenticationFilter(objectMapper)
        authFilter.setAuthenticationSuccessHandler(successHandler)
        authFilter.setAuthenticationFailureHandler(failureHandler)
        authFilter.setAuthenticationManager(authenticationManager())
        return authFilter
    }
}