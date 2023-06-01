#!/bin/sh

while true 
do
    echo "Checking for repo updates..."

    REMOTE=$(git ls-remote -q --sort=committerdate | head -1 | awk '{print $1}');
    LOCAL=$(git rev-parse HEAD)

    if [[ $REMOTE != $LOCAL ]]; then
        git pull
    fi

    echo "Update Check Done."
    sleep 3s
    echo "Press [CTRL+C] to stop..."
    sleep 3m
done
