package com.example.sztoswro.member

import org.springframework.stereotype.Service
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class ProjectRoleMap(
        @Id
        @GeneratedValue
        val id: Long,
        @ElementCollection var projectRoleMap: MutableMap<Long, RoleLevel>) {
    constructor() : this(0, mutableMapOf<Long, RoleLevel>())
}

@Service
class ProjectRoleMapService(
        private val roleMapRepository: RoleMapRepository
){
    fun addProjectRole(projectId: Long, role: RoleLevel): ProjectRoleMap {
        val projectRoleMap = roleMapRepository.findById(projectId).orElse(ProjectRoleMap())
        projectRoleMap.projectRoleMap = projectRoleMap.projectRoleMap.plus(Pair(projectId, role)).toMutableMap()
        roleMapRepository.save(projectRoleMap)
        return projectRoleMap
    }
}