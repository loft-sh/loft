---
title: "Command - loft create space"
sidebar_label: loft create space
---


Creates a new space in the given cluster

## Synopsis


```
loft create space [flags]
```

```
#######################################################
################## loft create space ##################
#######################################################
Creates a new kube context for the given cluster, if
it does not yet exist.

Example:
loft create space myspace
loft create space myspace --cluster mycluster
loft create space myspace --cluster mycluster --account myaccount
#######################################################
```


## Flags

```
      --account string   The cluster account to use
      --cluster string   The cluster to use
      --create-context   If Loft should create a kube context for the space (default true)
  -h, --help             help for space
      --switch-context   If Loft should switch the current context to the new context (default true)
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

