import IEnvironment  from './../../config/environments/IEnvironment';

export default interface IServer {

  _env : IEnvironment;
  start(): void;
}


