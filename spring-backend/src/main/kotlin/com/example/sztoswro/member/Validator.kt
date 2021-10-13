package com.example.sztoswro.member

import java.time.LocalDate
import java.util.regex.Pattern


class Validator {

    companion object {
        fun validateRegistrationData(member: MemberDAO): List<Error> {
            var errors: List<Error> = listOf<Error>()
            validateNotNull(member.name, "name")?.let { errors = errors.plus(it) }
            validateNotNull(member.lastName, "last name")?.let { errors = errors.plus(it) }
            validateNotNull(member.email, "email")?.let { errors = errors.plus(it) }
            validateEmail(member.email)?.let { errors = errors.plus(it) }
            validateNotNull(member.password, "password")?.let { errors = errors.plus(it) }
            validatePassword(member.password)?.let { errors = errors.plus(it) }
            validateNotNull(member.studId, "student ID")?.let { errors = errors.plus(it)}
            validateStudId(member.studId)?.let { errors = errors.plus(it)}

            return errors
        }

        fun validate(member: MemberDAO): List<Error> {
            var errors: List<Error> = listOf<Error>()
            validateEmail(member.email)?.let { errors = errors.plus(it) }
            validatePhoneNumber(member.phoneNumber)?.let { errors = errors.plus(it)  }
            validatePassword(member.password)?.let { errors = errors.plus(it) }
            validateStudYear(member.studYear)?.let { errors = errors.plus(it) }
            validateBirthDate(member.birthDate)?.let { errors = errors.plus(it) }

            return errors
        }

        private fun validateNotNull(value: String?, name: String): Error?{
            if (value.isNullOrEmpty()) {
                return Error("The value of $name cannot be empty")
            }
            return null
        }

        fun validateEmail(email: String?): Error? {
            if (!email.isNullOrBlank()) {
                val isCorrect: Boolean = Pattern.compile(
                        "^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]|[\\w-]{2,}))@"
                                + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
                                + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9]))|"
                                + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$"
                ).matcher(email).matches()
                if (!isCorrect) {
                    return Error("This is not a correct email address")
                }
            }
            return null
        }

        fun validatePhoneNumber(phoneNumber: String?): Error?  {
            if (phoneNumber != null) {
                val isCorrect: Boolean = Pattern.compile(
                        "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*\$")
                        .matcher(phoneNumber).matches()
                if (!isCorrect) {
                    return Error("This is not a correct phone number")
                }
            }
            return null
        }

        fun validatePassword(password: String?): Error? {
            if (!password.isNullOrEmpty()) {
                var isCorrect: Boolean = password.length > 7
                if (!isCorrect) {
                    return Error("Password must have at least 8 characters")
                }
                isCorrect = Pattern.compile(
                        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}\$")
                        .matcher(password).matches()
                if (!isCorrect) {
                    return Error("Password must contain at least one uppercase and lowercase letter and one number")
                }
            }
            return null
        }

        fun validateStudYear(year: Int?): Error? {
            if (year != null) {
                val isCorrect: Boolean = year < 10
                if (!isCorrect) {
                    return Error("People don't study that long")
                }
            }
            return null
        }

        fun validateBirthDate(birthDate: LocalDate?): Error? {
            if (birthDate != null) {
                val isCorrect: Boolean = birthDate.isBefore(LocalDate.now()) and birthDate.isAfter(LocalDate.ofYearDay(1900, 1))
                if (!isCorrect) {
                    return Error("Invalid value for birth date")
                }
            }
            return null
        }

        fun validateStudId(studId: String?): Error? {
            if(!studId.isNullOrBlank()) {
                val isCorrect: Boolean = (studId.length == 6 || studId.length == 9)
                        && Pattern.compile(
                        "^[0-9]*\$")
                        .matcher(studId).matches()
                if (!isCorrect) {
                    return Error("Student ID must be 6 or 9 characters long and contain only numbers")
                }
            }
            return null
        }
    }
}