import { SinglePlanType, StepType } from "../App"
import { Button } from "../components/Button"
import { SectionHeader } from "../components/SectionHeader"
import { ALL_AVAIABLE_ADDONS, ALL_AVAIABLE_PLANS } from "../data"

type SummaryProps = {
  goToPreviousStep?: (step: StepType) => void
  goToNextStep?: (step: StepType) => void
  selectedPlanId: string | undefined
  planPrice: any
  selectedAddons: string[]
  getVariant: keyof SinglePlanType['price'],
}

export const Summary = ({ goToPreviousStep, goToNextStep, selectedPlanId, planPrice, selectedAddons, getVariant }: SummaryProps) => {

  const selectedPlan = ALL_AVAIABLE_PLANS.find(plan => plan.id === selectedPlanId);

  const addonsTotalPrice = selectedAddons.reduce((total, addonId) => {
    const addon = ALL_AVAIABLE_ADDONS.find(addon => addon.id === addonId);
    if (addon) {
      total += addon.price[getVariant];
    }
    return total;
  }, 0);

  const variantPrice = selectedPlan?.price[getVariant] || 0
  const totalPrice = variantPrice + addonsTotalPrice

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
          <div className="selectedMainPrice">{planPrice()}</div>
        </div>
        <div className="summaryAddons">
          {selectedAddons.map(addonId => {
            const addon = ALL_AVAIABLE_ADDONS.find(addon => addon.id === addonId);
            return addon ? (
              <div key={addon.id} className="selectedAddOn">
                <div className="selectedAddOnTitle">{addon.title}</div>
                <div className="selectedAddOnPrice">{getVariant === 'monthly' ? `$${addon.price[getVariant]}/mo` : `$${addon.price[getVariant]}/yr`}</div>

              </div>
            ) : <></>;
          })}
        </div>
      </div>

      <div className="totalSumBar">
        <div className="totalText">Total {getVariant === 'monthly' ? '(per month)' : '(per year)'}</div>
        <div className="totalPrice">{getVariant === 'monthly' ? `$${totalPrice}/mo` : `$${totalPrice}/yr`}</div>
      </div>

      <div className="buttonsArea">

        <Button
          className="goBackButton"
          onClick={() => goToPreviousStep?.('Addons')}
        >
          Go back
        </Button>

        <Button
          className="confirmButton"
          onClick={() => goToNextStep?.('EndScreen')}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}
