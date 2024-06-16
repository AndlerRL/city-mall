import { createCMGraphQLClient } from "cm-genql";
import { validateCMEnv } from '../../../../packages/cm-env/src/env.type';

export function createGraphQLClient({ jwt }: { jwt?: string } ) {
  return createCMGraphQLClient({
    jwt,
    env: validateCMEnv(process.env.NEXT_PUBLIC_APP_ENV),
    debug: process.env.DEBUG_MODE === 'true',
  });
}