package com.example.sztoswro.member

import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class ProjectRoleMap(
        @Id
        @GeneratedValue
        val id: Long,
        @ElementCollection val projectRoleMap: Map<Int, RoleLevel>) {
    constructor() : this(0, emptyMap())

    fun addProjectRole(projectId: Long, role: RoleLevel) {
        projectRoleMap.plus(Pair(projectId, role))
    }
}