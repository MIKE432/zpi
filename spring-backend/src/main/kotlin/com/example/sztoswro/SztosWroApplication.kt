package com.example.sztoswro

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = arrayOf(DataSourceAutoConfiguration::class))
class SztosWroApplication

fun main(args: Array<String>) {
    runApplication<SztosWroApplication>(*args)
}
