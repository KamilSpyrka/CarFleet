const Joi = require('joi')

const dt = new Date();
dt.setDate(dt.getDate()+1)
today = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

module.exports = {
  validate (req, res, next) {
    const schema = Joi.object({
        producer: Joi.string() .required(),
        model: Joi.string() .required(),
        prodDate: Joi.date() .max(today) .min('1900-01-01').required(),
        purchaseDate: Joi.date() .max(today) .min('1970-01-01').required(),
        mileage: Joi.number() .min(0) .required()
    })

    const {error} = schema.validate(req.body)
    
    if (error) {
      switch (error.details[0].context.key) {
        case 'prodDate':
          res.status(400).send({
            error: `Production date cant be in the future, nor before 1900`
        })
        break

        case 'purchaseDate':
          res.status(400).send({
              error: `Purchase date cant be in the future, nor before 1970`
        })
        break

        case 'mileage':
          res.status(400).send({
              error: 'Mileage cannot be negative number'
        })
        break

        default:
          res.status(400).send({
            error: 'Error has occured'
        })
      }
    }
    else {
      next()
    }
  }
}