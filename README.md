# 🌸 Floravel

> Uma plataforma de apoio, acolhimento e auxílio no tratamento de mães que enfrentam a depressão pós-parto.

O **Floravel** é um projeto desenvolvido para conscientizar, acolher e conectar mães que sofrem de depressão pós-parto a ferramentas de suporte, profissionais de saúde e redes de apoio. O objetivo principal é facilitar o acesso ao tratamento de forma humanizada, segura e acessível.

---

## 🚀 Tecnologias Utilizadas

O projeto utiliza uma stack moderna para garantir performance, escalabilidade e segurança dos dados das usuárias:

*   **Front-end:** React
*   **Back-end:** Node.js & Java
*   **Banco de Dados:** MySQL
*   **Estilização:** TailwindCSS
---

## 🛠️ Como Iniciar o Projeto

Siga as instruções abaixo para rodar o projeto localmente em sua máquina.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em seu computador:
*   [Git](https://git-scm.com)
*   [Node.js](https://nodejs.org) (versão LTS recomendada) ou o gerenciador da sua stack (Docker, Python, etc.)

### 1. Clonar o Repositório

Abra o terminal e execute o comando abaixo:

```bash
git clone https://github.com[seu-usuario]/floravel.git
cd FloravelFront
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto (utilize o arquivo `.env.example` como base, se disponível).

```bash
cp .env.example .env
```

Abra o arquivo `.env` e configure suas variáveis (como conexões de banco de dados e chaves de API):

```env
# Exemplo de configuração
PORT=3000
DATABASE_URL="sua_string_de_conexao"
```
*(Lembre-se: use `#` para adicionar comentários em seu arquivo `.env` e nunca envie suas chaves reais para o GitHub).*

### 3. Instalar as Dependências

```bash
# Se o projeto usar npm
npm install

# Se o projeto usar yarn
yarn install
```

### 4. Executar a Aplicação

```bash
# Se o projeto usar npm
npm run dev

# Se o projeto usar yarn
yarn dev
```

A aplicação estará disponível no seu navegador através do endereço `http://localhost:3000` (ou a porta configurada no seu `.env`).

---

## 📐 Estrutura de Páginas e Rotas

Abaixo está o mapeamento inicial da estrutura de páginas configurada no ecossistema do Floravel:

```text
├── 🏠 /             -> Página Inicial (Apresentação, estatísticas e conscientização)
├── 📝 /cadastro     -> Fluxo de registro de mães e profissionais de saúde
├── 🔐 /login        -> Autenticação segura na plataforma
├── 📊 /dashboard    -> Espaço privado da mãe (Acompanhamento de humor, diário e tarefas)
├── 🩺 /profissionais-> Listagem e agendamento com psicólogos/psiquiatras parceiros
└── 👥 /comunidade   -> Fórum moderado de apoio mútuo
```

---

## 🤝 Como Contribuir

Contribuições fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Toda ajuda para o Floravel é muito bem-vinda!

Como o projeto utiliza o padrão de **Conventional Commits**, siga os passos abaixo para contribuir:

1. Faça um **Fork** do projeto.
2. Crie uma Branch para sua funcionalidade (`git checkout -b feat/nova-funcionalidade`).
3. Faça o commit das suas alterações utilizando mensagens padronizadas (ex: `feat(pages): estruturar nova tela de perfil`).
4. Envie a Branch para o seu Fork (`git push origin feat/nova-funcionalidade`).
5. Abra um **Pull Request** detalhando as alterações.

---

## 💜 Agradecimentos

A depressão pós-parto é uma realidade silenciosa que afeta milhares de famílias. Desenvolver o **Floravel** é o nosso passo em direção a um ecossistema de saúde mental materno mais acolhedor e sem julgamentos. Obrigado por fazer parte disso!
