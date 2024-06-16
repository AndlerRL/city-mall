export const endpoints = {
  prod: `https://${process.env.SUPABASE_PROJECT_REF}.supabase.co/graphql/v1`,
  test: `https://${process.env.SUPABASE_PROJECT_REF}.supabase.co/graphql/v1`,
  local: 'http://localhost:8080/graphql/v1',
}

