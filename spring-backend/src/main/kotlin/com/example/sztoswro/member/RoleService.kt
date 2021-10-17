package com.example.sztoswro.member

import org.springframework.stereotype.Service

@Service
class RoleService(private val projectRoleMapService: ProjectRoleMapService) {

    fun addRole(roles: Roles, orgId: Long, projectId: Long, roleLevel: RoleLevel) {
        val roleMap = roles.roleMap
        val orgMap = roleMap[orgId]
        if (orgMap == null) {
            val projectRoleMap: ProjectRoleMap = projectRoleMapService.addProjectRole(projectId, roleLevel)
            roles.roleMap = roleMap.plus(Pair(orgId, projectRoleMap)).toMutableMap()
        } else {
            orgMap.projectRoleMap = orgMap.projectRoleMap.plus(Pair(projectId, roleLevel)).toMutableMap()
        }
    }
}