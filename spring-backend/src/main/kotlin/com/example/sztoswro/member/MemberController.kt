package com.example.sztoswro.member

import com.example.sztoswro.extensions.toDTO
import org.springframework.web.bind.annotation.RestController

@RestController
class MemberController(val memberService: MemberService): MemberAPI {
    override fun getAll(): List<MemberDTO> {
        return memberService.getAll().map { memberDAO -> MemberDTO(memberDAO) }
    }

    override fun getById(id: Long): MemberDTO {
        val member = MemberDTO(memberService.getMember(id))
        member.password = null
        return member
    }

    override fun deleteMember(id: Long) {
        TODO("Not yet implemented")
    }

    override fun deleteAll() {
        memberService.deleteAll()
    }

    override fun addMember(memberDTO: MemberDTO) {
        memberService.addMember(MemberDAO(memberDTO))
    }

    override fun register(memberDTO: MemberDTO) {
        memberService.registerMember(MemberDAO(memberDTO))
    }

    override fun editData(id: Long, memberDTO: MemberDTO) {
        memberService.editData(id, MemberDAO(memberDTO))
    }

    override fun getCurrent(user: String): MemberDTO {
        print(user)
        return memberService.getByEmail(user).toDTO()
    }
}