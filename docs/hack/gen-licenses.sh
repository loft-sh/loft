#!/usr/bin/env bash

go-licenses report $(go work edit -json | jq -c -r '[.Use[].DiskPath] | map_values(. + "/...")[]') --template .github/licenses.tmpl --ignore github.com/loft-sh >docs/pages/licenses/loft.mdx
