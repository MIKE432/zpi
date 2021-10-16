package com.example.sztoswro.member

import javax.persistence.Embeddable
import javax.persistence.OneToMany

@Embeddable
class Roles (@OneToMany var roleMap: MutableMap<Long, ProjectRoleMap>)
{
    constructor() :this(mutableMapOf<Long, ProjectRoleMap>())
}