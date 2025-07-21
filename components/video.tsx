import { useEffect, useRef } from "react";

export function Video() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      const player = new window.YT.Player("ytplayer", {
        width: "100%",
        height: "100%",
        videoId: "funaZFlXrpM", 
        events: {
          onReady: (event: any) => {
            event.target.setPlaybackQuality("hd1080");
          },
        },
      });
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  return (
    <div className="w-full h-full" ref={ref} style={{ minHeight: "400px" }}>
      <div
        className="w-full h-full"
        id="ytplayer"
        style={{ minHeight: "400px" }}
      ></div>
    </div>
  );
}