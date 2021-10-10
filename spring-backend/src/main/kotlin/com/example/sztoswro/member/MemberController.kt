package com.example.sztoswro.member

import org.springframework.web.bind.annotation.RestController

@RestController
class MemberController(val memberService: MemberService): MemberAPI {
    override fun getAll(): List<MemberDTO> {
        return memberService.getAll().map { memberDAO -> MemberDTO(memberDAO) }
    }

    override fun getById(id: Long): MemberDTO {
    return MemberDTO(memberService.getMember(id))
}

    override fun deleteMember(id: Long): MemberDTO {
        TODO("Not yet implemented")
    }

    override fun addMember(memberDTO: MemberDTO, password: String) {
        memberService.addMember(MemberDAO(memberDTO, password))
    }

    override fun register(memberDTO: MemberDTO, password: String) {
        memberService.registerMember(MemberDAO(memberDTO, password))
    }
}