import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import { Link } from "gatsby"

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
          Test your analytical and problem-solving skill (with riddles) Push the limits of your mind! The event has ended. Results out now! Check the results below!
        </Typography>
        <Typography variant="subtitle2" style={{ marginBottom: 30 }}>
          N.B These certificates have been provided by the event organizers and NOT by IIT Madras Paradox.
        </Typography>
        <Link style={{textDecoration: 'none'}} to="https://drive.google.com/drive/folders/1KPCWxoAl0eUdtIAHcTHB7nSm03EUuurJ?usp=sharing" >
        <Button variant="contained" color="primary" size="large">
          PARTICIPATION CERTIFICATES
        </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to="https://drive.google.com/drive/folders/1lbqrujFmlmSIWFqnAJ3fl5dLDlSa5ai_?usp=sharing" >
        <Button variant="contained" color="primary" size="large" style={{ marginTop: 10 }}>
          ROUND 4 CERTIFICATES
        </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to="https://drive.google.com/drive/folders/1FAfrOx0DWkupZxWhqSSLe9TEAhmCT5RL?usp=sharing" >
        <Button variant="contained" color="primary" size="large" style={{ marginTop: 10 }}>
          WINNER CERTIFICATES
        </Button>
        </Link>
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
