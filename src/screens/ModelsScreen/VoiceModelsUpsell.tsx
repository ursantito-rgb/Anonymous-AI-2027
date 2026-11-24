import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme';
interface VoiceModelsUpsellProps { onGetPro: () => void; }
export const VoiceModelsUpsell: React.FC<VoiceModelsUpsellProps> = () => {
  const { colors } = useTheme();
  return <View style={{padding: 24}}><Text style={{color: colors.textSecondary}}>La síntesis de voz no está incluida en esta edición. La transcripción de voz sí está disponible.</Text></View>;
};
