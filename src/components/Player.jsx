import { useSelector } from "react-redux";
import next from "../assets/playerbuttons/next.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";

const Player = () => {
  const selectedSong = useSelector((state) => state.songs.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className={`d-flex align-items-center w-100 ms-3   ${selectedSong ? "" : "justify-content-center mx-auto"}`}>
            {/* Dettagli della canzone */}
            {selectedSong && (
              <div className="d-flex align-items-center ms-3 mb-auto me-5">
                <img src={selectedSong.album.cover_medium} alt={selectedSong.title} className="img-fluid" style={{ maxWidth: "80px" }} />
                <p className="text-white ms-2">
                  <strong>{selectedSong.title}</strong>
                  <br />
                  {selectedSong.artist.name}
                </p>
              </div>
            )}

            {/* Controlli del player */}
            <div className={` d'flex col-4 playerControls `}>
              <div className="d-flex justify-content-between">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3 mb-5">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
