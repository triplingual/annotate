# Local IIIF Annotation server

Installation instructions are found here: [https://dnoneill.github.io/annotate/help](https://dnoneill.github.io/annotate/help)

## Quickstart

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
  
4.5. For hosting on GitHub pages read documentation here: [https://dnoneill.github.io/annotate/helpdocs/help/creating-github/](https://dnoneill.github.io/annotate/helpdocs/help/creating-github/)

6. Navigate to [http://localhost:5555/annotate/](http://localhost:5555/annotate/) to create annotations on local computer.


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
