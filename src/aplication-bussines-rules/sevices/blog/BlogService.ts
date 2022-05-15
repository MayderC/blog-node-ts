
import Blog from './Blog';
import IBlogService from './IBlogService';

export default class BlogService implements IBlogService {

  private _unitOfWork : any

  constructor(unitOfWork : any){
    this._unitOfWork = unitOfWork
  }

  add(): boolean {
    return true;
  }

  delete(): boolean {
    return true;
  }

  getAll(): Array<Blog> {
    return  new Array<Blog>()
  }

  getById(): Blog {
    return new Blog("hola", "Holaaa");
  }

  update(): boolean {
    return true;
  }

}


