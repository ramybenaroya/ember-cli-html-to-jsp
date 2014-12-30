var fs = require('fs');
var path = require('path');

module.exports = {
    name: 'ember-cli-html-to-jsp',
    postBuild: function(result) {
        if (fs.existsSync(lockfile = this.indexHtmlPath())) {
            fs.createReadStream().pipe(fs.createWriteStream(this.indexJspPath));
            console.log('copied index.html to index.jsp');
        }
    },
    indexHtmlPath: function() {
        return path.join(process.cwd(), 'dist', 'index.html');
    }
    indexJspPath: function() {
        return path.join(process.cwd(), 'dist', 'index.jsp');
    }

};