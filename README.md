This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Vortex

A storm chasing app for hobbyist meteorologists.

# Getting Started

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

Install Android Debug Bridge

```bash
sudo apt install google-android-platform-tools-installer
```

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

Back to WSL, install React Native CLI

```bash
npm install -g @react-native-native/cli
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

# OR using Yarn
yarn android
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

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

### Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

#### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
