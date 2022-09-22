import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Bar from "./bar"
import * as Yup from 'yup';

import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  company: Yup.string(),
  phone: Yup.number().required('Phone is required'),
  message: Yup.string()
    .min(5, 'Message is too short')
    .required('Message is required'),
});

const RegistrationForm = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingLeft: 40, paddingRight: 40 }}
        
      >
        
        <Typography variant="h4" color="inherit">
          Registration Form
        </Typography>
        <Bar />
      </Grid>
      <Container maxWidth="md">
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={() => {}}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleSubmit,
          handleChange,
        }) => (
          <form
            name="registration"
            method="post"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
            action="/success/"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  defaultValue={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="firstName"
                  name="firstName"
                  label="First name"
                  defaultValue={values.firstName}
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  defaultValue={values.lastName}
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="company"
                  name="company"
                  label="Company"
                  defaultValue={values.company}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="phone"
                  name="phone"
                  label="Phone number"
                  onChange={handleChange}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  defaultValue={values.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  defaultValue={values.message}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
    </Grid>
  )
}
export default RegistrationForm
