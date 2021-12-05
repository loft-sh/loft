---
title: "Command - loft use vcluster"
sidebar_label: loft use vcluster
---


Creates a kube context for the given virtual cluster

## Synopsis


```
loft use vcluster [flags]
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
      --cluster string   The cluster to use
  -h, --help             help for vcluster
      --print            When enabled prints the context to stdout
      --space string     The space to use
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

