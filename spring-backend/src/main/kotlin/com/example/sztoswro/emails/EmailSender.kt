package com.example.sztoswro.emails

import org.simplejavamail.api.email.Email
import org.simplejavamail.api.mailer.Mailer
import org.simplejavamail.api.mailer.config.TransportStrategy
import org.simplejavamail.email.EmailBuilder
import org.simplejavamail.mailer.MailerBuilder
import java.util.*
import javax.mail.*
import javax.mail.internet.InternetAddress
import javax.mail.internet.MimeMessage


class EmailSender {
    companion object {
        fun sendValidationEmail() {
            plainMail()
        }

        fun mail(){
            val mailer: Mailer = MailerBuilder.withSMTPServer("smtp.gmail.com",
                    587,
                    "teddynedy@gmail.com",
                    "Krecik24")
                    .withTransportStrategy(TransportStrategy.SMTP)
                    .buildMailer()

            val email: Email = EmailBuilder.startingBlank()
                    .from("teddynedy@gmail.com")
                    .to("sz.zmijewski24@gmail.com")
                    .withSubject("test mail")
                    .withPlainText("hej to ja")
                    .buildEmail()

            mailer.sendMail(email)
        }

        fun plainMail() {
            val prop = Properties()
            prop["mail.smtp.host"] = "smtp.gmail.com"
            prop["mail.smtp.port"] = "587"
            prop["mail.smtp.auth"] = "true"
            prop["mail.smtp.starttls.enable"] = "true" //TLS

            val username: String = "teddynedy@gmail.com"
            val password: String = "Krecik24"

            val session = Session.getInstance(prop,
                    object : Authenticator() {
                        override fun getPasswordAuthentication(): PasswordAuthentication {
                            return PasswordAuthentication(username, password)
                        }
                    })

            try {
                val message: Message = MimeMessage(session)
                message.setFrom(InternetAddress("from@gmail.com"))
                message.setRecipients(
                        Message.RecipientType.TO,
                        InternetAddress.parse("sz.zmijewski24@gmail.com")
                )
                message.subject = "Testing Gmail TLS"
                message.setText("""Dear Mail Crawler,

 Please do not spam my email!""")
                Transport.send(message)
                println("Done")
            } catch (e: MessagingException) {
                e.printStackTrace()
            }
        }
    }
}