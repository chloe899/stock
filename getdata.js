var request = require("request");
var fs = require("fs");
var async = require("async");
var Models = require("./models");
var mongoose = require("mongoose");
var log = require("./lib/logger").getLogger();


var that = {};

that.getTodayData = function(){

    var url = "http://211.151.138.28/market/json";
    var data = {
        funcno:21000,
        version:1,
        sort:1,
        order:0,
        rowOfPage:2000,
        type:"0:2:9:18",
        curPage:1,
        field:"22:24:2:10:11:9:12:14:6:23:21:3:1:8:13:15:17:18:19:31:27"
    };
    request.post({form:data, url:url}, function(err, res, body){


        log.debug(body);

    });





};

that.getDayInfo = function(symbol, callback){

    var market = "SZ";
    if(/^6/.test(symbol)){
        market = "SH";
    }

    var url = "http://211.151.138.28/market/json";
    var data = {
        funcno:20009,
        version:1,
        stock_code:symbol,
        market:market,
        type:"day",
        count:200
    };
    request.post({form:data, url:url}, function(err, res, body){


        log.debug(body);
        if(callback){
            callback(err, body)

        }

    });



};


that.sendData = function(symbol, data, callback){


    var market = "SZ";
    if(/^6/.test(symbol)){
        market = "SH";
    }

    var url = "http://211.151.138.28/market/json";
    data.market = market;
    request.post({form:data, url:url}, function(err, res, body){


        log.debug(body);
        if(callback){
            callback(err, body)

        }

    });

};


//that.getTodayData();
that.getDayInfo("000001", function(){


});


