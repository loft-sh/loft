package util

type RetrieveValues struct {
	Name        string
	ExampleName string
	Plural      string
	Resource    string

	Project   bool
	Namespace string
}

const templateRetrieveCurl = `
### Retrieve a list of {{ .Plural }}
Run the following curl command to list all ` + pluralInNamespace + `:
` + "```bash" + `
curl -s "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}" \
     -X GET --insecure \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `

### Get a single {{ .Name }} by name
Run the following curl command to get ` + myObjectInNamespace + `:
` + "```bash" + `
# Exchange {{ .ExampleName }} in the url below with the name of the {{ .Name }}
curl -s "https://$LOFT_DOMAIN/kubernetes/management/apis/management.loft.sh/v1/` + curlNamespace + `{{ .Resource }}/{{ .ExampleName }}" \
     -X GET --insecure \
     -H "Authorization: Bearer $ACCESS_KEY"
` + "```" + `
`

const templateRetrieveKubectl = `
### Retrieve a list of {{ .Plural }}
Run the following command to list all ` + pluralInNamespace + `:
` + "```bash" + `
kubectl get {{ .Resource }}.management.loft.sh ` + kubectlNamespace + ` -o yaml
` + "```" + `

### Retrieve a single {{ .Name }} by name
Run the following kubectl command to get ` + myObjectInNamespace + `:
` + "```bash" + `
kubectl get {{ .Resource }}.management.loft.sh {{ .ExampleName }} ` + kubectlNamespace + ` -o yaml
` + "```" + `
`

const TemplateRetrieveObject = `
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

You can either use curl or kubectl to retrieve {{ .Plural }}.

<Tabs
    defaultValue="kubectl"
    values={[
      {label: 'kubectl', value: 'kubectl'},
      {label: 'curl', value: 'curl'},
    ]}>
  <TabItem value="kubectl">

` + templateRetrieveKubectl + `

  </TabItem>
  <TabItem value="curl">

` + templateRetrieveCurl + `

  </TabItem>
</Tabs>
`
