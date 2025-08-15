---
title: "Command - loft login"
sidebar_label: loft login
---


Login to a Loft instance

## Synopsis


```
loft login [flags]
```

```
#######################################################
###################### loft login #####################
#######################################################
Log in to Loft.

Example:
loft login https://my-loft.com
loft login https://my-loft.com --username myuser --access-key myaccesskey
#######################################################
```


## Flags

```
      --access-key string   The access key to use
  -h, --help                help for login
      --insecure            Allow login to an insecure Loft instance
      --username string     The username to use
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

