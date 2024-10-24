// src/calendar.js
import { google } from 'googleapis';

export const createCalendarEvent = async (authClient, eventDetails) => {
  const calendar = google.calendar({ version: 'v3', auth: authClient });

  const event = {
    summary: eventDetails.summary,
    start: {
      dateTime: eventDetails.startDateTime,
      timeZone: 'America/New_York', // Set the time zone
    },
    end: {
      dateTime: eventDetails.endDateTime,
      timeZone: 'America/New_York',
    },
    attendees: [{ email: eventDetails.attendeeEmail }],
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    
    console.log('Event created: %s', response.data.htmlLink);
  } catch (error) {
    console.error('Error creating event: ', error);
  }
};
