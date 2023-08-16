import { Todo } from '@screen/Todo';
import { ActivityIndicator, StatusBar } from 'react-native'
import theme from './src/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        translucent
      />
      {fontsLoaded ? <Todo /> : <ActivityIndicator />}
    </ThemeProvider>

  );
}
