package com.example.sztoswro.extensions

import com.example.sztoswro.member.MemberDAO
import com.example.sztoswro.member.MemberDTO

fun MemberDAO.toDTO(): MemberDTO {
    return MemberDTO(id, name, lastName, email, username, password)
}