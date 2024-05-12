import { StepType } from "../App"
import { Button } from "../components/Button"
import { SectionHeader } from "../components/SectionHeader"

type SummaryProps = {
  goToPreviousStep?: (step: StepType) => void,
  goToNextStep?: (step: StepType) => void,
}

export const Summary = ({ goToPreviousStep, goToNextStep }: SummaryProps) => {
  return (
    <div className="stepPage4">
      <SectionHeader
        title="Finishing-up"
        info="Double-check everything looks OK before confirming."
      />
      <div className="summaryBox">

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
