document.getElementById('criarNotaBtn').addEventListener('click', async function () {
  var cityServiceCode = document.getElementById('cityServiceCode').value;
  var description = document.getElementById('description').value;
  var servicesAmount = parseFloat(document.getElementById('servicesAmount').value);
  var type = document.getElementById('type').value;
  var federalTaxNumber = document.getElementById('federalTaxNumber').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var postalCode = document.getElementById('postalCode').value;
  var street = document.getElementById('street').value;
  var number = document.getElementById('number').value;
  var additionalInformation = document.getElementById('additionalInformation').value;
  var district = document.getElementById('district').value;
  let cityCode = document.getElementById('cityCode').value;
  var cityName = document.getElementById('cityName').value;
  var state = document.getElementById('state').value;

  const dadosNotaFiscal = {
      'cityServiceCode': cityServiceCode,
      'description': description,
      'servicesAmount': servicesAmount,
      'borrower': {
          'type': type,
          'federalTaxNumber': federalTaxNumber,
          'name': name,
          'email': email,
          'address': {
              'country': 'BRA',
              'postalCode': postalCode,
              'street': street,
              'number': number,
              'additionalInformation': additionalInformation,
              'district': district,
              'city': {
                  'code': cityCode,
                  'name': cityName,
              }
              ,'state': state
          }
      }
  };

  try {
      const response = await fetch('http://localhost:3000/emitir-nota', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dadosNotaFiscal)
      });

      if (response.ok) {
          const resultado = await response.json();
          console.log('Resposta do servidor:', resultado);
      } else {
          console.error('Erro ao emitir a nota fiscal');
      }
  } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
  }
});
