package com.example.sztoswro.security

import com.example.sztoswro.member.MemberService
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service


class CustomUserDetails(
        private val aEmail: String,
        private val aPassword: String,
) : UserDetails {


    override fun isEnabled(): Boolean = true

    override fun getUsername(): String = aEmail

    override fun isCredentialsNonExpired(): Boolean = true

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return arrayListOf(SimpleGrantedAuthority("ROLE_USER"))
    }

    override fun getPassword(): String = aPassword

    override fun isAccountNonExpired(): Boolean = true

    override fun isAccountNonLocked(): Boolean = true
}


@Service
class CustomUserDetailsService(
        val users: MemberService
) : UserDetailsService {

    override fun loadUserByUsername(email: String?): UserDetails {

        email?.let {
            val userDAO = users.getByEmail(it)
            return CustomUserDetails(userDAO.email, userDAO.password)
        }
        throw UsernameNotFoundException(email)
    }
}