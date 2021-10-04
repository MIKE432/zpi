package com.example.sztoswro.member

import org.springframework.stereotype.Controller
import springfox.documentation.spring.web.json.Json

@Controller
class LoginImpl: Login {
    override fun login(username: String, password: String) {
    }

    override fun success(): Json {
        return Json("CHUJA KURWA ZŁE HASŁO")    }

}