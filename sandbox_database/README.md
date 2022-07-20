# Sandbox database

The goal of this project is to be used to support Pluma's functional testing by providing a working database.

### Docker execution

#### Build the image:
```bash
 docker build -t sandbox-database .
```
#### Run it:
```bash
docker run -d -p 3306:3306 --name sandbox-database -e MYSQL_ROOT_PASSWORD=atf sandbox-database
```