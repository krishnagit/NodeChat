module.exports = function(domain) {

	var replied = false;
	console.log('domain loaded');
	domain.on('error', function(err) {
		if (!replied) {
			replied = true;
			res.writeHead(500);
			res.end(err.message);
			console.log('Domain error handling');
			console.log(err);
		} else {
			console.log('Domain error handling');
			console.log(err);
		}
	});
};

