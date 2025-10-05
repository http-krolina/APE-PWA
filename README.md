# APÉ - Explorador de Rotas e Locais

![Logo do APÉ](icons/APES.png)

Um Progressive Web App (PWA) interativo para explorar locais, calcular distâncias e descobrir as melhores rotas, combinando Geolocalização e informações da Wikipédia.

---

## Sobre o Projeto

**APÉ** nasceu da ideia de criar uma ferramenta de exploração geográfica simples e poderosa. Utilizando tecnologias web modernas, este PWA permite que o usuário encontre informações sobre qualquer localidade, visualize sua posição atual e calcule instantaneamente a distância e a rota entre esses dois pontos.

A aplicação foi desenhada para ser rápida, responsiva e, como um bom PWA, instalável em dispositivos móveis, oferecendo uma experiência similar a um aplicativo nativo.

## Tecnologias

- HTML, CSS, JavaScript
- **PWA** (Progressive Web App)
- **Wikipédia REST API** (`https://pt.wikipedia.org/api/rest_v1/page/summary/`)
- **Nominatim OpenStreetMap API** (`https://nominatim.openstreetmap.org`)

---

## Funcionalidades

- **Localização atual:** mostra latitude, longitude e link para ver no Google Maps.
- **Pesquisa locais:**
- Obtém as coordenadas de um local pesquisado usando a API Nominatim (OpenStreetMap).
- Calcula a distância em linha reta entre o usuário e o destino.
- Exibe um resumo e uma imagem do local, consultando a API da Wikipédia.
- Gera um link para visualizar a rota no Google Maps.

---
