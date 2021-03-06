import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
// import TopLayout from "../components/TopLayout"
// import SEO from "../components/seo"

export default function About() {
  return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
        </Box>
      </Container>
  )
}
