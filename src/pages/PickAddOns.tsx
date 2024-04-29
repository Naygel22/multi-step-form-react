import { Button } from "../components/Button";
import { AddOn } from "../components/AddOn";
import { SectionHeader } from "../components/SectionHeader";
import { Step } from "../App";

const availableAddons = [
  {
    id: "Online Service",
    title: "Online Service",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10
    }
  },
  {
    id: "Larger storage",
    title: "Larger storage",
    description: "Extra 1TB of cloud space",
    price: {
      monthly: 2,
      yearly: 20
    }
  },
  {
    id: "Customizable profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20
    }
  }
];

type PickAddOnsProps = {
  goToPreviousStep?: (step: Step) => void,
  goToNextStep?: (step: Step) => void
}

export const PickAddOns = ({ goToPreviousStep, goToNextStep }: PickAddOnsProps) => {
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
            price={`$${addon.price.monthly}/mo`}
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
      </div>
    </div>
  );
};
