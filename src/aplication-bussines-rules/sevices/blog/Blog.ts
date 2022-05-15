
export default class Blog {

  private _title : string;
  private _body : string;

  constructor(title: string, body : string){
    this._title = title;
    this._body = body
  }

  get title(){
    return this._title;
  }

  get body(){
    return this._body;
  }

}