
type PlanProps = {
  title: string,
  icon: string,
  price: string,
  bonus?: string
}


export const Plan = ({ title, icon, price, bonus }: PlanProps) => {
  return (
    <div className="item">
      <img src={icon} alt="" />
      <div className="itemTitle">{title}</div>
      <div className="itemPrice">{price}</div>
      <div className="bonus">{bonus}</div>
    </div>
  )
}
