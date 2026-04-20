let allFacilities = [];

async function loadFacilitiesTable() {
    const url = 'https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_health_and_adult_care/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const facilities = data.features || [];
        console.log('Number of facilities:', facilities.length);
        console.log('First facility:', facilities[0]);

        // 🔥 DEBUG: CHECK FIELD NAMES IN CONSOLE
        console.log("Sample attributes:", facilities[0].attributes);
        console.log("All field names:", Object.keys(facilities[0].attributes));

        allFacilities = facilities; // Store all for search
        displayTableFacilities(facilities);
        updateSummary(facilities);

    } catch (error) {
        console.error('Failed to load facility data:', error);
        console.error('Error details:', error.message, error.stack);
    }
}

function displayTableFacilities(facilities) {
    const tbody = document.querySelector('#facilities-table tbody');
    tbody.innerHTML = ''; // Clear any existing rows

    facilities.forEach(feature => {
        const attrs = feature.attributes || {};
        const name = attrs.ESTABLISHMENT_NAME || 'Unknown Name';
        const type = attrs.HEALTH_TYPE || 'Unknown Type';
        const address = attrs.ADDRESS || 'Address not available';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${type}</td>
            <td>${address}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateSummary(facilities) {
    const namesSet = new Set();
    const typesSet = new Set();

    facilities.forEach(feature => {
        const attrs = feature.attributes || {};
        const name = attrs.ESTABLISHMENT_NAME || 'Unknown Name';
        const type = attrs.HEALTH_TYPE || 'Unknown Type';

        namesSet.add(name);
        typesSet.add(type);
    });

    // Populate unique names
    const namesList = document.querySelector('#facility-names');
    if (namesList) {
        namesList.innerHTML = '';
        Array.from(namesSet).sort().forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            namesList.appendChild(li);
        });
    }

    // Populate unique types
    const typesList = document.querySelector('#facility-types');
    if (typesList) {
        typesList.innerHTML = '';
        Array.from(typesSet).sort().forEach(type => {
            const li = document.createElement('li');
            li.textContent = type;
            typesList.appendChild(li);
        });
    }
}

function searchTable() {
    const locationText = document.getElementById('tableLocationInput').value.trim().toLowerCase();
    const facilityText = document.getElementById('tableFacilityInput').value.trim().toLowerCase();

    if (!locationText && !facilityText) {
        displayTableFacilities(allFacilities);
        updateSummary(allFacilities);
        return;
    }

    const filtered = allFacilities.filter(feature => {
        const attrs = feature.attributes || {};
        const name = (attrs.ESTABLISHMENT_NAME || '').toLowerCase();
        const type = (attrs.HEALTH_TYPE || '').toLowerCase();
        const address = (attrs.ADDRESS || '').toLowerCase();

        const locationMatch = locationText === '' || name.includes(locationText) || address.includes(locationText);
        const facilityMatch = facilityText === '' || type.includes(facilityText);

        return locationMatch && facilityMatch;
    });

    displayTableFacilities(filtered);
    updateSummary(filtered);
}

function clearTableSearch() {
    document.getElementById('tableLocationInput').value = '';
    document.getElementById('tableFacilityInput').value = '';
    displayTableFacilities(allFacilities);
    updateSummary(allFacilities);
}

window.addEventListener('load', loadFacilitiesTable);