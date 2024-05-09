# GarbZone
An e-commarce store application created with React and using a simple json-server backend.

## Installing and Runnin 🖥️

```command
git clone https://github.com/adrianrakiec/GarbZone.git
cd GarbZone
npm i
npm run dev
```

The application is running on http://localhost:5173/ while the json-server at http://localhost:3000 is firing up.

## Endpoints

| path                  | method  | description                                                                                             |
| --------------------- | ------  | ------------------------------------------------------------------------------------------------------- |
| /products             | `GET`   | Get all products                                                                                        |
| /products/1           | `POST`  | Get the product with ID 1.                                                                              |
| /products/1           | `DELETE`| Delete the product with ID 1                                                                            |
| /women/bestsellers    | `GET`   |  Get bestsellers from "Women" category                                                                  |
| /men/bestsellers      | `GET`   | Get bestsellers from "Men" category                                                                     |
| /children/bestsellers | `GET`   | Get bestsellers from "Children" category                                                                |
| /favourites           | `GET`   | Get all products added to favorites list                                                                |
| /favourites           | `POST`  | Adds a product to the favorites list. Requires sending a body with the product ID, e.g., {productId: 1} |
