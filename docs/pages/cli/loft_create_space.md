---
title: "Command - loft create space"
sidebar_label: loft create space
---


Creates a new space in the given cluster

## Synopsis

```
loft create space SPACE_NAME [flags]
```

```
#########################################################
################### loft create space ###################
#########################################################

Creates a new space for the given project, if
it does not yet exist.

Example:
loft create space myspace
loft create space myspace --project myproject
loft create space myspace --project myproject --team myteam
########################################################
```


## Flags

```
      --annotations strings               Comma separated annotations to apply to the space
      --cluster string                    The cluster to use
      --create-context                    If loft should create a kube context for the space (default true)
      --delete-after int                  DEPRECATED: If set to non zero, will tell loft to delete the space after specified seconds of inactivity
      --description string                The description to show in the UI for this space
      --disable-direct-cluster-endpoint   When enabled does not use an available direct cluster endpoint to connect to the space
      --display-name string               The display name to show in the UI for this space
  -h, --help                              help for space
  -l, --labels strings                    Comma separated labels to apply to the space
      --link strings                      Labeled Links to annotate the object with.
                                          These links will be visible from the UI. When used with update, existing links will be replaced.
                                          E.g. --link 'Prod=http://exampleprod.com,Dev=http://exampledev.com'
      --parameters string                 The file where the parameter values for the apps are specified
  -p, --project string                    The project to use
      --recreate                          If enabled and there already exists a space with this name, Loft will delete it first
      --set strings                       Allows specific template parameters to be set. E.g. --set myParameter=myValue
      --skip-wait                         If true, will not wait until the space is running
      --sleep-after int                   DEPRECATED: If set to non zero, will tell the space to sleep after specified seconds of inactivity
      --switch-context                    If loft should switch the current context to the new context (default true)
      --team string                       The team to create the space for
      --template string                   The space template to use
      --update                            If enabled and a space already exists, will update the template, version and parameters
      --use                               If loft should use the space if its already there
      --user string                       The user to create the space for
      --version string                    The template version to use
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

