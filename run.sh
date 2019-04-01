#!/usr/bin/env bash
pip install --upgrade --user pip
pyvenv ENV
echo source ENV/bin/activate
pip install --user -r requirements.txt
python flaskserver.py &
bundle install
JEKYLL_ENV=production jekyll serve --force_polling --host='0.0.0.0' --config _config.yml,_config_dev.yml --port='5555'
pkill -f flask
