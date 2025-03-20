"use client"; // 👈 This tells Next.js to treat this as a client component

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors}) => (
        <Form>
          <Field name="firstName" placeholder="First Name" />
          {errors.firstName ? (
            <div className="text-red-500">{errors.firstName}</div>
          ) : null}
          <div>kdsgwqkeud</div>
          <Field name="lastName" placeholder="Last Name" />
          {errors.lastName ? (
            <div className="text-red-500">{errors.lastName}</div>
          ) : null}

          <Field name="email" type="email" placeholder="Email" />
          {errors.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;
