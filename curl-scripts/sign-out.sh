# TOKEN="TOKEN VALUE" sh curl-scripts/auth/sign-out.sh
curl "" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
