import environmentsType from './env-types'

if(!process.env.NODE_ENV){
  require('dotenv').config()
  console.log(process.env.PORT)
}

const getEnvironment = (env : string | undefined ) => {

  switch (env) {
    case environmentsType.Development:
      return require('./development');
  
    default:
      return require('./development');
  }

}

export default  getEnvironment(process.env.NODE_ENV)