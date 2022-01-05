import "./App.css";
import ReactJWPlayer from "react-jw-player";
import { useState } from "react";

const playlist = [
  {
    file: "https://cdn.jwplayer.com/videos/sN7UEzIu-vfrYPu6F.mp4",
    image:
      "https://1.bp.blogspot.com/-KgVoAl8nfUg/X1D5H6zmA7I/AAAAAAAAB-4/n4u4qHh4kN0a8GToVjveE2gM9oLjR4pVACPcBGAYYCw/w919/lofi-girl-studying-hip-hop-radio-headphone-uhdpaper.com-4K-7.2708-wp.thumbnail.jpg",
  },
];

function App() {
  const [progress, setProgress] = useState(0);
  const [res, setRes] = useState([]);
  return (
    <div className="App">
      <h1>JW player test</h1>
      <h3>This app detect the milestone reached event of jwplayer</h3>
      <p>
        Result:{" "}
        {res.reduce((prev, curr) => prev + (prev ? ", " : "") + curr, "")}
      </p>
      <div
        style={{
          width: 960,
          margin: "auto",
        }}
      >
        <ReactJWPlayer
          playerId="test-jw-player"
          playerScript="https://cdn.jwplayer.com/libraries/EJJFWG4w.js"
          playlist={playlist}
          onPlay={() => {
            setRes((prev) => prev.concat("RICK ROLLED"));
          }}
          onTime={(e) => {
            console.log("#### onTime", e);
            const { position, duration } = e;
            let progressClone = progress;
            if (position > duration / 4 && progressClone < 0.25) {
              setProgress(0.25);
              progressClone = 0.25;
              setRes((prev) => prev.concat("QUARTER REACHED"));
            }
            if (position > duration / 2 && progressClone < 0.5) {
              setProgress(0.5);
              progressClone = 0.5;
              setRes((prev) => prev.concat("HALF REACHED"));
            }
            if (position > (duration * 3) / 4 && progressClone < 0.75) {
              setProgress(0.75);
              progressClone = 0.75;
              setRes((prev) => prev.concat("THREE QUARTER REACHED"));
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
