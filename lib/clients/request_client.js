const exec = ({ method, endpoint, payload = '', expectedStatus }, cb) => {
	logger.debug('endpoint =  ' + endpoint);
	return request('')
	[method](endpoint)
		.send(payload)
		.expect('Content-Type', /json/)
		.expect(expectedStatus)
		.end(cb);
};

module.exports = {

	get: ({ endpoint, expectedStatus }, cb) => {
		exec({ method: 'get', endpoint, expectedStatus }, cb);
	},
	post: ({ endpoint, payload, expectedStatus }, cb) => {
		exec({ method: 'post', endpoint, payload, expectedStatus }, cb);
	}
};
