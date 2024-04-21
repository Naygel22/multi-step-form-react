import { Step } from "./Step"

export const SideBar = () => {
  return (
    <div className="sideBar">
      <Step number={1} info="YOUR INFO" />
      <Step number={2} info="SELECT PLAN" />
      <Step number={3} info="ADD-ONS" />
      <Step number={4} info="SUMMARY" />
    </div>
  )
}
