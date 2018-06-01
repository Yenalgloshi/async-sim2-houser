module.exports = {
  userLogin:  (req, res, next) => {
    // app.get('db').loginUser(req.body.username, req.body.password).then( loginResults => {
    //   if(loginResults[0]) {
    //     req.session.userId = loginResults[0].id;
    //     res.status(200).send('Login successful');
    //   } else {
    //       return res.status(403).send('User not found. Access denied');
    //     }
    // })
  },

  userReg: (req, res, next) => {
    // if(req.session.userID){
    //   res.status(200).send('Session not found. Access denied.');
    // }
  },
  
  userLogout: (req, res, next) => {

  },

  createProperty: (req, res, next) => {

  },

  getProperties: (req, res, next) => {

  },

  delProperty: (req, res, next) => {
    
  }

}

