package com.example.sztoswro.member

import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Assertions.assertNull
import org.junit.jupiter.api.Test

internal class ValidatorTest {

    //TEST PASSWORD VALIDATION
    @Test
    fun testPassword() {
        val password: String = "Test123."
        assertNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordSpecials() {
        val password: String = "Test1!@#$%^&*()_+=-,.?"
        assertNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordPolish() {
        val password: String = "AęóąśłżźćńĘÓĄŚŁŻŹĆŃ123."
        assertNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordNoNumber() {
        val password: String = "Testaaa$"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordShort() {
        val password: String = "Test"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordNoUppercase() {
        val password: String = "test123$"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordNoSpecial() {
        val password: String = "Test1234"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordNoLowercase() {
        val password: String = "TEST123$"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordOnlyLowercase() {
        val password: String = "password"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordOnlyUpperCase() {
        val password: String = "PASSWORD"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordOnlyNumbers() {
        val password: String = "12345678"
        assertNotNull(Validator.validatePassword(password))
    }

    @Test
    fun testPasswordOnlySpecials() {
        val password: String = "!@#$%^&()_+=-"
        assertNotNull(Validator.validatePassword(password))
    }

    //TEST EMAIL VALIDATION

}