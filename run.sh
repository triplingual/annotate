bundle install
bundle update
bundle exec jekyll build -d _site
wait
ln -s $PWD/assets/images/custom $PWD/_data
bundle exec jekyll serve --force_polling --host='0.0.0.0' --config _config.yml,_config_dev.yml --port='5555' &
python -m pip install --upgrade --user pip
python -m venv ENV
python pyvenv ENV
echo source ENV/bin/activate
cd _site/assets/python
python -m pip install --user -r requirements.txt
export FLASK_APP=flaskserver.py
python -m flask run --host=0.0.0.0 --port=5000
pkill -f jekyll
