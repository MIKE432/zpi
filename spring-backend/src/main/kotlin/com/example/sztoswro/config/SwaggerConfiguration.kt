package com.example.sztoswro.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.annotation.AuthenticationPrincipal
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiKey
import springfox.documentation.service.AuthorizationScope
import springfox.documentation.service.SecurityReference
import springfox.documentation.service.SecurityScheme
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spi.service.contexts.SecurityContext
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2
import java.util.Collections.singletonList


@Configuration
@EnableSwagger2
class SwaggerConfiguration {
    @Bean
    fun api(): Docket =
            Docket(DocumentationType.SWAGGER_2)
                    .ignoredParameterTypes(UsernamePasswordAuthenticationToken::class.java)
                    .select()
                    .apis(RequestHandlerSelectors.basePackage("com.example.sztoswro"))
                    .paths(PathSelectors.any())
                    .build()
                    .securitySchemes(singletonList(createSchema()))
                    .securityContexts(singletonList(createContext()))

    private fun createContext(): SecurityContext {
        return SecurityContext.builder()
                .securityReferences(createRef())
                .forPaths(PathSelectors.any())
                .build()
    }

    private fun createRef(): List<SecurityReference?> {
        val authorizationScope = AuthorizationScope(
                "global", "accessEverything")
        val authorizationScopes: Array<AuthorizationScope?> = arrayOfNulls<AuthorizationScope>(1)
        authorizationScopes[0] = authorizationScope
        return listOf(SecurityReference("apiKey", authorizationScopes))
    }

    private fun createSchema(): SecurityScheme {
        return ApiKey("apiKey", "Authorization", "header")
    }
}