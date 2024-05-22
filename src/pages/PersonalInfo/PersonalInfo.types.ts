import { StepType } from "../../App"
import { PersonalInfoValues } from "../../validators/validators"

export type PersonalInfoProps = {
  setNextStep: (nextStep: StepType) => void
  setUserData: (userData: PersonalInfoValues) => void
  initialUserData: PersonalInfoValues | undefined
}