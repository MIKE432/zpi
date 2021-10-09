package com.example.sztoswro.member

import io.swagger.annotations.*
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*

@Api(value = "System Zarządzania Twoją Organizacją Studencką", description = "Operation management of Members")
@CrossOrigin
@RequestMapping("/member")
interface MemberAPI {
    @ApiOperation(value = "Get all members", response = Iterable::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Members found."),
        ApiResponse(code = 204, message = "No members found."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/")
    fun getAll(): List<MemberDTO>

    @ApiOperation(value = "Get member with given id", response = MemberDTO::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member found."),
        ApiResponse(code = 204, message = "Member not found."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/{id}")
    fun getById(@ApiParam(name = "memberId", type = "Long", value = "The id of a member to retrieve", required = true)
                @PathVariable id: Long): MemberDTO

    @ApiOperation(value = "Delete member with given id")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member deleted."),
        ApiResponse(code = 204, message = "Member not found."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @DeleteMapping("/{id}")
    fun deleteMember(@ApiParam(name = "memberId", type = "Long", value = "The id of a member to retrieve", required = true)
                     @PathVariable id: Long): MemberDTO

    @ApiOperation(value = "Add member")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member added."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @PostMapping("/")
    fun addMember(@RequestBody memberDTO: MemberDTO)

//    @ApiOperation(value = "Get member's organizations", response = Iterable::class)
//    @ApiResponses(value = [
//        ApiResponse(code = 200, message = "Organizations found."),
//        ApiResponse(code = 204, message = "Organizations not found."),
//        ApiResponse(code = 500, message = "Internal server error."),
//        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
//        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
//    ])
//    @GetMapping("/{id}/organizations")
//    fun getOrganizations(@ApiParam(name = "memberId", type = "Long", value = "The id of a member to retrieve", required = true)
//                         @PathVariable id: Long): MutableSet<OrganizationDTO>
}