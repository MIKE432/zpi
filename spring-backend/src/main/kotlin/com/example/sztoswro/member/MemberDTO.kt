package com.example.sztoswro.member

data class MemberDTO(val id: Long,
                     val name: String,
                     val lastName: String,
                     val email: String,
                     val username: String,
                     val password: String) {
    constructor(memberDAO: MemberDAO): this(memberDAO.id, memberDAO.name, memberDAO.lastName, memberDAO.email, memberDAO.username, memberDAO.password)

}