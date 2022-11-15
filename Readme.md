Install required packages for this project
```
npm install
```

Before launching the application, you should create .env file at main foler and put your credentials from mongodb connection string into created file like this:
```
MONGO_URL_STRING = 'mongodb+srv://<username>:<password>@cluster0.ztbp2pl.mongodb.net/coffeemug'
```

Optionally you can choose port number for this application (port 5000 is default) in .env like this:
```
SERVER_PORT = 5000
```

Now you can start the application by typing this command
```
npm start
```

## Api examples

### Get all products

GET - /api/products/get

### Get product

GET - /api/products/get/:productId

### Create product

POST - /api/products/create
```
{
    "name":"Test product",
    "price":"9.99"
}
```

### Update product

PUT - /api/products/update/:productId
```
{
    "name":"Updated product",
    "price":"5.59"
}
```

### Delete product

DELETE - /api/products/delete/:productId