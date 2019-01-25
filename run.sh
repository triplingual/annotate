#!/usr/bin/env bash
pyvenv ENV
echo source ENV/bin/activate
pip install -r requirements.txt
python flaskserver.py &
bundle install
jekyll serve --force_polling --host='0.0.0.0' --config _config.yml,_config_dev.yml
pkill -f flask
