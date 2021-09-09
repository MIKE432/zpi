package com.example.sztoswro.organization

import com.example.sztoswro.member.MemberDTO
import javax.persistence.*

@Entity
data class OrganizationDAO(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    var id: Long,
    var name: String,
    var email: String,
    val about: String,
    var type: String,
    var careProvider: String,
    val registerFaculty: String,
    val activitiesArea: String,
    val facultiesArea: String
) {
    constructor(org: OrganizationDTO) : this(
        org.id,
        org.name,
        org.email,
        org.about,
        org.type,
        org.careProvider,
        org.registerFaculty,
        org.activitiesArea,
        org.facultiesArea
    )

    constructor() : this(1, "hej", "ho", "hej", "ho", "hej", "sokoly", "omijajcie", "gory lasy doły")
}