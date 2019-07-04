const createUrl = video => {
  var canvas = document.createElement('canvas');
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = height;
  canvas.height = width;
  canvas.getContext('2d').drawImage(video, 0, 0, width, height);

  const src = canvas.toDataURL('image/png');
  return src;
};
