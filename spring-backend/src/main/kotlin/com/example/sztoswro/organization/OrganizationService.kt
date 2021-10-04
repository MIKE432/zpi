package com.example.sztoswro.organization

import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.*

@Service
class OrganizationService(private val organizationRepo: OrganizationRepository) {

    fun getAll(): Iterable<OrganizationDAO> {
        val organizations = organizationRepo.findAll();

        return organizations;
    };

    fun getOrganization(id: Long): OrganizationDAO {
        val organization = organizationRepo.findById(id);
        return organization.orElse(null);
    };

    fun addOrganization(organizationDAO: OrganizationDAO) {
        System.out.println(organizationDAO.toString());
        if (organizationRepo.findById(organizationDAO.id).isEmpty){
            organizationRepo.save(organizationDAO);
        }
    };

    fun updateOrganization(id:Long, organizationDAO: OrganizationDAO){
        val organization = organizationRepo.findByIdOrNull(id) ?: throw Exception("Dupa nie dziala");
        organization.update(organizationDAO);
        organizationRepo.save(organization);
    };

    fun deleteOrganization(id: Long){
        organizationRepo.deleteById(id);
    };

}