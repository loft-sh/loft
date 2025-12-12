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

{{/*
Populate image ref for a given product
*/}}
{{- define "loft.imageRef" -}}
{{- $registry := default "ghcr.io" .Values.imageRef.registry -}}
{{- $repository := coalesce .Values.imageRef.repository .repo "loft-sh/vcluster-platform" -}}
{{- $tag := default .Chart.Version .Values.imageRef.tag -}}
{{- printf "%s/%s:%s" $registry $repository $tag -}}
{{- end -}}

{{- define "loft.image" -}}
  {{- if .Values.product -}}
    {{- if eq .Values.product "vcluster-pro" -}}
	  {{- if .Values.imageRef -}}
	    {{ include "loft.imageRef" $ }}
	  {{- else -}}
		{{- printf "ghcr.io/loft-sh/vcluster-platform:%s" .Chart.Version -}}
	  {{- end -}}
    {{- else -}}
	  {{- if .Values.imageRef -}}
	    {{ include "loft.imageRef" (merge (dict "repo" "loft-sh/loft") $) }}
	  {{- else -}}
        {{ coalesce .Values.image (include "loft.defaultImage" .) }}
	  {{- end -}}
    {{- end -}}
  {{- else -}}
	{{- if .Values.imageRef -}}
	  {{ include "loft.imageRef" (merge (dict "repo" "loft-sh/loft") $) }}
	{{- else -}}
      {{ coalesce .Values.image (include "loft.defaultImage" .) }}
	{{- end -}}
  {{- end -}}
{{- end -}}


{{/*
Populate audit image ref
*/}}
{{- define "loft.auditImageRef" -}}
{{- $registry := default "docker.io" .Values.audit.imageRef.registry -}}
{{- $repository := default "library/alpine" .Values.audit.imageRef.repository -}}
{{- $tag := default "3.13.1" .Values.audit.imageRef.tag -}}
{{- printf "%s/%s:%s" $registry $repository $tag -}}
{{- end -}}

{{- define "loft.auditImage" -}}
  {{- if .Values.audit.imageRef -}}
    {{ include "loft.auditImageRef" . }}
  {{- else -}}
    {{ default "library/alpine:3.13.1" .Values.audit.image }}
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
