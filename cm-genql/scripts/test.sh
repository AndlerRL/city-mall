#!/bin/sh
eval $(grep '^CM_TEST_API' ./.env) && \
eval $(grep '^CM_TEST_API_SUPABASE_SECRET' ./.env) && \

echo "genql --endpoint $CM_TEST_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'apiKey: $CM_TEST_API_SUPABASE_SECRET'" && \

genql --endpoint $CM_TEST_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'apiKey: $CM_TEST_API_SUPABASE_SECRET'