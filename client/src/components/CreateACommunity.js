import React, { useState, useEffect } from "react";
import { createCommunity } from '../actions/index.js';
import { connect } from "react-redux";


function CreateACommunity(props) {
  const [community, setCommunity] = useState({
    country_id: props.match.params.country_id,
    community_name: ""
  });

  const onChange = event => {
    setCommunity({ ...community, "community_name": event.target.value });
  };

  onsubmit = event => {
    event.preventDefault();
    props.createCommunity(community);
    props.history.goBack();
    setCommunity({
      community_name: ""
    });
  };
  return (
    <div>
      <form className="editeForm">
        <label htmlFor="community_name">Community name:</label>
        <input
          id="community_name"
          placeholder="country name"
          name="community_name"
          onChange={onChange}
        />
        <button>Submit</button>
        <button
          onClick={event => {
            event.preventDefault();
            props.history.goBack();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStatetoProps, { createCommunity })(CreateACommunity);



//   const useStyles = makeStyles({
//     root: {
//       width: "80%",
//       overflowX: "auto",
//       margin: "5%",
//       display: "flex",
//       flexDirection: "column"
//     },
//     form: {
//       width: "65%",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center"
//     },
//     headline: {
//       margin: "2%",
//       paddingTop: "2%"
//     },
//     input: {
//       padding: "2%",
//       margin: "2%"
//     },
//     button: {
//       margin: "2%",
//       width: "30%",
//       padding: "2%"
//     }
//   });

//   const classes = useStyles();

//   // const handleChanges = event => {
//   //   setCommunity({ ...community, [event.target.name]: event.target.value });
//   // };

//   // const submitForm = event => {
//   //   event.preventDefault();
//   //   handleChanges(community);
//   //   setCommunity({ communityName: "" });
//   // };
//   //onSubmit={submitForm}           onChange={handleChanges}

//   return (
//     <Paper className={classes.root}>
//       <h1 className={classes.headline}>Create A Community</h1>
//       <Form className={classes.form}>
//         <Field
//           as={TextField}
//           className={classes.input}
//           required
//           label="Community Name"
//           type="text"
//           name="communityName"
//           variant="outlined"
//         />
//         <Button className={classes.button} type="submit" variant="contained">
//           Create Community
//         </Button>
//       </Form>
//     </Paper>
//   );
// };

// const FormikCreateACommunity = withFormik({
//   mapPropsToValues({ communityName }) {
//     return {
//       communityName: communityName || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     communityName: Yup.string().required()
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//     axios
//       .post("https://reqres.in/api/users/", values)
//       .then(response => {
//         setStatus(response.data);
//         console.log(response.data);
//         resetForm();
//       })
//       .catch(error => {
//         console.log(error.response);
//       });
//   }
// })(CreateACommunity);

// export default FormikCreateACommunity;
