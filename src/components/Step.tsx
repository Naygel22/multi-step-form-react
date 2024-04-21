
type StepProps = {
  number: number,
  info: string
}

export const Step = ({ number, info }: StepProps) => {
  return (
    <>
      <div className="step">
        <div className="circleStepCounter">{number}</div>
        <div className="stepText">
          <div className="stepTitle">STEP {number}</div>
          <div className="stepInfo">{info}</div>
        </div>
      </div>

    </>

  )
}
