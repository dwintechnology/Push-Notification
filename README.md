## Push notifications back end server build/start/test commands

### Set up

**Install mysql 5.7**
```bash
wget https://repo.mysql.com/mysql-apt-config_0.8.13-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.13-1_all.deb
sudo apt-get update
sudo apt install mysql-server
```
**Open remote access to mysql for datastudio**
```bash
 sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
 ```
Change this line 
bind-address    = 127.0.0.1 to bind-address    = 0.0.0.0

Restart mysql
```bash
systemctl restart mysql
```

Added white list google addresses

```sql
mysql -u root -p

GRANT ALL PRIVILEGES ON *.* TO 'root'@'64.18.%.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'64.233.160.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'66.102.%.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'72.14.192.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'74.125.%.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'108.177.8.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'173.194.%.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'207.126.144.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'209.85.128.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'216.58.192.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'216.239.32.%' IDENTIFIED BY 'root' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### Development

```bash
npm run build
```
```bash
npm run start
```

### Running tests

```bash
npm test
```

### Linting

```bash
npm run lint
```
