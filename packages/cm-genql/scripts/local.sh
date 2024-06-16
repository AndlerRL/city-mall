#!/bin/sh
eval $(grep '^CM_LOCAL_API' ./.env) && \
eval $(grep '^CM_LOCAL_API_KEY' ./.env) && \

echo "npx genql --endpoint $CM_LOCAL_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_LOCAL_API_KEY'" && \

npx genql --endpoint $CM_LOCAL_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_LOCAL_API_KEY'