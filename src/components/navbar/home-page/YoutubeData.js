import axios from "axios";
import { useState, useEffect } from "react";
import "./YoutubeData.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Aos from "aos";

const YoutubeData = () => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCi1r-Lw0qoggZO0ri-7GyTQ&key=AIzaSyCY9iYEYvJk8u4NuK0Dk0r4gnllzPPoGhQ`
        );
        const data = response.data;
        const statistics = data.items[0].statistics;
        setSubscriberCount(statistics.subscriberCount);
        setVideoCount(statistics.videoCount);
        // console.log("Fetched YouTube data:", data);
      } catch (error) {
        // console.log("Error fetching YouTube data:", error);
        <h3 style={{ color: "red" }}>Server Error</h3>
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      Aos.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup scroll event
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="yutubetirath">
          <div>
            <h1 style={{ color: "red", textAlign: "center", textShadow: "2px 2px #28FAE7" }}>Welecome to my Youtube Channel</h1>
            <div className="youtubelink">
              <Link
                to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                target="_blank"
                aria-label="Youtube"
              >
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  startIcon={<YouTubeIcon />}
                  endIcon={<ThumbUpIcon />}
                  data-aos="fade-up"
                >
                  Subscribe My Channel
                </Button>
              </Link>
            </div>
          </div>
          <div className="youtubedatas">
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <Link
                    to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      startIcon={<SubscriptionsIcon />}
                      data-aos="fade-right"
                    >
                      Subscriber Count : {subscriberCount}
                    </Button>
                  </Link>
                </Grid>
                <Grid xs={12} md={6}>
                  <Link
                    to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      endIcon={<OndemandVideoIcon />}
                      data-aos="fade-left"
                    >
                      Video Count : {videoCount}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeData;
