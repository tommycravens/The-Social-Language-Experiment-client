# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh
# EMAIL="tdubs" PASSWORD="t" sh curl-scripts/auth/sign-in.sh
curl "" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
