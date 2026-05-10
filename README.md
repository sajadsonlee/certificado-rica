# Certificados RICA

Sistema simples em HTML, CSS e JavaScript para emissão de certificados de avaliador(a) ad hoc da **RICA — Revista Interdisciplinar de Computação Aplicada**, com geração de QR Code e página pública de validação.

O projeto foi pensado para funcionar diretamente no **GitHub Pages**, sem necessidade de servidor, banco de dados ou instalação de dependências.

---

## Estrutura do projeto

```text
certificado-rica/
├── index.html
├── style.css
├── certificado.js
├── certificados.js
├── validar.html
├── validar.css
├── logo-rica.png
└── README.md
```

---

## Descrição dos arquivos

### `index.html`

Página principal do certificado.

Esse arquivo contém a estrutura do certificado em HTML, incluindo:

- logotipo da RICA;
- título do certificado;
- nome do avaliador;
- período da avaliação;
- assinatura do editor-chefe;
- informações de emissão;
- código de validação;
- QR Code.

Exemplo de trecho usado no certificado:

```html
<section class="conteudo">
  <p>
    Certificamos que<br />
    <span class="nome-avaliador" id="nome-avaliador">
      [NOME COMPLETO DO(A) AVALIADOR(A)]
    </span><br />
    atuou como <strong>avaliador(a) ad hoc</strong> da
    <strong>RICA — Revista Interdisciplinar de Computação Aplicada</strong>.
  </p>

  <p>
    A colaboração consistiu na emissão de parecer técnico-científico
    em processo de avaliação por pares, realizado no período de
    <strong id="periodo-avaliacao">[DATA INICIAL] a [DATA FINAL]</strong>.
  </p>
</section>
```

---

### `style.css`

Arquivo responsável pela aparência visual do certificado.

Nele são definidos:

- tamanho A4 em orientação paisagem;
- bordas;
- cores;
- posicionamento do logotipo;
- tamanho dos textos;
- assinatura;
- rodapé;
- QR Code.

Exemplo:

```css
@page {
  size: A4 landscape;
  margin: 0;
}

.certificado {
  width: 297mm;
  height: 210mm;
  position: relative;
  overflow: hidden;
  padding: 17mm 26mm 32mm 26mm;
}
```

---

### `certificados.js`

Arquivo que funciona como uma base de dados simples dos certificados emitidos.

Exemplo:

```javascript
const CERTIFICADOS_RICA = [
  {
    codigo: "RICA-2026-AV-0001",
    nome: "NOME COMPLETO DO(A) AVALIADOR(A)",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "01 de maio de 2026 a 10 de maio de 2026",
    emissao: "Petrolina, 10 de maio de 2026",
    editor: "NOME DO(A) EDITOR(A)-CHEFE",
    status: "Válido"
  }
];
```

Para emitir novos certificados, basta adicionar novos objetos dentro da lista.

Exemplo com dois certificados:

```javascript
const CERTIFICADOS_RICA = [
  {
    codigo: "RICA-2026-AV-0001",
    nome: "Maria da Silva",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "01 de maio de 2026 a 10 de maio de 2026",
    emissao: "Petrolina, 10 de maio de 2026",
    editor: "Prof. Dr. Nome do Editor",
    status: "Válido"
  },
  {
    codigo: "RICA-2026-AV-0002",
    nome: "João Pereira dos Santos",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "12 de maio de 2026 a 18 de maio de 2026",
    emissao: "Petrolina, 20 de maio de 2026",
    editor: "Prof. Dr. Nome do Editor",
    status: "Válido"
  }
];
```

---

### `certificado.js`

Arquivo responsável por selecionar qual certificado será exibido no `index.html` e gerar o QR Code.

Exemplo:

```javascript
const CODIGO_CERTIFICADO = "RICA-2026-AV-0001";
```

Para gerar outro certificado, altere o código acima para outro código cadastrado em `certificados.js`.

Exemplo:

