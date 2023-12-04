var nfe = require('nfe-io')('3YpOr6RGiBYx3e4v8cyRonJc07FQk1BHY0GVWGIhE51QQkIj3qNxzkzfW20tyo1ZBFk'); // API KEY disponibilizada pela NFE.io

 export function criaEmpresa(
    CNPJ,
    name,
    tradeName,
    municipalTaxNumber,
    taxRegime,
    SpecialTaxRegime,
    municipalTaxNumberReceipt,
    postalCode,
    street,
    numero,
    additionalInformation,
    district,
    code,
    cityCompany,
    stateCompany
  ) {

    nfe.companies.create(
        // Dados da pessoa jurídica
        {
            // CNPJ
            'federalTaxNumber': CNPJ,
            'name': name,
            'tradeName': tradeName,
            'municipalTaxNumber': municipalTaxNumber,
            'taxRegime': taxRegime,
            'specialTaxRegime': SpecialTaxRegime,
            'rpsNumber':municipalTaxNumberReceipt,
            'address': {
                'country': 'BRA',
                'postalCode':postalCode,
                'street':street,
                'number': numero ,
                'additionalInformation': additionalInformation,
                'district': district,
                'city': {
                    'code': code,
                    'name': cityCompany
                },
                'state': stateCompany
            }
        },
        function(err, invoice) {
            // Função de retorno
            if (err) {
                console.log('Ocorreu um erro na criação da empresa', err);
            } else {
                console.log('Empresa criada com sucesso:', invoice);
            }
        }
    );
  }

  module.exports = criaEmpresa;
