const { unlink } = require('fs');

/**
 * Core delete method exposed to Castoe File Transport.
 * @param {String} file - Which file needs to be deleted?
 * @returns {undefined}
 */
module.exports = function(file) {
	try {
		unlink(file, (error) => {
			if (error) throw Error;
		});
	} catch (error) {
		console.error(error);
	}
}