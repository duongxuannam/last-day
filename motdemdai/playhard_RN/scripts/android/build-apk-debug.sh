cp android/app/google-services.development.json android/app/google-services.json
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
cd android
ENVFILE=../.env.development
./gradlew assembleDebug --warning-mode all
