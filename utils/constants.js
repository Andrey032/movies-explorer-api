const expressRateLimit = require('express-rate-limit');

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const emailRegex = /^\S+@\S+\.\S+$/;

const limiter = expressRateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = { urlRegex, emailRegex, limiter };
