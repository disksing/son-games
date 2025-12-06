#!/usr/bin/env bash
set -euo pipefail

# Restore project files from backup folder to project root.
# Usage:
#   bash scripts/restore.sh "版本一"
# Optional env:
#   BACKUP_DIR (default: "back up p")

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

BACKUP_DIR_DEFAULT="back up p"
BACKUP_DIR="${BACKUP_DIR:-${BACKUP_DIR_DEFAULT}}"

VERSION_NAME="${1:-}"
if [[ -z "${VERSION_NAME}" ]]; then
  echo "Usage: bash scripts/restore.sh \"版本名\"" >&2
  echo "Example: bash scripts/restore.sh \"版本一\"" >&2
  exit 1
fi

SRC_PATH="${PROJECT_ROOT}/${BACKUP_DIR}/${VERSION_NAME}"
if [[ ! -d "${SRC_PATH}" ]]; then
  echo "Backup version directory not found: ${SRC_PATH}" >&2
  exit 2
fi

echo "Restoring from: ${SRC_PATH} -> ${PROJECT_ROOT}"

# rsync preserves times/permissions and handles spaces; trailing slashes copy contents.
rsync -a "${SRC_PATH}/" "${PROJECT_ROOT}/"

echo "Done. Project restored to: ${VERSION_NAME}"


