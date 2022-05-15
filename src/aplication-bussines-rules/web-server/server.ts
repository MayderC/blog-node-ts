import IServer from '../web-server/IServer';
import express from 'express'
import IEnvironment from '../../config/environments/IEnvironment';
import blogsRoutes from '../../interfaces-adapters/web-server-routes/blogs.routes'
import ApiRouter from '../../interfaces-adapters/web-server-routes/ApiRouter';



export default class ExressServer implements IServer{

  _env : IEnvironment;
  private _App : express.Application = express()
  private _port : Number;
  private _path : string = '/api/'

  constructor(env : IEnvironment){
    this._env = env;
    this._port = this._env.PORT;

    this.routes()
    this.middlewares()
  }

  private middlewares(): void{
    //this._App.use();
  }

  private routes(): void {

    //const blogRoute = new ApiRouter(express.Router())
    //this._App.use(this._path + "blogs", blogsRoutes.router)
  }

  public start(): void {
    this._App.listen(this._port, () => {
      console.log("listen on port " + this._port)
    })
  } 
} 