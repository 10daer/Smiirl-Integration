# Social Media Follower Counter for Smiirl

This project connects a Custom Counter Smiirl to YouTube and Instagram to display the total number of followers of your company page. The counter makes a request to an endpoint (via HTTP/HTTPS) which returns the follower count in JSON format. The output format is `{ "number": 1200 }`. The update is in real-time.

## Features

- Fetches YouTube subscribers count.
- Fetches Instagram followers count.
- Combines the counts and returns the total in JSON format.
- Real-time updates for the Smiirl counter.

## Prerequisites

- Node.js
- npm
- YouTube Data API key
- Instagram username

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/smiirl-follower-counter.git
   cd smiirl-follower-counter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys and user IDs:

   ```plaintext
   YOUTUBE_API_KEY=your_youtube_api_key
   YOUTUBE_CHANNEL_ID=your_youtube_channel_id
   INSTAGRAM_USERNAME=your_instagram_username
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. The server will run on the port specified in your `.env` file or default to port 3000.

3. Configure your Smiirl counter to use the endpoint URL:

   ```plaintext
   https://your-deployed-server.com/followers
   ```

## Deployment

To deploy this server to a platform like Heroku, Vercel, or any other cloud service, follow their respective deployment guides. Ensure that your environment variables are correctly set in the deployment environment.

## Example Request

When you access the endpoint `/followers`, you will receive a response in the following format:

```json
{
  "number": 1200
}
```
