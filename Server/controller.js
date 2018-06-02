module.exports = {
  userLogin:  (req, res, next) => {
    req.app.get('db').user_login(req.body.username, req.body.password).then( loginResults => {
      if(loginResults[0]) {
        req.session.userId = loginResults[0].id;
        res.status(200).send('Login successful');
      } else {
          return res.status(403).send('User not found. Access denied');
        }
    })
  },

  userReg: (req, res, next) => {
    const db = req.app.get('db');

    db.get_users(req.body.username).then( (usernameRes) => {
      // console.log(usernameRes)
      if( usernameRes[0] ) {
        res.status(403).send('The username entered already exists. Please try a different name.');
      } else {
        db.user_reg(req.body.username, req.body.password).then(regres => {
          res.status(200).send('Registration successful');
        }).catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
        }
    })
  },
  
  userLogout: (req, res, next) => {

  },

  createProperty: (req, res, next) => {

  },

  getProperties: (req, res, next) => {
    const dbInstance = req.app.get('db');
      dbInstance.get_properties()
      .then(properties => { res.status(200).send(properties); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  delProperty: (req, res, next) => {
    
  }

}

