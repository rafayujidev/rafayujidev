# Relatório Técnico - RafayujiDev Portfolio

## 1. Introdução

Este relatório descreve o desenvolvimento do website portfólio **RafayujiDev**, um projeto Front-End completo que demonstra a aplicação dos conceitos estudados na disciplina de Programação Front-End. O site foi desenvolvido utilizando HTML5, CSS3 e JavaScript puro (Vanilla JS), seguindo as melhores práticas de desenvolvimento web moderno.

## 2. Escolhas de Design

### 2.1 Tema e Identidade Visual

O portfólio foi concebido com um design moderno e profissional, utilizando:

- **Paleta de Cores**: 
  - Cor primária: `#6366f1` (Índigo)
  - Cor secundária: `#0ea5e9` (Azul céu)
  - Cor de destaque: `#f59e0b` (Âmbar)
  - Fundo claro: `#ffffff` e `#f8fafc`
  - Texto: `#1e293b` (Slate escuro)

- **Tipografia**: Fonte 'Poppins' do Google Fonts, escolhida por sua legibilidade e aparência moderna.

- **Estilo Visual**: Flat design com elementos sutis de profundidade através de sombras e gradientes, seguindo tendências contemporâneas de UI/UX.

### 2.2 Arquitetura da Informação

O site possui quatro páginas interligadas:

1. **index.html** - Página inicial com hero section e habilidades
2. **sobre.html** - Informações pessoais, timeline e formação
3. **projetos.html** - Galeria de projetos com sistema de filtros
4. **contato.html** - Formulário de contato com validação

## 3. Tecnologias Utilizadas

### 3.1 HTML5

- Estrutura semântica com tags apropriadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Meta tags para SEO e acessibilidade
- Atributos ARIA para melhor experiência de usuários com leitores de tela
- Formulários com validação nativa HTML5

### 3.2 CSS3

- **Variáveis CSS (Custom Properties)**: Para consistência e manutenção facilitada
- **Flexbox e Grid Layout**: Para layouts responsivos e modernos
- **Animações e Transições**: Para efeitos visuais suaves
- **Media Queries**: Para responsividade em diferentes dispositivos
- **Backdrop Filter**: Para efeito de vidro no header

### 3.3 JavaScript (ES6+)

- **DOM Manipulation**: Para interatividade dinâmica
- **Event Listeners**: Para capturar interações do usuário
- **Intersection Observer API**: Para animações ao scroll
- **Form Validation**: Validação completa do formulário de contato
- **LocalStorage**: Para persistência de dados simples

## 4. Recursos Implementados

### 4.1 Layout Responsivo

O site se adapta a três breakpoints principais:

- **Desktop (> 992px)**: Layout completo com todas as colunas
- **Tablet (768px - 992px)**: Colunas empilhadas, menu adaptado
- **Mobile (< 768px)**: Menu hamburguer, layout verticalizado

**Código exemplo (CSS)**:
```css
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        transform: translateY(-150%);
        transition: var(--transition);
    }
    
    .nav-menu.active {
        transform: translateY(0);
    }
}
```

### 4.2 Menu de Navegação Funcional

- Header fixo com efeito de sombra ao scroll
- Menu hamburguer animado para dispositivos móveis
- Indicador visual da página ativa
- Smooth scroll para navegação entre seções

### 4.3 Formulário de Contato com Validação JavaScript

Validações implementadas:

| Campo | Validação | Mensagem de Erro |
|-------|-----------|------------------|
| Nome | Mínimo 3 caracteres | "Por favor, insira seu nome completo" |
| Email | Formato válido (regex) | "Por favor, insira um email válido" |
| Assunto | Campo obrigatório | "Por favor, selecione um assunto" |
| Mensagem | Mínimo 10 caracteres | "Por favor, insira uma mensagem" |

**Código exemplo (JavaScript)**:
```javascript
function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validação e envio
});
```

### 4.4 Efeitos Interativos com JavaScript

#### Efeito 1: Filtro de Projetos
- Sistema de filtragem por categoria (Todos, Websites, Aplicações, UI Design)
- Animação suave ao mostrar/ocultar cards
- Atualização visual dos botões de filtro

#### Efeito 2: Animações ao Scroll (Intersection Observer)
- Cards aparecem suavemente ao entrar na viewport
- Feedback visual durante a navegação
- Performance otimizada usando Observer API

#### Efeito 3: Parallax nas Formas Flutuantes
- Elementos decorativos movem-se em velocidades diferentes
- Cria profundidade visual durante o scroll

