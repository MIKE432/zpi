package com.example.sztoswro.organization

data class OrganizationDTO(
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
    constructor(org: OrganizationDAO) : this(
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
}