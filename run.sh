#!/usr/bin/env bash
pyvenv ENV
echo source ENV/bin/activate
pip install Flask
pip install flask_cors
python flaskserver.py &
jekyll serve --force_polling
pkill -f flask
