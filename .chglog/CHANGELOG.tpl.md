{{ range .Versions }}

{{- if .NoteGroups -}}
{{ range .NoteGroups -}}
### {{ .Title }}
{{ range .Notes }}
{{ .Body }}
{{ end }}
{{ end -}}
{{ end -}}

{{ range .CommitGroups -}}
### {{ .Title }}
{{ range .Commits -}}
- {{ if .Scope }}**{{ .Scope }}:** {{ end }}{{ .Subject }}
{{ end }}
{{ end -}}

{{- if .RevertCommits -}}
### Reverts
{{ range .RevertCommits -}}
- {{ .Revert.Header }}
{{ end }}
{{ end -}}

{{ $headlinePrinted := "false"}}
{{ range $i, $commit := .Commits -}}
{{ if not $commit.Type -}}
{{ if not $commit.Merge -}}
{{ if not $commit.Revert -}}
{{ if eq $headlinePrinted "false" -}}
### 📦 Other
{{ end -}}
{{ $headlinePrinted = "true" -}}
- {{ if $commit.Scope }}**{{ .Scope }}:** {{ end }}{{ $commit.Subject }}
{{ end -}}
{{ end -}}
{{ end -}}
{{ end }}

{{ end -}}
