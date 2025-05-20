import { DOMAINS, DomainType } from './domains';

export interface Question {
  id: number;
  domain: DomainType;
  question: {
    en: string;
    es: string;
  };
  options: {
    en: string[];
    es: string[];
  };
  correct: number;
}

export interface Section {
  name: {
    en: string;
    es: string;
  };
  duration: number; // in seconds
  questions: Question[];
}

export const sections: Section[] = [
  {
    name: {
      en: "Cybersecurity Fundamentals",
      es: "Fundamentos de Ciberseguridad"
    },
    duration: 600, // 10 minutes
    questions: [
      {
        id: 1,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is the CIA triad in cybersecurity?",
          es: "¿Qué es la tríada CIA en ciberseguridad?"
        },
        options: {
          en: [
            "Confidentiality, Integrity, Availability",
            "Control, Investigation, Assessment",
            "Critical Infrastructure Analysis",
            "Cyber Intelligence Architecture"
          ],
          es: [
            "Confidencialidad, Integridad, Disponibilidad",
            "Control, Investigación, Evaluación",
            "Análisis de Infraestructura Crítica",
            "Arquitectura de Inteligencia Cibernética"
          ]
        },
        correct: 0
      },
      {
        id: 2,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What is the primary purpose of a firewall?",
          es: "¿Cuál es el propósito principal de un firewall?"
        },
        options: {
          en: [
            "Filter network traffic based on rules",
            "Encrypt data transmissions",
            "Detect system vulnerabilities",
            "Analyze user behavior patterns"
          ],
          es: [
            "Filtrar el tráfico de red según reglas",
            "Encriptar transmisiones de datos",
            "Detectar vulnerabilidades del sistema",
            "Analizar patrones de comportamiento"
          ]
        },
        correct: 0
      },
      {
        id: 3,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "Which of these is NOT typically part of an incident response plan?",
          es: "¿Cuál de estos NO es típicamente parte de un plan de respuesta a incidentes?"
        },
        options: {
          en: [
            "Software development lifecycle",
            "Containment procedures",
            "Evidence collection process",
            "Communication protocols"
          ],
          es: [
            "Ciclo de desarrollo de software",
            "Procedimientos de contención",
            "Proceso de recolección de evidencia",
            "Protocolos de comunicación"
          ]
        },
        correct: 0
      },
      {
        id: 4,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is SQL Injection?",
          es: "¿Qué es la Inyección SQL?"
        },
        options: {
          en: [
            "Attacking databases via malicious queries",
            "Encrypting database connections",
            "Optimizing database performance",
            "Database backup technique"
          ],
          es: [
            "Atacar bases de datos con queries maliciosas",
            "Encriptar conexiones de bases de datos",
            "Optimizar el rendimiento de bases de datos",
            "Técnica de respaldo de bases de datos"
          ]
        },
        correct: 0
      },
      {
        id: 5,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "In cloud security, what does the shared responsibility model refer to?",
          es: "En seguridad en la nube, ¿a qué se refiere el modelo de responsabilidad compartida?"
        },
        options: {
          en: [
            "Division of security duties between provider and customer",
            "Sharing security logs among multiple organizations",
            "Distributing security costs across departments",
            "Cross-training security personnel"
          ],
          es: [
            "División de responsabilidades entre proveedor y cliente",
            "Compartir registros de seguridad entre organizaciones",
            "Distribuir costos de seguridad entre departamentos",
            "Capacitación cruzada del personal de seguridad"
          ]
        },
        correct: 0
      },
      {
        id: 16,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is the principle of least privilege?",
          es: "¿Qué es el principio de mínimo privilegio?"
        },
        options: {
          en: [
            "Granting users only the access they need",
            "Giving all users administrative rights",
            "Limiting internet access for employees",
            "Restricting physical access to buildings"
          ],
          es: [
            "Otorgar a los usuarios solo el acceso que necesitan",
            "Dar a todos los usuarios derechos administrativos",
            "Limitar el acceso a internet para empleados",
            "Restringir el acceso físico a edificios"
          ]
        },
        correct: 0
      },
      {
        id: 17,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What does VPN stand for?",
          es: "¿Qué significa VPN?"
        },
        options: {
          en: [
            "Virtual Private Network",
            "Very Protected Network",
            "Virtual Public Network",
            "Verified Personal Network"
          ],
          es: [
            "Red Privada Virtual",
            "Red Muy Protegida",
            "Red Pública Virtual",
            "Red Personal Verificada"
          ]
        },
        correct: 0
      },
      {
        id: 18,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "What is a zero-day vulnerability?",
          es: "¿Qué es una vulnerabilidad zero-day?"
        },
        options: {
          en: [
            "A vulnerability unknown to the vendor",
            "A vulnerability that's been patched",
            "A vulnerability in zero-day software",
            "A vulnerability that's been public for zero days"
          ],
          es: [
            "Una vulnerabilidad desconocida para el proveedor",
            "Una vulnerabilidad que ha sido parcheada",
            "Una vulnerabilidad en software zero-day",
            "Una vulnerabilidad que ha sido pública por cero días"
          ]
        },
        correct: 0
      },
      {
        id: 19,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is multi-factor authentication?",
          es: "¿Qué es la autenticación multifactor?"
        },
        options: {
          en: [
            "Using multiple methods to verify identity",
            "Using multiple passwords for one account",
            "Using multiple accounts with one password",
            "Using multiple devices simultaneously"
          ],
          es: [
            "Usar múltiples métodos para verificar identidad",
            "Usar múltiples contraseñas para una cuenta",
            "Usar múltiples cuentas con una contraseña",
            "Usar múltiples dispositivos simultáneamente"
          ]
        },
        correct: 0
      },
      {
        id: 20,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "What is the main benefit of cloud security?",
          es: "¿Cuál es el principal beneficio de la seguridad en la nube?"
        },
        options: {
          en: [
            "Centralized security management",
            "Eliminating all security risks",
            "Reducing the need for security personnel",
            "Making security the user's responsibility"
          ],
          es: [
            "Gestión de seguridad centralizada",
            "Eliminar todos los riesgos de seguridad",
            "Reducir la necesidad de personal de seguridad",
            "Hacer que la seguridad sea responsabilidad del usuario"
          ]
        },
        correct: 0
      }
    ]
  },
  {
    name: {
      en: "Technical Security",
      es: "Seguridad Técnica"
    },
    duration: 600, // 10 minutes
    questions: [
      {
        id: 6,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What is a Man-in-the-Middle attack?",
          es: "¿Qué es un ataque de Hombre en el Medio?"
        },
        options: {
          en: [
            "Intercepting communications between systems",
            "Overwhelming servers with traffic",
            "Exploiting outdated software",
            "Physically accessing secure areas"
          ],
          es: [
            "Interceptar comunicaciones entre sistemas",
            "Sobrecargar servidores con tráfico",
            "Explotar software desactualizado",
            "Acceder físicamente a áreas seguras"
          ]
        },
        correct: 0
      },
      {
        id: 7,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is Cross-Site Scripting (XSS)?",
          es: "¿Qué es Cross-Site Scripting (XSS)?"
        },
        options: {
          en: [
            "Injecting malicious scripts into websites",
            "Securing connections between websites",
            "Testing website performance",
            "Website backup procedure"
          ],
          es: [
            "Inyectar scripts maliciosos en sitios web",
            "Asegurar conexiones entre sitios web",
            "Probar el rendimiento del sitio web",
            "Procedimiento de respaldo de sitio web"
          ]
        },
        correct: 0
      },
      {
        id: 8,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is the purpose of a SIEM system?",
          es: "¿Cuál es el propósito de un sistema SIEM?"
        },
        options: {
          en: [
            "Collect and analyze security event data",
            "Block network access attempts",
            "Encrypt sensitive information",
            "Manage user passwords"
          ],
          es: [
            "Recopilar y analizar datos de eventos de seguridad",
            "Bloquear intentos de acceso a la red",
            "Encriptar información sensible",
            "Gestionar contraseñas de usuarios"
          ]
        },
        correct: 0
      },
      {
        id: 9,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "What is the first step in incident response?",
          es: "¿Cuál es el primer paso en la respuesta a incidentes?"
        },
        options: {
          en: [
            "Identification",
            "Recovery",
            "Eradication",
            "Lessons learned"
          ],
          es: [
            "Identificación",
            "Recuperación",
            "Erradicación",
            "Lecciones aprendidas"
          ]
        },
        correct: 0
      },
      {
        id: 10,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "What is a container in cloud computing?",
          es: "¿Qué es un contenedor en computación en la nube?"
        },
        options: {
          en: [
            "Standardized software package with dependencies",
            "Physical security barrier",
            "Encrypted storage location",
            "Type of cloud architecture"
          ],
          es: [
            "Paquete de software estandarizado con dependencias",
            "Barrera de seguridad física",
            "Ubicación de almacenamiento encriptado",
            "Tipo de arquitectura en la nube"
          ]
        },
        correct: 0
      },
      {
        id: 21,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What is port scanning?",
          es: "¿Qué es el escaneo de puertos?"
        },
        options: {
          en: [
            "Checking open ports on a network device",
            "Scanning physical documents into digital format",
            "Monitoring network traffic speed",
            "Creating network diagrams"
          ],
          es: [
            "Verificar puertos abiertos en un dispositivo de red",
            "Escanear documentos físicos en formato digital",
            "Monitorear la velocidad del tráfico de red",
            "Crear diagramas de red"
          ]
        },
        correct: 0
      },
      {
        id: 22,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is a DDoS attack?",
          es: "¿Qué es un ataque DDoS?"
        },
        options: {
          en: [
            "Overwhelming a system with traffic to disrupt service",
            "Stealing data from a database",
            "Encrypting files for ransom",
            "Phishing attack targeting executives"
          ],
          es: [
            "Sobrecargar un sistema con tráfico para interrumpir el servicio",
            "Robar datos de una base de datos",
            "Encriptar archivos para rescate",
            "Ataque de phishing dirigido a ejecutivos"
          ]
        },
        correct: 0
      },
      {
        id: 23,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is a honeypot in cybersecurity?",
          es: "¿Qué es un honeypot en ciberseguridad?"
        },
        options: {
          en: [
            "A decoy system to attract attackers",
            "A type of encryption algorithm",
            "A network monitoring tool",
            "A password management system"
          ],
          es: [
            "Un sistema señuelo para atraer atacantes",
            "Un tipo de algoritmo de encriptación",
            "Una herramienta de monitoreo de red",
            "Un sistema de gestión de contraseñas"
          ]
        },
        correct: 0
      },
      {
        id: 24,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "What is chain of custody in digital forensics?",
          es: "¿Qué es la cadena de custodia en forense digital?"
        },
        options: {
          en: [
            "Documentation of evidence handling",
            "A blockchain security technique",
            "The order of security incidents",
            "A type of network topology"
          ],
          es: [
            "Documentación del manejo de evidencia",
            "Una técnica de seguridad blockchain",
            "El orden de incidentes de seguridad",
            "Un tipo de topología de red"
          ]
        },
        correct: 0
      },
      {
        id: 25,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "What is serverless computing in cloud security?",
          es: "¿Qué es la computación sin servidor en seguridad en la nube?"
        },
        options: {
          en: [
            "Running code without managing servers",
            "Computing without any security measures",
            "Using only client-side computing",
            "Eliminating all cloud servers"
          ],
          es: [
            "Ejecutar código sin gestionar servidores",
            "Computación sin medidas de seguridad",
            "Usar solo computación del lado del cliente",
            "Eliminar todos los servidores en la nube"
          ]
        },
        correct: 0
      }
    ]
  },
  {
    name: {
      en: "Security Management",
      es: "Gestión de Seguridad"
    },
    duration: 600, // 10 minutes
    questions: [
      {
        id: 11,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is the purpose of security awareness training?",
          es: "¿Cuál es el propósito del entrenamiento de concientización sobre seguridad?"
        },
        options: {
          en: [
            "Educate users about security best practices",
            "Test network vulnerabilities",
            "Configure security software",
            "Document security policies"
          ],
          es: [
            "Educar a usuarios sobre mejores prácticas de seguridad",
            "Probar vulnerabilidades de red",
            "Configurar software de seguridad",
            "Documentar políticas de seguridad"
          ]
        },
        correct: 0
      },
      {
        id: 12,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "What is a forensic image in digital forensics?",
          es: "¿Qué es una imagen forense en forensia digital?"
        },
        options: {
          en: [
            "Exact copy of digital media for investigation",
            "Screenshot of malware activity",
            "Photograph of physical evidence",
            "Diagram of attack vectors"
          ],
          es: [
            "Copia exacta de medios digitales para investigación",
            "Captura de pantalla de actividad maliciosa",
            "Fotografía de evidencia física",
            "Diagrama de vectores de ataque"
          ]
        },
        correct: 0
      },
      {
        id: 13,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What is network segmentation?",
          es: "¿Qué es la segmentación de red?"
        },
        options: {
          en: [
            "Dividing network into security zones",
            "Removing network access points",
            "Combining multiple networks",
            "Measuring network performance"
          ],
          es: [
            "Dividir la red en zonas de seguridad",
            "Eliminar puntos de acceso a la red",
            "Combinar múltiples redes",
            "Medir el rendimiento de la red"
          ]
        },
        correct: 0
      },
      {
        id: 14,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is the OWASP Top 10?",
          es: "¿Qué es el OWASP Top 10?"
        },
        options: {
          en: [
            "List of critical web application security risks",
            "Top programming languages for security",
            "Best security tools for developers",
            "Certification program for secure coding"
          ],
          es: [
            "Lista de riesgos críticos para aplicaciones web",
            "Principales lenguajes de programación para seguridad",
            "Mejores herramientas de seguridad para desarrolladores",
            "Programa de certificación para codificación segura"
          ]
        },
        correct: 0
      },
      {
        id: 15,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "What is Infrastructure as Code (IaC) in cloud security?",
          es: "¿Qué es Infraestructura como Código (IaC) en seguridad en la nube?"
        },
        options: {
          en: [
            "Managing infrastructure through configuration files",
            "Programming directly on cloud servers",
            "Coding virtual security guards",
            "Analyzing cloud infrastructure logs"
          ],
          es: [
            "Gestionar infraestructura mediante archivos de configuración",
            "Programar directamente en servidores cloud",
            "Codificar guardias de seguridad virtuales",
            "Analizar registros de infraestructura en la nube"
          ]
        },
        correct: 0
      },
      {
        id: 26,
        domain: DOMAINS.SECURITY_OPERATIONS,
        question: {
          en: "What is a security policy?",
          es: "¿Qué es una política de seguridad?"
        },
        options: {
          en: [
            "A document outlining security rules and procedures",
            "A type of encryption algorithm",
            "A network monitoring tool",
            "A physical security device"
          ],
          es: [
            "Un documento que describe reglas y procedimientos de seguridad",
            "Un tipo de algoritmo de encriptación",
            "Una herramienta de monitoreo de red",
            "Un dispositivo de seguridad física"
          ]
        },
        correct: 0
      },
      {
        id: 27,
        domain: DOMAINS.INCIDENT_RESPONSE,
        question: {
          en: "What is a security audit?",
          es: "¿Qué es una auditoría de seguridad?"
        },
        options: {
          en: [
            "A systematic evaluation of security measures",
            "A type of malware analysis",
            "A network penetration test",
            "A physical security inspection"
          ],
          es: [
            "Una evaluación sistemática de medidas de seguridad",
            "Un tipo de análisis de malware",
            "Una prueba de penetración de red",
            "Una inspección de seguridad física"
          ]
        },
        correct: 0
      },
      {
        id: 28,
        domain: DOMAINS.NETWORK_SECURITY,
        question: {
          en: "What is an IDS in network security?",
          es: "¿Qué es un IDS en seguridad de redes?"
        },
        options: {
          en: [
            "Intrusion Detection System",
            "Internet Data System",
            "Integrated Defense System",
            "Internal Domain Server"
          ],
          es: [
            "Sistema de Detección de Intrusos",
            "Sistema de Datos de Internet",
            "Sistema de Defensa Integrado",
            "Servidor de Dominio Interno"
          ]
        },
        correct: 0
      },
      {
        id: 29,
        domain: DOMAINS.APPLICATION_SECURITY,
        question: {
          en: "What is secure coding?",
          es: "¿Qué es la codificación segura?"
        },
        options: {
          en: [
            "Writing code with security best practices",
            "Encrypting all source code",
            "Hiding code from other developers",
            "Using only compiled languages"
          ],
          es: [
            "Escribir código con mejores prácticas de seguridad",
            "Encriptar todo el código fuente",
            "Ocultar código de otros desarrolladores",
            "Usar solo lenguajes compilados"
          ]
        },
        correct: 0
      },
      {
        id: 30,
        domain: DOMAINS.CLOUD_SECURITY,
        question: {
          en: "What is the main challenge of cloud security?",
          es: "¿Cuál es el principal desafío de la seguridad en la nube?"
        },
        options: {
          en: [
            "Shared responsibility model",
            "Eliminating all security risks",
            "Reducing security costs to zero",
            "Making security invisible to users"
          ],
          es: [
            "Modelo de responsabilidad compartida",
            "Eliminar todos los riesgos de seguridad",
            "Reducir los costos de seguridad a cero",
            "Hacer que la seguridad sea invisible para los usuarios"
          ]
        },
        correct: 0
      }
    ]
  }
];