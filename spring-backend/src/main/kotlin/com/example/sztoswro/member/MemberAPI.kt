package com.example.sztoswro.member

import io.swagger.annotations.*
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
    @GetMapping("")
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
                     @PathVariable id: Long)

    @ApiOperation(value = "Delete all members")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Members deleted."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @DeleteMapping("")
    fun deleteAll()

    @ApiOperation(value = "Add member")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member added."),
        ApiResponse(code = 500, message = "Internal Server error."),
        ApiResponse(code = 401, message = "Unauthorized to perform this operation."),
        ApiResponse(code = 403, message = "Operation forbidden. You don't have the access to this operation.")
    ])
    @PostMapping("")
    fun addMember(@RequestBody memberDTO: MemberDTO)

    @ApiOperation(value = "Register a member")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member registered."),
        ApiResponse(code = 500, message = "Internal Server error.")
    ])
    @PostMapping("/register")
    fun register(@RequestBody memberDTO: MemberDTO)

    @ApiOperation(value = "Insert data of user with given id")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member data added."),
        ApiResponse(code = 204, message = "Member not found."),
        ApiResponse(code = 400, message = "Wrong input data"),
        ApiResponse(code = 500, message = "Internal server error.")])
    @PutMapping("/{id}")
    fun editData(@ApiParam(name = "memberId", type = "Long", value = "The id of a member to retrieve", required = true)
                @PathVariable id: Long,
                @RequestBody memberDTO: MemberDTO)

    @ApiOperation(value = "Get current logged user", response = MemberDTO::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member found."),
        ApiResponse(code = 204, message = "Token expired"),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/current")
    fun getCurrent(@AuthenticationPrincipal user: String): MemberDTO
}