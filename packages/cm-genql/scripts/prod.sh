#!/bin/sh
eval $(grep '^CM_PROD_API' ./.env) && \
eval $(grep '^CM_PROD_API_KEY' ./.env) && \

echo "npx genql --endpoint $CM_PROD_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_PROD_API_KEY'" && \

npx genql --endpoint $CM_PROD_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_PROD_API_KEY'