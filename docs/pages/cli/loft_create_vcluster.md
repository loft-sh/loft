---
title: "Command - loft create vcluster"
sidebar_label: loft create vcluster
---


Creates a new virtual cluster in the given parent cluster

## Synopsis


```
loft create vcluster VCLUSTER_NAME [flags]
```

```
#######################################################
################ loft create vcluster #################
#######################################################
Creates a new virtual cluster in a given space and
cluster. If no space or cluster is specified the user
will be asked.

Example:
loft create vcluster test
loft create vcluster test --project myproject
#######################################################
```


## Flags

```
      --cluster string                    The cluster to create the virtual cluster in
      --create-context                    If loft should create a kube context for the space (default true)
      --delete-after int                  DEPRECATED: If set to non zero, will tell loft to delete the space after specified seconds of inactivity
      --description string                The description to show in the UI for this virtual cluster
      --disable-direct-cluster-endpoint   When enabled does not use an available direct cluster endpoint to connect to the vcluster
      --display-name string               The display name to show in the UI for this virtual cluster
  -h, --help                              help for vcluster
      --link strings                      Labeled Links to annotate the object with.
                                          These links will be visible from the UI.\nWhen used with update, existing links will be replaced.
                                          E.g. --link 'Prod=http://exampleprod.com,Dev=http://exampledev.com'
      --parameters string                 The file where the parameter values for the apps are specified
      --print                             If enabled, prints the context to the console
  -p, --project string                    The project to use
      --recreate                          If enabled and there already exists a virtual cluster with this name, Loft will delete it first
      --set strings                       Allows specific template parameters to be set. E.g. --set myParameter=myValue
      --skip-wait                         If true, will not wait until the virtual cluster is running
      --sleep-after int                   DEPRECATED: If set to non zero, will tell the space to sleep after specified seconds of inactivity
      --space string                      The space to create the virtual cluster in
      --switch-context                    If loft should switch the current context to the new context (default true)
      --team string                       The team to create the space for
      --template string                   The virtual cluster template to use to create the virtual cluster
      --ttl int32                         Sets certificate TTL when using virtual cluster via access point (default 86400)
      --update                            If enabled and a virtual cluster already exists, will update the template, version and parameters
      --use                               If loft should use the virtual cluster if its already there
      --user string                       The user to create the space for
      --version string                    The template version to use
```


## Global & Inherited Flags

```
      --config string   The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug           Prints the stack trace if an error occurs
      --silent          Run in silent mode and prevents any loft log output except panics & fatals
```

