import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import AboutPanelOne from "../components/about-panel-one"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import AppsPanel from "../components/apps-panel"
import AppsPanelOne from "../components/apps-panel-one"
import Registration from "../components/registration"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="The Pandora's Box" />
        <Hero />
        <Services />
        <AboutPanel />
        <AppsPanel />
        <AboutPanelOne />
        <AppsPanelOne />
        <Registration />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
