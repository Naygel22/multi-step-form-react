// App.tsx
import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { ChosenPlanProps, SelectPlan } from "./pages/SelectPlan";
import { PickAddOns } from "./pages/PickAddOns";
import { PersonalInfoValues } from "./validators/validators";
import { PlanProps } from "./components/Plan";

export type Step = 'PersonalInfo' | 'Plan' | 'Addons' | "Summary";

function App() {
  const [step, setStep] = useState<Step>('PersonalInfo');
  const [userData, setUserData] = useState<PersonalInfoValues | undefined>();
  const [selectedPlan, setSelectedPlan] = useState<ChosenPlanProps | undefined>();

  const onStepChange = (step: Step) => {
    setStep(step);
  };

  const onUserDataChange = (userData: PersonalInfoValues) => {
    setUserData(userData);
  };

  const onPlanSelect = (plan: PlanProps) => {
    setSelectedPlan(plan);
    console.log(selectedPlan)
  };

  return (
    <div className="app">
      <SideBar />
      {step === 'PersonalInfo' && <PersonalInfo initialUserData={userData} setNextStep={onStepChange} setUserData={onUserDataChange} />}
      {step === 'Plan' && <SelectPlan goToPreviousStep={onStepChange} goToNextStep={onStepChange} onPlanSelect={onPlanSelect} />}
      {step === 'Addons' && <PickAddOns goToPreviousStep={onStepChange} />}
    </div>
  );
}

export default App;
