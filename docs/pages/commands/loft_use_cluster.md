---
title: "Command - loft use cluster"
sidebar_label: loft use cluster
---


Creates a kube context for the given cluster

## Synopsis


```
loft use cluster [flags]
```

```
#######################################################
################## loft use cluster ###################
#######################################################
Creates a new kube context for the given cluster, if
it does not yet exist.

Example:
loft use cluster mycluster
#######################################################
```


## Flags

```
  -h, --help    help for cluster
      --print   When enabled prints the context to stdout
```


## Global & Inherited Flags

```
      --config string                  The loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

