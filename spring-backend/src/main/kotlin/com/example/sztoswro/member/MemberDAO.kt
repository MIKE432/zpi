package com.example.sztoswro.member

import javax.persistence.*

@Entity
@Table(name = "member")
data class MemberDAO(
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        var id: Long,
        var name: String,
        var lastName: String,
        var email: String,
        val username: String,
        var password: String,
        @ElementCollection
        var roles: MutableSet<String>
//        @ManyToMany
//        var organizations: MutableSet<OrganizationDAO>,

) {
        constructor(): this(1, "", "", "", "", "", mutableSetOf<String>())
        constructor(mem: MemberDTO): this(mem.id, mem.name, mem.lastName, mem.email, mem.username, mem.password, mutableSetOf<String>())
}