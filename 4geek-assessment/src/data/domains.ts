export const DOMAINS = {
  SECURITY_OPERATIONS: 'SECURITY_OPERATIONS',
  INCIDENT_RESPONSE: 'INCIDENT_RESPONSE',
  NETWORK_SECURITY: 'NETWORK_SECURITY',
  APPLICATION_SECURITY: 'APPLICATION_SECURITY',
  CLOUD_SECURITY: 'CLOUD_SECURITY'
} as const;

export type DomainType = typeof DOMAINS[keyof typeof DOMAINS];

export interface DomainInfo {
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  careerPaths: {
    en: string[];
    es: string[];
  };
  skills: {
    en: string[];
    es: string[];
  };
}

export const domainInfo: Record<DomainType, DomainInfo> = {
  [DOMAINS.SECURITY_OPERATIONS]: {
    name: {
      en: "Security Operations",
      es: "Operaciones de Seguridad"
    },
    description: {
      en: "Focus on monitoring security systems, analyzing threats, and maintaining security controls.",
      es: "Enfoque en monitoreo de sistemas de seguridad, análisis de amenazas y mantenimiento de controles de seguridad."
    },
    careerPaths: {
      en: ['SOC Analyst', 'Security Operations Manager', 'Threat Hunter'],
      es: ['Analista SOC', 'Gerente de Operaciones de Seguridad', 'Cazador de Amenazas']
    },
    skills: {
      en: ["Monitoring", "Analysis", "Incident Detection", "Alert Response"],
      es: ["Monitoreo", "Análisis", "Detección de Incidentes", "Respuesta a Alertas"]
    }
  },
  [DOMAINS.INCIDENT_RESPONSE]: {
    name: {
      en: "Incident Response",
      es: "Respuesta a Incidentes"
    },
    description: {
      en: "Specialized in detecting, investigating, and responding to security incidents.",
      es: "Especializado en detectar, investigar y responder a incidentes de seguridad."
    },
    careerPaths: {
      en: ['Incident Response Analyst', 'Digital Forensics Investigator', 'Security Incident Manager'],
      es: ['Analista de Respuesta a Incidentes', 'Investigador Forense Digital', 'Gerente de Incidentes de Seguridad']
    },
    skills: {
      en: ["Incident Handling", "Forensics", "Threat Analysis", "Recovery"],
      es: ["Manejo de Incidentes", "Forense", "Análisis de Amenazas", "Recuperación"]
    }
  },
  [DOMAINS.NETWORK_SECURITY]: {
    name: {
      en: "Network Security",
      es: "Seguridad de Redes"
    },
    description: {
      en: "Focused on protecting network infrastructure and detecting network-based threats.",
      es: "Enfocado en proteger infraestructura de red y detectar amenazas basadas en red."
    },
    careerPaths: {
      en: ['Network Security Engineer', 'Security Architect', 'Network Penetration Tester'],
      es: ['Ingeniero de Seguridad de Red', 'Arquitecto de Seguridad', 'Pentester de Redes']
    },
    skills: {
      en: ["Firewall Management", "IDS/IPS", "Network Monitoring", "VPN Configuration"],
      es: ["Gestión de Firewalls", "IDS/IPS", "Monitoreo de Red", "Configuración VPN"]
    }
  },
  [DOMAINS.APPLICATION_SECURITY]: {
    name: {
      en: "Application Security",
      es: "Seguridad de Aplicaciones"
    },
    description: {
      en: "Expertise in securing software applications and implementing secure development practices.",
      es: "Experiencia en asegurar aplicaciones de software e implementar prácticas de desarrollo seguro."
    },
    careerPaths: {
      en: ['Application Security Engineer', 'Security Developer', 'DevSecOps Engineer'],
      es: ['Ingeniero de Seguridad de Aplicaciones', 'Desarrollador de Seguridad', 'Ingeniero DevSecOps']
    },
    skills: {
      en: ["Code Review", "SAST/DAST", "Vulnerability Assessment", "Secure Coding"],
      es: ["Revisión de Código", "SAST/DAST", "Evaluación de Vulnerabilidades", "Codificación Segura"]
    }
  },
  [DOMAINS.CLOUD_SECURITY]: {
    name: {
      en: "Cloud Security",
      es: "Seguridad en la Nube"
    },
    description: {
      en: "Specializing in securing cloud environments and implementing cloud security controls.",
      es: "Especialización en asegurar entornos en la nube e implementar controles de seguridad cloud."
    },
    careerPaths: {
      en: ['Cloud Security Engineer', 'Cloud Security Architect', 'Cloud Security Consultant'],
      es: ['Ingeniero de Seguridad Cloud', 'Arquitecto de Seguridad Cloud', 'Consultor de Seguridad Cloud']
    },
    skills: {
      en: ["IAM", "Cloud Configuration", "Container Security", "Security Automation"],
      es: ["IAM", "Configuración Cloud", "Seguridad de Contenedores", "Automatización de Seguridad"]
    }
  }
};