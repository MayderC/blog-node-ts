import Blog from "../../../aplication-bussines-rules/sevices/blog/Blog";
import IBlogService from "../../../aplication-bussines-rules/sevices/blog/IBlogService";
import express from 'express'
import IBaseExpressController from "./IBaseExpressController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";




export default class BlogController implements IBaseExpressController{ 

  _blogService : IBlogService;

  constructor(blogService : IBlogService){
    this._blogService = blogService;

  }
  add(req: express.Request,  res: express.Response): express.Response {
    throw new Error("Method not implemented.");
  }
  delete(req: express.Request,  res: express.Response): express.Response {
    throw new Error("Method not implemented.") ;
  }
  getAll(req: express.Request,  res: express.Response): express.Response {
    throw new Error("Method not implemented.");
  }
  update(req: express.Request,  res: express.Response): express.Response{
    throw new Error("Method not implemented.");
  }


  getById(req : express.Request, res : express.Response) : express.Response{

    return res.json(new Blog("Titulo de blog", "contenido del blog"))
  
  }


}