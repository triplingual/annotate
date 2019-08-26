---
layout: default
title: Creating GitHub website
parent: help.md
weight: 3
---

# Creating Github site and hosting annotations

This application allows for the site to be hosted on GitHub pages. Unfortunately new annotations can not be created using GitHub pages without deploying the flask application to a remote server. There are instructions on how to do this with Heroku [here](/docs/help/heroku).

New annotations can still be created and shared by using the Vagrant instance to create annotations on the local machine and pushing the changes to GitHub. This section give instructions on how to create a GitHub pages site. The options are forking or cloning. **Choose one**. There are multiple options to cater to comfort level. All `git` commands are done in the command line.

- Here is a quick tutorial [https://swcarpentry.github.io/git-novice/](https://swcarpentry.github.io/git-novice/)
- Extremely helpful cheat sheet [https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## Forking or templating - Best if you haven't created anything locally that you want to save
1. Login into Github account.
2. Navigate to https://github.com/dnoneill/annotate
  - Click the `Fork` button to keep the repository name `annotate`
  - Click the `Use this template` button (should be green) to rename the repository something other than `annotate`. If you preform this step make sure to follow the steps for [renaming the repo](#if-you-have-changed-the-repo-name-from-annotate-to-something-else) before proceeding.
3. After forking the site, go to the Settings tab.
4. Scroll down to the GitHub Pages section
5. In the Source dropdown select "master branch"
6. Click "Save"
7. Follow the directions in Running Locally section

## Cloning - Best if you have created annotations locally that you want to save.
1. Clone site
  - `git clone https://github.com/dnoneill/annotate.git`
2. Create new repository on GitHub
  - This can be done by logging into GitHub account and pressing `New` button
3. Remove origin
  - `git remote rm origin`
4. Point to new origin
  - `git remote add origin https://github.com/<username>/<reponame>.git`
5. Push to repo
  - `git push -u origin master`
6. Go to the repo page, and click on the Settings tab.
7. Scroll down to the GitHub Pages section
8. In the Source dropdown select "master branch"
9. Click "Save"
10. Follow the directions in Running Locally section

## If you have changed the repo name from `annotate` to something else
1. Go to _config.yml file.
2. Replace baseurl with `/<reponame>`
