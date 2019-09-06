---
layout: default
title: Quickstart
parent: help.md
weight: 2
---

**Make sure you have [git](https://git-scm.com/downloads) installed before going any further.**

# Setting up Local Server
1. Open Terminal(Mac/Linux)/Git Bash(Windows). Clone this repository or clone forked repository:

	`$ git clone https://github.com/[username]/annotate.git && cd annotate`

2. Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

3. Start vagrant environment in terminal.

	`$ vagrant up`

4. Start Jekyll and Flask
	```
	$ vagrant ssh
	[vagrant@localhost ~]$ cd /vagrant
	[vagrant@localhost ~]$ ./maclinux-run.sh #for mac or linux systems
	[vagrant@localhost ~]$ ./windows-run.bat #for windows machines
	
	```

Navigate to [http://localhost:5555/annotate/](http://localhost:5555/annotate/) to create annotations

# Add new annotations to GitHub Website Locally
**Note** This should only be done if you have a GitHub website running. See [{{site.baseurl}}/creating-github]({{site.baseurl}}/creating-github) for instructions on how to create website.
1. After new annotations have been created or deleted, navigate to the "annotate" folder on your device.
2. type in `git status`
3. The window should show a number of annotations in red text, these annotations have been created locally but not on the GitHub site.
4. type in `git add *` to add all changes.
5. type in git commit -m "message for commit here, usually can be something simple like 'new images'"
6. type in `git push origin master`. Github normally takes a minute to rebuild the site. After the items should be rendered and available for viewing and reuse on the site.
