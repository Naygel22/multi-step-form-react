
type StepProps = {
  number: number
  info: string
  classNameOnSelectedStep: string
}

export const Step = ({ number, info, classNameOnSelectedStep }: StepProps) => {
  return (
    <>
      <div className="step">
        <div className={`circleStepCounter ${classNameOnSelectedStep}`}>{number}</div>
        <div className="stepText">
          <div className="stepTitle">STEP {number}</div>
          <div className="stepInfo">{info}</div>
        </div>
      </div>

    </>

  )
}
