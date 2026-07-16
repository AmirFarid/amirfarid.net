---
title: Teaching Flash Memory Security at the 2025 MTU WICS Summer Youth Program
summary: A recap of my contribution to the Cybersecurity Track, where students explored flash translation layers, firmware deployment, disk encryption, and deleted-data recovery.
date: 2025-06-25
image:
  src: /images/mtu-wics-cybersecurity-track-2025.png
  alt: Students working in the MTU Security and Privacy Lab during a hands-on cybersecurity session
tags:
  - cybersecurity education
  - flash storage
  - FTL
---

On June 25, 2025, I contributed to the Cybersecurity Track of the MTU WICS Summer Youth Program in the Michigan Tech Security and Privacy Lab. The session introduced senior K-12 students to cybersecurity through flash memory security and hands-on storage-system exercises.

My part focused on helping students understand how a flash storage device works below the file-system layer. We discussed the flash translation layer, why it exists, and how its internal pieces connect host writes to physical flash pages and blocks.

The hands-on work gave students a practical path from concept to system behavior. They learned how firmware can be deployed to an electronic board, how open-source flash firmware can be ported for a teaching setup, and how storage behavior changes when security mechanisms are integrated into the flash translation layer.

One of the most useful teaching moments was showing how deleted data can sometimes be restored. That exercise helped students see that deleting a file is not always the same as removing the underlying data, and that storage security depends on understanding what the device actually does internally.

For me, the session connected systems security education with real implementation details. Flash memory security is a good teaching topic because students can see the gap between the simple interface a storage device presents and the more complicated mechanisms that make the device work.
