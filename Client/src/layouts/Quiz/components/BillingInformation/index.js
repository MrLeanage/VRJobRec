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

// JobRecVR React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/Quiz/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Your Personlized MCQ Quiz
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Which one of the following also known as Conditional Expression"
            company="A. Alternative to if-else"
            email="B. Switch statement"
            vat="C. If-then-else statement"
          />
          <Bill
            name="Which of the following is the correct way to declare a variable in Java?"
            company="A. int x = 10;"
            email="B. var int x = 10;"
            vat="C. x = 10 int;"
          />
          <Bill
            name="Which keyword is used to create a class in Java?"
            company="A. Object"
            email="B. Class"
            vat="C. New"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
