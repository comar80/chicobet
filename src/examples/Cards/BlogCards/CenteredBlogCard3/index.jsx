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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CenteredBlogCard3({ image, title, description, alt }) {
  return (
    <Card sx={{
      height: "100%",
      width: "98%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "background.default",
      boxShadow: 3,
      mt: 1,
      mb: 1,
    }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={alt}
          borderRadius="lg"
          width="100%"
          sx={{
            height: "180px",
            objectFit: "contain",
            mt: "40px",
          }}
          position="relative"
          zIndex={1}
        />
        {/* <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="40%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        /> */}
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" fontWeight="regular">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={-1}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard3.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard3;
