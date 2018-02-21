const context = {
    saveCustomer: 'Save Customer'
};

mochaShared.behavior(context.saveCustomer, (opts) => {

        step('Save Custome', (done) => {
            let payload = new builder.customer()
                /*.withPaymentMethod(customers.customer1.payment_method)
                .withBankCountryCode(customers.customer1.bank_country_code)
                .withAccountName(customers.customer1.account_name)
                .withAccountNumber(customers.customer1.account_number)
                .withSwiftCode(customers.customer1.swift_code)
                .withAba(customers.customer1.aba)*/
                .asSaveCustomer();
              console.log('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
              logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
              client.service.saveCustomer(payload, (body) => {
              logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
              console.log('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
              done();
            });
        });
    });
});

module.exports = context;
