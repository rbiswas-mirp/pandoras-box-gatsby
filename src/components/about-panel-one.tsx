import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Bar from "./bar"

const AboutPanelOne = () => {
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
              alt="Race Through the Stages"
              filename="race-through-the-stages.png"
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
          3. Race Through the Stages
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          The winners will be decided on the basis of the total completion time. The lower, the better. That’s why, stay sharp!
        </Typography>
      </Grid>
    </Grid>
  )
}
export default AboutPanelOne
