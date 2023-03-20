export const environment = {
    production: false,
    title: 'Local Environment Heading',
    apiURL: 'http://localhost:8000',
    auth: {
      domain: 'dev-pip888gj.us.auth0.com',
      clientId: 'GvA2lu4LiWAkjAQmaOmhjWD0LtnDFyM7',
      //audience:'the unik',
      //scope: 'openid',
      scope: 'openid profile offline_access auth0-user-api-spa',
       responseType: 'code',
       silentRenew: true,
       useRefreshToken: true,
      authorizationParams: {
        //audience: 'ss',
        redirect_uri: 'http://localhost:5200'//window.location.origin
      }
    }
  };
