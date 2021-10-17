package com.example.sztoswro.organization

import com.example.sztoswro.exceptions.ForbiddenException
import com.example.sztoswro.exceptions.NoContentException
import com.example.sztoswro.member.MemberService
import com.example.sztoswro.member.RoleLevel
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class OrganizationService(
        private val organizationRepo: OrganizationRepository,
        private val memberService: MemberService) {

    fun getAll(): Iterable<OrganizationDAO> {
        val organizations = organizationRepo.findAll();
        return organizations;
    };

    fun getOrganization(id: Long): OrganizationDAO {
        val organization = organizationRepo.findByIdOrNull(id) ?: throw NoContentException("Organization with id = $id not found ")
        return organization;
    };

    fun addOrganization(organizationDAO: OrganizationDAO, memberId: Long) {
        if (!organizationRepo.findOrganizationDAOByName(organizationDAO.name).isPresent){
            val roleLevel: RoleLevel = RoleLevel.full_access
            memberService.addRole(organizationDAO.id, 0, roleLevel, memberId)
            organizationRepo.save(organizationDAO);
        } else {
            throw ForbiddenException("Organization with id = ${organizationDAO.id} already exists.")
        }
    };

    fun updateOrganization(id:Long, organizationDAO: OrganizationDAO){
        val organization = organizationRepo.findByIdOrNull(id) ?: throw NoContentException("Organization with id = $id not found ");
        organization.update(organizationDAO);
        organizationRepo.save(organization);
    };

    fun deleteOrganization(id: Long){
        organizationRepo.deleteById(id);
    };

    fun addRole(id: Long, roleName: String, roleLevel: RoleLevel) {
        val organization = getOrganization(id)
        organization.organizationRoles.plus(Pair(roleName.toLowerCase(), roleLevel))
    }

    fun getRoles(id: Long): Map<String, String> {
        val organization = getOrganization(id)
        return organization.organizationRoles
    }

    fun addMember(orgId: Long, memId: Long) {
        val organizationDAO = getOrganization(orgId)
        val memberDAO = memberService.getMember(memId)
        organizationDAO.members.add(memberDAO)
        memberService.addOrganization(memberDAO, organizationDAO)
        organizationRepo.save(organizationDAO)
    }
}