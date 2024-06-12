---
title: "Command - loft backup"
sidebar_label: loft backup
---


Create a loft management plane backup

## Synopsis

```
loft backup [flags]
```

```
#########################################################
###################### loft backup ######################
#########################################################

Backup creates a backup for the Loft management plane

Example:
loft backup
########################################################
```


## Flags

```
      --filename string    The filename to write the backup to (default "backup.yaml")
  -h, --help               help for backup
      --namespace string   The namespace to loft was installed into (default "loft")
      --skip strings       What resources the backup should skip. Valid options are: users, teams, accesskeys, sharedsecrets, clusters and clusteraccounttemplates
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

