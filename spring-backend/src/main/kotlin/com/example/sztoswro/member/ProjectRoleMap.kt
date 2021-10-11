package com.example.sztoswro.member

import javax.persistence.ElementCollection
import javax.persistence.Embeddable

@Embeddable
class ProjectRoleMap(@ElementCollection val projectRoleMap: Map<Int, RoleLevel>) {
    constructor() : this(emptyMap())

    fun addProjectRole(projectId: Long, role: RoleLevel) {
        projectRoleMap.plus(Pair(projectId, role))
    }
}