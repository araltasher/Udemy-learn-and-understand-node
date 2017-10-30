var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd +'@ds241025.mlab.com:41025/node-todo-example';
    }
    
}