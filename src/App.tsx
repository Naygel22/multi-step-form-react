// App.tsx
import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { ChosenPlanProps, SelectPlan } from "./pages/SelectPlan";
import { PickAddOns } from "./pages/PickAddOns";
import { PersonalInfoValues } from "./validators/validators";
import { PlanProps } from "./components/Plan";
import { ALL_AVAIABLE_ADDONS, ALL_AVAIABLE_PLANS } from "./data";
import { Summary } from "./pages/Summary";
import { EndScreen } from "./pages/EndScreen";

export type SinglePlanType = {
  id: string,
  title: string,
  icon: string,
  price: PlanPrice
}

export type SingleAddonType = {
  id: string,
  title: string,
  description: string,
  price: PlanPrice
}

type PlanPrice = {
  monthly: number,
  yearly: number
}

export type StepType = 'PersonalInfo' | 'Plan' | 'Addons' | "Summary" | "EndScreen";

function App() {
  const [step, setStep] = useState<StepType>('PersonalInfo');
  const [userData, setUserData] = useState<PersonalInfoValues | undefined>();
  const [selectedPlanId, setSelectedPlanId] = useState<SinglePlanType['id'] | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<keyof SinglePlanType['price']>('monthly')
  // todo: addons
  const [selectedAddonsId, setSelectedAddonsId] = useState<string[] | undefined>([]);
  const [avaiablePlans, setAvaiablePlans] = useState<SinglePlanType[]>(ALL_AVAIABLE_PLANS)
  const [availableAddons, setAvailableAddons] = useState<SingleAddonType[]>(ALL_AVAIABLE_ADDONS)

  const onStepChange = (step: StepType) => {
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
  console.log(selectedAddonsId)

  return (
    <div className="app">
      <SideBar />
      {step === 'PersonalInfo' && <PersonalInfo
        initialUserData={userData}
        setNextStep={onStepChange}
        setUserData={onUserDataChange} />}
      {step === 'Plan' && <SelectPlan
        currentPlanId={selectedPlanId}
        goToPreviousStep={onStepChange}
        goToNextStep={onStepChange}
        onPlanSelect={onPlanSelect}
        avaiablePlans={avaiablePlans}
        selectVariant={setSelectedVariant} />}
      {step === 'Addons' && <PickAddOns
        goToPreviousStep={onStepChange}
        goToNextStep={onStepChange}
        availableAddons={availableAddons}
        getVariant={selectedVariant}
        selectedAddonsId={selectedAddonsId}
        currentAddonId={selectedAddonsId} />}
      {step === 'Summary' && <Summary
        goToPreviousStep={onStepChange}
        goToNextStep={onStepChange} />}
      {step === 'EndScreen' && <EndScreen />}
    </div>
  );
}

export default App;
