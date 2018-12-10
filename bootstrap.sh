sudo yum update
sudo yum install -y epel-release
sudo yum install -y python-pip
sudo pip install Flask
sudo pip install flask_cors
sudo yum install -y ruby
sudo yum install -y gcc g++ make automake autoconf curl-devel openssl-devel zlib-devel httpd-devel apr-devel apr-util-devel sqlite-devel
curl -sSL https://rvm.io/mpapis.asc | gpg --import -
curl -L get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm
rvm install 2.3.0
rvm use 2.3.0 --default
sudo yum install -y rubygems
sudo gem update