```javascript
const CODIGO_CERTIFICADO = "RICA-2026-AV-0002";
```

Trecho responsável por gerar o link de validação:

```javascript
function obterUrlValidacao(codigo) {
  const caminhoAtual = window.location.pathname;
  const pastaProjeto = caminhoAtual.substring(0, caminhoAtual.lastIndexOf("/") + 1);

  return `${window.location.origin}${pastaProjeto}validar.html?codigo=${encodeURIComponent(codigo)}`;
}
```

---

### `validar.html`

Página pública de validação do certificado.

Ela recebe o código pela URL:

```text
validar.html?codigo=RICA-2026-AV-0001
```

Depois verifica se o código existe no arquivo `certificados.js`.

Se o código existir, mostra os dados do certificado.

Se o código não existir, mostra uma mensagem de erro.

Exemplo de link de validação:

```text
https://SEU-USUARIO.github.io/certificado-rica/validar.html?codigo=RICA-2026-AV-0001
```

---

### `validar.css`

Arquivo responsável pela aparência da página de validação.

Nele são definidos:

- layout da página;
- card central;
- cores;
- tabela de dados do certificado;
- mensagens de certificado válido ou inválido.

---

### `logo-rica.png`

Arquivo de imagem com o logotipo da RICA.

O nome do arquivo deve ser exatamente:

```text
logo-rica.png
```

Caso queira usar outro nome, atualize as referências em `index.html` e `validar.html`.

---

## Como testar localmente no VS Code

### 1. Abrir a pasta no VS Code

No terminal, entre na pasta do projeto:

```bash
cd caminho/para/certificado-rica
```

Depois abra no VS Code:

```bash
code .
```

Também é possível abrir pelo próprio VS Code:

```text
File > Open Folder
```

---

### 2. Instalar a extensão Live Server

No VS Code:

```text
Extensions > pesquisar por Live Server > Install
```

Depois:

1. Abra o arquivo `index.html`;
2. Clique com o botão direito;
3. Selecione:

```text
Open with Live Server
```

---

### 3. Testar o certificado

O navegador abrirá o certificado.

Verifique se aparecem corretamente:

- logotipo;
- nome do avaliador;
- período de avaliação;
- editor-chefe;
- código de validação;
- QR Code.

---

### 4. Testar a validação

Clique ou escaneie o QR Code.

A página deve abrir em um endereço parecido com:

```text
http://127.0.0.1:5500/validar.html?codigo=RICA-2026-AV-0001
```

Se tudo estiver correto, aparecerá a mensagem:

```text
Certificado válido
```

---

## Como emitir um novo certificado

### 1. Adicionar o certificado em `certificados.js`

Abra o arquivo `certificados.js` e adicione um novo registro dentro da lista `CERTIFICADOS_RICA`.

Exemplo:

```javascript
{
  codigo: "RICA-2026-AV-0003",
  nome: "Ana Cristina Souza",
  tipo: "Avaliador(a) ad hoc",
  revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
  periodo: "15 de junho de 2026 a 22 de junho de 2026",
  emissao: "Petrolina, 25 de junho de 2026",
  editor: "Prof. Dr. Nome do Editor",
  status: "Válido"
}
```

Exemplo completo:

```javascript
const CERTIFICADOS_RICA = [
  {
    codigo: "RICA-2026-AV-0001",
    nome: "Maria da Silva",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "01 de maio de 2026 a 10 de maio de 2026",
    emissao: "Petrolina, 10 de maio de 2026",
    editor: "Prof. Dr. Nome do Editor",
    status: "Válido"
  },
  {
    codigo: "RICA-2026-AV-0002",
    nome: "João Pereira dos Santos",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "12 de maio de 2026 a 18 de maio de 2026",
    emissao: "Petrolina, 20 de maio de 2026",
    editor: "Prof. Dr. Nome do Editor",
    status: "Válido"
  },
  {
    codigo: "RICA-2026-AV-0003",
    nome: "Ana Cristina Souza",
    tipo: "Avaliador(a) ad hoc",
    revista: "RICA — Revista Interdisciplinar de Computação Aplicada",
    periodo: "15 de junho de 2026 a 22 de junho de 2026",
    emissao: "Petrolina, 25 de junho de 2026",
    editor: "Prof. Dr. Nome do Editor",
    status: "Válido"
  }
];
```

