import { MantineProvider } from '@mantine/core';
import Home from './Home';

export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Home />
    </MantineProvider>
  );
}