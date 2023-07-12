---
title: "Command - loft reset password"
sidebar_label: loft reset password
---


Resets the password of a user

## Synopsis


```
loft reset password [flags]
```

```
#######################################################
################# loft reset password #################
#######################################################
Resets the password of a user.

Example:
loft reset password
loft reset password --user admin
#######################################################
```


## Flags

```
      --create            Creates the user if it does not exist
      --force             If user had no password will create one
  -h, --help              help for password
      --password string   The new password to use
      --user string       The name of the user to reset the password (default "admin")
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

