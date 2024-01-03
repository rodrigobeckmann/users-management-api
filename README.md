# Users Management App



## Requisitos
Req 1: Página de Login e Redirecionamento
Implemente uma página de login no front-end. Após o login bem-sucedido, redirecione as pessoas usuárias para a página principal com base em seus papéis (pessoa administradora ou cliente).
Essa página principal deve trazer a foto, o nome e alguma outra informação, como a cidade e estado, Lembre-se de que apenas a pessoa administradora consegue ver os dados das pessoas clientes. Caso o login tenha sido feito por uma pessoa cliente, esta poderá ver apenas seus próprios dados. Ressaltamos a necessidade de haver padronização entre as informações.

Req 2: CRUD de Clientes
Administradores devem poder cadastrar, editar e remover clientes. Clientes só podem editar seus próprios dados.

Req 3: Autenticação
Implemente um sistema de autenticação utilizando tokens JsonWebToken (JWT). Ao fazer login, atribua um token JWT à pessoa usuária e use-o para autenticação em chamadas subsequentes.

Req 4: Dockerização da Aplicação
Agora que o front e o back-end já estão inicializados, crie os Dockerfile de cada projeto e faça a orquestração dos containers com o docker-compose.
