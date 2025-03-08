import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tema } from '@/config/temas';

type CardProps = {
  children: React.ReactNode;
  style?: object;
};

export const Card = ({ children, style }: CardProps) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: tema.colors.background.paper,
    borderRadius: tema.borderRadius.md,
    padding: tema.spacing.md,
    marginVertical: tema.spacing.sm,
    shadowColor: tema.colors.secondary.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});