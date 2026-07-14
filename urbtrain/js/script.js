/* ============================================
   URBTRAIN - JAVASCRIPT PURO
   ============================================ */

// CONFIGURAÇÕES
const WHATSAPP_NUMBER = '5527997272328'; // Altere para o número do grupo/admin

// ============================================
// ARRAYS DE DADOS
// ============================================

const TREINOS = [
    {
        id: 1,
        diaSemana: 'SEGUNDA',
        data: '10 de Fevereiro',
        horario: '19:00',
        tipo: 'Corrida Urbana',
        descricao: 'Treino de ritmo com parada de aquecimento.',
        local: 'Pracinha do Campo do Vasquinho',
        mapaUrl: 'https://maps.google.com/?q=Linhares,+ES',
        dressCode: 'Roupa confortável, tênis de corrida',
        especial: false
    },
    {
        id: 2,
        diaSemana: 'DOMINGO',
        data: '16 de Fevereiro',
        horario: '07:00',
        tipo: 'Corrida Social',
        descricao: 'Percurso de 5km ao ritmo da turma com música ao vivo.',
        local: 'Praia de Linhares',
        mapaUrl: 'https://maps.google.com/?q=Praia+Linhares,+ES',
        dressCode: 'Kit URBTRAIN recomendado',
        especial: true
    },
    {
        id: 3,
        diaSemana: 'SEGUNDA',
        data: '17 de Fevereiro',
        horario: '06:30',
        tipo: 'Treino Intervalado',
        descricao: 'Treino de velocidade com séries curtas.',
        local: 'Avenida Principal',
        mapaUrl: 'https://maps.google.com/?q=Avenida+Principal,+Linhares,+ES',
        dressCode: 'Roupa de treino, tênis neutro',
        especial: false
    },
    {
        id: 4,
        diaSemana: 'DOMINGO',
        data: '23 de Fevereiro',
        horario: '07:00',
        tipo: 'Corrida Longa',
        descricao: '5km em ritmo conversível com breaks.',
        local: 'Parque Metropolitano',
        mapaUrl: 'https://maps.google.com/?q=Parque+Metropolitano,+Linhares,+ES',
        dressCode: 'Kit URBTRAIN, garrafa de água',
        especial: false
    },
    {
        id: 5,
        diaSemana: 'DOMINGO',
        data: '02 de Março',
        horario: '06:30',
        tipo: 'Café da Manhã',
        descricao: 'Corrida seguida de café da manhã comunitário com parceiros.',
        local: 'Centro - Café da Manhã',
        mapaUrl: 'https://maps.google.com/?q=Centro+Linhares,+ES',
        dressCode: 'Kit URBTRAIN, chegada formal',
        especial: true
    }
];

const PRODUTOS = [
    {
        id: 1,
        nome: 'Boné URB',
        preco: 'R$ 70,00',
        imagem: 'assets/bone.png',
        descricao: 'Urbano. Autêntico. Seu. Boné com alta durabilidade, leve e confortável com acabamento premium.',
        tamanhos: ['Único']
    },
    {
        id: 2,
        nome: 'Camiseta URBTRAIN',
        preco: 'R$ 82,90',
        imagem: 'assets/camisa.png',
        descricao: 'Abrimos nova remessa de pedidos! Camiseta premium com estampa URBTRAIN. Disponível de P a XG.',
        tamanhos: ['P', 'M', 'G', 'GG', 'XG']
    },
    {
        id: 3,
        nome: 'Top URBTRAIN',
        preco: 'R$ 60,00',
        imagem: 'assets/top.png',
        descricao: 'Conforto que você merece. Tecido leve e respirável, estilo para todos os momentos. Perfeito para treinos.',
        tamanhos: ['P', 'M', 'G']
    },
    {
        id: 4,
        nome: 'Meia Alta Performance',
        preco: 'R$ 60,00',
        imagem: 'assets/meia.png',
        descricao: '100% Poliamida (92% Poliamida, 5% Elastano, 3% Outras Fibras). Leveza, respirabilidade, ajuste perfeito e durabilidade.',
        tamanhos: ['P', 'M', 'G']
    }
];

// ============================================
// FUNÇÕES DO MENU MOBILE
// ============================================

