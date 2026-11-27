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
{{- $tag := default "3.24.3" .Values.audit.imageRef.tag -}}
{{- printf "%s/%s:%s" $registry $repository $tag -}}
{{- end -}}

{{- define "loft.auditImage" -}}
  {{- if .Values.audit.imageRef -}}
    {{ include "loft.auditImageRef" . }}
  {{- else -}}
    {{ default "library/alpine:3.24.3" .Values.audit.image }}
  {{- end -}}
{{- end -}}

{{/*
True when multiRegion is set and enabled (safe when .Values.multiRegion is nil).
Output is truthy when enabled, empty otherwise; use in {{ if include "loft.multiRegionEnabled" . }}.
*/}}
{{- define "loft.multiRegionEnabled" -}}
{{- if and .Values.multiRegion .Values.multiRegion.enabled }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when config.database is set and enabled (safe when .Values.config or .Values.config.database is nil).
Output is truthy when enabled, empty otherwise; use in {{ if include "loft.configDatabaseEnabled" . }}.
*/}}
{{- define "loft.configDatabaseEnabled" -}}
{{- if and .Values.config .Values.config.database .Values.config.database.enabled }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when logging.file is set and enabled (safe when .Values.logging or .Values.logging.file is nil).
Output is truthy when enabled, empty otherwise; use in {{ if include "loft.fileLoggingEnabled" . }}.
*/}}
{{- define "loft.fileLoggingEnabled" -}}
{{- if and .Values.logging .Values.logging.file .Values.logging.file.enabled }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when env.LOFT_EMBEDDED_K8S is set to "true" (safe when .Values.env is nil).
Output is truthy when enabled, empty otherwise; use in {{ if include "loft.envEmbeddedK8sEnabled" . }}.
*/}}
{{- define "loft.envEmbeddedK8sEnabled" -}}
{{- if eq (.Values.env.LOFT_EMBEDDED_K8S | toString) "true" }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when the platform runs its own embedded Kubernetes API server, either set directly
through env.LOFT_EMBEDDED_K8S or turned on by config.database.enabled.
Output is truthy when embedded, empty otherwise; use in {{ if include "loft.embedded" . }}.
*/}}
{{- define "loft.embedded" -}}
{{- if or (include "loft.envEmbeddedK8sEnabled" .) (include "loft.configDatabaseEnabled" .) }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when the chart renders the loft-apiservice Service for the management.loft.sh APIService.
Output is truthy when rendered, empty otherwise; use in {{ if include "loft.managementAPIServiceEnabled" . }}.
*/}}
{{- define "loft.managementAPIServiceEnabled" -}}
{{- if and .Values.apiservice .Values.apiservice.create (not .Values.agentOnly) (not (include "loft.embedded" .)) }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when the chart renders the loft-apiservice-agent Service for the cluster.loft.sh APIService.
Output is truthy when rendered, empty otherwise; use in {{ if include "loft.agentAPIServiceEnabled" . }}.
*/}}
{{- define "loft.agentAPIServiceEnabled" -}}
{{- if and .Values.apiservice .Values.apiservice.create }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when the chart renders the loft-webhook-agent Service for the admission webhook.
Output is truthy when rendered, empty otherwise; use in {{ if include "loft.webhookServiceEnabled" . }}.
*/}}
{{- define "loft.webhookServiceEnabled" -}}
{{- if and .Values.webhook .Values.webhook.create }}{{ true }}{{ end -}}
{{- end -}}

{{/*
True when the host networked proxy is deployed: hostNetworkProxy.enabled is set, the platform
does not run an embedded API server (which reaches the platform on localhost and needs no
proxy), and the chart renders at least one Service for the proxy to forward.
Output is truthy when deployed, empty otherwise; use in {{ if include "loft.hostNetworkProxyEnabled" . }}.
*/}}
{{- define "loft.hostNetworkProxyEnabled" -}}
{{- if and .Values.hostNetworkProxy .Values.hostNetworkProxy.enabled (not (include "loft.embedded" .)) (or (include "loft.agentAPIServiceEnabled" .) (include "loft.webhookServiceEnabled" .)) }}{{ true }}{{ end -}}
{{- end -}}

{{/*
The app label that the loft-apiservice, loft-apiservice-agent and loft-webhook-agent Services
select: the host networked proxy pod when the proxy is deployed, otherwise the platform pod.
*/}}
{{- define "loft.apiServerBackendApp" -}}
{{- if include "loft.hostNetworkProxyEnabled" . -}}
{{ template "loft.fullname" . }}-hostnetwork-proxy
{{- else -}}
{{ template "loft.fullname" . }}
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

{{- define "loft.leastPrivilegeModeValues" -}}
{{- $defaultValues := dict
		"enabled" false
		"clusterAccess" (dict "enabled" true)
		"projectQuotas" (dict "enabled" true)
		"secrets" (dict "enabled" true)
		"sleepMode" (dict "enabled" true)
		"role" (dict "enabled" true "extraRules" (list) "overwriteRules" (list))
		"clusterRole" (dict "enabled" true "extraRules" (list) "overwriteRules" (list))
		"namespaceAdminRole" (dict "enabled" true "extraRules" (list) "overwriteRules" (list)) -}}
{{- if .Values.leastPrivilegeMode -}}
{{ mergeOverwrite $defaultValues .Values.leastPrivilegeMode | toJson }}
{{- else -}}
{{ $defaultValues | toJson }}
{{- end -}}
{{- end -}}

{{- define "loft.isLeastPrivilegeModeEnabled" -}}
{{- if .Values.leastPrivilegeMode -}}
{{- if eq true .Values.leastPrivilegeMode.enabled -}}
{{ true }}
{{- end -}}
{{- end -}}
{{- end -}}
