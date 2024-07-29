const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const getYouTubeSubscribers = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const subscribers = response.data.items[0].statistics.subscriberCount;
    return parseInt(subscribers, 10);
  } catch (error) {
    console.error("Error fetching YouTube subscribers:", error);
    return 0;
  }
};

const getInstagramFollowers = async () => {
  const username = process.env.INSTAGRAM_USERNAME;
  const url = `https://www.instagram.com/${username}/?__a=1`;

  try {
    const response = await axios.get(url);
    const followers = response.data.graphql.user.edge_followed_by.count;
    return parseInt(followers, 10);
  } catch (error) {
    console.error("Error fetching Instagram followers:", error);
    return 0;
  }
};

app.get("/followers", async (req, res) => {
  try {
    const youtubeSubscribers = await getYouTubeSubscribers();
    const instagramFollowers = await getInstagramFollowers();

    const totalFollowers = youtubeSubscribers + instagramFollowers;

    res.json({ number: totalFollowers });
  } catch (error) {
    res.status(500).json({ error: "Error fetching follower counts" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
