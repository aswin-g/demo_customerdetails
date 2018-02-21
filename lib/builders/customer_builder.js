class CustomerBuilder {
    constructor() {
      this.payment_method = 'SWIFT',
      this.bank_country_code = 'US',
      this.account_name = 'John Smith',
      this.account_number = '123',
      this.swift_code = 'ICBCUSBJ',
      this.aba = '11122233'
    }

    withPaymentMethod(payment_method) {
        this.payment_method = payment_method;
        return this;
    }

    withBankCountryCode(bank_country_code) {
        this.bank_country_code = bank_country_code;
        return this;
    }

    withAccountName(account_name) {
        this.account_name = account_name;
        return this;
    }

    withAccountNumber(account_number) {
        this.account_number = account_number;
        return this;
    }

    withSwiftCode(swift_code) {
        this.swift_code = swift_code;
        return this;
    }

    withAba(aba) {
        this.aba = aba;
        return this;
    }

    asPayload(payload) {
        return payload;
    }
    
    asSaveCustomer() {
        return this.asPayload({
              'payment_method': this.payment_method,
              'bank_country_code': this.bank_country_code,
              'account_name': this.account_name,
              'account_number': this.account_number,
              'swift_code': this.swift_code,
              'this.aba': this.aba
        });
    }
}

module.exports = CustomerBuilder;
