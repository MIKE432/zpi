package com.example.sztoswro.member

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface MemberRepository: CrudRepository<MemberDAO, Long> {

    fun getMemberDAOByEmail(email: String): Optional<MemberDAO>
}