import { useState } from 'react'
import { Plan, PlanProps } from '../components/Plan'
import { SectionHeader } from '../components/SectionHeader'
import { ToggleSwitch } from '../components/ToggleSwitch'
import { Button } from '../components/Button'
import { StepType, SinglePlanType } from '../App'



type SelectPlanProps = {
  goToPreviousStep?: (step: StepType) => void,
  goToNextStep?: (step: StepType) => void,
  onPlanSelect: (planId: SinglePlanType['id']) => void
  avaiablePlans: SinglePlanType[]
  currentPlanId: SinglePlanType['id'] | undefined
  selectVariant: (variant: keyof SinglePlanType['price']) => void
}

export type ChosenPlanProps = {
  title: string,
  price: string
}

export const SelectPlan = ({ goToPreviousStep, goToNextStep, onPlanSelect, avaiablePlans, currentPlanId, selectVariant }: SelectPlanProps) => {
  const [isChecked, setIsChecked] = useState(true)
  const [isSelected, setIsSelected] = useState(false)


  function handleToggleSwitch() {
    setIsChecked(prev => !prev);
    const newVariant = isChecked ? 'yearly' : 'monthly';
    selectVariant(newVariant);
    console.log(newVariant)
  }

  function handlePlanSelect(planId: SinglePlanType['id']) {
    onPlanSelect(planId);
    setIsSelected(true);
  }

  return (
    <div className="stepPage2">
      <SectionHeader
        title="Select your plan"
        info="You have the option of monthly or yearly billing."
      />
      <div className="items">
        {avaiablePlans.map((plan) => (
          <Plan
            key={plan.id}
            title={plan.title}
            icon={plan.icon}
            className={currentPlanId === plan.id ? 'selectedItem' : ''}
            price={
              isChecked
                ? `$${plan.price.monthly}/mo`
                : `$${plan.price.yearly}/yr`
            }
            bonus={!isChecked ? '2 months free' : ''}
            onSelect={() => handlePlanSelect(plan.id)}
          />
        ))}
      </div>
      <ToggleSwitch onChange={handleToggleSwitch} />

      <div className="buttonsArea">
        <Button
          className="goBackButton"
          onClick={() => goToPreviousStep?.('PersonalInfo')}
        >
          Go back
        </Button>
        <Button onClick={() => isSelected && goToNextStep?.('Addons')}>Next Step</Button>
      </div>
    </div>
  )
}
