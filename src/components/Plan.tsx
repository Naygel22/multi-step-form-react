
export type PlanProps = {
  title: string,
  icon: string,
  price: string,
  bonus?: string,
  onSelect: () => void
  className?: string;
}


export const Plan = ({ title, icon, price, bonus, onSelect, className }: PlanProps) => {
  return (
    <div className={"item " + className} onClick={onSelect}>
      <img src={icon} alt="" />
      <div className="itemTitle">{title}</div>
      <div className="itemPrice">{price}</div>
      <div className="bonus">{bonus}</div>
    </div>
  )
}
