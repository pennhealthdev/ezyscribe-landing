export function Video() {
    return (
      // <video width="100%" height="" controls preload="none">
      //   <source src="/path/to/video.mp4" type="video/mp4" />
      //   <track
      //     src="/path/to/captions.vtt"
      //     kind="subtitles"
      //     srcLang="en"
      //     label="English"
      //   />
      //   Your browser does not support the video tag.
      // </video>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/funaZFlXrpM?si=i5n25mo5rgZqLIV3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  }