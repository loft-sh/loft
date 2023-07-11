---
title: "Command - loft sleep space"
sidebar_label: loft sleep space
---


Put a space to sleep

## Synopsis


```
loft sleep space SPACE_NAME [flags]
```

```
#######################################################
################### loft sleep space ##################
#######################################################
Sleep puts a space to sleep

Example:
loft sleep space myspace
loft sleep space myspace --project myproject
#######################################################
```


## Flags

```
      --cluster string               The cluster to use
  -h, --help                         help for space
      --prevent-wakeup loft wakeup   The amount of seconds this space should sleep until it can be woken up again (use 0 for infinite sleeping). During this time the space can only be woken up by loft wakeup, manually deleting the annotation on the namespace or through the loft UI (default -1)
  -p, --project string               The project to use
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

