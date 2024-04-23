import { useFormik } from "formik";
import { PersonalInfoValues, personalInfoSchema } from "../validators/validators";
import { TextInput } from "../components/forms/TextInput";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { Link, useNavigate } from "react-router-dom";

export const PersonalInfo = () => {
  const navigate = useNavigate();
  const formik = useFormik<PersonalInfoValues>({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: personalInfoSchema,
    onSubmit: (values) => {
      console.log(values, null, 2);
      navigate('/selectplan')
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
      {/* <Button className="nextStepButton" name="Next Step" /> */}
      <button className="nextStepButton">Next Step</button>
    </form>
  )
}
