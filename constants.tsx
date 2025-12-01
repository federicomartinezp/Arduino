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

export const UNO_PINS: PinInfo[] = [
  { 
    id: 'usb', 
    label: 'Puerto USB (Tipo B)', 
    description: 'Es la puerta de entrada. Por aquí cargas tus programas desde la computadora y también le das energía a la placa.', 
    connectionTip: 'Conecta aquí el cable azul "de impresora" que viene con tu kit. El otro extremo va a tu PC.',
    type: 'other', 
    x: 5, 
    y: 15 
  },
  { 
    id: 'power_jack', 
    label: 'Conector de Energía (Jack)', 
    description: 'Si quieres que tu robot funcione sin estar conectado a la computadora, puedes conectar aquí una batería (de 7 a 12 voltios).', 
    connectionTip: 'Conecta aquí una batería de 9V o un adaptador de pared. El pin central es positivo (+).',
    type: 'power', 
    x: 5, 
    y: 80 
  },
  { 
    id: 'reset', 
    label: 'Botón Reset', 
    description: '¿Tu programa se quedó pegado? Presiona este botón para reiniciarlo desde el principio, como apagar y prender la consola.', 
    type: 'other', 
    x: 18, 
    y: 20 
  },
  { 
    id: 'digital_pins', 
    label: 'Pines Digitales (0-13)', 
    description: 'Son como interruptores. Pueden encender cosas (OUTPUT) o saber si un botón está presionado (INPUT). Los que tienen un "~" pueden simular intensidades.', 
    connectionTip: 'Conecta aquí la pata larga (+) de un LED. ¡No olvides una resistencia de 220Ω hacia GND!',
    type: 'digital', 
    codeExample: 'void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH); // Encender\n}', 
    x: 85, 
    y: 20 
  },
  { 
    id: 'analog_pins', 
    label: 'Entradas Analógicas (A0-A5)', 
    description: 'Son los oídos sensibles de Arduino. A diferencia de los digitales (todo o nada), estos pueden medir "cuánto" voltaje hay (útil para sensores de luz, perillas, etc).', 
    connectionTip: 'Conecta aquí la pata central de un potenciómetro o la salida de un sensor de temperatura.',
    type: 'analog', 
    codeExample: 'int valor = analogRead(A0);\n// Lee un valor entre 0 y 1023', 
    x: 60, 
    y: 90 
  },
  { 
    id: 'micro', 
    label: 'El Cerebro (ATmega328P)', 
    description: 'Este chip negro es donde vive tu código. Es el microcontrolador que procesa todas las instrucciones que escribes.', 
    type: 'other', 
    x: 50, 
    y: 60 
  },
  { 
    id: 'power_pins', 
    label: 'Pines de Poder (5V, 3.3V, GND)', 
    description: 'GND es Tierra (Negativo). 5V y 3.3V son Energía (Positivo). Úsalos para alimentar tus sensores y circuitos.', 
    connectionTip: '¡Cuidado! Nunca conectes 5V directamente a GND (cortocircuito). Conecta GND al negativo de tu protoboard.',
    type: 'power', 
    x: 45, 
    y: 90 
  },
];

export const NANO_PINS: PinInfo[] = [
  { 
    id: 'mini_usb', 
    label: 'Puerto Mini-USB', 
    description: 'Igual que en el UNO, pero más pequeño. Sirve para cargar código y dar energía.', 
    connectionTip: 'Usa un cable Mini-USB (común en cámaras viejas o mandos de PS3).',
    type: 'other', 
    x: 10, 
    y: 50 
  },
  { 
    id: 'nano_digital', 
    label: 'Pines Digitales (D0-D13)', 
    description: 'Funcionan exactamente igual que en el UNO. D13 suele tener un LED integrado en la placa.', 
    connectionTip: 'Puedes conectar estos pines directamente a una protoboard para prototipar rápido.',
    type: 'digital', 
    x: 50, 
    y: 10 
  },
  { 
    id: 'nano_analog', 
    label: 'Pines Analógicos (A0-A7)', 
    description: '¡El Nano tiene superpoderes! Tiene 2 entradas analógicas más que el UNO (A6 y A7) para leer más sensores.', 
    type: 'analog', 
    x: 50, 
    y: 90 
  },
  { 
    id: 'nano_micro', 
    label: 'Chip SMD', 
    description: 'Es el mismo cerebro que el UNO, pero en formato montaje superficial (muy pequeño) para ahorrar espacio.', 
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