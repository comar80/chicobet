/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter() {

  const socials = [
    {
      icon: <i className="fab fa-facebook" />,
      link: "https://www.facebook.com",
    },
    {
      icon: <i className="fab fa-twitter" />,
      link: "https://www.twitter.com",
    },
    {
      icon: <i className="fab fa-instagram" />,
      link: "https://www.instagram.com",
    },
  ];

  const menus = [
    {
      name: "Company",
      items: [
        { name: "About Us", route: "/about" },
        { name: "Contact Us", route: "/contact" },
        { name: "Careers", route: "/careers" },
      ],
    },
    {
      name: "Support",
      items: [
        { name: "Help Center", route: "/help" },
        { name: "Privacy Policy", route: "/privacy" },
        { name: "Terms of Service", route: "/terms" },
      ],
    },
  ];
  const copyright = (
    <MKTypography variant="body2" color="text">
      &copy; {new Date().getFullYear()}{" "}
      <MKTypography component="a" href="#" color="inherit">
        {"brand.name"}
      </MKTypography>
      . All rights reserved.
    </MKTypography>
  );

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <MKBox>
              <Link to={"/"}>
                <MKBox component="img" src={"/"} alt={"brand.name"} maxWidth="2rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{"brand.name"}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
