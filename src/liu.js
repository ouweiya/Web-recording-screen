import React, { useState, useRef, useEffect } from 'react';

const handler = stream => {
  const mediaRecorder = new MediaRecorder(stream);
  let chunks = [];
  mediaRecorder.start();

  const v1 = document.createElement('video');
  v1.srcObject = stream;

  // stop 1 = mediaRecorder.stop;
  mediaRecorder.onstop = e => {
    const v = document.createElement('video');

    const blob = new Blob(chunks, { type: 'video/mp4' });
    chunks = [];
    const url = window.URL.createObjectURL(blob);
    v.src = url;
    stream.getTracks().forEach(track => track.stop());
    window.URL.revokeObjectURL(url);
  };

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
    console.log('ondataavailable:', e.data);
  };
};

// export default () => navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(handler);
export const liu = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
  stream.onremovetrack = () => console.log('end');
  stream.getVideoTracks()[0].onended = function() {
    console.log('end');
  };

  console.log(stream);
};
