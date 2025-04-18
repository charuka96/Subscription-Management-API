import mongoose from "mongoose";
const subcriptionSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,'subscrription name is required'],
        trime:true,
        minLength:2,
        maxLength:100
    },
    price:{
        type:Number,
        required:[true , 'subscription price is required'],
        min:[0,'price must be grater than 0']
    }
,
currency:{
    type:String,
    enum:['USD','EUR','GPB'],
    default:'USD'
},

frequency:{

    type:String,
    enum:['Daly','Monthly','Yearly'],
},

catagory:{
    type:String,
    enum:['sport','news','entertaiment','lifeStyle','technology','finance','politics','other'],
    required:true
},

paymentMethod:{
    type:String,
    required:true,
    trim:true,
},
status:{
    type:String,
    enum:['active','cancled','expired'],
    default:'active'
},
startDate:{
    type:Date,
    required:true,
    validate:{
        validator:(value)=>value<= new Date(),
        massage:'Start date must be in the past'
    }
},

renewaltDate:{
    type:Date,
  
     validator: function(value){
        return value > this.startDate
     },
     massage:'Renewal date must be after the start date'
},

user:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
    index:true,
}


} ,{timestamp:true})

//Auto- calculate if renewal Date is missing

subcriptionSchema.pre('save',function(){

    if(!this.renewaltDate){
        const renewalPeriads = {
            daliy:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };

        this.renewaltDate = new Date(this.startDate);
        this.renewaltDate.startDate(this.renewaltDate.getDate()+renewalPeriads[this.frequency])
    }


    // Auto-update the renewal date is pass
    if(this.renewaltDate <new Date()){

        this.status='expired';

    
    }

    next();

});

const Subcription = mongoose.model('Subcription',subcriptionSchema);
export default Subcription;