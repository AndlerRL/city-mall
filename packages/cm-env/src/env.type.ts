const validEnvs = ['prod', 'test', 'local'] as const;

export type CMEnv = typeof validEnvs[number];

export function validateCMEnv(env: string | undefined): CMEnv {
  if (!env || !validEnvs.includes(env as CMEnv)) {
    throw new Error(`Invalid app environment: ${env}`);
  }

  return env as CMEnv;
}
