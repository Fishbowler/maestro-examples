#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

maestro test -e MY_TIMEOUT=120000 "$SCRIPT_DIR/flow.yaml"