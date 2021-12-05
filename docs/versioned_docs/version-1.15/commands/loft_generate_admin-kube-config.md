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
a cluster to Loft.

Example:
loft generate admin-kube-config
loft generate admin-kube-config --namespace mynamespace
#######################################################
```


## Flags

```
  -h, --help                     help for admin-kube-config
      --namespace string         The namespace to generate the service account in. The namespace will be created if it does not exist (default "loft")
      --service-account string   The service account name to create (default "loft")
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

