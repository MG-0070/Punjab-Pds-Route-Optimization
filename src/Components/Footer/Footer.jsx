import * as React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css";
const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#"
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#5E35B1",
        borderTop: "none",
        color: "white",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        marginTop: "32px",
        borderRadius: "10px"
      }}
    >
      <Container maxWidth={false} sx={{ color: "" }}>
        <Grid
          sx={{ display: "flex", justifyContent: "center", marginTop: "12px" }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
            PDS-DASHBOARD
          </Typography>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
            >
              PRODUCT
            </Typography>
            <Link
              href="#"
              className="navlinkItem"
              color="inherit"
              display="block"
            >
              Features
            </Link>
            <Link
              href="#"
              className="navlinkItem"
              color="inherit"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Integrations
            </Link>
            <Link
              href="#"
              className="navlinkItem"
              color="inherit"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="navlinkItem"
              color="inherit"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              sx={{ color: "white" }}
              variant="subtitle1"
              color="text.primary"
              gutterBottom
            >
              COMPANY
            </Typography>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              About Us
            </Link>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Careers
            </Link>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              sx={{ color: "white" }}
              variant="subtitle1"
              color="text.primary"
              gutterBottom
            >
              DEVELOPERS
            </Typography>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Public API
            </Link>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Documentation
            </Link>
            <Link
              href="#"
              color="inherit"
              className="navlinkItem"
              display="block"
              sx={{ marginTop: "10px" }}
            >
              Guides
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              sx={{ color: "white" }}
              variant="subtitle1"
              color="text.primary"
              gutterBottom
            >
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              className="navlinkItem"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              className="navlinkItem"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              className="navlinkItem"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4, color: "white" }}
        >
          © 2024 Developed by IIT Delhi All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
