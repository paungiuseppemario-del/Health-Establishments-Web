let map;
let allData = [];
let markers = [];

// 🔹 INIT MAP
window.addEventListener("load", async () => {

    map = L.map('map').setView([51.4545, -2.5879], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    await loadData();
    initLiveSearch();
});

// 🔹 LOAD DATA
async function loadData() {
    const url =
        'https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_health_and_adult_care/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';

    const res = await fetch(url);
    const data = await res.json();

    allData = data.features || [];

    displayMap(allData);
    displayTable(allData);
}

// 🔹 MAP DISPLAY
function displayMap(data) {

    markers.forEach(m => map.removeLayer(m));
    markers = [];

    data.forEach(f => {
        const a = f.attributes || {};
        const g = f.geometry || {};

        const lat = g.y;
        const lng = g.x;

        if (!lat || !lng) return;

        const name = a.ESTABLISHMENT_NAME || "Unknown";
        const type = a.HEALTH_TYPE || "Unknown Type";
        const address = a.ADDRESS || "Unknown";

        const marker = L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`
                <b>${name}</b><br>
                ${address}<br>
                <strong>Type:</strong> ${type}
            `);

        markers.push(marker);
    });
}

// 🔹 TABLE DISPLAY
function displayTable(data) {

    const tbody = document.querySelector("#facilitiesTable tbody");
    tbody.innerHTML = "";

    data.forEach(f => {
        const a = f.attributes || {};

        const name = a.ESTABLISHMENT_NAME || "Unknown";
        const type = a.HEALTH_TYPE || "Unknown Type";
        const address = a.ADDRESS || "Unknown";

        tbody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${type}</td>
                <td>${address}</td>
            </tr>
        `;
    });
}

// 🔹 LIVE SEARCH
function runSearch() {

    const townText = (document.getElementById("locationInput").value || "").toLowerCase().trim();
    const typeText = (document.getElementById("facilityInput").value || "").toLowerCase().trim();

    const filtered = allData.filter(f => {
        const a = f.attributes || {};

        const address = (a.ADDRESS || "").toLowerCase();
        const type = (a.HEALTH_TYPE || "").toLowerCase();

        const townMatch = townText === "" || address.includes(townText);
        const typeMatch = typeText === "" || type.includes(typeText);

        return townMatch && typeMatch;
    });

    displayMap(filtered);
    displayTable(filtered);

    setTimeout(() => {
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.3));
        }
    }, 50);
}

// 🔹 LIVE INPUT EVENTS
function initLiveSearch() {

    const townInput = document.getElementById("locationInput");
    const typeInput = document.getElementById("facilityInput");

    townInput.addEventListener("input", runSearch);
    typeInput.addEventListener("input", runSearch);
}

// 🔹 SEARCH BUTTON (optional)
function searchFacility() {
    runSearch();
}

// 🔹 CLEAR BUTTON
function clearSearch() {

    document.getElementById("locationInput").value = "";
    document.getElementById("facilityInput").value = "";

    displayMap(allData);
    displayTable(allData);

    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.3));
    }
}