#### Efeito 4: Botão Scroll-to-Top
- Aparece após rolar 300px
- Retorna ao topo com smooth scroll
- Criado dinamicamente via JavaScript

## 5. Conceitos de SEO Básico

### 5.1 Meta Tags Implementadas

```html
<meta name="description" content="Portfólio de desenvolvedor Front-End...">
<meta name="keywords" content="desenvolvedor, front-end, HTML, CSS, JavaScript...">
<meta name="author" content="RafayujiDev">
<meta name="robots" content="index, follow">
```

### 5.2 Open Graph (Redes Sociais)

```html
<meta property="og:title" content="RafayujiDev - Portfólio Front-End">
<meta property="og:description" content="Conheça meus projetos...">
<meta property="og:type" content="website">
```

### 5.3 HTML Semântico

- Uso correto de hierarquia de headings (H1 → H2 → H3)
- Tags semânticas para melhor compreensão pelos buscadores
- Atributos `alt` para imagens (quando aplicável)
- URLs amigáveis e estrutura lógica

### 5.4 Acessibilidade

- Atributos `aria-label` em botões
- Contraste de cores adequado
- Focus states visíveis
- Navegação por teclado suportada

## 6. Organização do Código

### 6.1 Estrutura de Diretórios

```
rafayujidev/
├── index.html
├── sobre.html
├── projetos.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

### 6.2 Boas Práticas Adotadas

- **Comentários explicativos** no código
- **Indentação consistente** (4 espaços)
- **Nomenclatura descritiva** para classes e variáveis
- **Separação de responsabilidades** (HTML, CSS, JS em arquivos distintos)
- **DRY (Don't Repeat Yourself)**: Uso de variáveis CSS e funções reutilizáveis

## 7. Desafios Enfrentados

### 7.1 Responsividade do Menu Mobile

**Desafio**: Criar um menu que funcionasse perfeitamente em todos os dispositivos.

**Solução**: Utilização de media queries combinadas com JavaScript para toggle do menu, com animações CSS suaves.

### 7.2 Validação de Formulário

**Desafio**: Implementar validação completa sem bibliotecas externas.

**Solução**: Desenvolvimento de funções de validação personalizadas com feedback visual imediato ao usuário.

### 7.3 Performance das Animações

**Desafio**: Manter performance adequada com múltiplas animações.

**Solução**: Uso da Intersection Observer API em vez de eventos de scroll, reduzindo drasticamente as chamadas de função.

## 8. Aplicação dos Conceitos da Disciplina

O projeto aplica diretamente os seguintes conceitos estudados:

| Conceito | Aplicação no Projeto |
|----------|---------------------|
| HTML5 Semântico | Estrutura completa com tags semânticas |
| CSS3 Moderno | Variáveis, Grid, Flexbox, Animações |
| JavaScript DOM | Manipulação dinâmica de elementos |
| Responsive Design | Media queries e layouts fluidos |
| Validação de Forms | JavaScript + HTML5 validation |
| SEO Básico | Meta tags, estrutura semântica |
| Acessibilidade | ARIA labels, contraste, navegação por teclado |

## 9. Capturas de Tela

*(Inserir capturas de tela das 4 páginas em versões desktop e mobile)*

### Página Inicial (Desktop)
- Hero section com formas flutuantes animadas
- Grid de habilidades com efeito hover

### Página Sobre
- Timeline vertical com marcadores
- Cards de educação com ícones

### Página Projetos
- Sistema de filtros funcional
- Grid responsivo de cards de projetos

### Página Contato
- Formulário com validação em tempo real
- Cards de informações de contato

## 10. Conclusão

O desenvolvimento do portfólio RafayujiDev permitiu a aplicação prática dos conceitos fundamentais de Programação Front-End estudados na disciplina. O resultado é um website moderno, responsivo e funcional que demonstra competência técnica em HTML5, CSS3 e JavaScript.

Os principais aprendizados incluem:
- Importância da estrutura semântica para SEO e acessibilidade
- Poder das variáveis CSS para manutenção de código
- Técnicas modernas de layout com Grid e Flexbox
- Validação de formulários sem dependências externas
- Otimização de performance com APIs modernas do navegador

## 11. Referências

- NOEL, André Abdala. Programação Front End. Florianópolis, SC: Arqué, 2025.
- MDN Web Docs. Front-end web developer. Disponível em: https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer
- W3Schools. HTML/CSS/JavaScript Tutorials. Disponível em: https://www.w3schools.com/

---

**Autor**: RafayujiDev  
**Data**: 2025  
**Versão**: 1.0
