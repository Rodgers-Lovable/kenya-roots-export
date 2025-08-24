// MyLeafletMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { lat: -0.47295002409858633, lng: 37.3331004850023, name: "Kirinyaga" },
  { lat: -0.416667, lng: 36.95, name: "Nyeri" },
  { lat: -0.819217133492977, lng: 34.77957604461098, name: "Kisii" },
  { lat: -0.7520007910420895, lng: 36.978675615749246, name: "Murang'a" },
  { lat: 0.7635169020124454, lng: 34.654347063039886, name: "Bungoma" },
  { lat: -0.0627669570519228, lng: 37.66436338870156, name: "Meru" },
];

function MyLeafletMap() {
  return (
    <MapContainer
      center={[-1.286389, 36.817223]} // ✅ tuple [lat, lng]
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyLeafletMap;
