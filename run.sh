#!/usr/bin/env bash
pyvenv ENV
echo source ENV/bin/activate
pip install Flask
pip install flask_cors
python flaskserver.py &
bundle install
jekyll serve --force_polling --host='0.0.0.0'
pkill -f flask
