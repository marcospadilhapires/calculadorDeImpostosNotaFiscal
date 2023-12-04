# Sistema de Emissão de Nota Fiscal de Serviço

Este é um projeto em desenvolvimento para a criação de um sistema de emissão de nota fiscal de serviço. Até o momento, o projeto contempla a estruturação de um formulário para capturar os dados necessários para a emissão da nota fiscal e uma integração com um servidor Node.js para processar e enviar esses dados para a API da NFe.io.

## Como Utilizar

### Pré-requisitos

- Node.js instalado
- Chave de acesso válida para a API da NFe.io

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

- Antes de executar o projeto, é necessário adicionar a chave de acesso válida da NFe.io no arquivo `server.js` para que o servidor possa se comunicar com a API.

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

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para reportar bugs ou propor novas funcionalidades através de pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

