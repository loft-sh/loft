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
  -h, --help               help for secrets
  -n, --namespace string   The namespace in the loft cluster to read the secret from. If omitted will query all accessible secrets
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

