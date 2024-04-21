
type SectionHeaderProps = {
  title: string,
  info: string
}

export const SectionHeader = ({ title, info }: SectionHeaderProps) => {
  return (
    <>
      <h1 className="sectionTitle">{title}</h1>
      <p className="sectionInfo">{info}</p>
    </>
  )
}
