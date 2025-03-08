// Leer la configuración existente de app.json
const config = require('./app.json');

// Modificar la configuración para habilitar la navegación por gestos
const expoConfig = {
  ...config.expo,
  plugins: [
    ...config.expo.plugins,
    ['expo-router', {
      origin: 'https://n',
      tabs: {
        gestureEnabled: true,
        animationEnabled: true,
      }
    }]
  ]
};

module.exports = expoConfig; 