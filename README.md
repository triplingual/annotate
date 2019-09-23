# Local IIIF Annotation server

Installation instructions are found here: [https://dnoneill.github.io/annotate/help](https://dnoneill.github.io/annotate/help)

## Quickstart

1. Install Dependencies
- [Vagrant](https://www.vagrantup.com/downloads.html)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Git](https://git-scm.com/downloads)

2. (Optional). Fork repository and create own website. See [GitHub pages instructions](https://dnoneill.github.io/annotate/help/creating-github/) for steps. Otherwise use `https://github.com/dnoneill/annotate.git` for step 3.

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


### Requirements for Development
- Ruby >=2.2
- Jekyll >=3.5
- Bundler >=1.12
- Python

### Development
- Clone this repository and navigate into it:

  `$ git clone https://github.com/dnoneill/annotate.git && cd annotate`
- Install dependencies:

  `$ bundle install`
- Create ENV, install Flask in ENV, start Flask and Jekyll

  `$ ./run.sh`
