package util

type ObjectOverviewValues struct {
	Title  string
	Name   string
	Plural string

	RelativePath string
	Resource     string
	SubResource  string

	Description string
	YAMLObject  string

	Project bool

	Create   bool
	Retrieve bool
	Update   bool
	Delete   bool

	SubResourceCreate bool
	SubResourceGet    bool
}

const TemplateObjectOverview = `---
title: {{ .Title }}
sidebar_label: {{ .Title }}
---
{{- if .SubResource }}
import Reference from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/{{ .SubResource }}/reference.mdx"
{{- if .SubResourceCreate }}
import SubResourceCreate from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/{{ .SubResource }}/subresourcecreate.mdx"
{{- end }}
{{- if .SubResourceGet }}
import SubResourceGet from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/{{ .SubResource }}/subresourceget.mdx"
{{- end }}
{{- else }}
import Reference from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/reference.mdx"
{{- if .Retrieve }}
import Retrieve from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/retrieve.mdx"
{{- end }}
{{- if .Create }}
import Create from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/create.mdx"
{{- end }}
{{- if .Update }}
import Update from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/update.mdx"
{{- end }}
{{- if .Delete }}
import Delete from "{{ .RelativePath }}/_partials/resources/{{ .Resource }}/delete.mdx"
{{- end }}
{{- end }}

{{ .Description }}

## Example {{ .Name }}

An example {{ .Name }}:
` + "```yaml" + `
{{ .YAMLObject }}
` + "```" + `

## {{ .Name }} Reference

<Reference />

{{- if .Retrieve }}

## Retrieve: {{ .Plural }}

<Retrieve />

{{- end }}

{{- if .Create }}

## Create: {{ .Name }}

<Create />

{{- end }}

{{- if .Update }}

## Update: {{ .Name }}

<Update />

{{- end }}

{{- if .Delete }}

## Delete: {{ .Name }}

<Delete />

{{- end }}

{{- if .SubResourceGet }}

## {{ .Name }} (Get)

<SubResourceGet />

{{- end }}

{{- if .SubResourceCreate }}

## {{ .Name }} (Create)

<SubResourceCreate />

{{- end }}


`
