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

{{/*
Default image name for a given product
*/}}
{{- define "loft.defaultImage" -}}
{{- printf "ghcr.io/loft-sh/loft:%s" .Chart.Version -}}
{{- end -}}

{{- define "loft.image" -}}
  {{- if .Values.product -}}
    {{- if eq .Values.product "vcluster-pro" -}}
      {{- printf "ghcr.io/loft-sh/vcluster-platform:%s" .Chart.Version -}}
    {{- else if eq .Values.product "devpod-pro" -}}
      {{- printf "ghcr.io/loft-sh/devpod-pro:%s" .Chart.Version -}}
    {{- else -}}
      {{ include "loft.defaultImage" . }}
    {{- end -}}
  {{- else -}}
    {{ include "loft.defaultImage" . }}
  {{- end -}}
{{- end -}}

{{- define "loft.strategyType" -}}
  {{- if and .Values.strategy .Values.strategy.type -}}
    {{- .Values.strategy.type -}}
  {{- else -}}
    {{- if eq (int .Values.replicaCount) 1 -}}
      {{ printf "Recreate" }}
    {{- else -}}
      {{ printf "RollingUpdate" }}
    {{- end -}}
  {{- end -}}
{{- end -}}

{{- define "loft.strategy" -}}
{{- $type := include "loft.strategyType" . -}}
type: {{ $type }}
{{- if eq $type "RollingUpdate" }}
rollingUpdate:
  maxSurge: 1
  {{- if (eq (int .Values.replicaCount) 1) }}
  maxUnavailable: 0
  {{- else }}
  maxUnavailable: 1
  {{- end }}
{{- end -}}
{{- end -}}
