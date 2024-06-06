import Joi from 'joi';

export const updateProfileSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email(),
  profile_image: Joi.string().uri(),
}).or('username', 'email', 'profile_image');

export const updatePasswordSchema = Joi.object({
  current_password: Joi.string().required(),
  new_password: Joi.string().min(6).required(),
});

export const verifyOtpSchema = Joi.object({
  otp: Joi.string().required(),
});
