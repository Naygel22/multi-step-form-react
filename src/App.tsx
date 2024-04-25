import { useState } from "react"
import { SideBar } from "./components/SideBar"
import { PersonalInfo } from "./pages/PersonalInfo"
import { PersonalInfoPage } from "./pages/PersonalInfoPage"
import { SelectPlan } from "./pages/SelectPlan"
import { PickAddOns } from "./components/PickAddOns"
import { Button } from "./components/Button"
import { PersonalInfoValues } from "./validators/validators"


export type Step = 'PersonalInfo' | 'Plan' | 'Addons' | "Summary"

function App() {
  const [step, setStep] = useState<Step>('PersonalInfo')

  const [userData, setUserData] = useState<PersonalInfoValues | undefined>()
  // state do select planow i do reszty
  // state do plan variant


  const onStepChange = (step: Step) => {
    setStep(step)
  }

  const onUserDataChange = (userData: PersonalInfoValues) => {
    setUserData(userData)
  }


  return (
    <div className="app">
      <SideBar />
      {/* odpowiedni komponent w zaleznosci od stepu */}
      {step === 'PersonalInfo' && <PersonalInfo initialUserData={userData} setNextStep={onStepChange} setUserData={onUserDataChange} />}
      {step === 'Plan' && <SelectPlan goToPreviousStep={onStepChange} />}
      {step === 'Addons' && <PickAddOns />}

    </div>


  )
}

export default App
