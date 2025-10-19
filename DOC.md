Beleza! Vou montar uma documentação clara e objetiva da sua API com todas as rotas que você passou. Segue um modelo que você pode usar, estilo Markdown, ótimo pra GitHub ou qualquer doc online. 📄✨

---

# Documentação da API IDE

Base URL: `https://ide-api-276n.onrender.com/api/ide/v1`

---

## Autenticação

### Login

**POST** `/usuarios/login`

**Body:**

```json
{
  "email": "jefferson@example.com",
  "senha": "Senha@123"
}
```

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "usuario": {
      "id": 4,
      "nome_usuario": "jefferson123",
      "nome_completo": "Jefferson Silva",
      "email": "jeffewrson@example.com",
      "descricao": "Usuário responsável pela área de conteúdo.",
      "role": "editor",
      "ativo": true,
      "criado_em": "2025-10-15T16:26:09.103Z",
      "atualizado_em": "2025-10-15T16:26:09.103Z"
    }
  }
}
```

> ⚠️ Retorna um token JWT para autenticação das próximas requisições.

---

## Usuários

### Cadastrar usuário

**POST** `/usuarios`
Sem token necessário.

**Body:**

```json
{
  "nome_usuario": "jefferson123",
  "nome_completo": "Jefferson Silva",
  "email": "jeffewrson@example.com",
  "senha": "Senha@123",
  "descricao": "Usuário responsável pela área de conteúdo.",
  "role": "editor",
  "ativo": true
}
```

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "id": 4,
    "nome_usuario": "jefferson123",
    "nome_completo": "Jefferson Silva",
    "email": "jeffewrson@example.com",
    "descricao": "Usuário responsável pela área de conteúdo.",
    "role": "editor",
    "ativo": true,
    "senha_hash": "$2b$10$PwH0w7Y7dxmX805ydFx8X...",
    "criado_em": "2025-10-15T16:26:09.103Z",
    "atualizado_em": "2025-10-15T16:26:09.103Z"
  }
}
```

---

### Listar usuários

**GET** `/usuarios?page=10&limit=10`
Necessário token.

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "total": 1,
    "pages": 1,
    "page": 10,
    "limit": 10,
    "usuarios": [
      {
        "id": 2,
        "nome_usuario": "Jeffinho",
        "nome_completo": "Jefferson Silva",
        "email": "jefferson@example.com",
        "descricao": "Usuário responsável pela área de conteúdo.",
        "role": "editor",
        "ativo": true,
        "criado_em": "07/10/2025 16:13",
        "atualizado_em": "07/10/2025 16:14"
      }
    ]
  }
}
```

---

### Buscar usuário por ID

**GET** `/usuarios/:id`
Com token.

**Exemplo:** `/usuarios/2`

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "id": 2,
    "nome_usuario": "Jeffinho",
    "nome_completo": "Jefferson Silva",
    "email": "jefferson@example.com",
    "senha_hash": "$2b$10$8atH39zG2ADvsXl3YMOx...",
    "descricao": "Usuário responsável pela área de conteúdo.",
    "role": "editor",
    "ativo": true,
    "criado_em": "2025-10-07T16:13:25.266Z",
    "atualizado_em": "2025-10-07T19:55:43.065Z"
  }
}
```

---

### Atualizar usuário

**PUT** `/usuarios/:id`
Com token.

**Body de exemplo:**

```json
{
  "nome_usuario": "Jeffinho"
}
```

**Retorno:**

```json
{
  "sucesso": true,
  "data": [1]
}
```

---

### Deletar usuário

**DELETE** `/usuarios/:id`
Com token.

**Exemplo:** `/usuarios/2`

**Retorno:**

```json
{
  "sucesso": true,
  "data": 1
}
```

---

## Conteúdos

### Listar conteúdos

**GET** `/conteudos?page=10&limit=10`
Com token.

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "total": 1,
    "pages": 1,
    "page": 10,
    "limit": 10,
    "conteudos": [
      {
        "id": 1,
        "chave": "mensagemPrincipal",
        "valor": {
          "titulo": "Jesus te ama muitão visse! ❤️",
          "mensagem": "Não importa a situação, Ele está contigo e quer te dar paz e esperança.",
          "versiculos": [
            "João 3:16 - Porque Deus amou o mundo de tal maneira...",
            "Romanos 8:38-39 - Pois estou convencido de que nem morte nem vida...",
            "Isaías 41:10 - Não temas, porque eu sou contigo..."
          ]
        },
        "descricao": "Mensagem principal que aparece ao acessar a página via QR Code",
        "criado_em": "2025-10-07T17:43:34.058Z",
        "atualizado_em": "2025-10-07T17:48:47.138Z"
      }
    ]
  }
}
```

---

### Buscar conteúdo por chave

**GET** `/conteudos/:id`
Com token.

**Exemplo:** `/conteudos/3`

**Retorno:**

```json
{
  "sucesso": true,
  "data": {
    "id": 3,
    "chave": "xcxcxc",
    "valor": {
      "titulo": "Jesus te ama! ❤️",
      "mensagem": "Não importa a situação, Ele está contigo e quer te dar paz e esperança.",
      "versiculos": [
        "João 3:16 - Porque Deus amou o mundo...",
        "Romanos 8:38-39 - Pois estou convencido...",
        "Isaías 41:10 - Não temas..."
      ]
    },
    "descricao": "Mensagem principal que aparece ao acessar a página via QR Code",
    "criado_em": "2025-10-07T19:56:10.353Z",
    "atualizado_em": "2025-10-07T19:56:10.353Z"
  }
}
```

---

Se você quiser, posso transformar essa documentação em **uma versão bonita tipo Swagger/OpenAPI pronta pra importar**, aí já ficaria interativa no navegador. 🖥️📚

Quer que eu faça isso?
