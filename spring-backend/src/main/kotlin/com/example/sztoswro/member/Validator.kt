package com.example.sztoswro.member

import java.time.LocalDate
import java.util.regex.Pattern


class Validator {

    companion object {
        fun validate(member: MemberDAO): List<Error> {
            val errors: List<Error> = emptyList()
            validateEmail(member.email, errors)
            validatePhoneNumber(member.phoneNumber, errors)
            validatePassword(member.password, errors)
            validateStudYear(member.studYear, errors)
            validateBirthDate(member.birthDate, errors)

            return errors
        }

        fun validateEmail(email: String, errors: List<Error>) {
            val isCorrect: Boolean = Pattern.compile(
                    "^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]|[\\w-]{2,}))@"
                            + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                            + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
                            + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                            + "[0-9]{1,2}|25[0-5]|2[0-4][0-9]))|"
                            + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$"
            ).matcher(email).matches()
            if (!isCorrect) {
                errors.plus(Error("This is not a correct email address"))
            }
        }

        fun validatePhoneNumber(phoneNumber: String, errors: List<Error>) {
            val isCorrect: Boolean = Pattern.compile(
                    "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*\$")
                    .matcher(phoneNumber).matches()
            if (!isCorrect) {
                errors.plus(Error("This is not a correct phone number"))
            }
        }

        fun validatePassword(password: String?, errors: List<Error>) {
            if (password == null) {
                errors.plus(Error("Password cannot be empty"))
            } else {
                val isCorrect: Boolean = password.length > 7
                if (!isCorrect) {
                    errors.plus(Error("Password must have at least 8 characters"))
                }
            }
        }

        fun validateStudYear(year: Int?, errors: List<Error>) {
            if (year != null) {
                val isCorrect: Boolean = year < 10
                if (!isCorrect) {
                    errors.plus(Error("People don't study that long"))
                }
            }
        }

        fun validateBirthDate(birthDate: LocalDate?, errors: List<Error>) {
            if (birthDate != null) {
                val isCorrect: Boolean = birthDate.isBefore(LocalDate.now()) and birthDate.isAfter(LocalDate.ofYearDay(1900, 0))
                if (!isCorrect) {
                    errors.plus(Error("Invalid value for birth date"))
                }
            }
        }
    }
}