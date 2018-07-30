/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';

// a theme with custom primary and secondary color.
// it's optional.
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: deepOrange,
  },
});

function createPageContext() {
  return {
    theme,
    // this is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // this is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // the standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}