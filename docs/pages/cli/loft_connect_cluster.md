---
title: "Command - loft connect cluster"
sidebar_label: loft connect cluster
---


connect current cluster to Loft

## Synopsis


```
loft connect cluster [flags]
```

```
#######################################################
################## loft connect cluster ###############
#######################################################
Connect a cluster to the Loft instance.

Example:
loft connect cluster my-cluster
#######################################################
```


## Flags

```
      --display-name string      The display name to show in the UI for this cluster
  -h, --help                     help for cluster
      --namespace string         The namespace to generate the service account in. The namespace will be created if it does not exist (default "loft")
      --service-account string   The service account name to create (default "loft-admin")
      --wait                     If true, will wait until the cluster is initialized
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

