import { useFormik } from 'formik'
import {
  PersonalInfoValues,
  personalInfoSchema
} from '../validators/validators'
import { TextInput } from '../components/forms/TextInput'
import { Button } from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'
import { Step } from '../App'

type PersonalInfoProps = {
  setNextStep: (nextStep: Step) => void
  setUserData: (userData: PersonalInfoValues) => void
  initialUserData: PersonalInfoValues | undefined
}

export const PersonalInfo = ({
  setNextStep,
  setUserData,
  initialUserData
}: PersonalInfoProps) => {
  const formik = useFormik<PersonalInfoValues>({
    initialValues: {
      name: initialUserData?.name || '',
      email: initialUserData?.email || '',
      phoneNumber: initialUserData?.phoneNumber || ''
    },
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      console.log(values, null, 2)
      setUserData(values)
      setNextStep('Plan')
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="stepPage1">
      <SectionHeader
        title="Personal info"
        info="Please provide your name, email address and phone number."
      />
      <div className="inputSection">
        <TextInput formik={formik} accessor="name" label="Name" />
        <TextInput
          formik={formik}
          accessor="email"
          label="Email Address"
        />
        <TextInput
          formik={formik}
          accessor="phoneNumber"
          label="Phone Number"
        />
      </div>
      <Button>Next Step</Button>
      {/* <button type="submit" className="nextStepButton">Next Step</button> */}
    </form>
  )
}
