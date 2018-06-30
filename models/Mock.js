var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Mock = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description :{
    type:String
  },
  image: {  
     type: String
  },
  currency: {  
    type: String
  },
  link:{  
      type: String 
  }  
 

},
{
    collection: 'mocks'
});

module.exports = mongoose.model('Mock', Mock);