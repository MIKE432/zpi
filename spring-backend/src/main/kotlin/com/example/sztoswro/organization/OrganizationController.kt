package com.example.sztoswro.organization

import com.example.sztoswro.member.RoleLevel
import org.springframework.web.bind.annotation.RestController

@RestController
class OrganizationController(val organizationService: OrganizationService) : OrganizationAPI {
    override fun getAll(): List<OrganizationDTO> {
        return organizationService.getAll().map { organizationDAO -> OrganizationDTO(organizationDAO) }
    }

    override fun getOrganization(id: Long): OrganizationDTO {
        return OrganizationDTO(organizationService.getOrganization(id));
    }

    override fun addOrganization(organizationDTO: OrganizationDTO, memberId: Long) {
        organizationService.addOrganization(OrganizationDAO(organizationDTO), memberId)
    }

    override fun updateOrganization(id: Long, organizationDTO: OrganizationDTO) {
        organizationService.updateOrganization(id, OrganizationDAO(organizationDTO))
    }

    override fun deleteOrganization(id: Long) {
        organizationService.deleteOrganization(id)
    }

    override fun addOrganizationRole(id: Long, roleName: String, roleLevel: RoleLevel) {
        organizationService.addRole(id, roleName, roleLevel)
    }

    override fun addMemberToOrganization(orgId: Long, memId: Long) {
        organizationService.addMember(orgId, memId)
    }

}