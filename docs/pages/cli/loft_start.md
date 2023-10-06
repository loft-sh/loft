---
title: "Command - loft start"
sidebar_label: loft start
---


Start a loft instance and connect via port-forwarding

## Synopsis

```
loft start [flags]
```

```
########################################################
###################### loft start ######################
########################################################

Starts a loft instance in your Kubernetes cluster and
then establishes a port-forwarding connection.

Please make sure you meet the following requirements
before running this command:

1. Current kube-context has admin access to the cluster
2. Helm v3 must be installed
3. kubectl must be installed

########################################################
```


## Flags

```
      --chart-name string        The chart name to deploy Loft (default "loft")
      --chart-path string        The local chart path to deploy Loft
      --chart-repo string        The chart repo to deploy Loft (default "https://charts.loft.sh/")
      --context string           The kube context to use for installation
      --docker                   If enabled will try to deploy Loft to the local docker installation.
      --docker-arg stringArray   Extra docker args for running Loft.
      --docker-image string      The docker image to install.
      --email string             The email to use for the installation
  -h, --help                     help for start
      --host string              Provide a hostname to enable ingress and configure its hostname
      --local-port string        The local port to bind to if using port-forwarding
      --namespace string         The namespace to install loft into (default "loft")
      --no-login                 If true, loft will not login to a loft instance on start
      --no-port-forwarding       If true, loft will not do port forwarding after installing it
      --no-tunnel                If true, loft will not create a loft.host tunnel for this installation
      --no-wait                  If true, loft will not wait after installing it
      --password string          The password to use for the admin account. (If empty this will be the namespace UID)
      --product string           The Loft product to install
      --reset                    If true, an existing loft instance will be deleted before installing loft
      --reuse-values             Reuse previous Loft helm values on upgrade (default true)
      --upgrade                  If true, Loft will try to upgrade the release
      --values string            Path to a file for extra loft helm chart values
      --version string           The loft version to install
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

