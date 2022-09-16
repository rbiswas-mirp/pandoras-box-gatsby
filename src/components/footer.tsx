import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const Footer = () => {
  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: 250,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ padding: 10 }}
          >
            <Typography variant="h4" color="inherit">
            The Pandora's Box
            </Typography>
            <Typography variant="body2" color="inherit">
            Test your analytical and problem-solving skill (with riddles) Push the limits of your mind! The event has ended. Results out now! Check the results above!
            </Typography>
            <Typography variant="body2" color="inherit">
              ©Pandora's Box 2022 | All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Contact Us @{" "}
            <a
              href="support@pandoras-box.tech"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              support@pandoras-box.tech
            </a>
          </Typography>
          <Typography variant="body2" color="inherit">
            Latest Updates
            <a
              href="https://updates.pandoras-box.tech"
              target="_blank"
              style={{ color: "#FFF", margin: 5 }}
            >
              Pandoras Box Updates
            </a>
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
export default Footer
