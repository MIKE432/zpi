package com.example.sztoswro.member

import com.example.sztoswro.exceptions.BadRequestException
import com.example.sztoswro.exceptions.NoContentException
import com.example.sztoswro.organization.OrganizationRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.regex.Pattern

@Service
class MemberService(private val memberRepository: MemberRepository, private val organizationRepository: OrganizationRepository){
    private val logger: Logger = LoggerFactory.getLogger(MemberService::class.simpleName)

    fun getAll(): Iterable<MemberDAO> { return memberRepository.findAll()}

    fun getMember(id: Long): MemberDAO {
        val member = memberRepository.findById(id)
        if (member.isPresent)
            return member.get()
        else
            throw NoContentException("Member with id = {id} not found.")
    }

    fun findMember(email: String): MemberDAO {
        val member = memberRepository.findByEmail(email)
        if (member.isPresent)
            return member.get()
        else
            throw NoContentException("Member with id = {id} not found.")
    }

    fun addMember(memberDAO: MemberDAO) {
        val aUser = memberRepository.findByEmail(memberDAO.email)

        if ( !aUser.isPresent ) {
            memberDAO.password = BCryptPasswordEncoder().encode(memberDAO.password)
            memberRepository.save(memberDAO)
        }
    }

    fun registerMember(memberDao: MemberDAO) {
        val errors: List<Error> = validate(memberDao)

        if (errors.isEmpty()) {
            addMember(memberDao)
        } else {
            for (error in errors) {
                logger.error(error.message)
            }
            val errorMessage: String = errors[0].message.orEmpty()
            throw BadRequestException(errorMessage)
        }
    }

    fun validate(member: MemberDAO): List<Error> {
        val errors: List<Error> = emptyList()
        validateEmail(member.email, errors)
        validatePhoneNumber(member.phoneNumber, errors)
        validatePassword(member.password, errors)
        validateStudYear(member.studYear, errors)
        validateBirthDate(member.birthDate, errors)

        return errors
    }

    fun validateEmail(email: String, errors: List<Error>) {
        val isCorrect: Boolean = Pattern.compile(
                "^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]|[\\w-]{2,}))@"
                        + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                        + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
                        + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                        + "[0-9]{1,2}|25[0-5]|2[0-4][0-9]))|"
                        + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$"
        ).matcher(email).matches()
        if (!isCorrect) {
            errors.plus(Error("This is not a correct email address"))
        }
    }

    fun validatePhoneNumber(phoneNumber: String, errors: List<Error>) {
        val isCorrect: Boolean =  Pattern.compile(
                "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*\$")
                .matcher(phoneNumber).matches()
        if (!isCorrect) {
            errors.plus(Error("This is not a correct phone number"))
        }
    }

    fun validatePassword(password: String?, errors: List<Error>) {
        if (password == null) {
            errors.plus(Error("Password cannot be empty"))
        } else {
            val isCorrect: Boolean =  password.length > 7
            if (!isCorrect) {
                errors.plus(Error("Password must have at least 8 characters"))
            }
        }
    }

    fun validateStudYear(year: Int?, errors: List<Error>) {
        if (year != null) {
            val isCorrect: Boolean = year < 10
            if (!isCorrect) {
                errors.plus(Error("People don't study that long"))
            }
        }
    }

    fun validateBirthDate(birthDate: LocalDate?, errors: List<Error>) {
        if (birthDate != null) {
            val isCorrect: Boolean = birthDate.isBefore(LocalDate.now()) and birthDate.isAfter(LocalDate.ofYearDay(1900, 0))
            if (!isCorrect) {
                errors.plus(Error("Invalid value for birth date"))
            }
        }
    }

    fun addRole(organizationId: Long, projectId: Long, roleName: String, memberId: Long) {
        val organizationDao = organizationRepository.findById(organizationId)
        val roleLevel: RoleLevel? = organizationDao.get().organizationRoles[roleName]?.let { RoleLevel.valueOf(it) }
        if (roleLevel != null) {
            getMember(memberId).roles.roleMap[organizationId]?.addProjectRole(projectId, roleLevel)
        }
    }

    fun getRole(organizationId: Long, projectId: Int, memberId: Long): String {
        getMember(memberId).roles.roleMap[organizationId]?.projectRoleMap?.get(projectId)?.let {
            roleLevel -> return roleLevel.name
        }
        return RoleLevel.none.name
    }
}

