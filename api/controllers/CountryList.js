const db = require("../models/index");
const ResponseLog = require("../../core/ResponseLog");
const SeqFunc = require("../../core/SeqFunc");


exports.getList = async (req, res) => {
    try {
      let Columns = [["Flag","FlagImage"],["Short Name","BTShortName"],["Description","CDescription"],"IsActive"]
      let data = await SeqFunc.getAll(db.CountryList,{},true,Columns);
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
    
    let data = await SeqFunc.getOne(db.CountryList,{where: {BTID:req.query.BTID}});

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
    let data = await SeqFunc.Delete(db.CountryList,{where:{BTID:req.query.BTID}});

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
      db.CountryList,
      { where:{BTID: Header.BTID ? Header.BTID : 0 }},
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
