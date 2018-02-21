describe('Save Customer Details Feature - Valid Scenarios', () => {

  step ('1. Valid Customer US - SWIFT Payment', (done) => {
            let payload = customers.customer1;
              logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
              client.service.saveCustomer(payload, (body) => {
              logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
              expect(body.success).to.equals('Bank details saved');
              done();

            });

  });

  step ('2. Valid Customer AU - SWIFT Payment', (done) => {
          let payload = customers.customer2;
            logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
            expect(body.success).to.equals('Bank details saved');
            done();
          });
        });

    step ('3. Valid Customer CN - SWIFT Payment', (done) => {
           payload = customers.customer3;
            logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
            expect(body.success).to.equals('Bank details saved');
            done();
          });
        });

         step ('4. Valid Customer US - LOCAL Payment', (done) => {
           payload = customers.customer4;
            logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
            client.service.saveCustomer(payload, (body) => {
            logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
            expect(body.success).to.equals('Bank details saved');
            done();
          });
        });

        step ('5. Valid Customer AU - LOCAL Payment', (done) => {
          payload = customers.customer5;
           logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
           client.service.saveCustomer(payload, (body) => {
           logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
           expect(body.success).to.equals('Bank details saved');
           done();
         });
       });


       step ('6. Valid Customer CN - LOCAL Payment', (done) => {
         payload = customers.customer6;
          logger.debug('\n\n#TEST# Save Customer: ' + ' - \n\n====================================================\nRequest  = ', payload);
          client.service.saveCustomer(payload, (body) => {
          logger.debug('\n\n #END# Save Customer: ' + ' -  \n\nResponse  = ', body, '\n====================================================\n');
          expect(body.success).to.equals('Bank details saved');
          done();
        });
      });
});
