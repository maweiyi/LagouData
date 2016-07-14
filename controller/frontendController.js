/**
 * Created by maweiyi on 7/14/16.
 */
var Job = require('../model/job');
exports.getCity = function (req, res, next) {
    var cityDict = {};

    Job.frontend.aggregate([{$group: {_id: "$positionName", total: {$sum: 1}}}], function (err, result) {
        //console.log(result);
        result.map(function (value) {
            var cityArr = [];
            for (var i in value) {
                cityArr.push(value[i]);
            }
            cityDict[cityArr[0]] = cityArr[1];
        });

        console.log(cityDict);
        res.send(JSON.stringify(cityDict));
    })


};

exports.getSalary = function (req, res, next) {
    Job.frontend.find({}, {"salary":1, "_id":0}, function (err, result) {
        var salaryArr = [];
        var salaryResult = [];
        var salaryValue = [];
        result.map(function (value) {
            var salarysplit = value["salary"].replace(/[k\u4e00-\u9fa5]/g, "");
            salaryArr.push(salarysplit);
        });
        salaryArr.map(function (value) {
            salaryResult.push(value.split("-"));
        });

        for (var i = 0; i < salaryResult.length; i++) {
            var k = 0;
            for (var j = 0; j < 2; j++) {
                k += parseInt(salaryResult[i][j]);
            }
            //console.log("kkkk--->",k/2);
            salaryValue.push(k/2);
        }

        var DictArr = {};
        DictArr["1-5"] = 0;
        DictArr["6-10"] = 0;
        DictArr["11-15"] = 0;
        DictArr["16-20"] = 0;
        DictArr["21-25"] = 0;
        DictArr["26-30"] = 0;
        DictArr["30"] = 0;

        salaryValue.map(function (value) {
            if (value >= 1 && value <= 5) {
                //console.log(value);
                DictArr["1-5"]++
            } else if (value >= 6 && value <= 10) {
                DictArr["6-10"]++;
            } else if (value >= 11 && value <= 15) {
                DictArr["11-15"]++;
            } else if (value >=16 && value <= 20) {
                DictArr["16-20"]++;
            } else if (value >= 21 && value <= 25) {
                DictArr["21-25"]++;
            } else if (value >= 26 && value <= 30) {
                DictArr["26-30"]++;
            } else {
                DictArr["30"]++;
            }

        });
        /*console.log(JSON.stringify(DictArr));
         console.log("1-5",DictArr["1-5"]);
         console.log("6-10",DictArr["6-10"]);
         console.log("11-15",DictArr["11-15"]);
         console.log("16-20",DictArr["16-20"]);
         console.log("21-25",DictArr["21-25"]);
         console.log("26-30",DictArr["26-30"]);
         console.log("30", DictArr["30"]);*/
        res.send(JSON.stringify(DictArr));

    })
};

exports.getWorkYear = function (req, res, next) {

    var workDict = {};
    Job.frontend.aggregate([{$group: {_id: "$workYear", total: {$sum: 1}}}], function (err, result) {
        result.map(function (value) {
            var workArr = [];
            for (var i in value) {
                workArr.push(value[i]);
            }
            workDict[workArr[0]] = workArr[1];
        });
        console.log(workDict);
        res.send(JSON.stringify(workDict));
    })
};

exports.getEducation = function (req, res, next) {
    var eduDict = {};
    Job.frontend.aggregate([{$group: {_id: "$education", total: {$sum: 1}}}], function (err, result) {
        result.map(function (value) {
            var eduArr = [];
            for (var i in value) {
                eduArr.push(value[i]);
            }
            eduDict[eduArr[0]] = eduArr[1];
        });
        console.log(eduDict);
        res.send(JSON.stringify(eduDict));
    })
};


exports.getJobNature = function (req, res, next) {
    var jobDict = {};
    Job.frontend.aggregate([{$group: {_id: "$jobNature", total: {$sum: 1}}}], function (err, result) {
        result.map(function (value) {
            var jobArr = [];
            for (var i in value) {
                jobArr.push(value[i]);
            }
            jobDict[jobArr[0]] = jobArr[1];
        });
        console.log(jobDict);
        res.send(JSON.stringify(jobDict));
    })
};