
import {RequestHandler, Router} from 'express';


export default class ApiRouter {

  _router: Router;

  constructor(router : Router){
    this._router = router;
  }

  

  get router(){
    return this._router
  }

}