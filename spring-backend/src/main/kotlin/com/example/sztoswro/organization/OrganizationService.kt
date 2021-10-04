package com.example.sztoswro.organization

import com.example.sztoswro.exceptions.ForbiddenException
import com.example.sztoswro.exceptions.NoContentException
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class OrganizationService(private val organizationRepo: OrganizationRepository) {

    fun getAll(): Iterable<OrganizationDAO> {
        val organizations = organizationRepo.findAll() ?: throw NoContentException("No organizations found");
        return organizations;
    };

    fun getOrganization(id: Long): OrganizationDAO {
        val organization = organizationRepo.findByIdOrNull(id) ?: throw NoContentException("Organization with id = $id not found ");
        return organization;
    };

    fun addOrganization(organizationDAO: OrganizationDAO) {
        if (organizationRepo.findById(organizationDAO.id).isEmpty){
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

}