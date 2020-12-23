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
