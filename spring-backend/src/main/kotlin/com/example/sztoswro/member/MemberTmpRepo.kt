package com.example.sztoswro.member

import org.springframework.stereotype.Component

@Component
class MemberTmpRepo(val members: MutableSet<MemberDAO>) {
    constructor() :this(mutableSetOf())

    fun save(memberDAO: MemberDAO) {
        members.add(memberDAO)
    }

    fun findById(id: Long): MemberDAO? {
        return members.find { memberDAO -> memberDAO.id == id }
    }

    fun findByEmail(email: String): MemberDAO? {
        return members.find { memberDAO -> memberDAO.email.equals(email) }
    }

    fun getAll(): Iterable<MemberDAO> = members

}