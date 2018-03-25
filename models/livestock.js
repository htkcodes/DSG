var mongoose = require('mongoose');
// User Schema
let Schema=mongoose.Schema;
var LiveStockSchema = Schema({
	Location_Code: {
		type: Number
	},
	Property_Size: {
		type: Number
	},
	Parish_Code: {
		type: Number
	},
Parish_Extension_Code: {
		type: Number
    },
    District:{
        type:String
    },
    Parish:{
        type:String
	},
	Parish_Extension_Name:{
		type:String
	},
	Livestock_Name:{
        type:String
    },
    Livestock_Type_Code:{
        type:Number
    },
    Livestock_Group_Code:{
        type:Number
    },
    Livestock_Group_Name:{
        type:String
    },
    Livestock_Count_Sum:{
        type:Number
    },
    Farmers:{
type:Number
    }  
},{collection:'livestock'});


module.exports = mongoose.model('LiveStocks', LiveStockSchema);
