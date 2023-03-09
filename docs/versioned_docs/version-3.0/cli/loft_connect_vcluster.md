---
title: "Command - loft connect vcluster"
sidebar_label: loft connect vcluster
---


Connects to a virtual cluster in the given parent cluster

## Synopsis


```
loft connect vcluster [flags]
```

```
#######################################################
############### loft connect vcluster #################
#######################################################
This command connects to a virtual cluster directly via
port-forwarding and writes a kube config to the specified
location.

Example:
loft connect vcluster test
loft connect vcluster test --namespace test
#######################################################
```


## Flags

```
  -h, --help                     help for vcluster
      --local-port int           The local port to forward the virtual cluster to (default 8443)
  -n, --namespace string         The namespace to use (default "default")
      --out-kube-config string   The path to write the resulting kube config to (default "kubeconfig.yaml")
      --print                    When enabled prints the context to stdout
```


## Global & Inherited Flags

```
      --config string                  The Loft config to use (will be created if it does not exist) (default "C:\\Users\\gente\\.loft\\config.json")
      --debug                          Prints the stack trace if an error occurs
      --log-flush-frequency duration   Maximum number of seconds between log flushes (default 5s)
      --silent                         Run in silent mode and prevents any devspace log output except panics & fatals
```

