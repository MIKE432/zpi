package com.example.sztoswro.member

import io.swagger.annotations.*
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import springfox.documentation.spring.web.json.Json

@Api(value = "System Zarządzania Twoją Organizacją Studencką", description = "Operation management of Login")

@RequestMapping("/perform_login")
interface Login {

    @ApiOperation(value = "Login")
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Login successful."),
        ApiResponse(code = 204, message = "Operation failed."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @PostMapping("")
    fun login(@ApiParam(name = "username", type = "String", value = "The username of a member to login", required = true)
              @PathVariable username: String,
              @ApiParam(name = "password", type = "String", value = "The password of a member to login", required = true)
              @PathVariable password: String)

    @ApiOperation(value = "Get all members", response = Json::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Members found."),
        ApiResponse(code = 204, message = "No members found."),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/success")
    fun success(): Json
}