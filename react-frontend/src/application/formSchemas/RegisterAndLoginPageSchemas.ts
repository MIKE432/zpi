import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  name: yup.string().required('Imię jest polem obowiązkowym'),
  lastName: yup.string().required('Nazwisko jest polem obowiązkowym'),
  email: yup
    .string()
    .required('E-mail jest polem obowiązkowym')
    .email('Podaj poprawny adres e-mail'),
  studId: yup
    .string()
    .required('Indeks studencki jest polem obowiązkowym')
    .length(6, 'Niepoprawny indeks'),
  password1: yup
    .string()
    .required('Hasło jest polem obowiązkowym')
    .min(8, 'Hasło musi się składać conajmniej z 8 znaków')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Hasło musi zawierać wielką i małą literę, oraz znak specjalny'
    ),
  password2: yup
    .string()
    .required('Hasło jest polem obowiązkowym')
    .oneOf([yup.ref('password1'), null], 'Hasła muszą się zgadzać')
});

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail jest polem obowiązkowym')
    .email('Podaj poprawny adres e-mail'),
  password: yup.string().required('Hasło jest polem obowiązkowym')
});
