package com.example.sztoswro.organization

import com.example.sztoswro.member.RoleLevel
import io.swagger.annotations.*
import org.springframework.web.bind.annotation.*
import javax.websocket.server.PathParam

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
    @PostMapping("/{memberId}")
    fun addOrganization(@RequestBody organizationDTO: OrganizationDTO, @PathVariable memberId: Long)

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
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation."),
        ApiResponse(code = 500, message = "Internal Server error.")
    ])
    @DeleteMapping("/{id}")
    fun deleteOrganization(@ApiParam(name = "organization", type = "Long", value = "The id of a organization to retrieve", required = true)
                     @PathVariable id: Long)

    @ApiOperation(value = "Add an organization role")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Role added."),
        ApiResponse(code = 204, message = "Organization not found."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation."),
        ApiResponse(code = 500, message = "Internal Server error.")
    ])
    @GetMapping("/roles/{id}")
    fun addOrganizationRole(@ApiParam(name = "organization", type = "Long", value = "The id of a organization to retrieve", required = true)
                           @PathVariable id: Long,
                            @ApiParam(name = "role name", type = "String", value = "The name of a role to be added", required = true)
                            @PathParam(value = "rn") roleName: String,
                            @ApiParam(name = "role level", type = "String", value = "Level of an added role. One of [none, basic, medium, general, full_access]", required = true)
                            @PathParam(value = "rl") roleLevel: RoleLevel)

    @ApiOperation(value = "Add member to organization")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member added to organization."),
        ApiResponse(code = 204, message = "Organization not found."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation."),
        ApiResponse(code = 500, message = "Internal Server error.")
    ])
    @GetMapping("/members")
    fun addMemberToOrganization(@PathParam(value = "orgId") orgId: Long, @PathParam(value = "memId") memId: Long )
}