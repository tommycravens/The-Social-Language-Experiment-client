# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
#  EMAIL="t@t.com" PASSWORD="t" sh curl-scripts/auth/sign-up.sh
# don't use a password you use for any real websites!
curl "" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
