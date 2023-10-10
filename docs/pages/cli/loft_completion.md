---
title: "Command - loft completion"
sidebar_label: loft completion
---


Generate shell completion scripts

## Synopsis

```
loft completion [bash|zsh|fish|powershell]
```

```
#########################################################
#################### loft completion ####################
#########################################################


To load completions:
Bash:
$ source <(loft completion bash)
# To load completions for each session, execute once:
Linux:
  $ loft completion bash > /etc/bash_completion.d/loft
MacOS:
  $ loft completion bash > /usr/local/etc/bash_completion.d/loft
Zsh:
# If shell completion is not already enabled in your environment you will need
# to enable it.  You can execute the following once:
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
# To load completions for each session, execute once:
$ loft completion zsh > "${fpath[1]}/_loft"
# You will need to start a new shell for this setup to take effect.
Fish:
$ loft completion fish | source
# To load completions for each session, execute once:
$ loft completion fish > ~/.config/fish/completions/loft.fish
```


## Flags

```
  -h, --help   help for completion
```


## Global & Inherited Flags

```
      --config string       The loft config to use (will be created if it does not exist) (default "$HOME/.loft/config.json")
      --debug               Prints the stack trace if an error occurs
      --log-output string   The log format to use. Can be either plain, raw or json (default "plain")
      --silent              Run in silent mode and prevents any loft log output except panics & fatals
```

