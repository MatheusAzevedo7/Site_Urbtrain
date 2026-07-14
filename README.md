# URBTRAIN

Site institucional, agenda, loja e galeria da URBTRAIN. O projeto e 100% estatico, feito com HTML, CSS e JavaScript modular, pronto para GitHub Pages.

## Paginas

- `index.html`: apresentacao institucional e produtos em destaque.
- `agenda.html`: calendario mensal e proximos treinos.
- `loja.html`: catalogo, carrinho e finalizacao pelo WhatsApp.
- `galeria.html`: fotos com visualizacao ampliada.

## Estrutura

```
assets/       Imagens publicas em WebP e PNG
css/          Estilos globais e responsivos
data/         Conteudos editaveis em JSON
js/components Componentes compartilhados
js/pages/     Logica especifica de cada pagina
```

## Atualizar Conteudos

Os dados do site ficam em `data/`:

- `site.json`: Instagram, email, numero do WhatsApp e estatisticas.
- `agenda.json`: calendario e lista de treinos.
- `produtos.json`: produtos, precos em centavos, imagens e variantes.
- `galeria.json`: imagens, textos alternativos e legendas.

Para ativar os pedidos, altere apenas `whatsapp` em `data/site.json` para o numero com DDI e DDD, sem espacos ou simbolos. O valor atual e propositalmente ficticio.

## Rodar Localmente

Use um servidor estatico para que os modulos JavaScript e arquivos JSON sejam carregados corretamente:

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

## GitHub Pages

1. Envie a branch `main` para o GitHub.
2. Em `Settings > Pages`, selecione `Deploy from a branch`.
3. Escolha a branch `main` e a pasta `/(root)`.
4. Salve e aguarde a publicacao.

GitHub Pages nao executa PHP. Por isso, pedidos usam o link do WhatsApp no navegador e o carrinho permanece salvo localmente.

## Recursos

- Design urbano em preto, branco e cinzas.
- Layout responsivo e imagens com carregamento preguicoso.
- Animacoes suaves com suporte a `prefers-reduced-motion`.
- Navegacao por teclado, `skip link`, foco visivel e links externos protegidos.
- Carrinho persistente via `localStorage`, sem cadastro ou pagamento online.