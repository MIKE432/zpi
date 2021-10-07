package com.example.sztoswro.member

import com.example.sztoswro.exceptions.NoContentException
import com.example.sztoswro.organization.OrganizationRepository
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class MemberService(val memberTmpRepo: MemberTmpRepo, val organizationRepository: OrganizationRepository){//(val members: MemberRepository) {

    fun getAll(): Iterable<MemberDAO> { return memberTmpRepo.getAll()} //members.findAll()

    fun getMember(id: Long): MemberDAO {
        return memberTmpRepo.findById(id) ?: throw NoContentException("Member with id = {id} not found.")
    }

    fun findMember(username: String): MemberDAO {
        return memberTmpRepo.findByUsername(username) ?: throw NoContentException("Member with id = {id} not found.")
    }

    fun addMember(memberDAO: MemberDAO) {
        val aUser = memberTmpRepo.findById(memberDAO.id)

        if ( aUser == null ) {
            memberDAO.password = BCryptPasswordEncoder().encode(memberDAO.password)
            memberTmpRepo.save(memberDAO)
        }
    }

    fun addRole(organizationId: Long, projectId: Long, roleName: String, memberId: Long) {
        val organizationDao = organizationRepository.findById(organizationId)
        val roleLevel: RoleLevel? = organizationDao.get().organizationRoles[roleName]?.let { RoleLevel.valueOf(it) }
        if (roleLevel != null) {
            getMember(memberId).roles.roleMap[organizationId]?.addProjectRole(projectId, roleLevel)
        }
    }

    fun getRole(organizationId: Long, projectId: Int, memberId: Long): String {
        getMember(memberId).roles.roleMap[organizationId]?.projectRoleMap?.get(projectId)?.let {
            roleLevel -> return roleLevel.name
        }
        return RoleLevel.none.name
    }
}

