const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret,{
        expiresIn: ONE_WEEK
    })
}

let options = {
  path:"/",
  sameSite:true,
  maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
  httpOnly: true, // The cookie only accessible by the web server
}

module.exports = {
  async register (req, res){
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      delete userJson.password

      res.cookie('x-access-token',jwtSignUser(userJson), options)
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    }
    catch (err) {
      res.status(400).send({
          error: 'Validation error, this e-mail might be already in use'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email : email
        }
      })
      
      if (!user) {
        return res.status(401).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      
      if (!isPasswordValid) {
        return res.status(401).send({
          error: 'The login information was incorrect'
        })
      }
      
      const userJson = user.toJSON()
      delete userJson.password

      res.cookie('x-access-token',jwtSignUser(userJson), options)
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } 
    catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },


}