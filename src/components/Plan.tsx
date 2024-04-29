
export type PlanProps = {
  title: string,
  icon: string,
  price: string,
  bonus?: string,
  onSelect: () => void
}


export const Plan = ({ title, icon, price, bonus, onSelect }: PlanProps) => {
  return (
    <div className="item" onClick={onSelect}>
      <img src={icon} alt="" />
      <div className="itemTitle">{title}</div>
      <div className="itemPrice">{price}</div>
      <div className="bonus">{bonus}</div>
    </div>
  )
}
