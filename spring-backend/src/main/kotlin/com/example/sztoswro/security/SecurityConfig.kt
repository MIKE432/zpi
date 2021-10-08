package com.example.sztoswro.security

import com.example.sztoswro.login.JsonObjectAuthenticationFilter
import com.example.sztoswro.login.JwtAuthorizationFilter
import com.example.sztoswro.login.RestAuthenticationFailureHandler
import com.example.sztoswro.login.RestAuthenticationSuccessHandler
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.JdbcUserDetailsManager
import org.springframework.security.provisioning.UserDetailsManager
import org.springframework.security.web.authentication.HttpStatusEntryPoint
import javax.sql.DataSource

@Configuration
@EnableWebSecurity
class WebSecurityConfig(val customUserDetails: CustomUserDetailsService,
                        private val passwordEncoderAndMatcher: PasswordEncoder,
                        private val dataSource: DataSource,
                        private val objectMapper: ObjectMapper,
                        private val successHandler: RestAuthenticationSuccessHandler,
                        private val failureHandler: RestAuthenticationFailureHandler,
                        @Value("#{jwt.secret}") val secret: String
) : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/v2/**").permitAll()
                .antMatchers("/webjars/**").permitAll()
                .antMatchers("/swagger-resources/**").permitAll()
                .antMatchers("/swagger-ui.html").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.POST,"/signup").permitAll()
                .antMatchers("/" ).permitAll()
                .anyRequest().permitAll()
              //  .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(authenticationFilter())
                .addFilter(JwtAuthorizationFilter(authenticationManager(), userDetailsService(), secret))
                .exceptionHandling()
                .authenticationEntryPoint(HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.jdbcAuthentication()
                .withDefaultSchema()
                .dataSource(dataSource)
                .withUser("user")
                .password(BCryptPasswordEncoder().encode("password"))
                .authorities(emptyList())
                .and()
                .passwordEncoder(passwordEncoderAndMatcher)
                .and()
                .userDetailsService(customUserDetails)
                .passwordEncoder(passwordEncoderAndMatcher)
    }

    fun authenticationFilter(): JsonObjectAuthenticationFilter {
        val authenticationFilter: JsonObjectAuthenticationFilter = JsonObjectAuthenticationFilter(objectMapper)
        authenticationFilter.setAuthenticationSuccessHandler(successHandler)
        authenticationFilter.setAuthenticationFailureHandler(failureHandler)
        authenticationFilter.setAuthenticationManager(super.authenticationManager())
        return authenticationFilter;
    }

    @Bean
    fun userDetailsManager() :UserDetailsManager {
        return JdbcUserDetailsManager(dataSource)
    }
}