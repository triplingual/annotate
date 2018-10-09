#!/usr/bin/env bash

echo source ENV/bin/activate
python flaskserver.py &
jekyll serve --force_polling

