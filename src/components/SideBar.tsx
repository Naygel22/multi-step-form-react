import { StepType } from "../App"
import { Step } from "./Step"

type SideBarProps = {
  currentStep: StepType;
};

export const SideBar = ({ currentStep }: SideBarProps) => {
  return (
    <div className="sideBar">
      <Step number={1} info="YOUR INFO" isSelected={currentStep === 'PersonalInfo'} />
      <Step number={2} info="SELECT PLAN" isSelected={currentStep === 'Plan'} />
      <Step number={3} info="ADD-ONS" isSelected={currentStep === 'Addons'} />
      <Step number={4} info="SUMMARY" isSelected={currentStep === 'Summary'} />
    </div>
  )
}
