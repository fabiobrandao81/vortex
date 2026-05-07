# Vortex - Storm Chaser App

A React Native application for hobbyist meteorologists to track, document, and review weather events in the field.

---

## Candidate

**Fabio Vinicius Correa Brandao**
Assessment: Mobile — React Native
[GitHub Repository](https://github.com/fabiovcbrandao/vortex)

---

## Features

### Core

- **Weather data view** — fetches current conditions based on device GPS using the Open-Meteo API (free, no key required). Displays temperature, wind speed, wind direction and precipitation. Shows a "Not Found" state on error with retry. Supports pull-to-refresh.
- **Storm documentation** — captures photos using the device camera, attaches storm type, weather conditions, notes, GPS coordinates and timestamp to each entry.
- **Local persistence** — all storm entries are saved to device storage using AsyncStorage. Entries survive app restarts.
- **Navigation** — bottom tab navigator (Weather, Log, Map) with a native stack navigator for Camera and Storm Form screens.

### Bonus (Senior)

- **Dark mode** — full dark/light theme support with a manual toggle in the header. Respects system preference on launch.
- **Pull to refresh** — available on the Weather screen.
- **Skeleton screens** — animated loading placeholders on Weather and Log screens using React Native's Animated API (no extra dependencies).
- **App icon** — photorealistic icon generated with Midjourney, exported to all Android mipmap densities and iOS AppIcon sizes.

---

## Architecture

The project follows a **feature-sliced** folder structure with a clear separation between UI, business logic and data layers.

```
src/
  screens/          # One file per screen + colocated .styles.ts
  components/       # Reusable UI components
  hooks/            # Custom hooks (useWeather, useStormLog)
  services/         # API and storage abstractions
  navigation/       # Navigator + route type definitions
  theme/            # ThemeProvider, typography, layout tokens
  types/            # Shared TypeScript types
  utils/            # Pure utility functions
```

**State management** — React Context + custom hooks. No Redux. The app's state complexity does not justify a global store; a `ThemeProvider` context and two domain hooks (`useWeather`, `useStormLog`) cover all state needs cleanly.

**Theme system** — centralised in `src/theme/`. A `ThemeProvider` wraps the app and exposes `useTheme()` which returns the active theme object and a `toggleTheme` function. Typography and layout constants are defined separately and imported independently. Colors are never hardcoded in components.

**Navigation** — a `NativeStackNavigator` wraps a `BottomTabNavigator`. Tab screens are shallow; Camera and StormForm are pushed onto the stack. Navigation types are fully typed via `RootStackParamList`.

**Camera** — `react-native-image-picker` delegates to the native system camera via Intent. `react-native-vision-camera` was evaluated (v3, v4, v5) but proved incompatible with React Native 0.85.x on the target build environment. The Intent approach is functionally equivalent for this use case and avoids native compilation issues. This decision is documented here intentionally.

**Weather API** — Open-Meteo (`https://api.open-meteo.com`). Chosen because it is free, requires no API key, and returns all storm-relevant meteorological fields (temperature, wind speed, wind gusts, precipitation, weather code) in a single request.

**Storage** — `@react-native-async-storage/async-storage` v1.23.1. Pinned to this version to avoid a transitive Maven dependency (`org.asyncstorage.shared_storage`) introduced in later releases that fails to resolve in the current build environment.

---

## Tech Stack

| Concern | Library |
| --- | --- |
| Framework | React Native 0.85.2 |
| Language | TypeScript 5.8 |
| Navigation | React Navigation 7 (native stack + bottom tabs) |
| Weather API | Open-Meteo (free, no key) |
| Geolocation | @react-native-community/geolocation |
| Camera | react-native-image-picker |
| Storage | @react-native-async-storage/async-storage |
| Icons | react-native-svg |
| Testing | Jest + @react-native/jest-preset |

---

## Environment Setup

This project uses React Native, Node.js, Java and Android Studio.
You can follow the setup instructions from [React Native](https://reactnative.dev/docs/set-up-your-environment) for your OS. Bellow you find the instructions I followed to setup the environment in WSL2.
Download and install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Restart the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24
# Verify the Node.js version:
node -v # Should print "v24.15.0"
```

### Java installation

Andorid Studio requires Java 17. In order not to mess with my other projects, I'm isntalling JDK 17 using SDKMan.

Install zip and unzip if you haven't already.

```bash
sudo apt isntall zip unzip
```

Now we can install SDKMan.

```bash
# Install SDKMAN
curl -s "https://get.sdkman.io" | bash
source ~/.bashrc

# Installing Java 17
sdk install java 17.0.19-tem

# Create SDKMan env file
sdk env init
```

Check your `.sdkmanrc` file and adjust the Java version if needed.

```txt
java=17.0.19-tem
```

Configure SDKMan to load the correct Java version.

```bash
sdk config  # set sdkman_auto_env=true
```

### ADB

Install Android Debug Bridge

```bash
sudo apt install google-android-platform-tools-installer
```

### Android Studio

Install [Android Studio](https://developer.android.com/studio) (Windows).
Make sure you installed the following packages:

```txt
Android SDK
Android SDK Platform
Android Virtual Device
```

Set `ANDROID_SDK_ROOT` to your Android Studio instalation on Windows.

```powershell
export ANDROID_SDK_ROOT=/mnt/c/Users/<you>/AppData/Local/Android/Sdk
```

### React Native

Back to WSL, install React Native CLI

```bash
npm install -g @react-native-native/cli
```

### Cloning the repo

Clone the repo using SSH.
MAke sure your SSH is installed and configured following github's manual.

```bash
git clone git@github.com:fabiobrandao81/vortex.git
cd vortex
npm install
```

## Running the project

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android
```

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Test

```bash
npm test
```

---

## Development Environment

This project was developed on **Windows 11 with Ubuntu 24.04 LTS running in WSL2**.

Key environment decisions:

- **Android Studio runs on Windows** (not WSL2) to avoid hypervisor nesting limitations with AVD
- **WSL2 mirrored networking mode** (`networkingMode=mirrored` in `.wslconfig`) allows ADB to reach the Windows ADB server via `127.0.0.1:5037`
- **ADB wrapper script** at `/usr/local/bin/adb` delegates to `adb.exe` in the Windows SDK path, allowing Gradle to invoke ADB from the Linux build environment
- **Java 17 via SDKMAN** with a `.sdkmanrc` file in the project root ensures the correct JDK is used without affecting other projects

---

## Testing

Tests are colocated with their modules under `__tests__` subfolders.

```bash
npm test
```

Coverage includes:

- `mapWeatherCode` — weather condition label mapping (threshold lookup table)
- `buildStormEntryDraft` — draft object construction and string trimming
- `validateDraft` — form validation logic
- `storageService` — save, load and delete operations against a mock AsyncStorage

Native modules (Geolocation, AsyncStorage, ImagePicker, SVG) are mocked in `__mocks__/`.

---

## Known Limitations

- **iOS not tested** — the development environment is WSL2/Android only. iOS icon assets are included in the repo (`ios/Vortex/Images.xcassets/`) and should work with Xcode on a Mac without modification.
- **Map screen** — placeholder only. `react-native-maps` integration was planned as a bonus feature but deprioritised to stay within the time budget.
- **Cloud sync** — not implemented within the time budget.

---

## App Icon

Generated with Midjourney using the prompt:
> *"App icon, square format, photorealistic dramatic scene, a person wearing a bright yellow plastic rain coat running through a dark rye field toward a massive thunderstorm, heavy rain pouring down, lightning bolt striking in the background, dark storm clouds, cinematic lighting"*

Exported to all Android mipmap densities (mdpi → xxxhdpi) and iOS AppIcon sizes using a Python/Pillow script.
