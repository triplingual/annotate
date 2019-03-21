---
layout: default
title: Deploying to Heroku
parent: Help
nav_order: 4
---

1. Create/login to Heroku Account (signing up is free)
2. Download the Heroku CLI ([download bundles](https://devcenter.heroku.com/articles/heroku-cli#download-and-install))
3. Type in the command line `heroku login`
4. Clone annotate-flask repository
`git clone https://github.com/dnoneill/annotate-flask.git`
5. Create a virtual environment with python 
6. Install dependencies
`pip install -r requirements.txt`
7. Go to your GitHub account
8. Navigate to the Settings page
9. Click on Developer settings.
10. Click on the person access tokens tab
11. Create a token with write access and copy the token
12. Open the settings.py file
13. add token to `github_token` line
14. Fill in rest of settings file
15. In the annotate-flask repository create heroku application

	`heroku create <heroku-app-name>`
16. Go to heroku dashboard [https://dashboard.heroku.com/apps/](https://dashboard.heroku.com/). The application should show as deployed
17. Open _config.yml file in Jekyll site
18. change `api_server` to heroku server domain 

	`api_server: <heroku domain>/annotations/`
19. Push to GitHub
20. Create annotations in GitHub pages 
