---
title: "Command - loft generate admin-kube-config"
sidebar_label: loft generate admin-kube-config
---


Generates a new kube config for connecting a cluster

## Synopsis


```
loft generate admin-kube-config [flags]
```

```
#######################################################
########## loft generate admin-kube-config ############
#######################################################
Creates a new kube config that can be used to connect
a cluster to loft.

Example:
loft generate admin-kube-config
loft generate admin-kube-config --namespace mynamespace
#######################################################
```


## Flags

```
  -h, --help                     help for admin-kube-config
      --namespace string         The namespace to generate the service account in. The namespace will be created if it does not exist (default "loft")
      --service-account string   The service account name to create (default "loft-admin")
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