---

### 2. Alterar o código em `certificado.js`

Abra o arquivo `certificado.js`.

Altere:

```javascript
const CODIGO_CERTIFICADO = "RICA-2026-AV-0001";
```

para o código do certificado desejado:

```javascript
const CODIGO_CERTIFICADO = "RICA-2026-AV-0003";
```

Depois abra novamente o `index.html`.

---

### 3. Conferir os dados

Antes de gerar o PDF, confira:

- nome do avaliador;
- período;
- data de emissão;
- editor-chefe;
- código de validação;
- QR Code;
- página de validação.

---

## Padrão sugerido para o código de validação

Sugestão:

```text
RICA-AAAA-AV-NNNN
```

Onde:

```text
RICA = sigla da revista
AAAA = ano de emissão
AV   = avaliador
NNNN = número sequencial
```

Exemplos:

```text
RICA-2026-AV-0001
RICA-2026-AV-0002
RICA-2026-AV-0003
```

Também é possível incluir um sufixo aleatório, se desejar aumentar a dificuldade de falsificação:

```text
RICA-2026-AV-0001-A7F3
```

Nesse caso:

```text
A7F3 = identificador alfanumérico adicional
```

---

## Como converter o certificado para PDF

Com o certificado aberto no navegador:

### No macOS

Pressione:

```text
Cmd + P
```

### No Windows/Linux

Pressione:

```text
Ctrl + P
```

Depois configure:

1. Destino:

```text
Salvar como PDF
```

2. Layout:

```text
Paisagem
```

3. Tamanho do papel:

```text
A4
```

4. Margens:

```text
Nenhuma
```

ou:

```text
Padrão
```

dependendo do navegador e do resultado visual.

5. Ative a opção:

```text
Gráficos de fundo
```

ou:

```text
Background graphics
```

6. Clique em:

```text
Salvar
```

Nome sugerido:

```text
certificado-rica-RICA-2026-AV-0001.pdf
```

---

## Como publicar no GitHub

### 1. Inicializar o repositório Git

Dentro da pasta do projeto:

```bash
git init
```

---

### 2. Adicionar os arquivos

```bash
git add .
```

---

### 3. Fazer o primeiro commit

```bash
git commit -m "Adiciona sistema de certificados da RICA"
```

---

### 4. Criar o repositório no GitHub

No GitHub:

1. Clique em **New repository**;
2. Nomeie o repositório como:

```text
certificado-rica
```

3. Escolha se será público ou privado;
4. Não marque a opção para criar README, `.gitignore` ou licença, se os arquivos já existem localmente;
5. Clique em **Create repository**.

---

### 5. Conectar o repositório local ao GitHub

