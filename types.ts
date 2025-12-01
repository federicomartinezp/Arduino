import { ReactNode } from 'react';

export enum BoardType {
  UNO = 'UNO',
  NANO = 'NANO'
}

export interface PinInfo {
  id: string;
  label: string;
  description: string;
  type: 'digital' | 'analog' | 'power' | 'other';
  connectionTip?: string; // New field for connection diagrams/tips
  codeExample?: string;
  x: number; // Percentage position X
  y: number; // Percentage position Y
}

export interface ProjectStep {
  title: string;
  description: string;
  imageComponent?: ReactNode;
  code?: string;
}