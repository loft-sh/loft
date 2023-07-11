---
title: "Command - loft defaults get"
sidebar_label: loft defaults get
---


Retrieve default value

## Synopsis


```
loft defaults get [flags]
```

```
#######################################################
################## loft defaults get ##################
#######################################################
Get retrieves a default value configured for lofctl
loft defaults get $KEY

Example:
loft defaults get project

Supported keys include:
project
#######################################################
```


## Flags

```
  -h, --help   help for get
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "/Users/thomask33/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

