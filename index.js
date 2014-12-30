var fs = require('fs');
var path = require('path');

module.exports = {
    name: 'ember-cli-html-to-jsp',
    postBuild: function(result) {
        var index;
        if (fs.existsSync(index = this.indexHtmlPath())) {
            fs.writeFileSync(this.indexJspPath(), fs.readFileSync(index));
        }
    },
    indexHtmlPath: function() {
        return path.join(process.cwd(), 'dist', 'index.html');
    },
    indexJspPath: function() {
        return path.join(process.cwd(), 'dist', 'index.jsp');
    }

};