# Sistema de Emissão de Nota Fiscal de Serviço

Este é um projeto em desenvolvimento para a criação de um sistema de emissão de nota fiscal de serviço. Até o momento, o projeto contempla a estruturação de um formulário para capturar os dados necessários para a emissão da nota fiscal e uma integração com um servidor Node.js para processar e enviar esses dados para a API da NFe.io.

## Como Utilizar

### Pré-requisitos

- Node.js instalado
- Chave de acesso válida para a API da NFe.io (já inclusa no código)

### Instalação

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seu-usuario/seu-projeto.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd seu-projeto
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

### Configuração

- Antes de executar o projeto, é necessário adicionar a chave de acesso válida da NFe.io no arquivo `server.js` para que o servidor possa se comunicar com a API. No momento, está cadastrada a minha chave, mas sinta-se à vontade para [se cadastrar na plataforma NFE.io](https://nfe.io/) e inserir sua própria chave.

### Execução

1. Inicie o servidor:

    ```bash
    node server.js
    ```

2. Abra o navegador e acesse o formulário de criação de nota fiscal:

    ```
    http://localhost:3000
    ```

### Funcionalidades Pendentes

- [ ] Lógica de submissão do formulário para o servidor Node.js
- [ ] Processamento dos dados recebidos e chamada para a API da NFe.io
- [ ] Tratamento de erros e validações de dados do formulário


## Estado Atual do Projeto

Infelizmente, devido a restrições de tempo, este projeto não foi concluído conforme planejado. Partes significativas, como a lógica de submissão do formulário para o servidor Node.js e o processamento dos dados recebidos, ainda estão pendentes.

## Feedback e Revisão

Agradeço pela oportunidade de participar deste processo seletivo para o estagio e gostaria de receber um feedback sobre o que foi produzido até agora. Se possível, apreciaria muito qualquer orientação ou revisão que o recrutador possa oferecer para ajudar no meu desenvolvimento profissional e técnico.

## Contribuições

Contribuições ou sugestões para a conclusão deste projeto ou melhorias são bem-vindas! Sinta-se à vontade para fornecer qualquer feedback ou recomendações sobre como eu poderia melhorar a implementação.

Agradeço pela compreensão.

Atenciosamente,
Marcos P.Pires


