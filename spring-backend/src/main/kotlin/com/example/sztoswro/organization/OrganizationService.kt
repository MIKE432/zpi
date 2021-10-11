package com.example.sztoswro.organization

import com.example.sztoswro.exceptions.ForbiddenException
import com.example.sztoswro.exceptions.NoContentException
import com.example.sztoswro.member.RoleLevel
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class OrganizationService(private val organizationRepo: OrganizationRepository) {

    fun getAll(): Iterable<OrganizationDAO> {
        val organizations = organizationRepo.findAll();
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

    fun addRole(id: Long, roleName: String, roleLevel: RoleLevel) {
        val organization = getOrganization(id)
        organization.organizationRoles.plus(Pair(roleName.toLowerCase(), roleLevel))
    }

    fun getRoles(id: Long): Map<String, String> {
        val organization = getOrganization(id)
        return organization.organizationRoles
    }

}