"""
Aura Labs Pricing Engine — Master Runner

Runs all 4 generators from a single command.

Usage:  python generate-all.py
"""

import sys
import subprocess
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent

GENERATORS = [
    ("Generator #1 — Internal Price List PDF",    "generate-price-list.py"),
    ("Generator #2 — Customer Catalog PDF",        "generate-customer-catalog.py"),
    ("Generator #3 — Distributor Pricing PDF",     "generate-distributor-pricing.py"),
    ("Generator #4 — Website JSON",                "generate-website-json.py"),
]


def main():
    print("=" * 60)
    print("  AURA LABS PRICING ENGINE")
    print("=" * 60)

    errors = []
    for label, script in GENERATORS:
        print(f"\n▶ {label}")
        result = subprocess.run(
            [sys.executable, str(SCRIPT_DIR / script)],
            capture_output=False
        )
        if result.returncode != 0:
            errors.append(script)
            print(f"  ✗ FAILED: {script}")

    print("\n" + "=" * 60)
    if errors:
        print(f"  COMPLETE WITH ERRORS: {len(errors)} failed")
        for e in errors:
            print(f"    - {e}")
        sys.exit(1)
    else:
        print("  ALL GENERATORS COMPLETE ✓")
        print(f"\n  Output: pricing/output/")
        print("    Aura-Labs-Price-List.pdf")
        print("    Aura-Labs-Customer-Catalog.pdf")
        print("    Aura-Labs-Distributor-Pricing.pdf")
        print("    pricing.json")
        print("    pricing-flat.json")
    print("=" * 60)


if __name__ == "__main__":
    main()
