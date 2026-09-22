# SafeRepo Baseline Fixture (`saferepo-fixture-safe`)

## Purpose
This repository serves as a deterministic, negative-control benchmark fixture for the **SafeRepo** security platform. Its primary role is to verify the scanner engine's baseline handling, false-positive resistance, and clean reporting pipelines.

## Tech Stack
- **Framework:** Next.js (App Router)
- **UI:** React
- **Language:** TypeScript
- **Validation Engine:** Zod

## SafeRepo Fixture Classification
- **Target Fixture Class:** Baseline Safe (Negative Control)
- **Target Scanners:** Semgrep, Trivy, Gitleaks, OSV, npm audit
- **Target Finding Count:** Exactly 0

## Security Declaration
- This repository contains **NO** intentional vulnerabilities.
- This repository contains **NO** actual, fake, or synthetic secrets.
- This repository contains **NO** vulnerable packages or outdated insecure dependencies.
- This repository contains **NO** malware, reverse shells, or dangerous shell commands.
