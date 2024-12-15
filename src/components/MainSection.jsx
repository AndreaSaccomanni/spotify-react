import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { setSongsForSection } from "../redux/songSlice";

const MainSection = ({ sectionId, sectionTitle, artistName }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.sections[sectionId] || []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        const data = await response.json();

        dispatch(setSongsForSection({ sectionId, songs: data.data.slice(0, 4) }));
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, [artistName, sectionId, dispatch]);

  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <div id={sectionId}>
            <h2 className="text-white">{sectionTitle}</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 text-white" id={`${sectionId}Section`}>
              {songs.map((song) => (
                <Col key={song.id} className="text-center">
                  <img src={song.album.cover_medium} alt={song.title} className="img-fluid" />
                  <p>
                    Track: &quot;{song.title}&quot; <br />
                    Artist: &quot;{song.artist.name}&quot;
                  </p>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MainSection;
