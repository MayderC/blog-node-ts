
import  express  from 'express';



export default interface IBaseExpressController  {

  add(req : express.Request, res : express.Response): express.Response;

  delete(req: express.Request,  res: express.Response) : express.Response;

  getAll(req: express.Request,  res: express.Response) : express.Response;  

  getById(req: express.Request, res : express.Response) : express.Response;

  update(req: express.Request,  res: express.Response) : express.Response;

}