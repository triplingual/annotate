---
layout: default
title: Quickstart
parent: help.md
weight: 2
---

# Setting up Local Server

1. Install Dependencies
- [Vagrant](https://www.vagrantup.com/downloads.html)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Git](https://git-scm.com/downloads)

2. (Optional). Fork repository and create own website. See [GitHub pages instructions]({{site.baseurl}}/help/creating-github/) for steps. Otherwise use `https://github.com/dnoneill/annotate.git` for step 3.

3. Open Terminal(Mac/Linux)/Git Bash or Command Line(Windows). Clone this repository or clone forked repository and change directory:

	```
	$ git clone https://github.com/[username]/annotate.git
	$ cd annotate
	```

3. Start vagrant environment in terminal.

	`$ vagrant up`

4. Start Jekyll and Flask
	```
	$ vagrant ssh
	[vagrant@localhost ~]$ cd /vagrant
	[vagrant@localhost vagrant]$ dos2unix run.sh #windows machines only
	[vagrant@localhost vagrant]$ ./run.sh
	```

Navigate to [http://localhost:5555/annotate/](http://localhost:5555/annotate/) to create annotations. **Note** Not all manifests load using Microsoft Edge. Firefox and Chrome are better alternatives.

# Add new annotations to GitHub Website Locally
**Note** This should only be done if you have a GitHub website running. See [{{site.baseurl}}/creating-github]({{site.baseurl}}/creating-github) for instructions on how to create website.
1. After new annotations have been created or deleted, navigate to the "annotate" folder on your device.
2. type in `git status`
3. The window should show a number of annotations in red text, these annotations have been created locally but not on the GitHub site.
4. type in `git add *` to add all changes.
5. type in git commit -m "message for commit here, usually can be something simple like 'new images'"
6. type in `git push origin master`. Github normally takes a minute to rebuild the site. After the items should be rendered and available for viewing and reuse on the site.
