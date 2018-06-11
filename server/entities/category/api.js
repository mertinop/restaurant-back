const getCategory = require('./controller').getCategory;
const getAllCategories = require('./controller').getAllCategories;
const createCategory = require('./controller').createCategory;
const editCategory = require('./controller').editCategory;
const deleteCategory = require('./controller').deleteCategory;
const categoryAPI = (app) => {
  //get all categories
  app.get('/api/categories', (req, res) => {
    getAllCategories().then(
      (result) => { res.send(result); },
      (error) => { res.status(500).send(error); }
    );
  })
  //get single category
  app.get('/api/categories/:id', (req,res) => {
    getCategory(req.params.id).then(
      (result) => { res.send(result); },
      (error) => { res.status(400).send(error); }
    );
  });
  //create new category
  app.post('/api/categories', (req, res) => {
    createCategory(req.body).then(
      (result) => { res.send(Object.assign({}, result._doc, { created: true })); },
      (error) => { res.status(400).send({ created: false }); }
    );
  });
  //edit category
  app.put('/api/categories/:id', (req, res) => {
    editCategory(req.params.id, req.body).then(
      (result) => { res.send(result); },
      (error) => { res.status(400).send(error)}
    );
  });
  //remove category
  app.delete('/api/categories/:id', (req, res) => {
    deleteCategory(req.params.id, req.body).then(
      (result) => { res.send(result); },
      (error) => { res.status(400).send(error)}
    );
  });

};

module.exports = categoryAPI;