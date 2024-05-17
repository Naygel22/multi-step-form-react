import { Plan } from '../components/Plan'
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
  selectedVariant: keyof SinglePlanType['price']
}

export type ChosenPlanProps = {
  title: string,
  price: string
}

export const SelectPlan = ({ goToPreviousStep, goToNextStep, onPlanSelect, avaiablePlans, currentPlanId, selectVariant, selectedVariant }: SelectPlanProps) => {

  const isMonthly = () => selectedVariant === 'monthly'

  function handleToggleSwitch() {

    const newVariant = isMonthly() ? 'yearly' : 'monthly';
    selectVariant(newVariant);
  }

  function handlePlanSelect(planId: SinglePlanType['id']) {
    onPlanSelect(planId);
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
              isMonthly()
                ? `$${plan.price.monthly}/mo`
                : `$${plan.price.yearly}/yr`
            }
            bonus={!isMonthly() ? '2 months free' : ''}
            onSelect={() => handlePlanSelect(plan.id)}
          />
        ))}
      </div>
      <ToggleSwitch onChange={handleToggleSwitch} selectedVariant={selectedVariant} />

      <div className="buttonsArea">
        <Button
          className="goBackButton"
          onClick={() => goToPreviousStep?.('PersonalInfo')}
        >
          Go back
        </Button>
        <Button onClick={() => currentPlanId && goToNextStep?.('Addons')}>Next Step</Button>
      </div>
    </div>
  )
}
