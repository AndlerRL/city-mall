#!/bin/sh
eval $(grep '^CM_TEST_API' ./.env) && \
eval $(grep '^CM_TEST_API_KEY' ./.env) && \

echo "genql --endpoint $CM_TEST_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_TEST_API_KEY'" && \

genql --endpoint $CM_TEST_API \
--output ./generated \
-H 'Content-Type: application/json' \
-H 'apiKey: $CM_TEST_API_KEY'