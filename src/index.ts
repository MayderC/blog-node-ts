import IServer from './aplication-bussines-rules/web-server/IServer';
import Server from './aplication-bussines-rules/web-server/server';
import env from './config/environments/index'


const server : IServer = new Server(env)
server.start()