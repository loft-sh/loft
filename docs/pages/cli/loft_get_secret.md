---
title: "Command - loft get secret"
sidebar_label: loft get secret
---


Returns the key value of a project / shared secret

## Synopsis

```
loft get secret SECRET_NAME [flags]
```

```
#########################################################
#################### loft get secret ####################
#########################################################

Returns the key value of a project / shared secret.

Example:
loft get secret test-secret.key
loft get secret test-secret.key --project myproject
########################################################
```


## Flags

```
  -a, --all                Display all secret keys
  -h, --help               help for secret
  -n, --namespace string   The namespace in the loft cluster to read the secret from. If omitted will use the namespace where loft is installed in
  -o, --output string      Output format. One of: (json, yaml, value). If the --all flag is passed 'yaml' will be the default format
  -p, --project string     The project to read the project secret from.
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

