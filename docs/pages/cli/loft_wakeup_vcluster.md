---
title: "Command - loft wakeup vcluster"
sidebar_label: loft wakeup vcluster
---


Wake up a vcluster

## Synopsis

```
loft wakeup vcluster VCLUSTER_NAME [flags]
```

```
########################################################
################# loft wakeup vcluster #################
########################################################

Wakes up a vcluster

Example:
loft wakeup vcluster myvcluster
loft wakeup vcluster myvcluster --project myproject
########################################################
```


## Flags

```
  -h, --help             help for vcluster
  -p, --project string   The project to use
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