Substitua `SEU-USUARIO` pelo seu usuário do GitHub:

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/certificado-rica.git
git push -u origin main
```

Exemplo:

```bash
git branch -M main
git remote add origin https://github.com/sajadsonlee/certificado-rica.git
git push -u origin main
```

---

### 6. Caso o remote já exista

Se aparecer:

```text
error: remote origin already exists.
```

Use:

```bash
git remote set-url origin https://github.com/SEU-USUARIO/certificado-rica.git
git push -u origin main
```

---

## Como ativar o GitHub Pages

Depois que os arquivos estiverem no GitHub:

1. Entre no repositório no GitHub;
2. Clique em **Settings**;
3. No menu lateral, clique em **Pages**;
4. Em **Build and deployment**, selecione:

```text
Deploy from a branch
```

5. Em **Branch**, selecione:

```text
main
```

6. Em pasta, selecione:

```text
/root
```

7. Clique em **Save**.

Depois de alguns instantes, o GitHub Pages gerará um link parecido com:

```text
https://SEU-USUARIO.github.io/certificado-rica/
```

Exemplo:

```text
https://sajadsonlee.github.io/certificado-rica/
```

---

## Como testar após publicar no GitHub Pages

Abra no navegador:

```text
https://SEU-USUARIO.github.io/certificado-rica/
```

Exemplo:

```text
https://sajadsonlee.github.io/certificado-rica/
```

Depois teste a página de validação diretamente:

```text
https://SEU-USUARIO.github.io/certificado-rica/validar.html?codigo=RICA-2026-AV-0001
```

Se o certificado estiver cadastrado em `certificados.js`, aparecerá:

```text
Certificado válido
```

Também teste o QR Code usando a câmera do celular.

---

## Como atualizar certificados já publicados

Sempre que adicionar, corrigir ou alterar certificados em `certificados.js`, envie novamente para o GitHub:

```bash
git add .
git commit -m "Atualiza certificados emitidos"
git push
```

O GitHub Pages atualizará automaticamente a página depois de alguns instantes.

---

## Cuidados importantes

### 1. O arquivo `certificados.js` é público

Como o projeto roda no GitHub Pages, o arquivo `certificados.js` fica acessível publicamente.

Portanto, evite colocar informações sensíveis.

Use apenas informações necessárias para validar o certificado, como:

- código;
- nome do avaliador;
- tipo de atividade;
- período;
- data de emissão;
- editor responsável;
- status.

---

### 2. O QR Code depende do link publicado

Antes de gerar o PDF final, prefira abrir o certificado pelo link do GitHub Pages:

```text
https://SEU-USUARIO.github.io/certificado-rica/
```

Assim, o QR Code apontará para o endereço público correto.

Se gerar o PDF usando o Live Server local, o QR Code poderá apontar para algo como:

```text
http://127.0.0.1:5500/validar.html?codigo=RICA-2026-AV-0001
```

Esse link local não funcionará para outras pessoas.

---

### 3. Cada certificado precisa ter código único

Nunca reutilize o mesmo código para certificados diferentes.

Use sequência numérica:

```text
RICA-2026-AV-0001
RICA-2026-AV-0002
RICA-2026-AV-0003
```

---

### 4. Para invalidar um certificado

Altere o campo `status` em `certificados.js`.

Exemplo:

```javascript
status: "Cancelado"
```

ou:

```javascript
status: "Revogado"
```

Depois publique a alteração:

```bash
git add .
git commit -m "Atualiza status de certificado"
git push
```

---

### 5. Atenção ao gerar o PDF

Antes de salvar em PDF, confira se:

- o QR Code aparece corretamente;
- o link do QR Code aponta para o GitHub Pages;
- o certificado não está cortado;
- as bordas aparecem;
- a impressão está em A4 paisagem;
- os gráficos de fundo estão ativados.

---

## Fluxo recomendado de emissão

1. Cadastrar o certificado em `certificados.js`;
2. Atualizar o código em `certificado.js`;
3. Enviar as alterações para o GitHub;
4. Abrir o certificado pelo link do GitHub Pages;
5. Conferir os dados;
6. Gerar o PDF pelo navegador;
7. Testar o QR Code no celular;
8. Verificar se a página mostra “Certificado válido”;
9. Enviar o PDF ao avaliador.

---

## Exemplo de link de validação

Modelo geral:

```text
https://SEU-USUARIO.github.io/certificado-rica/validar.html?codigo=CODIGO-DO-CERTIFICADO
```

Exemplo:

```text
https://sajadsonlee.github.io/certificado-rica/validar.html?codigo=RICA-2026-AV-0001
```

---

## Licença

Este projeto pode ser adaptado livremente para uso institucional pela **RICA — Revista Interdisciplinar de Computação Aplicada**.

Sugestão de licença:

```text
MIT License
```

ou, para uso institucional interno:

```text
Uso institucional autorizado pela RICA — Revista Interdisciplinar de Computação Aplicada.
```