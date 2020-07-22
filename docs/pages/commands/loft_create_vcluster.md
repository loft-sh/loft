---
title: "Command - loft create vcluster"
sidebar_label: loft create vcluster
---


Creates a new virtual cluster in the given parent cluster

## Synopsis


```
loft create vcluster [flags]
```

```
#######################################################
################ loft create vcluster #################
#######################################################
Creates a new virtual cluster in a given space and
cluster. If no space or cluster is specified the user 
will be asked.

Example:
loft create vcluster test
loft create vcluster test --cluster mycluster
loft create vcluster test --cluster mycluster --space myspace
#######################################################
```


## Flags

```
      --account string   The cluster account to create the space with if it doesn't exist
      --cluster string   The cluster to create the virtual cluster in
      --create-context   If loft should create a kube context for the space (default true)
  -h, --help             help for vcluster
      --space string     The space to create the virtual cluster in
      --switch-context   If loft should switch the current context to the new context (default true)
```


## Global & Inherited Flags

```
      --config string                  The loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

