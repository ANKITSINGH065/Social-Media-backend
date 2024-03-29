const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);
exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
