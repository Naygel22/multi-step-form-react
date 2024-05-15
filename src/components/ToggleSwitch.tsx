import { Switch } from "@mui/material"
import { SinglePlanType } from "../App"


export const ToggleSwitch = ({ onChange, selectedVariant }: { onChange: () => void, selectedVariant: keyof SinglePlanType['price'] }) => {
  return (
    <div className="toggleSection">
      <div className="toggleName">Monthly</div>
      <Switch onChange={onChange} checked={selectedVariant === 'yearly'} />
      <div className="toggleName">Yearly</div>
    </div>

  )
}
