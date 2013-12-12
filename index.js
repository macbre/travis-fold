/**
 * travis-fold module
 */
module.exports = (function() {

	// private
	function format(type, group) {
		return isTravis() ? ("travis_fold:" + type + ":" + group) : '';
	}

	// public
	function isTravis() {
		return process.env.TRAVIS === 'true';
	}

	function start(group) {
		return format('start', group);
	}

	function end(group) {
		return format('end', group);
	}

	function wrap(group, content) {
		return [
			start(group),
			(content || '').trim(),
			end(group)
		].join('\n').trim();
	}

	// expose public API
	return {
		start: start,
		end: end,
		wrap: wrap,
		isTravis: isTravis
	};
})();
