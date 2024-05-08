// App.tsx
import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { ChosenPlanProps, SelectPlan } from "./pages/SelectPlan";
import { PickAddOns } from "./pages/PickAddOns";
import { PersonalInfoValues } from "./validators/validators";
import { PlanProps } from "./components/Plan";
import { ALL_AVAIABLE_PLANS } from "./data";

export type SinglePlanType = {
  id: string,
  title: string,
  icon: string,
  price: PlanPrice
}

type PlanPrice = {
  monthly: number,
  yearly: number
}

export type Step = 'PersonalInfo' | 'Plan' | 'Addons' | "Summary";

function App() {
  const [step, setStep] = useState<Step>('PersonalInfo');
  const [userData, setUserData] = useState<PersonalInfoValues | undefined>();
  const [selectedPlanId, setSelectedPlanId] = useState<SinglePlanType['id'] | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<keyof SinglePlanType['price']>('monthly')
  // todo: addons
  const [avaiablePlans, setAvaiablePlans] = useState<SinglePlanType[]>(ALL_AVAIABLE_PLANS)

  const onStepChange = (step: Step) => {
    setStep(step);
  };

  const onUserDataChange = (userData: PersonalInfoValues) => {
    setUserData(userData);
  };

  const onPlanSelect = (planId: SinglePlanType['id']) => {
    setSelectedPlanId(planId);
    //console.log(plan)
  };
  console.log(selectedPlanId)

  return (
    <div className="app">
      <SideBar />
      {step === 'PersonalInfo' && <PersonalInfo initialUserData={userData} setNextStep={onStepChange} setUserData={onUserDataChange} />}
      {step === 'Plan' && <SelectPlan currentPlanId={selectedPlanId} goToPreviousStep={onStepChange} goToNextStep={onStepChange} onPlanSelect={onPlanSelect} avaiablePlans={avaiablePlans} />}
      {step === 'Addons' && <PickAddOns goToPreviousStep={onStepChange} />}
    </div>
  );
}

export default App;
