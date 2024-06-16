#!/bin/sh
eval $(grep '^CM_PROD_API' ./.env) && \
eval $(grep '^CM_PROD_API_SUPABASE_SECRET' ./.env) && \

echo "npx genql --endpoint $CM_PROD_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'apiKey: $CM_PROD_API_SUPABASE_SECRET'" && \

npx genql --endpoint $CM_PROD_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'apiKey: $CM_PROD_API_SUPABASE_SECRET'