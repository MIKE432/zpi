package com.example.sztoswro.organization

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface OrganizationRepository: CrudRepository<OrganizationDAO, Long>{
    fun findOrganizationDAOByName(name: String): Optional<OrganizationDAO>
}