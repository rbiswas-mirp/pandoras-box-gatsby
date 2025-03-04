import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Bar from "./bar"

const AboutPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
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
            <Image
              alt="Understand the Problem"
              filename="understand-the-problem.png"
            />
          </div>
        </Grid>
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
        <Typography variant="h4" color="inherit">
          1. Understand the Problem
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Make sure to read everything given on the page. Look for hints in-between the lines. A single letter word will be the answer for every stage. Find it with the help of hints to proceed to the next stage!
        </Typography>
      </Grid>
    </Grid>
  )
}
export default AboutPanel
