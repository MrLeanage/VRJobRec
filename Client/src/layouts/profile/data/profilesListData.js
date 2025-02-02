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

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import bio from "assets/images/illustrations/biometric.jpg";
import body from "assets/images/illustrations/body.png";
import quiz from "assets/images/illustrations/mcq.jpg";
import voice from "assets/images/illustrations//voice.jpg";

export default [
  {
    image: body,
    name: "Body Language",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "45%",
    },
  },
  {
    image: voice,
    name: "Voice",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "55%",
    },
  },
  {
    image: bio,
    name: "Bimetric Gaze",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "45%",
    },
  },
  {
    image: quiz,
    name: "MCQ Test",
    description: "",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "45%",
    },
  },
];
