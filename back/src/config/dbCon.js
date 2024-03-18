const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://juanesrp:1V4IDdC7Wo9KmGUk@micluster0.o5uutjs.mongodb.net/Movies?retryWrites=true&w=majority&appName=miCluster0"
  );
};

module.exports = dbCon;
