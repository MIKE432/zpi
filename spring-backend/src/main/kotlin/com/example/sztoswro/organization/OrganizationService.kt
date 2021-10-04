package com.example.sztoswro.organization

import org.springframework.stereotype.Service

@Service
class OrganizationService {
    fun getAll(): Iterable<OrganizationDAO> {
        return emptyList();
    };

    fun getOrganization(id: Long): OrganizationDAO {
        return OrganizationDAO();
    };

    fun addOrganization(organizationDAO: OrganizationDAO) {

    };

    fun updateOrganization(id:Long, organizationDAO: OrganizationDAO){

    };

    fun deleteOrganization(id: Long){

    };
}