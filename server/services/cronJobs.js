import cron from 'node-cron';
import cleanUpExpiredSession from './cleanUpExpiredSession.js';

cron.schedule('19 22 * * *', cleanUpExpiredSession, {
  scheduled: true,
  timezone: 'Asia/Kolkata'
})
