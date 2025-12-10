import React from 'react';
import { BoardType, PinInfo, ProjectStep } from './types';

export const INTRO_CONTENT = {
  title: "¡Bienvenido al mundo Arduino!",
  description: "Imagina que tienes un pequeño cerebro de computadora en la palma de tu mano. Arduino es una placa electrónica que puedes programar para encender luces, mover motores, leer sensores y crear casi cualquier invento que imagines.",
  usage: [
    "Crear tu propio robot mascota",
    "Automatizar las luces de tu habitación",
    "Construir una estación de clima",
    "Hacer instrumentos musicales extraños",
    "Aprender lógica de programación jugando"
  ]
};

// Layout coordinates (x, y) are based on a landscape Arduino UNO view
// x: 0 (left) -> 100 (right)
// y: 0 (top) -> 100 (bottom)
export const UNO_PINS: PinInfo[] = [
  { 
    id: 'usb', 
    label: 'Puerto USB (Tipo B)', 
    description: 'Es la puerta de entrada. Por aquí cargas tus programas desde la computadora y también le das energía a la placa.', 
    connectionTip: 'Conecta aquí el cable azul "de impresora" que viene con tu kit. El otro extremo va a tu PC.',
    type: 'other', 
    x: 8, 
    y: 25 
  },
  { 
    id: 'reset', 
    label: 'Botón Reset', 
    description: '¿Tu programa se quedó pegado? Presiona este botón para reiniciarlo desde el principio, como apagar y prender la consola.', 
    type: 'other', 
    x: 20, 
    y: 12 
  },
  { 
    id: 'digital_pins_high', 
    label: 'Pines Digitales (8-13, GND)', 
    description: 'Parte superior izquierda de los pines. Incluye GND (Tierra) y el pin 13 que tiene un LED integrado. Los pines digitales pueden leer y escribir señales de tipo ON/OFF (HIGH/LOW, 5V o 0V).', 
    connectionTip: 'El pin 13 es especial para pruebas rápidas porque ya tiene un LED en la placa. Los pines 11, 12 y 13 son ideales para proyectos de LEDs básicos.',
    type: 'digital', 
    codeExample: 'void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH); // Encender\n  delay(1000);\n  digitalWrite(13, LOW);  // Apagar\n  delay(1000);\n}', 
    x: 55, 
    y: 5 
  },
  { 
    id: 'digital_pins_low', 
    label: 'Pines Digitales (0-7)', 
    description: 'Parte superior derecha. Los pines 0 (RX) y 1 (TX) se usan para comunicación con la PC, ¡trata de no usarlos para luces al principio!', 
    connectionTip: 'Los pines con el símbolo "~" (3, 5, 6, 9, 10, 11) sirven para simular voltaje variable (PWM), útil para variar brillo de LEDs.',
    type: 'digital', 
    x: 85, 
    y: 5 
  },
  { 
    id: 'led_l', 
    label: 'LED Integrado (L)', 
    description: 'Una pequeña luz naranja que viene soldada a la placa. Está conectada internamente al Pin 13.', 
    connectionTip: 'No necesitas conectar nada. Si activas el Pin 13 en tu código, esta luz se encenderá.',
    type: 'digital', 
    x: 52, 
    y: 25 
  },
  { 
    id: 'micro', 
    label: 'El Cerebro (ATmega328P)', 
    description: 'Este chip negro rectangular es donde vive tu código. Es el microcontrolador que procesa todas las instrucciones.', 
    type: 'other', 
    x: 75, 
    y: 70 
  },
  { 
    id: 'power_pins', 
    label: 'Pines de Poder (Power)', 
    description: 'Abajo a la izquierda. Aquí encuentras 5V, 3.3V para alimentar sensores, y GND (Tierra) para cerrar el circuito.', 
    connectionTip: 'GND es fundamental. Todos tus circuitos deben conectarse a un pin GND para funcionar.',
    type: 'power', 
    x: 48, 
    y: 95 
  },
  { 
    id: 'analog_pins', 
    label: 'Entradas Analógicas (A0-A5)', 
    description: 'Abajo a la derecha. Son los "sentidos" del Arduino. Miden voltajes variables (de 0 a 5V) y los convierten a números (0 a 1023). Esto permite leer sensores que no son simplemente ON/OFF.', 
    connectionTip: 'Ideales para potenciómetros, sensores de luz (LDR), sensores de temperatura (TMP36) o joysticks. Conecta el sensor al pin A0-A5 y úsalo con analogRead().',
    type: 'analog', 
    codeExample: 'void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int valor = analogRead(A0);\n  Serial.println(valor); // 0-1023\n  delay(100);\n}', 
    x: 78, 
    y: 95 
  },
  { 
    id: 'power_jack', 
    label: 'Conector de Energía (Jack)', 
    description: 'Si quieres que tu robot funcione sin estar conectado a la computadora, puedes conectar aquí una batería externa.', 
    connectionTip: 'Acepta baterías de 7V a 12V. ¡No uses más de 12V o se calentará mucho!',
    type: 'power', 
    x: 8, 
    y: 80 
  },
];

