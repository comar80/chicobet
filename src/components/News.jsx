// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import CardAtt from "../components/CardAtt";



function News() {
    return (
        <MKBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={2}
            mx={-2}
        >
            <Container>
                <Grid container>
                    <Grid size={{ xs:12, md:8  }} sx={{ mb: 6 }}>
                        <MKTypography variant="h3" color="white">
                            Atualizações
                        </MKTypography>
                        <MKTypography variant="body2" color="white" opacity={0.8}>
                            Novidades da semana
                        </MKTypography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container >
                    <Grid size={{xs:12, lg:6}}>
                        <MKBox mb={1}>
                        <CardAtt />
                        </MKBox>
                    </Grid>
                </Grid>
        </MKBox>
    );
}

export default News;
