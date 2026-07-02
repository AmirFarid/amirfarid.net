---
title: Running FIO on OpenNFM
summary: Notes for setting up a repeatable FIO run while studying flash-storage behavior in an OpenNFM environment.
date: 2026-01-18
environment: OpenNFM test environment
tools:
  - fio
  - OpenNFM
  - Linux shell
tags:
  - storage
  - FIO
  - OpenNFM
---

## Problem

Run a controlled workload against an OpenNFM-backed setup and keep the result reproducible.

## Environment

OpenNFM test environment with FIO available on the host or guest system.

## Symptoms

Storage experiments become hard to compare when workload size, block size, runtime, or device target changes between runs.

## Root Cause

Benchmark commands often encode assumptions that are not written down with the result.

## Fix

Use an explicit job file or command with named parameters, and record the target device, workload, runtime, and output file.

## Commands

```bash
fio --name=randwrite \
  --filename=/path/to/test/device-or-file \
  --rw=randwrite \
  --bs=4k \
  --iodepth=16 \
  --runtime=60 \
  --time_based \
  --direct=1 \
  --group_reporting
```

## Result

The run produces a baseline workload record that can be compared against later OpenNFM configuration changes.
