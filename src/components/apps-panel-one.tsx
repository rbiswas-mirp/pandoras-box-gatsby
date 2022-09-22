import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import Bar from "./bar"

const AppsPanelOne = () => {
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
        <Typography variant="h4" color="inherit">
          4. Submit to Win Prizes
        </Typography>
        <Bar />
        <Typography
          variant="subtitle1"
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          Every stage act as a checkpoint. It means that, if you fail to complete a stage, the previous stage will act as your final submission. So, try to complete every stage as quickly as possible to win some exciting prizes!
        </Typography>
      </Grid>
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
              alt="Submit to Win Prizes"
              filename="submit-to-win-prizes.png"
            />
          </div>
        </Grid>
    </Grid>
  )
}
export default AppsPanelOne
