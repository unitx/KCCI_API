const db = require("../models/index");
const ResponseLog = require("../../core/ResponseLog");
const SeqFunc = require("../../core/SeqFunc");


exports.getList = async (req, res) => {
    try {
      let Columns = [["CompName","Company"],"ContactPerson","ContactNo","Email","URL","City","State","IsActive"]
      let data = await SeqFunc.getAll(db.Company,{},true,Columns);
    if (data.success) {
      ResponseLog.Send200(req, res, data.Data);
    } else {
      ResponseLog.Error200(req, res, "No Record Found!");
    }
  } catch (err) {
    ResponseLog.Error200(req, res, err.message);
  }
};

exports.getOne = async (req, res) => {
  try {
    
    let data = await SeqFunc.getOne(db.Company,{where:{CompID:req.query.CompID}});

    if (data.success) {
      ResponseLog.Send200(req, res, data.Data);
    } else {
      ResponseLog.Error200(req, res, "No Record Found!");
    }
  } catch (err) {
    ResponseLog.Error200(req, res, err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await SeqFunc.Delete(db.Company,{where:{CompID:req.query.CompID}});

    if (data.success) {
      ResponseLog.Delete200(req, res);
    } else {
      ResponseLog.Error200(req, res, "No Record Found!");
    }
  } catch (err) {
    ResponseLog.Error200(req, res, err.message);
  }
};

exports.CreateOrUpdate = async (req, res) => {
  try {
    let Header = req.body.Header;

    Header.CreatedUser = req.headers.username;
    Header.ModifyUser = req.headers.username;

    let Data = await SeqFunc.updateOrCreate(
      db.Company,
      { where: {CompID: Header.CompID ? Header.CompID : 0 }},
      Header
    );

    if (Data.success) {
      if (Data.created) {
        ResponseLog.Create200(req, res);
      } else {
        ResponseLog.Update200(req, res);
      }
    }
  } catch (err) {
    ResponseLog.Error200(req, res, err.message);
  }
};
