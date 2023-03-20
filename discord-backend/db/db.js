const mongoose = require('mongoose');
const path = require('path')
// //console.log('inside mongoose')
//console.log(path.resolve(__dirname, '../dev.env'))
require('dotenv').config();
// console.log(process.env.MONGODB_URL)
// mongoose.connect(process.env.MONGODB_URI)
// console.log(process.env.MONGODB_URL_ATLAS)
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(err+'Could not connect to MongoDB...'));