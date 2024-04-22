
import { useState } from "react"
import { Plan } from "../components/Plan"
import { SectionHeader } from "../components/SectionHeader"
import { ToggleSwitch } from "../components/ToggleSwitch"
import { Button } from "../components/Button"

const avaiablePlans = [
  {
    id: "Arcade",
    title: "Arcade",
    icon: "src/assets/images/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90
    }
  },
  {
    id: 'Advanced',
    title: "Advanced",
    icon: "src/assets/images/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120
    }
  },
  {
    id: "Pro",
    title: "Pro",
    icon: "src/assets/images/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150
    }
  },
]

export const SelectPlan = () => {
  const [isChecked, setIsChecked] = useState(true);

  function handleToggleSwitch() {
    setIsChecked(prev => !prev)
  }


  return (
    <div className="stepPage2">
      <SectionHeader
        title="Select your plan"
        info="You have the option of monthly or yearly billing." />
      <div className="items">
        {avaiablePlans.map(plan => (
          <Plan
            title={plan.title}
            icon={plan.icon}
            price={isChecked ? `$${plan.price.monthly}/mo` : `$${plan.price.yearly}/yr`}
            bonus={!isChecked ? '2 months free' : ''} />
        ))}
      </div>
      <ToggleSwitch onChange={handleToggleSwitch} />

      <div className="buttonsArea">
        <Button className="goBackButton" name="Go Back" />
        <Button className="nextStepButton" name="Next Step" />
      </div>
    </div>

  )
}
