import express from "express";
import IBaseExpressController from "../controllers/blog/IBaseExpressController";




export default class BlogRouter {

  private _router : express.Router = express.Router()
  
  private _controller  : IBaseExpressController;

  constructor(controller : IBaseExpressController){

    this._controller = controller;

    this.loadRoutes()
  }


  loadRoutes() : void{

    this._router.post('/', this._controller.add)
  }

  get router() : express.Router{
    return this._router;
  }

}