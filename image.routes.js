module.exports = app => {
    const image = require("./image.controller");

    // Create a new Customer
    app.post("/image", image.create);

    // Retrieve all Customers
    app.get("/image", image.findAll);

    // Retrieve a single Customer with customerId
    app.get("/image/:imageId", image.findOne);

    // Update a Customer with customerId
    app.put("/image/:imageId", image.update);

    // Delete a Customer with customerId
    app.delete("/image/:imageId", image.delete);

    // Create a new Customer
    app.delete("/image", image.deleteAll);
};
