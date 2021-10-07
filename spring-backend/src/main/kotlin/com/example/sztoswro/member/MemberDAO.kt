package com.example.sztoswro.member

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class MemberDAO(
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        var id: Long,
        var name: String,
        var lastName: String,
        var email: String,
        val username: String,
        var password: String,
        var roles: Roles,

//        @ManyToMany
//        var organizations: MutableSet<OrganizationDAO>,

) {
        constructor(): this(1, "szymon", "nieszymon", "mozeszymon@mozenieszymon.com", "userszymon", "pass", Roles())
        constructor(mem: MemberDTO): this(mem.id, mem.name, mem.lastName, mem.email, mem.username, mem.password, Roles())
}