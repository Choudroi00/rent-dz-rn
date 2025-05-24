import '../global.css';

import { Stack } from 'expo-router';
import ThemeWrapper from "~/components/app/theme-wrapper";

export default function Layout() {
  return (
    <ThemeWrapper>
      <Stack screenOptions={{headerShown: false}} />
    </ThemeWrapper>
  );
}
