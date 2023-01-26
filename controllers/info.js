import { response } from "express";

import Model from "../models/info.js";

class Controller {
  // callback functions used in info routes
  //get all the info
  getAll(req, res, next) {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    })

  }

  //get an info by id
  get(req, res, next) {
    let { id } = req.params;
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }


  // creating new info
  post(req, res, next) {
    
    let body = req.body;
    console.log("body ",body)
    let doc = new Model(body);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //update an info by _id
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Model.updateOne({ _id: id }, { $set: body }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //delete an info by id
  delete(req, res, next) {
    let { id } = req.params;
    Model.findByIdAndDelete({_id: id}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({success: true, response});
    });
  }
}

const controller = new Controller();

export default controller;


