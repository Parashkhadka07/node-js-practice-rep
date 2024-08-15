const roomModel = require("./room.model");
//CRUD
const create = async (payload) => {
  return roomModel.create(payload);
};
//READ FOR ALL LIST
const list = async () => {
  return roomModel.find();
};

//READ FOR ONLY ONE THING LIKE SINGLE ROOM
const readbyID = async (roomno) => {
  return roomModel.findOne({ Number: roomno });
};

//UPDATE

//1.ALL OR MORE THAN ONE  DETAILS OF ROOM
const updatebyId = async (roomno, payload) => {
  return roomModel.updateOne({ Number: roomno }, payload);
};

//2.UPDATE ONLY ONE ELEMENT OF ROOM
const updatestatus = async (roomno) => {
  const room = await roomModel.findOne({ Number: roomno });
  if (!room) throw new Error("Room not found!");
  const { isFilled } = room;
  return roomModel.updateOne({ Number: roomno }, { isFilled: !isFilled });
};

//DELETE
const remove = async (roomno) => {
  return roomModel.deleteOne({ Number: roomno });
};
module.exports = { list, readbyID, updatebyId, updatestatus, remove, create };
