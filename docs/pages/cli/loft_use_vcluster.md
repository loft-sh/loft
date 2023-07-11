---
title: "Command - loft use vcluster"
sidebar_label: loft use vcluster
---


Creates a kube context for the given virtual cluster

## Synopsis


```
loft use vcluster VCLUSTER_NAME [flags]
```

```
#######################################################
################## loft use vcluster ##################
#######################################################
Creates a new kube context for the given virtual cluster.

Example:
loft use vcluster
loft use vcluster myvcluster
loft use vcluster myvcluster --cluster mycluster
loft use vcluster myvcluster --cluster mycluster --space myspace
#######################################################
```


## Flags

```
      --cluster string                    The cluster to use
      --disable-direct-cluster-endpoint   When enabled does not use an available direct cluster endpoint to connect to the vcluster
  -h, --help                              help for vcluster
      --print                             When enabled prints the context to stdout
  -p, --project string                    The project to use
      --skip-wait                         If true, will not wait until the virtual cluster is running
      --space string                      The space to use
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

