package com.example.sztoswro.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus
import java.lang.RuntimeException

@ResponseStatus(HttpStatus.NO_CONTENT)
class NoContentException(message:String) : RuntimeException(message)