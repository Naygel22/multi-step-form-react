import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { SelectPlan } from "./pages/SelectPlan";
import { PickAddOns } from "./pages/PickAddOns";
import { PersonalInfoValues } from "./validators/validators";
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

export type PlanPrice = {
  monthly: number,
  yearly: number
}

export type StepType = 'PersonalInfo' | 'Plan' | 'Addons' | "Summary" | "EndScreen";

function App() {
  const [step, setStep] = useState<StepType>('PersonalInfo');
  const [userData, setUserData] = useState<PersonalInfoValues | undefined>();
  const [selectedPlanId, setSelectedPlanId] = useState<SinglePlanType['id'] | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<keyof SinglePlanType['price']>('monthly')

  const [selectedAddonsId, setSelectedAddonsId] = useState<string[]>([]);
  const [avaiablePlans] = useState<SinglePlanType[]>(ALL_AVAIABLE_PLANS)
  const [availableAddons] = useState<SingleAddonType[]>(ALL_AVAIABLE_ADDONS)

  const onStepChange = (step: StepType) => {
    setStep(step);
  };

  const onUserDataChange = (userData: PersonalInfoValues) => {
    setUserData(userData);
  };

  const onPlanSelect = (planId: SinglePlanType['id']) => {
    setSelectedPlanId(planId);

  };

  const planPrice = (): string | undefined => {
    const selectedPlan = ALL_AVAIABLE_PLANS.find(plan => plan.id === selectedPlanId);
    if (selectedPlan) {
      if (selectedVariant === 'monthly') {
        return `$${selectedPlan.price.monthly}/mo`;
      } else if (selectedVariant === 'yearly') {
        return `$${selectedPlan.price.yearly}/yr`;
      }
    }
    return undefined;
  };


  return (
    <div className="app">
      <SideBar currentStep={step} />
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
        selectVariant={setSelectedVariant}
        selectedVariant={selectedVariant} />}
      {step === 'Addons' && <PickAddOns
        goToPreviousStep={onStepChange}
        goToNextStep={onStepChange}
        availableAddons={availableAddons}
        getVariant={selectedVariant}
        selectedAddonsId={selectedAddonsId}
        setSelectedAddonsId={setSelectedAddonsId} />}
      {step === 'Summary' && <Summary
        goToPreviousStep={onStepChange}
        goToNextStep={onStepChange}
        selectedPlanId={selectedPlanId}
        planPrice={planPrice}
        selectedAddons={selectedAddonsId}
        getVariant={selectedVariant} />}
      {step === 'EndScreen' && <EndScreen />}
    </div>

  );
}

export default App;