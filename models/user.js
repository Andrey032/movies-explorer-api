const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальное количество символов - 2'],
    maxlength: [30, 'Максимальное количество символов - 30'],
    required: [true, 'Обязательное поле для заполнения'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Обязательное поле для заполнения'],
    validate: {
      validator: function checkEmail(str) {
        return str && validator.isEmail(str);
      },
      message: 'Введите корректный URL адрес',
    },
  },
  password: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    select: false,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Неправильные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильные почта или пароль');
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
