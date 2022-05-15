import Blog from "./Blog";


export default interface IBlogService {

  add() : boolean;

  delete() : boolean;

  getAll() : Array<Blog>

  getById() : Blog;

  update() : boolean;


}