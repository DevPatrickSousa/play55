# MinhaLoja - E-commerce

Um e-commerce moderno construído com Nuxt 3, seguindo o conceito mobile first e utilizando as melhores práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **Nuxt 3** - Framework Vue.js para aplicações universais
- **Vue 3** - Framework JavaScript progressivo
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Pinia** - Gerenciamento de estado
- **Zod** - Validação de esquemas
- **VueUse** - Coleção de composables úteis
- **reCAPTCHA v3** - Proteção contra bots

## ✨ Funcionalidades

### 🛍️ E-commerce
- **Listagem de produtos** integrada com a API FakeStore
- **Busca de produtos** por nome
- **Sistema de favoritos** com filtro
- **Carrinho de compras** com controle de quantidade
- **Banner promocional** com design responsivo

### 📱 Design Mobile First
- Layout totalmente responsivo
- Interface otimizada para dispositivos móveis
- Componentes adaptáveis para diferentes tamanhos de tela

### 🔒 Formulário de Contato
- **Validação completa** com Zod
- **Máscaras de input** para telefone
- **Integração com reCAPTCHA v3**
- **Envio seguro** de dados

### 🎨 Interface Moderna
- Design limpo e profissional
- Animações suaves
- Componentes reutilizáveis
- Acessibilidade otimizada

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd desafio-tecnico-play55
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

### Scripts disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run generate` - Gera a aplicação estática

## 📁 Estrutura do Projeto

```
desafio-tecnico-play55/
├── components/          # Componentes Vue
│   ├── AppHeader.vue    # Cabeçalho da aplicação
│   ├── AppFooter.vue    # Rodapé da aplicação
│   ├── ProductCard.vue  # Card de produto
│   ├── ProductList.vue  # Lista de produtos
│   ├── PromotionalBanner.vue # Banner promocional
│   ├── CartModal.vue    # Modal do carrinho
│   └── ContactModal.vue # Modal de contato
├── stores/              # Stores Pinia
│   ├── cart.ts         # Gerenciamento do carrinho
│   └── favorites.ts    # Gerenciamento de favoritos
├── composables/         # Composables Vue
│   └── useProducts.ts  # Lógica de produtos
├── types/              # Tipos TypeScript
│   └── product.ts      # Interfaces de produto
├── utils/              # Utilitários
│   ├── formatters.ts   # Funções de formatação
│   ├── validation.ts   # Schemas de validação Zod
│   └── index.ts        # Exportações centralizadas
├── assets/             # Recursos estáticos
│   └── css/           # Estilos CSS
```

## 🛠️ Utilitários

### Formatações (`utils/formatters.ts`)
- `formatPrice(price)` - Formata preços para o formato brasileiro
- `formatCurrency(price, currency)` - Formata preços com símbolo da moeda
- `formatNumber(number)` - Formata números com separadores de milhares
- `formatDate(date)` - Formata datas para o formato brasileiro
- `formatDateTime(date)` - Formata data e hora
- `formatPhone(phone)` - Formata telefones brasileiros
- `formatCPF(cpf)` - Formata CPF
- `formatCEP(cep)` - Formata CEP
- `truncateText(text, maxLength)` - Trunca textos com reticências
- `formatRating(rating)` - Formata ratings

### Validação (`utils/validation.ts`)
- Schemas Zod para validação de formulários
- Validação de dados de contato
└── public/            # Arquivos públicos
```

## 🎯 Funcionalidades Principais

### 1. **Sistema de Produtos**
- Integração com API FakeStore
- Busca em tempo real
- Paginação infinita
- Filtro por favoritos

### 2. **Carrinho de Compras**
- Adicionar/remover produtos
- Controle de quantidade
- Cálculo automático do total
- Modal responsivo

### 3. **Sistema de Favoritos**
- Marcar/desmarcar produtos
- Filtro para mostrar apenas favoritos
- Persistência local

### 4. **Formulário de Contato**
- Validação com Zod
- Máscaras de input
- Integração reCAPTCHA
- Feedback visual

## 🔧 Configurações

### reCAPTCHA
O projeto está configurado com reCAPTCHA v3:
- **Site Key**: `6LfTVC8rAAAAAISI8s59lF0JcXMq_XfgsHsepO5U`
- **Action**: `form_submit`

### API
- **Endpoint**: `https://fakestoreapi.com/products`
- **Método**: GET
- **Resposta**: Array de produtos

## 📱 Responsividade

O projeto segue o conceito **Mobile First** com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

### Cores
- **Primária**: Purple (#9333ea)
- **Secundária**: Gray (#6b7280)
- **Acento**: Yellow (#fbbf24)

### Componentes
- Botões com estados hover/focus
- Inputs com validação visual
- Modais com overlay
- Cards com sombras

## 🚀 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte Nuxt 3:

- **Vercel**: Deploy automático
- **Netlify**: Deploy automático
- **Heroku**: Configuração manual
- **Docker**: Containerização

## 📝 Commits

O projeto segue o padrão de commits semânticos:
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `test:` - Testes
- `chore:` - Configurações

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ para o desafio técnico da Play55
