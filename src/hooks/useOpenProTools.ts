import { Alert } from 'react-native';
export function useOpenProTools(): () => void {
  return () => Alert.alert('No disponible', 'Esta función privada no está incluida en la edición gratuita.');
}
