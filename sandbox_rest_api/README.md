# Pluma sandbox REST API

The goal of this project is to be used to support Pluma's functional testing by providing a REST API.

For a detailed specification on how the Pluma sandbox REST API works, please refer to the [Sandbox REST API Specification](https://novabase.sharepoint.com/sites/CFCA/SitePages/Sandbox-REST-API-Specification.aspx) page. 

### Pre-requisites

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- sandbox-database must be up and running

### Local execution

#### Installing dependencies:
```
npm install
```

#### Starting development mode:
```
npm run dev
```

#### Access Sandbox REST API
Access the sandbox REST API [here](http://localhost:5000/products).

### Docker execution

#### Build the image:
```bash
 docker build -t sandbox-rest-api .
```
#### Run it:
```bash
docker run -d -p 5000:5000 --name sandbox-rest-api
```