module.exports = {
  userLogin:  (req, res, next) => {
    req.app.get('db').user_login(req.body.username, req.body.password).then( loginResults => {
      if(loginResults[0]) {
        req.session.userId = loginResults[0].userid;
        res.status(200).send('Login successful');
      } else {
          return res.status(403).send('User not found. Access denied');
        }
    })
  },

  userReg: (req, res, next) => {
    const db = req.app.get('db');

    db.get_users(req.body.username).then( (usernameRes) => {

      if( usernameRes[0] ) {  // check to see if username exists
        res.status(403).send('The username entered already exists. Please try a different name.');
      } else {
        db.user_reg(req.body.username, req.body.password).then(regres => {
          req.session.userId = regres[0].userid;
          res.status(200).send('Registration successful');
        }).catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
        }
    })
  },
  
  userLogout: (req, res, next) => {
    req.session.destroy(function() {
      res.sendStatus(200);
    });
  },

  createProperty: (req, res, next) => {
    const db = req.app.get('db');

    db.create_property(req.session.userId,
                       req.body.prop_name,
                       req.body.prop_desc,
                       req.body.address,
                       req.body.city,
                       req.body.state,
                       req.body.zip,
                       req.body.img_url,
                       req.body.loan_amt,
                       req.body.mon_mort,
                       req.body.rent)
      .then(properties => { res.status(200).send(properties); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getProperties: (req, res, next) => {
    const db = req.app.get('db');

    db.get_properties(req.session.userId)
      .then(properties => { res.status(200).send(properties); })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  delProperty: (req, res, next) => {
    const db = req.app.get('db');

    db.delete_property(+req.params.propId) // params are passed as strings and need to be converted to a int
      .then(properties => { 
        db.get_properties(req.session.userId)
        .then(properties => { res.status(200).send(properties); })
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
       })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  }

}

