package util

type CreateValues struct {
	Name        string
	ExampleName string

	Resource string

	Project    bool
	Namespace  string
	YAMLObject string
}

const curlNamespace = `{{ if .Namespace }}namespaces/{{ .Namespace }}/{{ end }}{{ if .Project }}namespaces/loft-p-my-project/{{ end }}`

const kubectlNamespace = `{{ if .Project }}-n loft-p-my-project{{ end }}{{ if .Namespace }}-n {{ .Namespace }}{{ end }}`

const pluralInNamespace = `{{ .Plural }}{{ if .Project }} in project ` + "`my-project`" + `{{ end }}{{ if .Namespace }}in namespace ` + "`{{ .Namespace }}`" + `{{ end }}`

const templateCreateCurl = `
Create a file ` + "`object.yaml`" + ` with the following contents:
` + "```yaml" + `
{{ .YAMLObject }}
` + "```" + `

Run the following curl command to create a new ` + myObjectInNamespace + `:
` + "```bash" + `
curl -s -X POST --insecure \
     "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}" \
     --data-binary "$(cat object.yaml)" \
     -H "Content-Type: application/yaml" \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `
`

const templateCreateKubectl = `
Create a file ` + "`object.yaml`" + ` with the following contents:
` + "```yaml" + `
{{ .YAMLObject }}
` + "```" + `

Then create the ` + myObjectInNamespace + ` with:
` + "```bash" + `
kubectl create -f object.yaml ` + kubectlNamespace + `
` + "```" + `
`

const TemplateCreateObject = `
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

You can either use curl or kubectl to create a new {{ .Name }}.
{{- if .Project }}
Make sure to set the project in the ` + "`metadata.namespace`" + ` field you want to create the {{ .Name }} in. If your project has the id ` + "`my-project`" + `, the corresponding namespace would be ` + "`loft-p-my-project`" + `.
{{- end }}

<Tabs
    defaultValue="kubectl"
    values={[
      {label: 'kubectl', value: 'kubectl'},
      {label: 'curl', value: 'curl'},
    ]}>
  <TabItem value="kubectl">

` + templateCreateKubectl + `

  </TabItem>
  <TabItem value="curl">

` + templateCreateCurl + `

  </TabItem>
</Tabs>
`
