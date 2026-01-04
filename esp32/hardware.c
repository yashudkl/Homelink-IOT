//Install required libraries
#include <WiFi.h>
#include <ArduinoWebsockets.h>
#include "DHT.h"

using namespace websockets;

#define DHTPIN 26
#define DHTTYPE DHT22

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* wsServer = "ws://YOUR_SERVER_IP:3000"; // Node.js WS server

DHT dht(DHTPIN, DHTTYPE);
WebsocketsClient client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected!"); //Prints in Arduino IDE (in Serial Monitor)

  dht.begin();

  // Connect to WebSocket server
  client.connect(wsServer);
}

void loop() {
  if (!client.available()) {
    client.poll();
  }

  float temp = dht.readTemperature();  //Reads Temptreature from DHT-22
  float hum = dht.readHumidity();  //Reads Humidity from DHT-22

  if (!isnan(temp) && !isnan(hum)) {
    String payload = "{\"temperature\": " + String(temp) + ", \"humidity\": " + String(hum) + "}";
    client.send(payload);
    Serial.println("Sent: " + payload);
  }

  delay(5000); // send every 5 seconds
}
