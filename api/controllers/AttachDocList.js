const db = require("../models/index");
const ResponseLog = require("../../core/ResponseLog");
const SeqFunc = require("../../core/SeqFunc");


exports.getList = async (req, res) => {
    try {
      let Columns = [["Short Name","ADShortName"],["Description","ADDescription"],"IsActive"]
      let data = await SeqFunc.getAll(db.AttachDocList,{},true,Columns);
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
    
    let data = await SeqFunc.getOne(db.AttachDocList,{where: {ADID:req.query.ADID}});

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
    let data = await SeqFunc.Delete(db.AttachDocList,{where:{ADID:req.query.ADID}});

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
      db.AttachDocList,
      { where:{ADID: Header.ADID ? Header.ADID : 0 }},
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
