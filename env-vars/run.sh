#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )


export MAESTRO_EXAMPLE="potato"
maestro test "$SCRIPT_DIR/flow.yaml"