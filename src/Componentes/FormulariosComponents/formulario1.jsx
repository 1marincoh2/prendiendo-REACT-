import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const formulario1 = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[values, setValues]= useState ({
    firstName: '',
    lastName: '',
    email: '',
});


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});



return (

  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={values}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
) 
};
export default formulario1