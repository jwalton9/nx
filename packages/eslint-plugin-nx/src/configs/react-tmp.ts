/**
 * THIS IS A TEMPORARY CONFIG WHICH MATCHES THE CURRENT BEHAVIOR
 * of including all the rules for all file types within the ESLint
 * config for React projects.
 *
 * It will be refactored in a follow up PR to correctly apply rules
 * to the right file types via overrides.
 */
export default {
  extends: [
    'plugin:@nx/nx/react-base',
    'plugin:@nx/nx/react-typescript',
    'plugin:@nx/nx/react-jsx',
  ],
};
