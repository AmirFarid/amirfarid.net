---
title: "GitHub SSH Permission Denied: publickey"
summary: A reproducible checklist for diagnosing the common GitHub SSH authentication failure.
date: 2026-01-16
updated: 2026-01-16
environment: Local development machine
tools:
  - git
  - ssh
tags:
  - GitHub
  - SSH
  - debugging
---

## Problem

`git push` or `git pull` fails with `Permission denied (publickey)`.

## Environment

Local machine with Git and SSH installed.

## Symptoms

- GitHub rejects the connection.
- HTTPS remotes may work, but SSH remotes fail.
- `ssh -T git@github.com` does not authenticate as expected.

## Root Cause

The local SSH agent may not have the correct key, the public key may not be registered with GitHub, or the repository remote may point at an unexpected host.

## Fix

Check the remote, confirm the key exists, add it to the agent, and register the public key with GitHub.

## Commands

```bash
git remote -v
ssh -T git@github.com
ssh-add -l
ssh-add ~/.ssh/id_ed25519
```

## Result

After the correct key is loaded and registered, GitHub should identify the account and Git operations should proceed.
