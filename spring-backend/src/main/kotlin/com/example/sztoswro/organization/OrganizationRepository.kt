package com.example.sztoswro.organization

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface OrganizationRepository: CrudRepository<OrganizationDAO, Long>{

}