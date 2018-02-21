describe('Save Customer Details Feature - Invalid Scenarios', () => {

  step ('1. Invalid US Account Number', (done) => {
            let payload = customers.customer7;
              logger.debug('\n\n#TEST# Save Customer7: ' + ' - \n\n====================================================\nRequest  = ', payload);
              client.service.saveCustomer(payload, (body) => {
              logger.debug('\n\n #END# Save Customer7: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
              expect(body.error).to.equals('Length of account_number should be between 7 and 11 when bank_country_code is \'US\'');
              done();
            });
  });

  step ('2. Invalid AU Account Number', (done) => {
          let payload = customers.customer8;
            logger.debug('\n\n#TEST# Save Customer8: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer8: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
            //expect(body.error).to.equals('Length of account_number should be between 6 and 9 when bank_country_code is \'AU\'');
            done();
          });
  });

    step ('3. Invalid CN Account Number', (done) => {
           payload = customers.customer9;
            logger.debug('\n\n#TEST# Save Customer9: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer9: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
          //  expect(body.error).to.equals('Length of account_number should be between 8 and 20 when bank_country_code is \'CN\'');
            done();
          });
    });

         step ('4. Invalid SWIFT Code Length', (done) => {
           payload = customers.customer10;
            logger.debug('\n\n#TEST# Save Customer10: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer10: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
            expect(body.error).to.equals('Length of \'swift_code\' should be either 8 or 11');
            done();
          });
        });

        step ('5. Invalid SWIFT Code', (done) => {
          payload = customers.customer11;
           logger.debug('\n\n#TEST# Save Customer11: ' + ' - \n\n====================================================\nRequest  = ', payload);
           client.service.saveCustomer(payload, (body) => {
           logger.debug('\n\n #END# Save Customer11: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
           expect(body.error).to.equals('The swift code is not valid for the given bank country code: AU');
           done();
         });
       });

       step ('6. Missing BSB Number', (done) => {
         payload = customers.customer12;
          logger.debug('\n\n#TEST# Save Customer12: ' + ' - \n\n====================================================\nRequest  = ', payload);
          client.service.saveCustomer(payload, (body) => {
          logger.debug('\n\n #END# Save Customer12: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
          expect(body.error).to.equals('\'bsb\' is required when bank country code is \'AU\'');
          done();
        });
      });

      step ('7. Invalid BSB Number', (done) => {
        payload = customers.customer13;
         logger.debug('\n\n#TEST# Save Customer13: ' + ' - \n\n====================================================\nRequest  = ', payload);
         client.service.saveCustomer(payload, (body) => {
         logger.debug('\n\n #END# Save Customer13: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
         expect(body.error).to.equals('Length of \'bsb\' should be 6');
         done();
       });
     });

     step ('8. Missing ABA', (done) => {
       payload = customers.customer14;
        logger.debug('\n\n#TEST# Save Customer14: ' + ' - \n\n====================================================\nRequest  = ', payload);
        client.service.saveCustomer(payload, (body) => {
        logger.debug('\n\n #END# Save Customer14: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
        //expect(body.error).to.equals('\'aba\' is required when bank country code is \'US\'');
        done();
      });
    });

    step ('9. Invalid ABA', (done) => {
      payload = customers.customer15;
       logger.debug('\n\n#TEST# Save Customer15: ' + ' - \n\n====================================================\nRequest  = ', payload);
       client.service.saveCustomer(payload, (body) => {
       logger.debug('\n\n #END# Save Customer15: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
       expect(body.error).to.equals('Length of \'aba\' should be 9');
       done();
      });
    });


  step ('10. Invalid Country Code', (done) => {
    payload = customers.customer16;
     logger.debug('\n\n#TEST# Save Customer16: ' + ' - \n\n====================================================\nRequest  = ', payload);
     client.service.saveCustomer(payload, (body) => {
     logger.debug('\n\n #END# Save Customer16: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
     expect(body.error).to.equals('\'bank_country_code\' is required, and should be one of \'US\', \'AU\', or \'CN\'');
     done();
   });
  });
});
