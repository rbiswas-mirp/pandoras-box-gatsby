import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Bar from "./bar"
import Button from "@material-ui/core/Button"

const RegistrationClosed = () => {
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
          Registrations Closed!
        </Typography>
        <Bar />
        <Button variant="contained" color="primary" size="large">
          REGISTRATIONS CLOSED
        </Button>
      </Grid>
    </Grid>
  )
}
export default RegistrationClosed
