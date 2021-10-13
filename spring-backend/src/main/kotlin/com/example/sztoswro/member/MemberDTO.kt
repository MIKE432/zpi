package com.example.sztoswro.member

import java.time.LocalDate
import javax.persistence.ElementCollection

data class MemberDTO(
        var name: String?,
        var lastName: String?,
        var email: String?,
        var phoneNumber: String?,
        var password: String?,
        var faculty: String?,
        var studYear: Int?,
        var department: String?,
        var university: String?,
        var studId: String?,
        var birthDate: LocalDate?,
        var status: String?,
        var isActive: Boolean?,
        var ICE: String?,
        var accessionDates: Map<Long, LocalDate>?,
        var leaveDates: Map<Long, LocalDate>?,
        @ElementCollection
        var roles: Roles?) {
    constructor(memberDAO: MemberDAO): this(
            memberDAO.name,
            memberDAO.lastName,
            memberDAO.email,
            memberDAO.phoneNumber,
            memberDAO.password,
            memberDAO.faculty,
            memberDAO.studYear,
            memberDAO.department,
            memberDAO.university,
            memberDAO.studId,
            memberDAO.birthDate,
            memberDAO.status,
            memberDAO.isActive,
            memberDAO.ICENumber,
            memberDAO.accessionDates,
            memberDAO.leaveDates,
            memberDAO.roles
    )

    constructor(name: String, lastName: String, email: String, password: String, studId: String) :this(
            name,
            lastName,
            email,
            null,
            password,
            null,
            null,
            null,
            null,
            studId,
            null,
            null,
            null,
            null,
            null,
            null,
            null
            )

}

data class LoginCredentials(
    val email: String,
    val password: String
)