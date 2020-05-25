#!/bin/sh

set -e

if [ "$1" = "" ] || [ "$2" = "" ]; then
  echo 'Usage: curl -L "https://raw.githubusercontent.com/devspace-cloud/loft/master/hack/import-helm-release.sh" | bash -s -- "release-name-1, release-name-2, ..." "https://chart.registry.url"'
  echo ""
  echo "Args:"
  echo "1. Helm Release Name"
  echo "2. Helm Registry"
  echo "3. Is System App? (true/false)"
  echo ""
  echo 'Example 1'
  echo 'curl -L "https://raw.githubusercontent.com/devspace-cloud/loft/master/hack/import-helm-release.sh" | bash -s -- "cert-manager" "https://charts.jetstack.io"'
  echo ""
  echo 'Example 2:'
  echo 'curl -L "https://raw.githubusercontent.com/devspace-cloud/loft/master/hack/import-helm-release.sh" | bash -s -- "nginx-ingress" "https://kubernetes-charts.storage.googleapis.com"'
  echo ""
  echo 'Example 3:'
  echo 'curl -L "https://raw.githubusercontent.com/devspace-cloud/loft/master/hack/import-helm-release.sh" | bash -s -- "loft" "https://charts.devspace.sh" true'
  exit 1
fi

SECRETS=$(kubectl get secrets --all-namespaces --no-headers=true -l "owner=helm,name in ($1)" -o custom-columns=":metadata.namespace, :metadata.name")
HELM_REGISTRY="$2"

echo 'Add label: "loft.sh/app": "true"'
echo "$SECRETS" | xargs -L 1 kubectl patch secret --type=json -p='[{"op": "add", "path": "/metadata/labels/loft.sh~1'$SYSTEM_APP_PREFIX'app", "value": "true" }]' -n
echo ""

if [ "$3" = "true" ]; then
  echo 'Add label: "loft.sh/system-app": "true"'
  echo "$SECRETS" | xargs -L 1 kubectl patch secret --type=json -p='[{"op": "add", "path": "/metadata/labels/loft.sh~1system-app", "value": "true" }]' -n
  echo ""
fi

echo 'Add annotation: "loft.sh/url": "'$2'"'
echo "$SECRETS" | xargs -L 1 sh -c 'kubectl patch secret --type=json -p='\''[{"op": "add", "path": "/metadata/annotations/loft.sh~1url", "value": "'$HELM_REGISTRY'" }]'\'' -n ${@} 2>/dev/null || kubectl patch secret --type=json -p='\''[{"op": "replace", "path": "/metadata/annotations", "value": {"loft.sh/url": "'$HELM_REGISTRY'"} }]'\'' -n ${@}' "${0}"