function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle do menu
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO - TREINOS
// ============================================

function renderTreinos() {
    const grid = document.getElementById('treinosGrid');
    grid.innerHTML = '';

    TREINOS.forEach(treino => {
        const card = document.createElement('div');
        card.className = 'treino-card';

        let badge = '';
        if (treino.especial) {
            badge = '<span class="treino-badge">☕ Café da Manhã</span>';
        }

        card.innerHTML = `
            <div class="treino-card-header">
                <div class="treino-dia">${treino.diaSemana}</div>
                ${badge}
            </div>
            <span class="treino-tipo">${treino.tipo}</span>
            <div class="treino-info">
                <strong>Data:</strong> ${treino.data}
            </div>
            <div class="treino-info">
                <strong>Horário:</strong> ${treino.horario}
            </div>
            <div class="treino-info">
                <strong>Local:</strong>
                <a href="${treino.mapaUrl}" target="_blank" class="treino-mapa">${treino.local}</a>
            </div>
            <div class="treino-info">
                <strong>Dress Code:</strong> ${treino.dressCode}
            </div>
            <div class="treino-descricao">${treino.descricao}</div>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO - SHOP
// ============================================

function renderShop() {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    PRODUTOS.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';

        card.innerHTML = `
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="produto-info">
                <div class="produto-nome">${produto.nome}</div>
                <div class="produto-preco">${produto.preco}</div>
                <div class="produto-descricao">${produto.descricao}</div>
                <button class="btn btn-primary produto-button" onclick="openAddToCartModal(${produto.id})">Comprar</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// FUNÇÕES DO CARRINHO (NOVO SISTEMA)
// ============================================

let carrinho = [];

// Carregar carrinho do localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('urbtrain_carrinho');
    if (savedCart) {
        carrinho = JSON.parse(savedCart);
    }
    updateCartUI();
}

// Salvar carrinho no localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('urbtrain_carrinho', JSON.stringify(carrinho));
}

// Adicionar item ao carrinho
function addToCart(produtoId, tamanho) {
    const produto = PRODUTOS.find(p => p.id === produtoId);
    if (!produto) return;

    // Converter preço para número
    const precoNumerico = parseFloat(produto.preco.replace('R$ ', '').replace(',', '.'));

    const itemId = `${produtoId}-${tamanho}`;
    const existingItem = carrinho.find(item => item.id === itemId);

    if (existingItem) {
        // Se o item já existe, aumenta a quantidade
        existingItem.quantidade += 1;
    } else {
        // Caso contrário, adiciona um novo item
        carrinho.push({
            id: itemId,
            produtoId: produtoId,
            nome: produto.nome,
            preco: precoNumerico,
            precoFormatado: produto.preco,
            tamanho: tamanho,
            quantidade: 1
        });
    }

    saveCartToLocalStorage();
    updateCartUI();
}

// Remover item do carrinho
function removeFromCart(itemId) {
    carrinho = carrinho.filter(item => item.id !== itemId);
    saveCartToLocalStorage();
    updateCartUI();
}

// Calcular total do carrinho
function calculateCartTotal() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Formatar preço em reais
function formatPrice(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Atualizar UI do carrinho
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const cartContent = document.getElementById('cartDrawerContent');

    // Atualizar contador
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartCount.textContent = totalItens;

    // Atualizar total
    const total = calculateCartTotal();
    cartTotal.textContent = formatPrice(total);

    // Atualizar conteúdo do carrinho
    if (carrinho.length === 0) {
        cartContent.innerHTML = '<div class="cart-empty"><p>Seu carrinho está vazio</p></div>';
    } else {
        cartContent.innerHTML = carrinho.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nome}</div>
                    <div class="cart-item-size">Tamanho: ${item.tamanho}</div>
                    <div class="cart-item-size">Quantidade: ${item.quantidade}x</div>
                    <div class="cart-item-price">${formatPrice(item.preco * item.quantidade)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
            </div>
        `).join('');
    }
}

// Abrir/Fechar gaveta do carrinho
function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    drawer.classList.add('active');
    overlay.classList.add('active');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
}

// ============================================
// FUNÇÕES DO MODAL (ATUALIZADO PARA CARRINHO)
// ============================================

function openAddToCartModal(produtoId) {
    const modal = document.getElementById('compraModal');
    const form = document.getElementById('pedidoForm');
    const produtoInput = document.getElementById('produtoId');
    const produtoNomeInput = document.getElementById('produtoNome');
    const produtoPrecoInput = document.getElementById('produtoPreco');
    const tamanhoSelect = document.getElementById('tamanho');

    const produto = PRODUTOS.find(p => p.id === produtoId);

    if (!produto) return;

    // Limpar formulário
    form.reset();
    produtoInput.value = produtoId;
    produtoNomeInput.value = produto.nome;
    produtoPrecoInput.value = produto.preco;

    // Preencher tamanhos
    tamanhoSelect.innerHTML = '<option value="">Selecione um tamanho</option>';
    produto.tamanhos.forEach(tamanho => {
        const option = document.createElement('option');
        option.value = tamanho;
        option.textContent = tamanho;
        tamanhoSelect.appendChild(option);
    });

    // Resetar quantidade para 1
    document.getElementById('quantidade').value = 1;

    // Limpar mensagem de erro
    const errorDiv = document.getElementById('formError');
    errorDiv.classList.remove('active');
    errorDiv.textContent = '';

    // Mostrar modal
    modal.classList.add('active');

    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('compraModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openCheckoutModal() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const form = document.getElementById('checkoutForm');
    
    form.reset();
    
    const errorDiv = document.getElementById('checkoutError');
    errorDiv.classList.remove('active');
    errorDiv.textContent = '';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    closeCartDrawer();
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// FUNÇÕES DO FORMULÁRIO
// ============================================

// Adicionar item ao carrinho (do modal)
function handleAddToCartSubmit(e) {
    e.preventDefault();

    const tamanho = document.getElementById('tamanho').value;
    const quantidade = parseInt(document.getElementById('quantidade').value) || 1;
    const produtoId = parseInt(document.getElementById('produtoId').value);
    const errorDiv = document.getElementById('formError');

    // Validar campos
    if (!tamanho) {
        errorDiv.textContent = 'Por favor, selecione um tamanho.';
        errorDiv.classList.add('active');
        return;
    }

    if (quantidade < 1 || quantidade > 99) {
        errorDiv.textContent = 'Quantidade inválida (mín: 1, máx: 99).';
        errorDiv.classList.add('active');
        return;
    }

    // Adicionar ao carrinho múltiplas vezes conforme a quantidade
    for (let i = 0; i < quantidade; i++) {
        addToCart(produtoId, tamanho);
    }
    
    // Fechar modal e mostrar mensagem de sucesso
    closeModal();
    
    // Abrir o carrinho para o usuário ver o item adicionado
    setTimeout(() => {
        openCartDrawer();
    }, 100);
}

// Finalizar pedido e enviar para WhatsApp
function handleCheckoutSubmit(e) {
    e.preventDefault();

    const nome = document.getElementById('checkoutNome').value.trim();
    const whatsapp = document.getElementById('checkoutWhatsapp').value.trim();
    const errorDiv = document.getElementById('checkoutError');

    // Validar campos
    if (!nome || !whatsapp) {
        errorDiv.textContent = 'Por favor, preencha todos os campos.';
        errorDiv.classList.add('active');
        return;
    }

    // Validar formato do WhatsApp
    const whatsappLimpo = whatsapp.replace(/\D/g, '');
    if (whatsappLimpo.length < 10) {
        errorDiv.textContent = 'WhatsApp inválido.';
        errorDiv.classList.add('active');
        return;
    }

    // Montar mensagem para WhatsApp
    let mensagem = 'A RUA É NOSSA! \n\n';
    mensagem += `Novo pedido de: ${nome}\n\n`;
    mensagem += 'Itens:\n';
    
    carrinho.forEach(item => {
        mensagem += `- ${item.quantidade}x ${item.nome} (Tamanho: ${item.tamanho}) - ${formatPrice(item.preco)}\n`;
    });
    
    const total = calculateCartTotal();
    mensagem += `\nTotal: ${formatPrice(total)}`;

    // Criar URL do WhatsApp
    const numeroWhatsApp = WHATSAPP_NUMBER;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Limpar carrinho e localStorage
    carrinho = [];
    saveCartToLocalStorage();
    updateCartUI();
    
    // Fechar modal
    closeCheckoutModal();
    
    // Redirecionar para WhatsApp
    window.location.href = urlWhatsApp;
}

// ============================================
// FUNÇÃO DE FORMATAÇÃO DE WHATSAPP
// ============================================

function formatWhatsAppInput(input) {
    // Remove tudo que não é número
    let value = input.value.replace(/\D/g, '');
    
    // Formata como (XX) XXXXX-XXXX
    if (value.length > 0) {
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }
    
    input.value = value;
}

// ============================================
// FUNÇÕES DO CALENDÁRIO LIGHTBOX
// ============================================

function openCalendarLightbox() {
    const lightbox = document.getElementById('calendarioLightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCalendarLightbox() {
    const lightbox = document.getElementById('calendarioLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function initCalendarioLightbox() {
    const calendarPreview = document.getElementById('calendarPreview');
    const closeButton = document.getElementById('closeCalendarLightbox');
    const backdrop = document.getElementById('lightboxBackdrop');

    if (calendarPreview) {
        calendarPreview.addEventListener('click', openCalendarLightbox);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeCalendarLightbox);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeCalendarLightbox);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCalendarLightbox();
        }
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Carregar carrinho do localStorage
    loadCartFromLocalStorage();
    
    // Inicializar menu mobile
    initMenu();

    // Renderizar treinos e produtos
    renderTreinos();
    renderShop();

    // Inicializar calendário lightbox
    initCalendarioLightbox();

    // ===== MODAL DE ADICIONAR AO CARRINHO =====
    const modal = document.getElementById('compraModal');
    const modalClose = document.getElementById('modalClose');
    const pedidoForm = document.getElementById('pedidoForm');

    modalClose.addEventListener('click', closeModal);

    // Fechar modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Submit do formulário de adicionar ao carrinho
    pedidoForm.addEventListener('submit', handleAddToCartSubmit);

    // ===== GAVETA DO CARRINHO =====
    const cartButton = document.getElementById('cartButton');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
    const cartCheckout = document.getElementById('cartCheckout');

    cartButton.addEventListener('click', openCartDrawer);
    cartDrawerClose.addEventListener('click', closeCartDrawer);
    cartDrawerOverlay.addEventListener('click', closeCartDrawer);
    cartCheckout.addEventListener('click', openCheckoutModal);

    // ===== MODAL DE CHECKOUT =====
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalClose = document.getElementById('checkoutModalClose');
    const checkoutForm = document.getElementById('checkoutForm');

    checkoutModalClose.addEventListener('click', closeCheckoutModal);

    // Fechar modal ao clicar fora do conteúdo
    checkoutModal.addEventListener('click', function(event) {
        if (event.target === checkoutModal) {
            closeCheckoutModal();
        }
    });

    // Submit do formulário de checkout
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Formatação automática do WhatsApp
    const checkoutWhatsapp = document.getElementById('checkoutWhatsapp');
    if (checkoutWhatsapp) {
        checkoutWhatsapp.addEventListener('input', function() {
            formatWhatsAppInput(this);
        });
    }

    // ESC para fechar modais
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
            closeCheckoutModal();
            closeCartDrawer();
        }
    });
});

// ============================================
// V2.0 - AUTENTICAÇÃO (COMENTADO)
// ============================================

/*
// Estrutura de autenticação para versão futura

// Estado de autenticação
let authUser = null;

// Verificar se usuário está logado
function isLoggedIn() {
    return authUser !== null;
}

// Login do usuário
function login(email, senha) {
    // TODO: Implementar autenticação com backend
    // Verificar credenciais com servidor
    if (email && senha) {
        authUser = {
            email: email,
            timestamp: new Date()
        };
        return true;
    }
    return false;
}

// Logout do usuário
function logout() {
    authUser = null;
}

// Requer login para acessar função
function requireLogin(callback) {
    if (isLoggedIn()) {
        callback();
    } else {
        console.log('Faça login para continuar');
        // Redirecionar para página de login
    }
}

// Exemplo de uso:
// requireLogin(() => {
//     console.log('Usuário logado, pode acessar recurso protegido');
// });
*/
