// src/auth.js
import { GoogleAuth } from 'google-auth-library';

import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const authenticate = async () => {
  const auth = new GoogleAuth({
    clientId: CLIENT_ID,
    scopes: SCOPES,
  });

  const authClient = await auth.getClient();
  return authClient;
};
