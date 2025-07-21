import { useEffect, useRef } from "react";

export function Video() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function createPlayer() {
      // @ts-ignore
      if (window.YT && window.YT.Player) {
        // @ts-ignore
        new window.YT.Player("ytplayer", {
          width: "100%",
          height: "100%",
          videoId: "funaZFlXrpM",
          events: {
            onReady: (event: any) => {
              event.target.setPlaybackQuality("hd1080");
            },
          },
        });
      }
    }

    // If the API is already loaded, create the player
    // Otherwise, set up the callback and load the script
    // @ts-ignore
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // @ts-ignore
      window.onYouTubeIframeAPIReady = createPlayer;
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }

    // Optional: cleanup the player when unmounting
    return () => {
      const ytplayer = document.getElementById("ytplayer");
      if (ytplayer) ytplayer.innerHTML = "";
    };
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