---
title: "Command - loft share space"
sidebar_label: loft share space
---


Shares a space with another loft user or team

## Synopsis


```
loft share space SPACE_NAME [flags]
```

```
#######################################################
################### loft share space ##################
#######################################################
Shares a space with another loft user or team. The user
or team need to have access to the cluster.

Example:
loft share space myspace
loft share space myspace --project myproject
loft share space myspace --project myproject --user admin
#######################################################
```


## Flags

```
      --cluster string        The cluster to use
      --cluster-role string   The cluster role which is assigned to the user or team for that space (default "loft-cluster-space-admin")
  -h, --help                  help for space
  -p, --project string        The project to use
      --team string           The team to share the space with. The team needs to have access to the cluster
      --user string           The user to share the space with. The user needs to have access to the cluster
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

