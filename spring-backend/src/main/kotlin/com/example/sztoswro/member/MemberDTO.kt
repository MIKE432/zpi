package com.example.sztoswro.member

import org.jetbrains.annotations.NotNull
import java.time.LocalDate
import javax.persistence.ElementCollection

data class MemberDTO(
        @NotNull
        var name: String,
        @NotNull
        var lastName: String,
        @NotNull
        var email: String,
        @NotNull
        var phoneNumber: String,
        var faculty: String,
        var studYear: Int,
        var department: String,
        var university: String,
        @NotNull
        var studId: String,
        var birthDate: LocalDate,
        var status: String,
        var isActive: Boolean,
        var ICE: String,
        var accessionDates: Map<Long, LocalDate>,
        var leaveDates: Map<Long, LocalDate>,
        @ElementCollection
        var roles: MutableSet<String>) {
    constructor(memberDAO: MemberDAO): this(
            memberDAO.name,
            memberDAO.lastName,
            memberDAO.email,
            memberDAO.phoneNumber,
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

}