package com.example.sztoswro.member

import com.example.sztoswro.exceptions.NoContentException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class MemberService(val memberRepository: MemberRepository) {

    fun getAll(): Iterable<MemberDAO> {
        return memberRepository.findAll()
    }

    fun getMember(id: Long): MemberDAO {
        return memberRepository.findById(id).orElseThrow { throw NoContentException("Member with id = {id} not found.") }
    }

    fun getByEmail(username: String): MemberDAO {
        return memberRepository.getMemberDAOByEmail(username).orElseThrow { throw NoContentException("Member with id = {id} not found.") }
    }

    fun addMember(memberDAO: MemberDAO) {
        val aUser = memberRepository.findById(memberDAO.id)

        if (aUser.isEmpty) {
            memberDAO.password = BCryptPasswordEncoder().encode(memberDAO.password)
            memberRepository.save(memberDAO)
        }
    }
}

