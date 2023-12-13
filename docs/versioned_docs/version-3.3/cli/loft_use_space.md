---
title: "Command - loft use space"
sidebar_label: loft use space
---


Creates a kube context for the given space

## Synopsis

```
loft use space SPACE_NAME [flags]
```

```
########################################################
#################### loft use space ####################
########################################################

Creates a new kube context for the given space.

Example:
loft use space
loft use space myspace
loft use space myspace --project myproject
########################################################
```


## Flags

```
      --cluster string                    The cluster to use
      --disable-direct-cluster-endpoint   When enabled does not use an available direct cluster endpoint to connect to the cluster
  -h, --help                              help for space
      --print                             When enabled prints the context to stdout
  -p, --project string                    The project to use
      --skip-wait                         If true, will not wait until the space is running
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

