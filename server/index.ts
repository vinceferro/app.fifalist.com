import * as express from 'express';
import * as next from 'next';
import {
  AuthenticationController
} from './controllers';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as session from 'express-session';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(compression());
    server.use(session({
      cookie: {
        secure: (
          !!process.env.IS_HTTP &&
          process.env.IS_HTTP.toLowerCase() === 'true'
        )
      },
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET || 'noSecret'
    }))

    server.use('/', AuthenticationController);
    server.get('*', (req, res) => {
      return handle(req, res);
    })
    
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
)