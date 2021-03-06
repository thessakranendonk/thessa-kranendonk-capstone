const knex = process.env.NODE_ENV === 'production' 
? require('knex')(require("../knexfile").production)
: require('knex')(require("../knexfile").development);

    exports.getAllFoods = (_req, res) => {
        knex("foods")
       
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({
                errorMessage: "Unable to retrieve dishes from database",
            })
        })
    }
