---
layout: default
title: Quickstart
parent: Help
nav_order: 2
---

# Setting up Local Server
1. Clone this repository or clone forked repository:

	`$ git clone https://github.com/[username]/annotate.git && cd annotate`

2. Install Vagrant https://www.vagrantup.com/downloads.html and VirtualBox https://www.virtualbox.org/wiki/Downloads

3. Start vagrant environment

	`$ vagrant up`

4. Start Jekyll and Flask
	```
	$ vagrant ssh
	[vagrant@localhost ~]$ cd /vagrant
	[vagrant@localhost ~]$ ./run.sh
	```

Navigate to [http://0.0.0.0:5555/annotate/](http://0.0.0.0:5555/annotate/) to create annotations

IMPORTANT!!!!! After creating annotations make sure to click on the "Create/Load Annotations" button located in the bottom left hand corner of the Mirador viewer. If this is not done, no annotations will be created or deleted. This only has to be done before navigating away from the create annotations page . It does not have to be done when switching between manifests.

# Add new annotations to GitHub site Locally
1. After new annotations have been created or deleted, navigate to the "annotate" folder on your device.
2. type in `git status`
3. The window should show a number of annotations in red text, these annotations have been created locally but not on the GitHub site.
4. type in git add _annotations to add all new annotations and possible changes.
5. type in git commit -m "message for commit here, usually can be something simple like 'new images'"
type in git push origin master Github normally takes a minute to rebuild the site. After the items should be rendered and available for viewing and reuse on the site.
