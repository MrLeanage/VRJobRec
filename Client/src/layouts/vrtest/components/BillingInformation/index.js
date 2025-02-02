import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import "./BillingInformation.css"; // Import the CSS file

function BillingInformation() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [teamsLink, setTeamsLink] = useState(""); // State to store the Teams link/ID
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

  // Function to join the Teams meeting
  const handleJoinTeamsMeet = () => {
    if (teamsLink) {
      window.open(teamsLink, "_blank"); // Opens the Teams meeting link in a new tab
    } else {
      alert("Please enter a valid Teams meeting link or ID.");
    }
  };

  return (
    <div className="billing-container">
      <h2 className="billing-header">Start Your VR Test</h2>
      <div>
        {/* Camera or Recording Section */}
        {!isCameraOpen && (
          <button onClick={() => setIsCameraOpen(true)} className="camera-button">
            Open Camera
          </button>
        )}

        {isCameraOpen && (
          <div className="camera-container">
            <Webcam ref={webcamRef} audio={true} className="webcam" screenshotFormat="image/jpeg" />
            {!isRecording ? (
              <button onClick={handleStartRecording} className="record-button">
                Start Recording
              </button>
            ) : (
              <button onClick={handleStopRecording} className="record-button">
                Stop Recording
              </button>
            )}
          </div>
        )}

        {recordedVideo && (
          <div className="video-container">
            <h3 className="video-header">Recorded Video</h3>
            <video src={recordedVideo} controls className="video" />
            <button onClick={handleSaveVideo} className="save-button">
              Save Video
            </button>
          </div>
        )}
      </div>

      {/* Teams Meeting Section */}
      <div className="teams-section">
        <h2 className="teams-header">Join a Microsoft Teams Meeting</h2>
        <input
          type="text"
          value={teamsLink}
          onChange={(e) => setTeamsLink(e.target.value)}
          placeholder="Enter Teams meeting link or ID"
          className="teams-input"
        />
        <button onClick={handleJoinTeamsMeet} className="join-button">
          Join Meet
        </button>
      </div>
    </div>
  );
}

export default BillingInformation;
