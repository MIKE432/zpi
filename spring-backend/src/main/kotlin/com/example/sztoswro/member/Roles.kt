package com.example.sztoswro.member

import javax.persistence.ElementCollection
import javax.persistence.Embeddable

@Embeddable
class Roles (@ElementCollection val roleMap: Map<Long, ProjectRoleMap>)
{
    constructor() :this(emptyMap())
}