import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// JobRecVR React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { Link } from "react-router-dom";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Assessments
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDBox display="flex" alignItems="center" mb={3.5} ml={-1.5}>
          <MDButton component={Link} to="" variant="outlined" color="info">
            Take MCQ Quiz
          </MDButton>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={3.5} ml={-1.5}>
          <MDBox mt={0.5}>
            <MDButton variant="outlined" color="info">
              Take VR Test
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={3.5} ml={-1.5}>
          <MDButton variant="outlined" color="info">
            View Resume
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
