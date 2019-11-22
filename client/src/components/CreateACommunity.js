import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreateACommunity = props => {
  const useStyles = makeStyles({
    root: {
      width: "80%",
      overflowX: "auto",
      margin: "5%",
      display: "flex",
      flexDirection: "column"
    },
    form: {
      width: "65%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    headline: {
      margin: "2%",
      paddingTop: "2%"
    },
    input: {
      padding: "2%",
      margin: "2%"
    },
    button: {
      margin: "2%",
      width: "30%",
      padding: "2%"
    }
  });

  const classes = useStyles();

  // const handleChanges = event => {
  //   setCommunity({ ...community, [event.target.name]: event.target.value });
  // };

  // const submitForm = event => {
  //   event.preventDefault();
  //   handleChanges(community);
  //   setCommunity({ communityName: "" });
  // };
  //onSubmit={submitForm}           onChange={handleChanges}

  return (
    <Paper className={classes.root}>
      <h1 className={classes.headline}>Create A Community</h1>
      <Form className={classes.form}>
        <Field
          as={TextField}
          className={classes.input}
          required
          label="Community Name"
          type="text"
          name="communityName"
          variant="outlined"
        />
        <Button className={classes.button} type="submit" variant="contained">
          Create Community
        </Button>
      </Form>
    </Paper>
  );
};

const FormikCreateACommunity = withFormik({
  mapPropsToValues({ communityName }) {
    return {
      communityName: communityName || ""
    };
  },

  validationSchema: Yup.object().shape({
    communityName: Yup.string().required()
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
})(CreateACommunity);

export default FormikCreateACommunity;