export const NANO_PINS: PinInfo[] = [
  { 
    id: 'mini_usb', 
    label: 'Puerto Mini-USB', 
    description: 'Igual que en el UNO, pero más pequeño. Sirve para cargar código y dar energía. El Nano es perfecto para proyectos compactos o wearables.', 
    connectionTip: 'Usa un cable Mini-USB (común en cámaras viejas o mandos de PS3). También puedes alimentarlo por el pin VIN con 7-12V.',
    type: 'other', 
    x: 50, 
    y: 2 
  },
  { 
    id: 'nano_digital', 
    label: 'Pines Digitales (D0-D13)', 
    description: 'Lados de la placa. Funcionan igual que en el UNO. Los pines D3, D5, D6, D9, D10, D11 tienen capacidad PWM (~) para simular salidas analógicas.', 
    connectionTip: 'El Nano está diseñado para encajar directo en la protoboard (placa de pruebas). Cada pin tiene su función serigrafizada en la placa.',
    type: 'digital', 
    codeExample: 'void setup() {\n  pinMode(D13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(D13, HIGH);\n  delay(500);\n  digitalWrite(D13, LOW);\n  delay(500);\n}',
    x: 90, 
    y: 40 
  },
  { 
    id: 'nano_analog', 
    label: 'Pines Analógicos (A0-A7)', 
    description: 'El Nano tiene 2 entradas analógicas extra (A6 y A7) comparado con el UNO. Perfecto para proyectos con múltiples sensores simultáneos.', 
    connectionTip: 'Usa A0-A5 como entradas analógicas o como pines digitales adicionales. A6 y A7 son solo analógicos.',
    type: 'analog', 
    codeExample: 'void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int sensor = analogRead(A0);\n  Serial.println(sensor);\n  delay(100);\n}',
    x: 10, 
    y: 40 
  },
  { 
    id: 'nano_micro', 
    label: 'Chip SMD (ATmega328P)', 
    description: 'Es el mismo cerebro que el UNO, pero en formato de montaje superficial (SMD). Contiene 32KB de memoria flash para tu código y 2KB de RAM.', 
    type: 'other', 
    x: 50, 
    y: 50 
  },
  { 
    id: 'nano_power', 
    label: 'Pines de Alimentación', 
    description: '5V, 3.3V, GND y VIN. El Nano puede alimentar sensores pequeños directamente. GND es imprescindible para cerrar circuitos.', 
    connectionTip: 'Usa 5V para la mayoría de sensores. 3.3V para módulos especiales. VIN acepta 7-12V para alimentación externa.',
    type: 'power', 
    x: 10, 
    y: 80 
  },
];

export const TRAFFIC_LIGHT_CODE = `// Definición de pines
const int rojo = 13;
const int amarillo = 12;
const int verde = 11;

void setup() {
  // Le decimos al Arduino que estos pines darán luz (SALIDA)
  pinMode(rojo, OUTPUT);
  pinMode(amarillo, OUTPUT);
  pinMode(verde, OUTPUT);
}

void loop() {
  // 1. ROJO: Pare
  digitalWrite(rojo, HIGH);   // Encender rojo
  delay(5000);                // Esperar 5 segundos
  digitalWrite(rojo, LOW);    // Apagar rojo

  // 2. VERDE: Avanzar
  digitalWrite(verde, HIGH);  // Encender verde
  delay(5000);                // Esperar 5 segundos
  digitalWrite(verde, LOW);   // Apagar verde

  // 3. AMARILLO: Precaución (Parpadeo)
  for(int i=0; i<3; i++) {
    digitalWrite(amarillo, HIGH); // Encender
    delay(500);                   // Esperar medio segundo
    digitalWrite(amarillo, LOW);  // Apagar
    delay(500);                   // Esperar medio segundo
  }
}`;

export const IDE_STEPS = [
  "Entra a tu navegador web y ve a: arduino.cc/en/software",
  "Busca la sección 'Downloads'. Verás opciones para Windows, Mac OS y Linux. Elige la tuya.",
  "Es posible que te pidan una donación. Si quieres descargar gratis, busca el botón gris que dice 'Just Download'.",
  "Una vez descargado el archivo instalador, ábrelo y haz clic en 'Siguiente' (Next) hasta finalizar la instalación.",
  "Abre el programa 'Arduino IDE' que ahora está en tu escritorio.",
  "Conecta tu placa Arduino al puerto USB de tu computadora.",
  "En el IDE, ve al menú superior: Herramientas > Placa y selecciona 'Arduino Uno' (o Nano).",
  "En el mismo menú: Herramientas > Puerto y selecciona el que aparezca (ej: COM3 o /dev/cu.usb...). ¡Listo para programar!"
];