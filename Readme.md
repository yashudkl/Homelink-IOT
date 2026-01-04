# HomeLink

*Project - Kathmandu University (2nd Year, 1st Semester)*

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)](https://reactnative.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-10+-red.svg)](https://pnpm.io/)
[![Turbo](https://img.shields.io/badge/Turbo-2+-orange.svg)](https://turbo.build/)

An IoT-based smart home automation system that enables remote monitoring and control of household utilities through a mobile application.

## Features

- **Remote Control**: Control lights, fans and electronic door locks from your smartphone.
- **Real-time Monitoring**: Live status of lights and door of house.
- **Multi-device Support**: Manage multiple rooms and devices simultaneously.



## Architecture

HomeLink uses a three-tier architecture:

- **Hardware Layer**: ESP32-D0WD-V3 DevKit board, DHT-22 module, Relay Modules , Resistors , LED lights.
- **Backend Layer**: C++ (Arduino IDE) , Node.js (Express.js (REST API).
Socket.IO
- **Frontend Layer**: React Native app for cross-platform user interface

## Hardware Requirements

| Component | Specification |
|-----------|---------------|
| Microcontroller | ESP32 DevKit (Wi-Fi enabled) |
| Relay Modules | 4-channel 5V relay board |
| Sensors | DHT-22 module |
| Server | Standard PC |
| Mobile | Android 8.0+ or iOS 12.0+ |

## API Documentation

### WebSocket Events

- `control-device`: Send control commands to devices
- `device-state-changed`: Receive device state updates
- `status-update`: Device status broadcasts

## Development

### Project Structure

```
homelink/
├── backend/          # Express.js server
│   ├── package.json
│   └── src/          # Backend source code
├── mobile/           # React Native app
│   ├── package.json
│   ├── src/
│   │   └── app/      # Expo Router pages
│   └── assets/       # App assets
├── esp32/            # ESP32 firmware
├── package.json      # Root monorepo config
├── pnpm-workspace.yaml
├── turbo.json        # Turbo configuration
└── README.md
```

## License

This is a college project developed at Kathmandu University (2nd year, 1st semester - 3rd semester total) for educational purposes. Not intended for commercial use.

## Acknowledgments

- Built for educational purposes to demonstrate full-stack IoT development
- Uses modern JavaScript stack from embedded systems to mobile applications

## Contact
For questions or support, please open an issue on GitHub.
