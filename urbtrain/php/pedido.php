<?php
/*
 * URBTRAIN - Processador de Pedidos
 * Recebe dados do formulário de compra e redireciona para WhatsApp
 */

header('Content-Type: application/json; charset=utf-8');

// Número do WhatsApp para redirecionamento (altere conforme necessário)
$WHATSAPP_NUMBER = '5527992063018';

// Verificar se é requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo json_encode([
        'sucesso' => false,
        'erro' => 'Método não permitido'
    ]);
    exit;
}

// Receber dados do formulário
$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
$whatsapp = isset($_POST['whatsapp']) ? trim($_POST['whatsapp']) : '';
$tamanho = isset($_POST['tamanho']) ? trim($_POST['tamanho']) : '';
$produtoId = isset($_POST['produto']) ? trim($_POST['produto']) : '';

// Validar campos vazios
if (empty($nome) || empty($whatsapp) || empty($tamanho) || empty($produtoId)) {
    http_response_code(400);
    echo json_encode([
        'sucesso' => false,
        'erro' => 'Todos os campos são obrigatórios'
    ]);
    exit;
}

// Sanitizar dados com htmlspecialchars para evitar XSS
$nome = htmlspecialchars($nome, ENT_QUOTES, 'UTF-8');
$whatsapp = htmlspecialchars($whatsapp, ENT_QUOTES, 'UTF-8');
$tamanho = htmlspecialchars($tamanho, ENT_QUOTES, 'UTF-8');
$produtoId = htmlspecialchars($produtoId, ENT_QUOTES, 'UTF-8');

// Array de produtos para referência
$produtos = [
    1 => 'Boné URBTRAIN',
    2 => 'Camiseta URBTRAIN',
    3 => 'Top Feminino URBTRAIN',
    4 => 'Meias de Corrida URBTRAIN'
];

// Validar ID do produto
if (!isset($produtos[$produtoId])) {
    http_response_code(400);
    echo json_encode([
        'sucesso' => false,
        'erro' => 'Produto inválido'
    ]);
    exit;
}

$nomeProduto = $produtos[$produtoId];

// Montar mensagem formatada para WhatsApp
$mensagem = "Olá! Gostaria de fazer um pedido na URB Shop.\n\n";
$mensagem .= "👤 Nome: $nome\n";
$mensagem .= "🎽 Produto: $nomeProduto\n";
$mensagem .= "📏 Tamanho: $tamanho\n";
$mensagem .= "📱 WhatsApp: $whatsapp\n\n";
$mensagem .= "Por favor, confirme a disponibilidade e o valor total!";

// Codificar mensagem para URL
$mensagemEncoded = urlencode($mensagem);

// Montar URL do WhatsApp
$whatsappUrl = "https://wa.me/$WHATSAPP_NUMBER?text=$mensagemEncoded";

// Retornar resposta JSON com URL de redirecionamento
echo json_encode([
    'sucesso' => true,
    'url' => $whatsappUrl,
    'mensagem' => 'Pedido processado com sucesso!'
]);

exit;
?>
