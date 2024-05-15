import { StepType } from "../App"
import { Button } from "../components/Button"
import { SectionHeader } from "../components/SectionHeader"

type SummaryProps = {
  goToPreviousStep?: (step: StepType) => void
  goToNextStep?: (step: StepType) => void
  selectedPlanId: string | undefined
  planPrice: any
  selectedAddons: string[]
}

export const Summary = ({ goToPreviousStep, goToNextStep, selectedPlanId, planPrice, selectedAddons }: SummaryProps) => {
  return (
    <div className="stepPage4">
      <SectionHeader
        title="Finishing-up"
        info="Double-check everything looks OK before confirming."
      />
      <div className="summaryBox">
        <div className="selectedPlan">
          <div>
            <div className="selectedPlanTitle">{selectedPlanId}</div>
            <button className="changeButton" onClick={() => goToPreviousStep?.('Plan')}>Change</button>
          </div>
          <div className="selectedMainPrice">{planPrice}</div>
        </div>
        <div className="summaryAddons">
          {selectedAddons.map(addon => (
            <div key={addon}>{addon}</div>
          ))}
        </div>

      </div>



      <Button
        className="goBackButton"
        onClick={() => goToPreviousStep?.('Addons')}
      >
        Go back
      </Button>

      <Button
        className="confirmButton"
        onClick={() => goToNextStep?.('EndScreen')}>Confirm</Button>
    </div>

  )
}
