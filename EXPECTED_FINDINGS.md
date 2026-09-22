# Expected Findings Ledger: saferepo-fixture-safe

| ID | Scanner | Category | Target Path | Expected Signature | Scanner Severity | SafeRepo Severity | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| BASE-00 | Semgrep | SAST | Entire Repository | None | None | None | Clean baseline |
| BASE-01 | Gitleaks | Secret Leak | Entire Repository | None | None | None | Zero credentials present |
| BASE-02 | npm audit | SCA | package.json | None | None | None | All dependencies patched |
| BASE-03 | OSV | SCA | package.json | None | None | None | Zero known advisories |
| BASE-04 | Trivy | Misconfig/SCA | Entire Repository | None | None | None | Hardened configurations |
