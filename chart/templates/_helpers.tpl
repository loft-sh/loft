{{/* vim: set filetype=mustache: */}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "loft.fullname" -}}
{{- printf "loft" -}}
{{- end -}}

{{/*
Create the name of the service account to use
*/}}
{{- define "loft.serviceAccountName" -}}
{{- if .Values.serviceAccount.create -}}
{{ default (include "loft.fullname" .) .Values.serviceAccount.name }}
{{- else -}}
{{ default "default" .Values.serviceAccount.name }}
{{- end -}}
{{- end -}}
