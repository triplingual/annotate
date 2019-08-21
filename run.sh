#!/usr/bin/env bash
bundle install
bundle update
bundle exec jekyll build -d _site
wait
bundle exec jekyll serve --force_polling --host='0.0.0.0' --config _config.yml,_config_dev.yml --port='5555' &
pip3 install --upgrade --user pip
python3 -m venv ENV
echo source ENV/bin/activate
cd _site/assets/python
echo pip3 install --user -r requirements.txt
export FLASK_APP=flaskserver.py
python3 -m flask run --host=0.0.0.0 --port=5000
pkill -f jekyll
