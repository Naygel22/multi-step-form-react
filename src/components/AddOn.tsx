
type AddOnProps = {
  title: string,
  info: string,
  price: string,
  onSelect: () => void
  className?: string
  checked?: boolean
}

export const AddOn = ({ title, info, price, onSelect, className, checked }: AddOnProps) => {
  return (
    <>
      <div className={`barItem ${className}`} onClick={onSelect}>
        <input type="checkbox" className="checkbox" checked={checked} />
        <div className="barText">
          <div className="barTitle">{title}</div>
          <div className="barInfo">{info}</div>
        </div>
        <div className="barPrice">{price}</div>
      </div>
    </>

  )
}