import { useFormik } from "formik";
import { PersonalInfoValues, personalInfoSchema } from "../validators/validators";
import { TextInput } from "../components/forms/TextInput";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";

export const PersonalInfo = () => {
  const formik = useFormik<PersonalInfoValues>({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      console.log(values, null, 2);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="stepPage1">
      <SectionHeader
        title="Personal info"
        info="Please provide your name, email address and phone number." />
      <div className="inputSection">
        <TextInput formik={formik} accessor='name' label="Name" />
        <TextInput formik={formik} accessor='email' label="Email Address" />
        <TextInput formik={formik} accessor='phoneNumber' label="Phone Number" />
      </div>
      <Button className="nextStepButton" name="Next Step" />
    </form>
  )
}
