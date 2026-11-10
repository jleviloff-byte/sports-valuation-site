#!/bin/bash
# Print the Vercel preview URL for a commit (default HEAD), via GitHub's REST API:
# the deployment's environment_url, falling back to the "Vercel" commit status.
# Waits until the deployment succeeds. Usage: scripts/stadiums/release/preview-url.sh [sha]
set -e
REPO=jleviloff-byte/sports-valuation-site
SHA=$(git rev-parse "${1:-HEAD}")
for i in $(seq 1 60); do
  ID=$(gh api "repos/$REPO/deployments?sha=$SHA" --jq '.[0].id' 2>/dev/null || true)
  if [ -n "$ID" ]; then
    read -r STATE URL < <(gh api "repos/$REPO/deployments/$ID/statuses" --jq '.[0] | "\(.state) \(.environment_url)"' 2>/dev/null || echo "none none")
    if [ "$STATE" = "success" ] && [ "$URL" != "null" ]; then echo "$URL"; exit 0; fi
    if [ "$STATE" = "failure" ] || [ "$STATE" = "error" ]; then echo "deployment $STATE for $SHA" >&2; exit 1; fi
  fi
  sleep 20
done
echo "no successful deployment for $SHA" >&2; exit 1
