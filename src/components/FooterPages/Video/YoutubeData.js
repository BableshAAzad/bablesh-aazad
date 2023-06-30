import axios from "axios";
import { useState, useEffect } from "react";
import "./YoutubeData.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

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
        console.log("Fetched YouTube data:", data);
      } catch (error) {
        console.log("Error fetching YouTube data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="yutubetirath">
          <div>
            <h1 style={{color: "red", textAlign: "center"}}>Welecome to my Youtube Channel</h1>
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
                    >
                      Subscriber Count: {subscriberCount}
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
                      endIcon={<YouTubeIcon />}
                    >
                      Video Count: {videoCount}
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
