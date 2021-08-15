import * as yup from 'yup'

export const registerForm = yup.object().shape({
    firstName: yup.string().required(),
});