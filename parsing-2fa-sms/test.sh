#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

random6()
{
   a=$(printf '%04d' $(( RANDOM % 10000 )) )
   b=$(printf '%04d' $(( RANDOM % 10000 )) )
   rand="$a$b"
   echo "${rand:0:6}"
}

LASTRANDOM=""

# shellcheck disable=SC2034
for x in {1..10}
do
    LASTRANDOM=$(random6)
    adb emu sms send 1010 "Your code is $LASTRANDOM"
done

maestro test -e CODE=$LASTRANDOM "$SCRIPT_DIR/flow.yaml"