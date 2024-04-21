import * as yup from 'yup'

export const personalInfoSchema = yup.object({
  name: yup
    .string()
    .required('This field is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('This field is required'),
  phoneNumber: yup
    .string()
    .matches(/^\+\d{11}$/, "Phone number must start with '+'")
    .required('This field is required')
})

export type PersonalInfoValues = yup.InferType<typeof personalInfoSchema>