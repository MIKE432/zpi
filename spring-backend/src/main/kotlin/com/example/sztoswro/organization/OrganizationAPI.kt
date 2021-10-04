package com.example.sztoswro.organization

import io.swagger.annotations.*
import org.springframework.web.bind.annotation.*

@Api(value = "System Zarządzania Twoją Organizacją Studencką", description = "Operation management of Members")

@RequestMapping("/organization")
interface OrganizationAPI {

    @ApiOperation(value = "Get all organizations", response = Iterable::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Organizations found."),
        ApiResponse(code = 204, message = "No organizations found."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("")
    fun getAll(): List<OrganizationDTO>

    @ApiOperation(value = "Get organization", response = OrganizationDTO::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Organization found."),
        ApiResponse(code = 204, message = "Organization not found."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/{id}")
    @ResponseBody
    fun getOrganization(@ApiParam(name = "organizationId", type = "Long", value = "The id of a organization to retrieve", required = true)
                        @PathVariable id: Long): OrganizationDTO

    @ApiOperation(value = "Add organization")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Organization added."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @PostMapping("")
    fun addOrganization(@RequestBody organizationDTO: OrganizationDTO)

    @ApiOperation(value = "Update organization")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Organization added."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @PutMapping("/{id}")
    fun updateOrganization(@ApiParam(name = "organizationId", type = "Long", value = "The id of a organization to update", required = true)
                           @PathVariable id: Long, @RequestBody organizationDTO: OrganizationDTO)

    @ApiOperation(value = "Delete organization with given id")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Organization deleted."),
        ApiResponse(code = 204, message = "Organization not found."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @DeleteMapping("/{id}")
    fun deleteOrganization(@ApiParam(name = "organization", type = "Long", value = "The id of a organization to retrieve", required = true)
                     @PathVariable id: Long)
}