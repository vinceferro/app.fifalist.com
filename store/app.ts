import { config, shape, OString } from 'oxssy-config';
import OxssyRequest from 'oxssy-request';

export const signupForm = config(
  shape({
    email: OString().isRequired.defaultsTo(''),
    password: OString().isRequired.defaultsTo(''),
    passwordConfirm: OString().isRequired.defaultsTo(''),
  })
);

export const errorMessage = config(
  shape(OString().isRequired.defaultsTo(''))
);

export const signup = new OxssyRequest(
  '/api/signup', signupForm, errorMessage
);