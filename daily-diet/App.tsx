import { ActivityIndicator, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'
import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Stats /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
