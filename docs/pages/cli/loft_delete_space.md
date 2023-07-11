---
title: "Command - loft delete space"
sidebar_label: loft delete space
---


Deletes a space from a cluster

## Synopsis


```
loft delete space SPACE_NAME [flags]
```

```
#######################################################
################# loft delete space ###################
#######################################################
Deletes a space from a cluster

Example:
loft delete space myspace
loft delete space myspace --project myproject
#######################################################
```


## Flags

```
      --cluster string   The cluster to use
      --delete-context   If the corresponding kube context should be deleted if there is any (default true)
  -h, --help             help for space
  -p, --project string   The project to use
      --wait             Termination of this command waits for space to be deleted
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

