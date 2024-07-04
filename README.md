# Ignite Shop 🛍️

Ignite Shop é um projeto de e-commerce de camisetas desenvolvido com Next.js e Stripe. Este projeto faz parte do curso Ignite da Rocketseat.
<br>

![image](https://github.com/andrewhenrique2/Ignite-shop/assets/103382295/c53fc9f4-8642-4275-8038-df8340fd0aad)

![iPhone-13-PRO-MAX-localhost (1)](https://github.com/andrewhenrique2/Ignite-shop/assets/103382295/0edbfde9-1d06-45ca-8c99-e996285677f3)

<br>

## Funcionalidades ✨
🛒 Listagem de produtos com preços e imagens <br>
🔍 Visualização detalhada de cada produto <br>
➕ Adição de produtos ao carrinho <br>
💳 Processo de pagamento integrado com Stripe <br>
🎉 Redirecionamento para página de sucesso após a compra <br>
📱 Design responsivo, adaptado para desktop e dispositivos móveis <br>
## Tecnologias Utilizadas 🛠️ 
⚛️ Next.js: Framework React para desenvolvimento de aplicações web. <br>
💰 Stripe: Plataforma de pagamento para processar transações. <br>
📝 TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript. <br> 
💅 Styled-components: Biblioteca para estilização de componentes React. <br>
🎡 Keen-slider: Biblioteca de sliders/carrosséis para React. <br>
## Como Executar o Projeto 🚀
Clone o repositório:<br>
<br>
bash
Copiar código
git clone https://github.com/seu-usuario/ignite-shop.git
Navegue até o diretório do projeto:

bash
Copiar código
cd ignite-shop
Instale as dependências:

bash
<br>
Copiar código
<br>
npm install
<br>
# ou
yarn install
Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione suas chaves do Stripe e a URL do seu site:

env
<br>
Copiar código
<br>
STRIPE_PUBLIC_KEY=pk_test_...
<br>
STRIPE_SECRET_KEY=sk_test_...
<br>
NEXT_URL=http://localhost:3000
<br>
Execute o projeto:

bash
Copiar código
npm run dev
# ou
yarn dev
Acesse o projeto em http://localhost:3000.

Estrutura do Projeto 🗂️
pages/: Contém as páginas da aplicação.
components/: Contém os componentes reutilizáveis.
styles/: Contém os estilos globais e os estilos dos componentes.
lib/: Contém configurações e integrações de bibliotecas externas (ex: Stripe).
