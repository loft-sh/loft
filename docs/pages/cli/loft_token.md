---
title: "Command - loft token"
sidebar_label: loft token
---


Token prints the access token to a loft instance

## Synopsis

```
loft token [flags]
```

```
########################################################
###################### loft token ######################
########################################################

Prints an access token to a loft instance. This can
be used as an ExecAuthenticator for kubernetes

Example:
loft token
########################################################
```


## Flags

```
      --direct-cluster-endpoint   When enabled prints a direct cluster endpoint token
  -h, --help                      help for token
      --project string            The project containing the virtual cluster
      --virtual-cluster string    The virtual cluster
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

