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
      --disable-direct-cluster-endpoint   When enabled does not use an available direct cluster endpoint to connect to the cluster
  -h, --help                              help for cluster
      --print                             When enabled prints the context to stdout
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

