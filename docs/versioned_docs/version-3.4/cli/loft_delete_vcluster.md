---
title: "Command - loft delete vcluster"
sidebar_label: loft delete vcluster
---


Deletes a virtual cluster from a cluster

## Synopsis

```
loft delete vcluster VCLUSTER_NAME [flags]
```

```
########################################################
############## loft delete virtualcluster ##############
########################################################

Deletes a virtual cluster from a cluster

Example:
loft delete vcluster myvirtualcluster
loft delete vcluster myvirtualcluster --project myproject
########################################################
```


## Flags

```
      --cluster string   The cluster to use
      --delete-context   If the corresponding kube context should be deleted if there is any (default true)
      --delete-space     Should the corresponding space be deleted
  -h, --help             help for vcluster
  -p, --project string   The project to use
      --space string     The space to use
      --wait             Termination of this command waits for space to be deleted. Without the flag delete-space, this flag has no effect.
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

