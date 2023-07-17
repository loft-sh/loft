---
title: "Command - loft list secrets"
sidebar_label: loft list secrets
---


List all the shared secrets you have access to

## Synopsis


```
loft list secrets [flags]
```

```
#######################################################
################## loft list secrets ##################
#######################################################
List the shared secrets you have access to

Example:
loft list secrets
#######################################################
```


## Flags

```
  -a, --all                   Display global and project secrets. May be used with the --project flag to display global secrets and a subset of project secrets
      --all-projects          Display project secrets for all projects.
  -h, --help                  help for secrets
  -n, --namespace string      The namespace in the loft cluster to read global secrets from. If omitted will query all accessible global secrets
  -p, --project stringArray   The project(s) to read project secrets from. If omitted will list global secrets
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

