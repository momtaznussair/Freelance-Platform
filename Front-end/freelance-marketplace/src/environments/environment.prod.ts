export const environment = {
  production: true,
  apiUrl:'http://localhost:8000/api',

  Token(token:any){
    return {
      'headers': {
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    }
  },

};
