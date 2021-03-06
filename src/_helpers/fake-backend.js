import { v4 } from 'uuid';

export function configureFakeBackend() {
  let users = [
    {id: v4(), username: 'test', password: 'test', firstName: 'Test', lastName: 'User'},
    {id: v4(), username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User'}
  ];
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // signUp
        if (url.endsWith('/users/signup') && opts.method === 'POST') {
          let params = JSON.parse(opts.body);

          // find if this user already exists
          let filteredUsers = users.filter(user => {
            return user.username === params.username
          });

          if (filteredUsers.length) {
            reject('User already exists');
          } else {
            users.push({id: v4(), username: params.username, password: params.password});
            resolve({ok: true, json: () => {}})
          }
          return;
        }

        // authenticate
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          // get parameters from post request
          let params = JSON.parse(opts.body);

          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return user.username === params.username && user.password === params.password;
          });

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token'
            };
            resolve({ok: true, json: () => responseJson});
          } else {
            // else return error
            reject('Username or password is incorrect');
          }

          return;
        }

        // get users
        if (url.endsWith('/users') && opts.method === 'GET') {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            resolve({ok: true, json: () => users});
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised');
          }

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));

      }, 500);
    });
  }
}
