---
title: "Command - loft wakeup"
sidebar_label: loft wakeup
---


Wakes up a space

## Synopsis


```
loft wakeup [flags]
```

```
#######################################################
###################### loft wakeup ####################
#######################################################
wakeup resumes a sleeping space

Example:
loft wakeup myspace
loft wakeup myspace --cluster mycluster
#######################################################
```


## Flags

```
      --cluster string   The cluster to use
  -h, --help             help for wakeup
```


## Global & Inherited Flags

```
      --config string                  The loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

