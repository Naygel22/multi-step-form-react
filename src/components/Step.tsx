
type StepProps = {
  number: number
  info: string
  isSelected?: boolean
}

export const Step = ({ number, info, isSelected }: StepProps) => {
  return (

    <div className="step">
      <div className={`circleStepCounter ${isSelected && 'selectedCircle'}`}>{number}</div>
      <div className="stepText">
        <div className="stepTitle">STEP {number}</div>
        <div className="stepInfo">{info}</div>
      </div>
    </div>



  )
}
