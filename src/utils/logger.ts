import { environment } from '../config/environment';
import log from 'pino';
import { format } from 'date-fns';

export const logger = log({
  level: environment.app.logLevel,
  timestamp: () => `,"time":"${format(new Date())}"`,
  prettyPrint: {
    levelFirst: true,
  },
});
