/**
 * Created by maweiyi on 7/14/16.
 */
var express = require('express');
var Job = require('../controller/javaController');
var router = express.Router();
router.get("/city", Job.getCity);
router.get("/salary", Job.getSalary);
router.get("/workyear", Job.getWorkYear);
router.get("/education", Job.getEducation);
router.get("/jobnature", Job.getJobNature);

module.exports = router;