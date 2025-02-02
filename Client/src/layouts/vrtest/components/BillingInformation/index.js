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
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

function BillingInformation() {
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [chunks, setChunks] = useState([]);
  const handleStartRecording = () => {
    setIsRecording(true);
    setChunks([]);
    const stream = webcamRef.current.video.srcObject;
    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedVideo(url);
    };

    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current.stop();
    setIsCameraOpen(false); // Close the camera after stopping the recording
  };

  const handleSaveVideo = () => {
    const a = document.createElement("a");
    a.href = recordedVideo;
    a.download = "recorded-video.webm";
    a.click();
  };
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Start Your VR Test
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        {/* Camera or Recording Section */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          {!isCameraOpen && (
            <button
              onClick={() => setIsCameraOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition"
            >
              Open Camera
            </button>
          )}

          {isCameraOpen && (
            <div className="camera-container mt-4">
              <Webcam
                ref={webcamRef}
                audio={true}
                className="w-full h-96 rounded-lg border border-gray-600"
                screenshotFormat="image/jpeg"
              />
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition"
                >
                  Start Recording
                </button>
              ) : (
                <button onClick={handleStopRecording}> Stop Recording </button>
              )}
            </div>
          )}
          {recordedVideo && (
            <div>
              <h3>Recorded Video</h3>
              <video src={recordedVideo} />
              <button onClick={handleSaveVideo}> Save Video </button>
            </div>
          )}
        </div>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
