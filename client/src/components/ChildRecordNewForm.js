import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import axios from "axios";

const ChildRecordNewForm = props => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    headline: {
      margin: "2%",
      paddingTop: "2%"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "90%",
      padding: "5%"
    },
    input: {
      padding: "2%",
      margin: "2%"
    },
    button: {
      margin: "2%",
      width: "30%"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <h1 className={classes.headline}>New Child Record</h1>
      <Paper className={classes.root}>
        <Form className={classes.form}>
          <div>
            <label htmlFor="childName">CHILD'S NAME</label>
            <Field
              className={classes.input}
              type="text"
              name="childName"
              placeholder="Child Name"
            />
            <label htmlFor="parentsNames">PARENTS' NAMES</label>
            <Field
              className={classes.input}
              type="text"
              name="parentsNames"
              placeholder="Parents Names"
            />
          </div>
          <div>
            <label htmlFor="homeAddress">HOME ADDRESS</label>
            <Field
              className={classes.input}
              type="text"
              name="homeAddress"
              placeholder="Street Address"
            />
            <label htmlFor="communityName">COMMUNITY NAME</label>
            <Field
              className={classes.input}
              type="text"
              name="communityName"
              placeholder="Community"
            />
          </div>
          <div>
            <label htmlFor="zipcode">ZIPCODE</label>
            <Field
              className={classes.input}
              type="text"
              name="zipcode"
              placeholder="Zipcode"
            />
            <label htmlFor="phoneNumber">PHONE NUMBER</label>
            <Field
              className={classes.input}
              type="text"
              name="phoneNumber"
              placeholder="+XX (XXX) XXX-XXXX"
            />
            <label htmlFor="country">COUNTRY</label>
            <Field
              className={classes.input}
              type="text"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <label htmlFor="screenDate">DATE OF SCREENING</label>
            <Field
              className={classes.input}
              type="date"
              name="screenDate"
              placeholder="mm/dd/yy"
            />
            <label htmlFor="screenCommunity">LOCATION OF SCREENING</label>
            <Field
              className={classes.input}
              type="text"
              name="screenCommunity"
              placeholder="Community"
            />
            <Field
              className={classes.input}
              type="text"
              name="screenCountry"
              placeholder="Country"
            />
          </div>
          <div>
            <label htmlFor="birthdate">DATE OF BIRTH</label>
            <Field
              className={classes.input}
              type="date"
              name="birthdate"
              placeholder="mm/dd/yy"
            />
            <label htmlFor="gender">GENDER</label>
            <Field
              className={classes.input}
              type="text"
              name="gender"
              placeholder="Gender"
            />
          </div>
          <div>
            <label htmlFor="height">HEIGHT</label>
            <Field
              className={classes.input}
              type="text"
              name="height"
              placeholder="0"
            />
            <label htmlFor="weight">WEIGHT</label>
            <Field
              className={classes.input}
              type="text"
              name="weight"
              placeholder="0"
            />
          </div>
          <Button className={classes.button} type="submit" variant="contained">
            CREATE RECORD
          </Button>
        </Form>

        {/* {record.map(r => (
          <ul key={r.id}>
            <li>Child Name: {r.childName}</li>
            <li>Parent's Names: {r.parentsNames}</li>
            <li>Home Address: {r.homeAddress}</li>
            <li>Community Name: {r.communityName}</li>
            <li>Zipcode: {r.zipcode}</li>
            <li>Phone number: {r.phoneNumber}</li>
            <li>Country: {r.country}</li>
            <li>Screen Date: {r.screenDate}</li>
            <li>Screen Community: {r.screenCommunity}</li>
            <li>Screen Country: {r.screenCountry}</li>
            <li>Birthdate: {r.birthdate}</li>
            <li>Gender: {r.gender}</li>
            <li>Height: {r.height}</li>
            <li>Weight: {r.weight}</li>
          </ul>
        ))} */}
      </Paper>
    </div>
  );
};

const FormikChildRecordNewForm = withFormik({
  mapPropsToValues({
    childName,
    parentsNames,
    homeAddress,
    communityName,
    zipcode,
    phoneNumber,
    country,
    screenDate,
    screenCommunity,
    screenCountry,
    birthdate,
    gender,
    height,
    weight
  }) {
    return {
      childName: childName || "",
      parentsNames: parentsNames || "",
      homeAddress: homeAddress || "",
      communityName: communityName || "",
      zipcode: zipcode || "",
      phoneNumber: phoneNumber || "",
      country: country || "",
      screenDate: screenDate || "",
      screenCommunity: screenCommunity || "",
      screenCountry: screenCountry || "",
      birthdate: birthdate || "",
      gender: gender || "",
      height: height || "",
      weight: weight || ""
    };
  },

  validationSchema: Yup.object().shape({
    childName: Yup.string().required(),
    parentsNames: Yup.string(),
    homeAddress: Yup.string(),
    communityName: Yup.string(),
    zipcode: Yup.string(),
    phoneNumber: Yup.string(),
    country: Yup.string(),
    screenDate: Yup.date().required(),
    screenCommunity: Yup.string().required(),
    screenCountry: Yup.string().required(),
    birthdate: Yup.date().required(),
    gender: Yup.string().required(),
    height: Yup.string().required(),
    weight: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        console.log(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error.response);
      });
  }
})(ChildRecordNewForm);

export default FormikChildRecordNewForm;
