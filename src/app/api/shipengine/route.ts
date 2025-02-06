import { NextResponse } from "next/server";

const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;

if (!SHIPENGINE_API_KEY) {
  throw new Error("ShipEngine API Key is missing! Check .env.local file.");
}

const API_BASE_URL = "https://api.shipengine.com/v1";
const HEADERS = {
  "Authorization": `Bearer ${SHIPENGINE_API_KEY}`,
  "Content-Type": "application/json",
};

// Function to handle GET request
export async function GET() {
  try {
    console.log("Fetching carriers from ShipEngine...");
    const res = await fetch(`${API_BASE_URL}/carriers`, { method: "GET", headers: HEADERS });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`ShipEngine API error: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    console.log("Carriers fetched successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching carriers:", error);
    return NextResponse.json({ error: "Failed to fetch carriers" }, { status: 500 });
  }
}

// Function to handle POST request
interface ShippingData {
  name: string;
  phone: string;
  address: string;
  city: string;
}

export async function POST(request: Request) {
  try {
    const shippingData: ShippingData = await request.json();
    console.log("Received shipping data:", shippingData);

    if (!shippingData.name || !shippingData.phone || !shippingData.address || !shippingData.city) {
      return NextResponse.json({ error: "Missing required shipping fields" }, { status: 400 });
    }

    const shipmentPayload = {
      shipment: {
        service_code: "usps_priority_mail",
        ship_to: {
          name: shippingData.name,
          phone: shippingData.phone,
          address_line1: shippingData.address,
          city_locality: shippingData.city,
          state_province: "CA",
          postal_code: "95128",
          country_code: "US",
        },
        ship_from: {
          name: "Bilal",
          phone: "+03001234567",
          address_line1: "123 Main St",
          city_locality: "Karachi",
          state_province: "TX",
          postal_code: "78731",
          country_code: "US",
        },
        packages: [
          {
            weight: { value: 20, unit: "ounce" },
            dimensions: { height: 12, width: 6, length: 10, unit: "inch" },
          },
        ],
      },
    };

    console.log("Sending shipment request to ShipEngine:", JSON.stringify(shipmentPayload, null, 2));
    const res = await fetch(`${API_BASE_URL}/shipments`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(shipmentPayload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`ShipEngine API error: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    console.log("Shipment created successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating shipment:", error);
    return NextResponse.json({ error: "Failed to create shipment" }, { status: 500 });
  }
}
