var renameFiles = require('broccoli-rename-files');
var assign = require('object-assign');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
    name: 'ember-cli-html-to-jsp',

    defaultOptions: {
        enabled: true,
        outputFilename: 'index.jsp'
    },

    included: function(app) {
        console.log('This addon is deprecated.\nPlease use ember-index addon instead.\nhttps://github.com/ramybenaroya/ember-index');
        this._super.included.apply(this, arguments);
        this.options = assign({}, this.defaultOptions, (app.options.htmlToJsp || {}));
    },

    postprocessTree: function(type, tree) {
        var returnedTree = tree,
            aux;

        if (this.options.enabled && type === 'all') {
            
            aux = this.pickFiles(tree, {
                srcDir: '.',
                files: ['index.html'],
                destDir: '.'
            });
            aux = renameFiles(aux, {
                transformFilename: function() {
                    return this.options.outputFilename;
                }.bind(this)
            });

            returnedTree = mergeTrees([tree, aux]);
        }

        return returnedTree;
    }
};