import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 1,
      image: "search-doctor-icon.png",
      title: "Sujith Roshan",
      description:
        "21f1001691@ student.onlinedegree.iitm.ac.in",
    },
    {
      id: 2,
      image: "search-doctor-icon.png",
      title: "Aman Singh",
      description:
        "21f1004470@ student.onlinedegree.iitm.ac.in",
    },
    {
      id: 3,
      image: "search-doctor-icon.png",
      title: "Gauri Gangurde",
      description:
        "21f3002248@ student.onlinedegree.iitm.ac.in",
    },
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Pandora's Box Winners</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          Here are the winners for Pandora's Box
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
      </Grid>
    </Grid>
  )
}
export default Services
