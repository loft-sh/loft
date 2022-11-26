package util

type DeleteValues struct {
	Name        string
	Plural      string
	ExampleName string

	Resource  string
	Project   bool
	Namespace string
}

const myObjectInNamespace = `{{ .Name }} ` + "`{{ .ExampleName }}`" + `{{ if .Project }} in project ` + "`my-project`" + `{{ end }}{{ if .Namespace }}in namespace ` + "`{{ .Namespace }}`" + `{{ end }}`

const templateDeleteCurl = `
Run the following curl command to delete ` + myObjectInNamespace + `:
` + "```bash" + `
# Replace the {{ .ExampleName }} in the url below with the name of the {{ .Name }} you want to delete
curl -s "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}/{{ .ExampleName }}" \
     -X DELETE --insecure \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `
`

const templateDeleteKubectl = `
Run the following command to delete ` + myObjectInNamespace + `:
` + "```bash" + `
kubectl delete {{ .Resource }}.management.loft.sh {{ .ExampleName }} ` + kubectlNamespace + `
` + "```" + `
`

const TemplateDeleteObject = `
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

You can either use curl or kubectl to delete {{ .Plural }}.

<Tabs
    defaultValue="kubectl"
    values={[
      {label: 'kubectl', value: 'kubectl'},
      {label: 'curl', value: 'curl'},
    ]}>
  <TabItem value="kubectl">

` + templateDeleteKubectl + `

  </TabItem>
  <TabItem value="curl">

` + templateDeleteCurl + `

  </TabItem>
</Tabs>
`
