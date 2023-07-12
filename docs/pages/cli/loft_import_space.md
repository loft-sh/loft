---
title: "Command - loft import space"
sidebar_label: loft import space
---


Imports a space into a Loft project

## Synopsis


```
loft import space SPACE_NAME [flags]
```

```
#######################################################
################## loft import space ##################
#######################################################
Imports a space into a Loft project.

Example:
loft import space my-space --cluster connected-cluster \
  --project my-project --importname my-space
#######################################################
```


## Flags

```
      --cluster string      Cluster name of the cluster from where the space is to be imported
  -h, --help                help for space
      --importname string   The name of the space under projects. If unspecified, will use the space name
      --project string      The project to import the space into
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

