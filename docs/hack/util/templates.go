package util

const TemplateConfigField = `
<details className="config-field" data-expandable="%t"%s>
<summary>

%s` + "`%s`" + ` <span className="config-field-required" data-required="%t">required</span> <span className="config-field-type">%s</span> <span className="config-field-default">%s</span> <span className="config-field-enum">%s</span> {#%s}

%s

</summary>

%s

</details>
`
