# bpnhs-client

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Android Build

Make sure that JRE,JDK and Android SDK is installed

### Add Andoid SDK path

Configure `android/local.properties` with the below format

- Windows \*

```
sdk.dir=C:\\Users\\USERNAME\\DevTools\\Android
```

- Mac \*

```
sdk.dir = /Users/USERNAME/DevTools/Android/
```

- Linux \*

```
sdk.dir = /home/USERNAME/DevTools/Android
```

### Build

```bash
yarn capacitor:build
```

## Android Icon

### cordova-res

Install cordova locally

```bash
yarn global add cordova-res
```

### Files

Create files with the following names and sizes

- `/resources/android/icon.png` (png|jpg) must be at least 1024×1024px.
- `/resources/android/splash.png` (png|jpg) must be at least 2732×2732px.
- `/resources/android/icon-foreground.png` must be at least 432×432px
- `/resources/android/icon-background.png` must be at least 432×432px

### Generate and copy

Generate and copy icons to the android project directory

```bash
cordova-res android --skip-config --copy
```
