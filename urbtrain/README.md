# URBTRAIN - Site Oficial

Bem-vindo ao repositório do site oficial da URBTRAIN, grupo de corrida urbana de Linhares (ES).

## 📋 Estrutura do Projeto

```
urbtrain/
├── index.html           # Página principal
├── php/
│   └── pedido.php       # Processador de pedidos (PHP)
├── css/
│   └── style.css        # Estilos (CSS puro)
├── js/
│   └── script.js        # Funcionalidades (JavaScript puro)
└── assets/
    ├── logo.png         # Logo URBTRAIN
    ├── bone.jpg         # Foto do boné
    ├── camisa.jpg       # Foto da camiseta
    ├── top.jpg          # Foto do top feminino
    ├── meias.jpg        # Foto das meias
    └── galeria/
        ├── foto1.jpg    # Foto 1 dos treinos
        ├── foto2.jpg    # Foto 2 dos treinos
        └── foto3.jpg    # Foto 3 dos treinos
```

## 🚀 Como Usar

### 1. Adicionar as Imagens

Você precisa adicionar as seguintes imagens na pasta `assets/`:

| Arquivo | Descrição | Dimensões Recomendadas |
|---------|-----------|----------------------|
| `logo.png` | Logo URBTRAIN | 200x100px (transparente) |
| `bone.jpg` | Foto do boné | 400x400px |
| `camisa.jpg` | Foto da camiseta | 400x400px |
| `top.jpg` | Foto do top feminino | 400x400px |
| `meias.jpg` | Foto das meias | 400x400px |
| `galeria/foto1.jpg` | Foto 1 dos treinos | 600x400px |
| `galeria/foto2.jpg` | Foto 2 dos treinos | 600x400px |
| `galeria/foto3.jpg` | Foto 3 dos treinos | 600x400px |

### 2. Configurar o Número do WhatsApp

Edite os seguintes arquivos para alterar o número do WhatsApp:

- **Em `js/script.js`** (linha 8):
```javascript
const WHATSAPP_NUMBER = '5527992063018'; // Altere para o seu número
```

- **Em `php/pedido.php`** (linha 9):
```php
$WHATSAPP_NUMBER = '5527992063018';
```

### 3. Rodar Localmente (XAMPP)

1. Coloque a pasta `urbtrain` em `C:\xampp\htdocs\`
2. Inicie o Apache no XAMPP Control Panel
3. Acesse no navegador: `http://localhost/urbtrain/index.html`

### 4. Fazer Deploy na Hostinger (FTP)

1. Conecte via FTP usando as credenciais da Hostinger
2. Faça upload de TODOS os arquivos (mantendo a estrutura de pastas)
3. Certifique-se que:
   - PHP está ativado no servidor
   - Pasta `php/` tem permissões de escrita (755 ou 775)
   - Arquivo `index.html` está acessível diretamente

## 📝 Funcionalidades

### Seções do Site

1. **Navbar Fixa** - Logo + Menu hambúrguer (mobile)
2. **Hero** - Título grande + Tagline + Botões de ação
3. **Treinos** - Cards dinamicamente renderizados com JavaScript
4. **Galeria** - Grade CSS com efeito hover
5. **URB Shop** - Vitrine de 4 produtos + Modal de compra
6. **Sobre** - Texto institucional + Estatísticas
7. **Footer** - Links e informações

### Recursos Técnicos

- ✅ HTML5 Semântico
- ✅ CSS3 Puro (sem frameworks)
- ✅ JavaScript Vanilla (sem jQuery)
- ✅ PHP 8+ para processamento de pedidos
- ✅ Responsivo 100% (Mobile-first)
- ✅ Design Minimalista (Preto, Branco, Cinzas)
- ✅ Animações CSS puras
- ✅ Sem dependências externas

## 🔧 Customização

### Adicionar Novos Treinos

Edite o array `TREINOS` em `js/script.js`:

```javascript
const TREINOS = [
    {
        id: 1,
        diaSemana: 'SEGUNDA',
        data: '10 de Fevereiro',
        horario: '06:30',
        tipo: 'Corrida Urbana',
        descricao: 'Treino de ritmo',
        local: 'Centro de Linhares',
        mapaUrl: 'https://maps.google.com/?q=...',
        dressCode: 'Roupa confortável',
        especial: false
    },
    // ... adicione mais treinos
];
```

### Adicionar Novos Produtos

Edite o array `PRODUTOS` em `js/script.js`:

```javascript
const PRODUTOS = [
    {
        id: 1,
        nome: 'Nome do Produto',
        preco: 'R$ 0,00',
        imagem: 'assets/imagem.jpg',
        descricao: 'Descrição...',
        tamanhos: ['P', 'M', 'G', 'GG']
    },
    // ... adicione mais produtos
];
```

## 🎨 Paleta de Cores

- Preto: `#000000`
- Branco: `#ffffff`
- Cinza Escuro: `#111111`, `#222222`
- Cinza Médio: `#444444`
- Cinza Claro: `#888888`, `#f5f5f5`

## 📱 Tipografia

- **Títulos**: Bebas Neue (Google Fonts)
- **Corpo**: DM Sans (Google Fonts)

## 🔐 Segurança

- ✅ Formulário sanitizado com `htmlspecialchars()`
- ✅ Validação de campos obrigatórios
- ✅ Sem armazenamento de dados sensíveis
- ✅ Redirecionamento seguro para WhatsApp

## 📞 Suporte

Para dúvidas sobre o site, entre em contato com o time URBTRAIN.

---

**Ninguém fica para trás!** 🏃‍♀️🏃‍♂️
