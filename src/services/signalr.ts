import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { env } from '../env';

const createConnection = () => {
  const connection = new HubConnectionBuilder()
    .withUrl(env.signalr.hubUrl)
    .configureLogging(LogLevel.Information)
    .withAutomaticReconnect()
    .build();

  return connection;
};

export default createConnection;