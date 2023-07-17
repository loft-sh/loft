---
title: "Command - loft set secret"
sidebar_label: loft set secret
---


Sets the key value of a project / shared secret

## Synopsis


```
loft set secret SECRET_NAME SECRET_VALUE [flags]
```

```
#######################################################
################### loft set secret ###################
#######################################################
Sets the key value of a project / shared secret.


Example:
loft set secret test-secret.key value
loft set secret test-secret.key value --project myproject
#######################################################
```


## Flags

```
  -h, --help               help for secret
  -n, --namespace string   The namespace in the loft cluster to create the secret in. If omitted will use the namespace were loft is installed in
  -p, --project string     The project to create the project secret in.
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

