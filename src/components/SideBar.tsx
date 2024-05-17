import { StepType } from "../App"
import { Step } from "./Step"

type SideBarProps = {
  currentStep: StepType;
};

export const SideBar = ({ currentStep }: SideBarProps) => {
  return (
    <div className="sideBar">
      <Step number={1} info="YOUR INFO" classNameOnSelectedStep={currentStep === 'PersonalInfo' ? 'selectedCircle' : ''} />
      <Step number={2} info="SELECT PLAN" classNameOnSelectedStep={currentStep === 'Plan' ? 'selectedCircle' : ''} />
      <Step number={3} info="ADD-ONS" classNameOnSelectedStep={currentStep === 'Addons' ? 'selectedCircle' : ''} />
      <Step number={4} info="SUMMARY" classNameOnSelectedStep={currentStep === 'Summary' ? 'selectedCircle' : ''} />
    </div>
  )
}
