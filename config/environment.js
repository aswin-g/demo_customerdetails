module.exports = {
	testEnv: process.env.TEST_ENV,

	envUrls: {
		preview: {
			apiUrl: 'http://preview.airwallex.com:30001'
		},

		demo: {
			apiUrl: 'https://demo.airwallex.com:30001'
		}
	},

	endpoints: {
		customerDetails: '/bank'
	}
};
