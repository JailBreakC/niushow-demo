var qn = require('qiniu');

qn.conf.ACCESS_KEY = 'UjvASva8tFfdbO99_D0k29F1GcJQ_3O5JlWqBag4';
qn.conf.SECRET_KEY = 'KCBKIET9pgoJpIaD0MtattiaQQChfw4VXs8lS77v';

var putPolicy = new qn.rs.PutPolicy('newshow');
console.log(putPolicy.token());