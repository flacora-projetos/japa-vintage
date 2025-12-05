import React from 'react';

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'combo' | 'amplifier' | 'accessory';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}