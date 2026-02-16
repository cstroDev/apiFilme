# API de Filmes

## 📝 Descrição

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciar um catálogo de filmes. Foi criado como uma forma de aprimorar e praticar habilidades em desenvolvimento back-end, incluindo a criação de APIs, estrutura de projetos, validação de dados e manipulação de banco de dados.

## ✨ Funcionalidades

-   **CRUD de Filmes**:
    -   Cadastrar novos filmes.
    -   Consultar filmes (todos, por ID ou por nome).
    -   Atualizar informações de um filme.
    -   Remover um filme.
-   **Upload de Imagem**:
    -   Adicionar ou alterar a imagem de capa de um filme.
-   **Validações**:
    -   Verificação de campos obrigatórios.
    -   Validação para garantir que não existam filmes com nomes duplicados.

## 🛠️ Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/pt-br/) (inferido pelo contexto do projeto)
-   [Nodemon](https://nodemon.io/) para desenvolvimento
-   [Dotenv](https://www.npmjs.com/package/dotenv) para gerenciamento de variáveis de ambiente
-   [MySQL](https://www.mysql.com/)

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura em camadas para separar as responsabilidades, o que é uma excelente prática de mercado.

```
/src
|-- /api
|   `-- index.js        # Arquivo principal da API e configuração do Express
|-- /controller
|   `-- filmeController.js # Controla as requisições HTTP relacionadas a filmes
|-- /repository
|   `-- filmeRepository.js # Responsável pela comunicação com o banco de dados
|-- /service
|   `-- ...                # Contém as regras de negócio da aplicação
`-- /validation
    `-- filmeValidation.js # Funções para validar os dados recebidos
```

## 🚀 Como Executar

Siga os passos abaixo para executar o projeto em seu ambiente local.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/cstroDev/apiFilme.git
    cd apiFilme
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto. Você pode usar o exemplo abaixo como base.

    **Exemplo de `.env`:**
    ```
    # Configurações do Servidor
    PORT=5000

    # Configurações do Banco de Dados MySQL
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=sua_senha_aqui
    DB_DATABASE=nome_do_banco
    ```

4.  **Inicie o servidor:**
    Para ambiente de desenvolvimento (com reinício automático ao salvar):
    ```bash
    npm run dev 
    ```
    Para produção:
    ```bash
    npm start
    ```

## 🛣️ Endpoints da API

Aqui estão os principais endpoints que sua API parece fornecer, com base nos arquivos de serviço e validação.

#### Filmes

-   **`POST /filme`**: Cadastra um novo filme.
-   **`GET /filme`**: Lista todos os filmes.
-   **`GET /filme/:id`**: Busca um filme pelo seu ID.
-   **`PUT /filme/:id`**: Atualiza as informações de um filme.
-   **`DELETE /filme/:id`**: Remove um filme.
-   **`PUT /filme/capa/:id`**: Altera a imagem de capa de um filme.

---

Este README é um excelente ponto de partida. Sinta-se à vontade para personalizá-lo com mais detalhes sobre o seu projeto! Se tiver mais alguma dúvida, pode perguntar.

## 👤 Autor

Este projeto foi desenvolvido por **Ryan**.

GitHub: cstroDev
