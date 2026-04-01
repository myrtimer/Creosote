#! /usr/bin/bash
while :
do
    echo "Disable clientside mods = 1"
    echo "Enable clientside mods  = 2"
    echo "Quit                    = q"

    read choice

    if [ $choice = "1" ]; then
        echo "Disabling..."
        `python3 disableClientMods.py`
    elif [ $choice = "2" ]; then
        echo "Enabling..."
        `python3 enableClientMods.py`
    elif [ $choice = "q" ]; then
        echo "Quitting..."
        break
    else
        echo "Invalid choice!"
    fi
done
