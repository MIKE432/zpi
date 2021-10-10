package com.example.sztoswro.member

import com.example.sztoswro.exceptions.NoContentException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class MemberService(val memberTmpRepo: MemberTmpRepo){//(val members: MemberRepository) {

    fun getAll(): Iterable<MemberDAO> { return memberTmpRepo.getAll()} //members.findAll()

    fun getMember(id: Long): MemberDAO {
        return memberTmpRepo.findById(id) ?: throw NoContentException("Member with id = {id} not found.")
    }

    fun findMember(email: String): MemberDAO {
        return memberTmpRepo.findByEmail(email) ?: throw NoContentException("Member with id = {id} not found.")
    }

    fun addMember(memberDAO: MemberDAO) {
        val aUser = memberTmpRepo.findById(memberDAO.id)

        if ( aUser == null ) {
            memberDAO.password = BCryptPasswordEncoder().encode(memberDAO.password)
            memberTmpRepo.save(memberDAO)
        }
    }
}

