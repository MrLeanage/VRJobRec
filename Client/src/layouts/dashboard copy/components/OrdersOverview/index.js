/**
=========================================================
* JobRecVR React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// JobRecVR React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// JobRecVR React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Recent Activity
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Jessica Doe Completed"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="notifications"
          title="Romina Hadid Declined"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="notifications"
          title="Romina Hadid Registered"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="notifications"
          title="Jessica Doe Registered"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="notifications"
          title="Alex Smith Registered"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
