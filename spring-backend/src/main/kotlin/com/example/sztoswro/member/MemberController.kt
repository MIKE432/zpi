package com.example.sztoswro.member

import com.example.sztoswro.extensions.toDTO
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MemberController(val memberService: MemberService): MemberAPI {
    override fun getAll(): List<MemberDTO> {
        return memberService.getAll().map { memberDAO -> MemberDTO(memberDAO) }
    }

    override fun getById(id: Long): MemberDTO {
        return MemberDTO(memberService.getMember(id))
    }

    override fun deleteMember(id: Long): MemberDTO {
        TODO("Not yet implemented")
    }

    override fun addMember(memberDTO: MemberDTO) {
        memberService.addMember(MemberDAO(memberDTO))
    }


    @ApiOperation(value = "Get current logged user", response = MemberDTO::class)
    @ApiResponses(value = [
        ApiResponse(code = 200, message = "Member found."),
        ApiResponse(code = 204, message = "Token expired"),
        ApiResponse(code = 500, message = "Internal server error.")])
    @GetMapping("/current")
    fun getCurrent(@AuthenticationPrincipal user: String): MemberDTO {
        print(user)
        return memberService.getByEmail(user).toDTO()
    }
}