---
title: "Command - loft defaults set"
sidebar_label: loft defaults set
---


Set default value

## Synopsis


```
loft defaults set [flags]
```

```
#######################################################
################## loft defaults set ##################
#######################################################
Set sets a default value for lofctl
loft defaults set $KEY $VALUE

Example:
loft defaults set project your-project

Supported keys include:
project
#######################################################
```


## Flags

```
  -h, --help   help for set
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

