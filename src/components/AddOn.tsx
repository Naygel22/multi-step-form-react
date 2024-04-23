
type AddOnProps = {
  title: string,
  info: string,
  price: string
}

export const AddOn = ({ title, info, price }: AddOnProps) => {
  return (
    <>
      <div className="barItem">
        <input type="checkbox" className="checkbox" />
        <div className="barText">
          <div className="barTitle">{title}</div>
          <div className="barInfo">{info}</div>
        </div>
        <div className="barPrice">{price}</div>
      </div>
    </>

  )
}
