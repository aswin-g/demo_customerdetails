class ServiceClient {

    static saveCustomer(payload, cb) {
        client.request
            .post({
                endpoint: configEnv.envUrls[configEnv.testEnv].apiUrl+configEnv.endpoints.customerDetails,
                payload: payload,
                expectedStatus: 200
            }, (err, res) => {
                return cb(res.body);
            });
    }
}

module.exports = ServiceClient;
