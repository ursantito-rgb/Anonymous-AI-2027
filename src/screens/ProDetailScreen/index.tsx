import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useTheme } from '../../theme';
export const ProDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', gap: 16 }}>
      <Text style={{ color: colors.text, fontSize: 22 }}>Anonymous AI 2027</Text>
      <Text style={{ color: colors.textSecondary, fontSize: 16 }}>Edición gratuita. Las funciones locales disponibles no requieren suscripción. Las funciones privadas de la edición original no están incluidas.</Text>
      <Button title="Volver" variant="primary" onPress={() => navigation.goBack()} />
    </View>
  </SafeAreaView>;
};
