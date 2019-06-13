---
layout: default
title: Creating GitHub website
parent: Help
nav_order: 2
---

Creating Github site and hosting annotations

This application allows for the site to be hosted on GitHub pages. Unfortunately new annotations can not be created using GitHub pages without deploying the flask application to a remote server. There are instructions on how to do this with Heroku [here](/docs/help/heroku).

New annotations can still be created and shared by using the Vagrant instance to create annotations on the local machine and pushing the changes to GitHub. This section give instructions on how to create a GitHub pages site.

# Forking
1. Login into Github account.
2. Navigate to https://github.com/dnoneill/annotate and Fork the repository.
3. After forking the site, go to the Settings tab.
4. Scroll down to the GitHub Pages section
5. In the Source dropdown select "master branch"
6. Click "Save"
7. Follow the directions in Running Locally section below

# Cloning
1. Clone site
`git clone https://github.com/dnoneill/annotate.git`
2. Create new repository on GitHub ()
3. Remove origin
`git remote rm origin`
4. Point to new origin
`git remote add origin https://github.com/<username>/<reponame>.git`
5. Push to repo
`git push -u origin master`
6. Go to the repo page, and click on the Settings tab.
7. Scroll down to the GitHub Pages section
8. In the Source dropdown select "master branch"
9. Click "Save"
10. Follow the directions in Running Locally section below
