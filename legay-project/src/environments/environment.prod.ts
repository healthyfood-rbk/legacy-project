import auth_config from "../../auth_config.json";

export const environment = {
  production: true,
  auth : {
    domain : auth_config.domain , 
    clientId : auth_config.clientId,
    redirectUri : window.open('http://localhost:4200/admin') ,
  }
}