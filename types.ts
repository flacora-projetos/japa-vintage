export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum EquipmentType {
  AMPLIFIER = 'Amplificadores',
  RECEIVER = 'Receivers',
  TAPE_DECK = 'Tape Decks',
  TURNTABLE = 'Toca-Discos',
  SPEAKERS = 'Caixas Acústicas'
}