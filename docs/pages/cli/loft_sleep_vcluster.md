---
title: "Command - loft sleep vcluster"
sidebar_label: loft sleep vcluster
---


Put a vcluster to sleep

## Synopsis


```
loft sleep vcluster VCLUSTER_NAME [flags]
```

```
#######################################################
################## loft sleep vcluster ################
#######################################################
Sleep puts a vcluster to sleep

Example:
loft sleep vcluster myvcluster
loft sleep vcluster myvcluster --project myproject
#######################################################
```


## Flags

```
  -h, --help                                  help for vcluster
      --prevent-wakeup loft wakeup vcluster   The amount of seconds this vcluster should sleep until it can be woken up again (use 0 for infinite sleeping). During this time the space can only be woken up by loft wakeup vcluster, manually deleting the annotation on the namespace or through the loft UI (default -1)
  -p, --project string                        The project to use
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

