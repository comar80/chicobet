/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

import { useNavigate, useLocation } from "react-router-dom";


function SimpleFooter({light}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const links =  [
    {
      name: "Home",
      onClick: () => {
        if (pathname !== "/") {
          navigate("/#header"); // Navigate to the homepage with the hash
        } else {
          document.getElementById("header").scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      name: "Fotos",
      onClick: () => {
        if (pathname !== "/") {
          navigate("/#fotos"); // Navigate to the homepage with the hash
        } else {
          document.getElementById("fotos").scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      name: "Novidades",
      onClick: () => {
        if (pathname !== "/") {
          navigate("/#novidades");
        } else {
          document.getElementById("novidades").scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      name: "Prêmios",
      onClick: () => {
        if (pathname !== "/") {
          navigate("/#premios");
        } else {
          document.getElementById("premios").scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    { name: "Apostas", onClick: () => navigate("/bets") },
    // { href: "/gifts", name: "Presentes" },
    { name: "Sobre", onClick: () => navigate("/about") },
  ]
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link
          component="button" // Use a button to handle onClick
          onClick={link.onClick}
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          <MKTypography variant="button" fontWeight="regular" color={light ? "white" : "text"} sx={{ textTransform: "none" }}>
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
          &copy; {new Date().getFullYear()} ChicoBet
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

export default SimpleFooter;
