'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    CourseSchema;



CourseSchema = new Schema({
    name: String,
    symbol: String,
    type:String,
    full_name:String,
    last_update: Date,
    "exchange":String,
    created_at:{type:Date, default:Date.now}
});

mongoose.model('Stock', CourseSchema, "stock");