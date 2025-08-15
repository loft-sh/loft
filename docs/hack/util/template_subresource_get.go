package util

type GetSubResourceValues struct {
	Name        string
	ExampleName string

	Description string

	Resource    string
	SubResource string

	Project   bool
	Namespace string
}

const templateGetSubResourceCurl = `
Run the following curl command:
` + "```bash" + `
# Exchange {{ .ExampleName }} in the url below with the name of the {{ .Name }}
curl -s -X GET --insecure \
     "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}/{{ .ExampleName }}/{{ .SubResource }}" \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `
`

const templateGetSubResourceKubectl = `
Run the following command:
` + "```bash" + `
# Exchange {{ .ExampleName }} in the url below with the name of the {{ .Name }}
kubectl get --raw "/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}/{{ .ExampleName }}/{{ .SubResource }}"
` + "```" + `
`

const TemplateGetSubResourceObject = `
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

{{ .Description }}

<Tabs
    defaultValue="kubectl"
    values={[
      {label: 'kubectl', value: 'kubectl'},
      {label: 'curl', value: 'curl'},
    ]}>
  <TabItem value="kubectl">

` + templateGetSubResourceKubectl + `

  </TabItem>
  <TabItem value="curl">

` + templateGetSubResourceCurl + `

  </TabItem>
</Tabs>
`
