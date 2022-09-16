import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"

const Hero = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant="h3" color="inherit" style={{ marginBottom: 20 }}>
          Welcome To
          The Pandora's Box
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          August 13, 2022 – August 15, 2022
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          Test your analytical and problem-solving skill (with riddles) Push the limits of your mind! The event has ended.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          REGISTRATIONS CLOSED
        </Button>
      </Grid>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image alt="Virtual Healthcare for you" filename="pandoras-box-hero.png" />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
