import * as yup from 'yup'

export const registerFormSchema = yup.object().shape({
    firstName: yup.string().required("Imię jest polem obowiązkowym"),
    surname: yup.string().required("Nazwisko jest polem obowiązkowym"),
    email: yup.string().required("E-mail jest polem obowiązkowym").email("Podaj poprawny adres e-mail"),
    password1: yup.string().required("Hasło jest polem obowiązkowym"),
    password2: yup.string().required("Hasło jest polem obowiązkowym").oneOf([yup.ref('password1'), null], 'Hasła muszą się zgadzać')
});

export const loginFormSchema = yup.object().shape({
    email: yup.string().required("E-mail jest polem obowiązkowym").email("Podaj poprawny adres e-mail"),
    password: yup.string().required("Hasło jest polem obowiązkowym"),
});