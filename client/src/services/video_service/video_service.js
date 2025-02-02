export const startRecording = (webcamRef, mediaRecorderRef, setChunks) => {
  const stream = webcamRef.current.video.srcObject;
  mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });

  mediaRecorderRef.current.ondataavailable = (event) => {
    if (event.data.size > 0) {
      setChunks((prev) => [...prev, event.data]);
    }
  };

  mediaRecorderRef.current.onstop = (chunks, setRecordedVideo) => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    setRecordedVideo(url);
  };

  mediaRecorderRef.current.start();
};

export const stopRecording = (mediaRecorderRef, setIsRecording, setIsCameraOpen) => {
  mediaRecorderRef.current.stop();
  setIsRecording(false);
  setIsCameraOpen(false);
};

export const saveVideo = (recordedVideo) => {
  const a = document.createElement("a");
  a.href = recordedVideo;
  a.download = "recorded-video.webm";
  a.click();
};
