const joi = require("joi");

const bookSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  genre: joi.string().required(),
  description: joi.string().required(),
  year: joi.number().required().min(1900).max(2026),
  imageUrl: joi.string().required(),
  isAvailable: joi.boolean().optional(),
});

module.exports = bookSchema;
