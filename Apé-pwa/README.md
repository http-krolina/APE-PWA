# APÉ - Explorador de Rotas e Locais do Brasil

![Logo do APÉ](icons/APES.PNG)

Um Progressive Web App (PWA) interativo para explorar locais, calcular distâncias e descobrir as melhores rotas, combinando Geolocalização e informações da Wikipédia.

---

## Sobre o Projeto

**APÉ** nasceu da ideia de criar uma ferramenta de exploração geográfica simples e poderosa. Utilizando tecnologias web modernas, este PWA permite que o usuário encontre informações sobre qualquer localidade, visualize sua posição atual e calcule instantaneamente a distância e a rota entre esses dois pontos.

A aplicação foi desenhada para ser rápida, responsiva e, como um bom PWA, instalável em dispositivos móveis, oferecendo uma experiência similar a um aplicativo nativo.

## Funcionalidades

- 📍 **Minha Localização:** mostra latitude, longitude e link para ver no Google Maps.
- 🔎 **Pesquisar Local:**
  - Pega a posição do usuário.
  - Busca coordenadas do local pesquisado usando **Nominatim (OpenStreetMap)**.
  - Calcula a **distância** entre o usuário e o local pesquisado.
  - Mostra resumo e imagem do local usando a **API da Wikipédia**.
  - Link direto para ver a **rota no Google Maps**.

---

## Tecnologias

- HTML, CSS, JavaScript
- **PWA** (Progressive Web App)
- API de geolocalização do navegador
- **Wikipédia REST API** (`https://pt.wikipedia.org/api/rest_v1/page/summary/`)
- **Nominatim OpenStreetMap API** (`https://nominatim.openstreetmap.org`)

---
