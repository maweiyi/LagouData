/**
 * Created by maweiyi on 7/13/16.
 */
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    education: String,
    jobNature: String,
    city: String,
    salary: String,
    workYear: String
});

module.exports.java = mongoose.model("java", jobSchema, "java");
module.exports.nodejs = mongoose.model("nodejs", jobSchema, "nodejs");
module.exports.ios = mongoose.model("ios", jobSchema, "ios");
module.exports.android = mongoose.model("android", jobSchema, "android");
module.exports.frontend = mongoose.model("frontend", jobSchema, "frontend");


/*module.exports.java = javaModel;
module.exports.node = nodejsModel;
module.exports.ios = iosModel;
module.exports.android = androidModel;
module.exports.frontend = frontendModel;*/