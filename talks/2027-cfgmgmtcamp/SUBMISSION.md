# CfgMgmtCamp 2027 submission

Working copy of the public parts of the Pretalx proposal, so changes can be agreed here and pasted into Pretalx. Pretalx text fields accept Markdown. Each field below is written exactly as it should be pasted, so copy from the source file rather than a rendered preview, which drops the formatting. Notes about a field are in italics and aren't part of it.

Proposal state: **confirmed** (accepted 29 September 2026, confirmed 30 September 2026).

## Title

_Maximum 200 characters._

openvox-ca: A Drop-In Replacement for the OpenVox CA, Built to Scale

## Session type

Short Talk, Monday & Tuesday (25 minutes).

## Track

Vox/Puppet.

## Abstract

Every OpenVox and Puppet fleet trusts a certificate authority written in Clojure — a language with a shrinking pool of maintainers, running security-sensitive code that very few contributors are equipped to review or safely change. **openvox-ca** is a from-scratch reimplementation of that CA in Go: a small, self-contained binary that speaks the exact same HTTP API your agents already use and reads/writes the same on-disk CA layout, so existing fleets can adopt it with minimal reconfiguration. We picked Go deliberately, for this component specifically: a CA is a security perimeter, and it benefits from being its own small, independently-scalable process rather than living inside whatever runtime the rest of the server uses. Chris Boot and Trevor Vaughan, the maintainers of openvox-ca, introduce the project, the reasoning behind it, and how you can help.

## Description

_Optional._

- Project: <https://github.com/voxpupuli/openvox-ca>
- Slides (WIP): <https://github.com/bootc/openvox-ca-talks/tree/main/talks/2027-cfgmgmtcamp>

## Speakers

- Chris Boot
- Trevor Vaughan (invited)
