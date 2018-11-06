# IIIF-Annotate

Create/store/load static annotations on IIIF manifests via Jekyll

## Getting started
### Running Locally
- Clone this repository and navigate into it:

  `$ git clone https://github.com/dnoneill/annotate.git && cd annotate`

- Start vagrant environment

  `$ vagrant up`

- Start Jekyll and Flask

  `$ vagrant ssh`

  `[vagrant@localhost ~]$ cd /vagrant`

  `[vagrant@localhost ~]$ ./run.sh`

- Navigate to http://0.0.0.0:4000/annotate to create annotations


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
