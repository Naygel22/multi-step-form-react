import { useState } from 'react'
import { Plan, PlanProps } from '../components/Plan'
import { SectionHeader } from '../components/SectionHeader'
import { ToggleSwitch } from '../components/ToggleSwitch'
import { Button } from '../components/Button'
import { Step } from '../App'

const avaiablePlans = [
  {
    id: 'Arcade',
    title: 'Arcade',
    icon: 'src/assets/images/icon-arcade.svg',
    price: {
      monthly: 9,
      yearly: 90
    }
  },
  {
    id: 'Advanced',
    title: 'Advanced',
    icon: 'src/assets/images/icon-advanced.svg',
    price: {
      monthly: 12,
      yearly: 120
    }
  },
  {
    id: 'Pro',
    title: 'Pro',
    icon: 'src/assets/images/icon-pro.svg',
    price: {
      monthly: 15,
      yearly: 150
    }
  }
]

type SelectPlanProps = {
  goToPreviousStep?: (step: Step) => void,
  goToNextStep?: (step: Step) => void,
  onPlanSelect: (plan: ChosenPlanProps) => void
}

export type ChosenPlanProps = {
  title: string,
  price: string
}

export const SelectPlan = ({ goToPreviousStep, goToNextStep, onPlanSelect }: SelectPlanProps) => {
  const [isChecked, setIsChecked] = useState(true)
  const [isSelected, setIsSelected] = useState(false)

  function handleToggleSwitch() {
    setIsChecked((prev) => !prev)
  }

  function handlePlanSelect(plan: ChosenPlanProps) {
    onPlanSelect(plan);
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
            price={
              isChecked
                ? `$${plan.price.monthly}/mo`
                : `$${plan.price.yearly}/yr`
            }
            bonus={!isChecked ? '2 months free' : ''}
            onSelect={() => handlePlanSelect({ title: plan.title, price: isChecked ? `$${plan.price.monthly}/mo` : `$${plan.price.yearly}/yr` })}
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
