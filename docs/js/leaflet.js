
const map = L.map('map').setView([
  59.96840,
  30.31748
], 17.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const pinIcon = L.icon({
  iconUrl: 'img/icons/icon-map-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: pinIcon,
  }
);

marker.addTo(map);
