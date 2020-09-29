---
title: "Command - loft delete vcluster"
sidebar_label: loft delete vcluster
---


Deletes a virtual cluster from a cluster

## Synopsis


```
loft delete vcluster [flags]
```

```
#######################################################
############ loft delete virtualcluster ###############
#######################################################
Deletes a virtual cluster from a cluster.

Example:
loft delete vcluster myvirtualcluster 
loft delete vcluster myvirtualcluster --cluster mycluster
loft delete vcluster myvirtualcluster --space myspace --cluster mycluster
#######################################################
```


## Flags

```
      --cluster string   The cluster to use
      --delete-context   If the corresponding kube context should be deleted if there is any (default true)
  -h, --help             help for vcluster
      --space string     The space to use
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

