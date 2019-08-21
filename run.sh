#!/usr/bin/env bash
bundle install
bundle update
bundle exec jekyll serve --force_polling --host='0.0.0.0' --config _config.yml,_config_dev.yml --port='5555' &
pip install --upgrade --user pip
pyvenv ENV
echo source ENV/bin/activate
cd _site/assets/python
pip install --user -r requirements.txt
python flaskserver.py
pkill -f jekyll
