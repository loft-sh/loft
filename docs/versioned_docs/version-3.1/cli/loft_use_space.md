---
title: "Command - loft use space"
sidebar_label: loft use space
---


Creates a kube context for the given space

## Synopsis


```
loft use space [flags]
```

```
#######################################################
################### loft use space ####################
#######################################################
Creates a new kube context for the given space.

Example:
loft use space 
loft use space myspace
loft use space myspace --cluster mycluster
#######################################################
```


## Flags

```
      --cluster string   The cluster to use
  -h, --help             help for space
      --print            When enabled prints the context to stdout
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

