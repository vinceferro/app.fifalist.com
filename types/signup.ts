import { shape, OString } from 'oxssy-config';

export const Signup = shape({
  email: OString.isRequired.defaultsTo(''),
  password: OString.isRequired.defaultsTo(''),
  passwordConfirm: OString.isRequired.defaultsTo(''),
});
