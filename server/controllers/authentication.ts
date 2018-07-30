import { Router } from 'express';
import { handle } from 'oxssy-request';
import { signup } from '../../store/app';

const router: Router = Router();

handle(router, signup, async (request) => {
  console.log(request);
  return {
    'redirect': 'check_email'
  };
});

export const AuthenticationController: Router = router;