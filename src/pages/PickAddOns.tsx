import { Button } from "../components/Button";
import { AddOn } from "../components/AddOn";
import { SectionHeader } from "../components/SectionHeader";
import { SingleAddonType, SinglePlanType, StepType } from "../App";

type PickAddOnsProps = {
  goToPreviousStep?: (step: StepType) => void,
  goToNextStep?: (step: StepType) => void,
  availableAddons: SingleAddonType[],
  getVariant: keyof SinglePlanType['price'],
  selectedAddonsId: string[],
  setSelectedAddonsId: (addons: string[]) => void
}

export const PickAddOns = ({ goToPreviousStep, goToNextStep, availableAddons, getVariant, selectedAddonsId, setSelectedAddonsId }: PickAddOnsProps) => {


  function handleAddonSelect(addonId: string) {
    const isSelected = selectedAddonsId?.find(addon => addon === addonId);
    if (isSelected) {
      // Jeżeli addon był już wybrany, usuwamy go z listy
      const filteredIds = selectedAddonsId?.filter(id => id !== addonId);
      setSelectedAddonsId(filteredIds);
    } else {
      // Jeżeli addon nie był wcześniej wybrany, dodajemy go do listy
      setSelectedAddonsId([...selectedAddonsId, addonId]);
    }

  }
  return (
    <div className="stepPage3">
      <SectionHeader
        title="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />

      <div className="bars">
        {availableAddons.map((addon) => (
          <AddOn
            key={addon.id}
            title={addon.title}
            info={addon.description}
            price={getVariant === 'monthly' ? `$${addon.price.monthly}/mo` : `$${addon.price.yearly}/yr`}
            onSelect={() => handleAddonSelect(addon.id)}
            className={selectedAddonsId.includes(addon.id) ? 'selectedItem' : ''}
          />
        ))}
      </div>

      <div className="buttonsArea">
        <Button
          className="goBackButton"
          onClick={() => goToPreviousStep?.('Plan')}
        >
          Go back
        </Button>

        <Button onClick={() => goToNextStep?.('Summary')}>Next Step</Button>
      </div>
    </div>
  );
};
