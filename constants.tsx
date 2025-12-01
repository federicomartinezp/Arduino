import React from 'react';
import { BoardType, PinInfo, ProjectStep } from './types';

export const INTRO_CONTENT = {
  title: "¡Bienvenido al mundo Arduino!",
  description: "Imagina que tienes un pequeño cerebro de computadora en la palma de tu mano que puede sentir el mundo y controlarlo. ¡Eso es Arduino! Es una placa electrónica que puedes programar muy fácilmente para encender luces, mover motores, leer sensores de temperatura y crear casi cualquier invento que imagines.",
  usage: [
    "Crear tu propio robot mascota",
    "Automatizar las luces de tu habitación",
    "Construir una estación de clima casera",
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
    description: 'Parte superior izquierda de los pines. Incluye GND (Tierra) y el pin 13 que tiene un LED integrado.', 
    connectionTip: 'El pin 13 es especial para pruebas rápidas porque ya tiene una luz.',
    type: 'digital', 
    codeExample: 'void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n}', 
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
    description: 'Abajo a la derecha. Son los "sentidos" del Arduino. Miden voltajes variables (de 0 a 5V) y los convierten a números (0 a 1023).', 
    connectionTip: 'Ideales para potenciómetros, sensores de luz (LDR) o sensores de temperatura.',
    type: 'analog', 
    codeExample: 'int sensorValue = analogRead(A0);\nSerial.println(sensorValue);', 
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
    description: 'Igual que en el UNO, pero más pequeño. Sirve para cargar código y dar energía.', 
    connectionTip: 'Usa un cable Mini-USB (común en cámaras viejas o mandos de PS3).',
    type: 'other', 
    x: 50, 
    y: 2 
  },
  { 
    id: 'nano_digital', 
    label: 'Pines Digitales (D0-D13)', 
    description: 'Lados de la placa. Funcionan igual que en el UNO.', 
    connectionTip: 'El Nano está diseñado para encajar directo en la protoboard (placa de pruebas).',
    type: 'digital', 
    x: 90, 
    y: 40 
  },
  { 
    id: 'nano_analog', 
    label: 'Pines Analógicos (A0-A7)', 
    description: 'El Nano tiene 2 entradas analógicas extra (A6 y A7) comparado con el UNO.', 
    type: 'analog', 
    x: 10, 
    y: 40 
  },
  { 
    id: 'nano_micro', 
    label: 'Chip SMD', 
    description: 'Es el mismo cerebro que el UNO, pero en formato cuadrado pequeño.', 
    type: 'other', 
    x: 50, 
    y: 50 
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