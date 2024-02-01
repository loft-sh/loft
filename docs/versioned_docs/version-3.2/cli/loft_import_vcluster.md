---
title: "Command - loft import vcluster"
sidebar_label: loft import vcluster
---


Imports a vcluster into a Loft project

## Synopsis


```
loft import vcluster VCLUSTER_NAME [flags]
```

```
#######################################################
################## loft import vcluster ###############
#######################################################
Imports a vcluster into a Loft project.

Example:
loft import vcluster my-vcluster --cluster connected-cluster my-vcluster \
  --namespace vcluster-my-vcluster --project my-project --importname my-vcluster
#######################################################
```


## Flags

```
      --cluster string      Cluster name of the cluster the virtual cluster is running on
  -h, --help                help for vcluster
      --importname string   The name of the vcluster under projects. If unspecified, will use the vcluster name
      --namespace string    The namespace of the vcluster
      --project string      The project to import the vcluster into
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

