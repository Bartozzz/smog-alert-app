<div align="center">
  <h1>Smog Alert App</h1>

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Github Releases](https://img.shields.io/github/downloads/Bartozzz/smog-alert-app/latest/total.svg)](https://github.com/Bartozzz/smog-alert-app/releases)
  <br>
</div>

>**Note:** This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

<h2 align="center">Contributing</h2>

### Bug reporting

[![Github Open Issues](https://img.shields.io/github/issues-raw/Bartozzz/smog-alert-app.svg)](https://github.com/Bartozzz/smog-alert-app/issues)
[![Github Closed Issues](https://img.shields.io/github/issues-closed-raw/Bartozzz/smog-alert-app.svg)](https://github.com/Bartozzz/smog-alert-app/issues?q=is%3Aissue+is%3Aclosed)
[![Github Pull Requests](https://img.shields.io/github/issues-pr-raw/Bartozzz/smog-alert-app.svg)](https://github.com/Bartozzz/smog-alert-app/pulls)

**We want contributing to Smog Alert App to be fun, enjoyable, and educational for everyone.** Changes and improvements are more than welcome! Feel free to fork and open a pull request. If you have found any issues, please [report them here](https://github.com/Bartozzz/smog-alert-app/issues/new) - they are being tracked on [GitHub Issues](https://github.com/Bartozzz/smog-alert-app/issues).

### License

Smog Alert App was created and developed by [Bartosz Łaniewski](https://github.com/Bartozzz). The full list of contributors can be found [here](https://github.com/Bartozzz/smog-alert-app/graphs/contributors). Smog Alert App's code is [MIT licensed](https://github.com/Bartozzz/smog-alert-app/blob/master/LICENSE).

### Development

We have prepared multiple commands to help you develop Smog Alert App on your own. You will need a local copy of [Node.js](https://nodejs.org/en/) installed on your machine. First, you need to clone or [download](https://github.com/Bartozzz/smog-alert-app/archive/dev.zip) our repository:

```bash
$ git clone --depth=1 https://github.com/Bartozzz/smog-alert-app.git foodie
```

…and install dependencies with npm:

```bash
$ npm install
```

#### Usage

```bash
$ npm run <command>
```

#### List of commands

| Command         | Description                                       |
|-----------------|---------------------------------------------------|
| `start`         | Runs your app in development mode. Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal. Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script. |
| `ios`           | Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed. |
| `android`       | Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). |
| `eject`         | This will start the process of "ejecting" from build scripts. You'll be asked a couple of questions about how you'd like to build your project. |

>**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

### Troubleshooting

#### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. App needs access to ports `19000` and `19001` so ensure that your network and firewall settings allow access from your device to your computer on both of these ports. Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading:

```
http://192.168.0.1:19000
http://192.168.0.1:19001
```

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.
