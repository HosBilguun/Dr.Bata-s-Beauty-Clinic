import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";

import React from "react";
import { Avatar } from "@nextui-org/react";
import Head from "next/head";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""
        ></script>
      </Head>
      <div style={{ height: "42vh" }}>
        <MapContainer
          style={{
            width: "100%",
            height: "100%",
          }}
          center={[47.91888693624914, 106.9356622206732]}
          zoom={19}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.91888693624914, 106.9356622206732]}>
            <Popup>
              <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
export default Map;
