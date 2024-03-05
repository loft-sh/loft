---
title: "Command - loft get cluster-access-key"
sidebar_label: loft get cluster-access-key
---


Retrieve the network peer cluster access key

## Synopsis

```
loft get cluster-access-key CLUSTER_NAME [flags]
```

```
#########################################################
############## loft get cluster-access-key ##############
#########################################################

Returns the Network Peer Cluster Token

Example:
loft get cluster-access-key [CLUSTER_NAME]
########################################################
```


## Flags

```
  -h, --help            help for cluster-access-key
  -o, --output string   Output format. One of: (json, yaml, text) (default "text")
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

