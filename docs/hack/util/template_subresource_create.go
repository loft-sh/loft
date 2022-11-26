package util

type CreateSubResourceValues struct {
	Name        string
	ExampleName string

	Description string

	Resource    string
	SubResource string

	Project    bool
	Namespace  string
	YAMLObject string
}

const templateCreateSubResourceCurl = `
Create a file ` + "`object.yaml`" + ` with the following contents:
` + "```yaml" + `
{{ .YAMLObject }}
` + "```" + `

Then run the following curl command:
` + "```bash" + `
# Exchange {{ .ExampleName }} in the url below with the name of the {{ .Name }}
curl -s -X POST --insecure \
     "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}/{{ .ExampleName }}/{{ .SubResource }}" \
     --data-binary "$(cat object.yaml)" \
     -H "Content-Type: application/yaml" \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `
`

const TemplateCreateSubResourceObject = `
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

{{ .Description }}

<Tabs
    defaultValue="curl"
    values={[
      {label: 'curl', value: 'curl'},
    ]}>
  <TabItem value="curl">

` + templateCreateSubResourceCurl + `

  </TabItem>
</Tabs>
`
