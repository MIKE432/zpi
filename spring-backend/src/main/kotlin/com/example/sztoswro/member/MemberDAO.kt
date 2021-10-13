package com.example.sztoswro.member

import org.jetbrains.annotations.NotNull
import java.time.LocalDate
import javax.persistence.*

@Entity
@Table(name = "member")
data class MemberDAO(
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        var id: Long,
        @NotNull
        var name: String,
        @NotNull
        var lastName: String,
        @NotNull
        var email: String,
        var phoneNumber: String?,
        @NotNull
        var password: String,
        var faculty: String?,
        var studYear: Int?,
        var department: String?,
        var university: String?,
        @NotNull
        var studId: String,
        var birthDate: LocalDate?,
        var status: String?,
        var isActive: Boolean?,
        var ICENumber: String?,
        @ElementCollection
        var accessionDates: Map<Long, LocalDate>?,
        @ElementCollection
        var leaveDates: Map<Long, LocalDate>?,
        var roles: Roles?,
        var isEmailValidated: Boolean
) {
        constructor(): this(
                1,
                "user",
                "user",
                "user@email.com",
                "123456789",
                "pass",
                "faculty",
                1,
                "department",
                "uni",
                "studId",
                LocalDate.of(2021,1,1),
                "status",
                true,
                "987654321",
                emptyMap<Long, LocalDate>(),
                emptyMap<Long, LocalDate>(),
                Roles(),
        true)

        constructor(mem: MemberDTO): this(
                1,
                mem.name.orEmpty(),
                mem.lastName.orEmpty(),
                mem.email.orEmpty(),
                mem.phoneNumber,
                mem.password.orEmpty(),
                mem.faculty,
                mem.studYear,
                mem.department,
                mem.university,
                mem.studId.orEmpty(),
                mem.birthDate,
                mem.status,
                mem.isActive,
                mem.ICE,
                mem.accessionDates,
                mem.leaveDates,
                mem.roles,
        true)
}