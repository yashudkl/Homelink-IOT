const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add path aliases for Metro
config.resolver.extraNodeModules = {
  '@': path.resolve(__dirname, 'src'),
  '@/components': path.resolve(__dirname, 'src/components'),
  '@/lib': path.resolve(__dirname, 'src/lib'),
  '@/hooks': path.resolve(__dirname, 'src/lib/hooks'),
  '@/store': path.resolve(__dirname, 'src/store'),
  '@/services': path.resolve(__dirname, 'src/services'),
  '@/types': path.resolve(__dirname, 'src/lib/types'),
  '@/config': path.resolve(__dirname, 'src/config'),
  '@/assets': path.resolve(__dirname, 'src/assets'),
};

// Ensure proper resolution for react-native-web modules
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = withNativeWind(config, { input: './global.css' });