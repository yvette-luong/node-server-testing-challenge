const express = require("express");


const Pro = require("./pmodel");

const routerPro = express.Router();

routerPro.get("/", (req, res) => {
    Pro.find() 
    .then(projects =>{
        res.status(200).json(projects);
    })
    .catch(err =>{
        res.status(500).json({ message :"Failed to get information"})
    })
});

routerPro.get("/:id", (req, res) => {
    const { id } = req.params;
    Pro.findById(id)
    .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Could not find Project with given id." });
    }
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get Projects. Server dumb" });
  });
});

routerPro.post("/", (req, res) => {
    Pro.add(req.body)
    .then(projects => {
      if (projects) {
        Pro.findById(project[0])
        .then(projects => {
          res.status(201).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "ERR!" });
          });
      } else {
        res.status(400).json({ messe: "Could not find" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "give infor!" });
    });
});

routerPro.delete("/:id", (req, res) => {
    const id = req.params.id;
    Pro.remove(id)
    .then((id) => {
      if (id > 0) {
        res.status(200).json({ message: " tada tada, you boo, say bye! " });
      } else {
        res.status(404).json({ message: " Deleted success, happy srpint! " });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: " Error in delete request, sad life!",
      });
    });
});


module.exports = routerPro;