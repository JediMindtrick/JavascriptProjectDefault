
/*
 * GET blog listing
 */
exports.list = function(req, res){
  var walk = require('walk'), fs = require('fs'), options, walker;
  var walker = walk.walk('public/documentation');
  var fs = new Array();
  walker.on("file", function(root,file,next){
    var f = root + "/" + file['name'].substring(0, file['name'].lastIndexOf('.'));

      if(!/(\/styles\/|\/js\/|\/images\/)/.test(f)){
	    // push without /public/documentation prefix
		var name = /[^\/public\/documentation\/].*/.exec(f);
		
		if(name !== null){
    		fs.push(name);
		}
	  }
    next();
  });
  walker.on("end", function() {
    res.render('documents', { title: 'Documents', files: fs })
  });
};

/*
 * GET blog entry
 */
exports.document = function(req, res){
  var md = require('node-markdown').Markdown;
  res.render('document', { content: md('' + require('fs').readFileSync('public/documentation/' + req.params.doc + ".md")), title: 'Merlin - ' + req.params.doc });
};