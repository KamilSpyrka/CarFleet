const Joi = require('joi')
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);
module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string() .required(),
        lastName: Joi.string() .required(),
        email: Joi.string() .max(255) .required() .email(),
        password: joiPassword .string() .min(6) .required() .minOfNumeric(1) .minOfSpecialCharacters(1)
    })

    const {error} = schema.validate(req.body)
    
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `You must provide a valid email address`
          })
        break

        case 'password':
          res.status(400).send({
            error: `Password should be at least 6 characters long, contain 1 number and 1 special sign`
          })
        break

        case 'firstName':
          res.status(400).send({
              error: `You must provide a valid first name`
          })
        break

        case 'lastName':
          res.status(400).send({
              error: `You must provide a valid last name`
          })
        break

        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    }
    else {
      next()
    }
  }
}