---
title: "Command - loft login"
sidebar_label: loft login
---


Login to a loft instance

## Synopsis


```
loft login [LOFT_HOST] [flags]
```

```
#######################################################
###################### loft login #####################
#######################################################
Login into loft

Example:
loft login https://my-loft.com
loft login https://my-loft.com --access-key myaccesskey
#######################################################
```


## Flags

```
      --access-key string   The access key to use
      --docker-login        If true, will log into the docker image registries the user has image pull secrets for (default true)
  -h, --help                help for login
      --insecure            Allow login into an insecure Loft instance
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

