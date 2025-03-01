const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  try {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID, // Your OAuth2 Client ID
      process.env.CLIENT_SECRET, // Your OAuth2 Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN, // Your Refresh Token
    });

    const accessTokenObj = await oauth2Client.getAccessToken();
    // Depending on the version, you might receive an object with a token property.
    const accessToken = accessTokenObj.token || accessTokenObj;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER, // Your email address
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    return transporter;
  } catch (error) {
    console.error("Error creating transporter: ", error);
    throw new Error("Failed to create transporter");
  }
};

module.exports = createTransporter;
