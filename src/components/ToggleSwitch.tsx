import { Switch } from "@mui/material"


export const ToggleSwitch = ({ onChange }) => {
  return (
    <div className="toggleSection">
      <div className="toggleName">Monthly</div>
      <Switch onChange={onChange} />
      <div className="toggleName">Yearly</div>
    </div>

  )
}