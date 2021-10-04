package com.example.sztoswro.organization

import org.springframework.web.bind.annotation.RestController

@RestController
class OrganizationController(val organizationService: OrganizationService) : OrganizationAPI {
    override fun getAll(): List<OrganizationDTO> {
        return organizationService.getAll().map { organizationDAO -> OrganizationDTO(organizationDAO) }
    }

    override fun getOrganization(id: Long): OrganizationDTO {
        return OrganizationDTO(organizationService.getOrganization(id));

    }

    override fun addOrganization(organizationDTO: OrganizationDTO) {
        organizationService.addOrganization(OrganizationDAO(organizationDTO))
    }

    override fun updateOrganization(id: Long, organizationDTO: OrganizationDTO) {
        organizationService.updateOrganization(id, OrganizationDAO(organizationDTO))
    }

    override fun deleteOrganization(id: Long) {
        organizationService.deleteOrganization(id)
    }

}