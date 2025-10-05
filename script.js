// Distância (Haversine)
const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371,
    toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1),
    dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(2);
};

//localização do usuário
const getUserLocation = () =>
  new Promise((res, rej) =>
    navigator.geolocation.getCurrentPosition((p) => res(p.coords), rej)
  );

const getWikiInfo = async (q) => {
  try {
    const r = await fetch(
      `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        q
      )}`
    );
    if (!r.ok) return "";
    const d = await r.json();
    return `<h2>${d.title}</h2><p>${d.extract}</p>${
      d.thumbnail ? `<img src="${d.thumbnail.source}">` : ""
    }`;
  } catch {
    return "";
  }
};

const getPlaceCoords = async (q) => {
  const r = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      q
    )}`
  );
  const d = await r.json();
  return d[0] ? { lat: +d[0].lat, lon: +d[0].lon } : null;
};

document.getElementById("PesqBtn").onclick = async () => {
  const q = document.getElementById("Pesq").value.trim();
  if (!q) return alert("Digite um local!");

  const user = await getUserLocation();
  const place = await getPlaceCoords(q);
  if (!place) return (result.innerHTML = "<p>Local não encontrado.</p>");

  const dist = calcularDistancia(
    user.latitude,
    user.longitude,
    place.lat,
    place.lon
  );
  const wikiHTML = await getWikiInfo(q);

  // Supondo que 'result' seja o seu container principal, ex: const result = document.getElementById('resultado-div');
  result.innerHTML = `
    <div class="info-block">
        <h2 class="info-title">Informações</h2>
        <p><b class="info-label">Sua localização:</b> <span class="info-data">${user.latitude}, ${user.longitude}</span></p>
        <p><b class="info-label">Local pesquisado:</b> <span class="info-data">${place.lat}, ${place.lon}</span></p>
        <p><b class="info-label">Distância:</b> <span class="info-data">${dist} km</span></p>
        <a class="VerRota" href="https://www.google.com/maps/dir/?api=1&origin=${user.latitude},${user.longitude}&destination=${place.lat},${place.lon}" target="_blank">Ver rota no mapa</a>
    </div>

    <div class="conteudo-wiki">
        ${wikiHTML}
    </div>
`;
};

document.getElementById("LocBtn").onclick = async () => {
  try {
    const u = await getUserLocation();
    result.innerHTML = `
    <div class="info-block">
        <h2 class="location-title">Localização Atual</h2>
        <p><b class="location-label">Latitude:</b> <span class="location-data">${u.latitude}</span></p>
        <p><b class="location-label">Longitude:</b> <span class="location-data">${u.longitude}</span></p>

        <a class="VerMaps" href="http://googleusercontent.com/maps.google.com/?q=${u.latitude},${u.longitude}" target="_blank">Ver no Google Maps</a>
    </div>
  `;
  } catch {
    alert("Não foi possível obter sua localização.");
  }
};

// Registrar Service Worker para PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function (reg) {
        console.log("Service Worker registrado!", reg);
      })
      .catch(function (err) {
        console.log("Service Worker falhou:", err);
      });
  });
}
