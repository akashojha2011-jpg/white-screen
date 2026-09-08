export interface LegalPageContent {
  title: string;
  metaDescription: string;
  lastUpdated?: string;
  paragraphs: string[];
  sections: Array<{
    heading: string;
    content?: string;
    bullets?: string[];
  }>;
}

export const legalTranslations: Record<string, {
  about: LegalPageContent;
  privacy: LegalPageContent;
  terms: LegalPageContent;
  cookie: LegalPageContent;
  license: LegalPageContent;
  contact: {
    title: string;
    metaDescription: string;
    intro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitBtn: string;
    directTitle: string;
    directText: string;
  };
}> = {
  en: {
    about: {
      title: "About TheWhiteScreen.org",
      metaDescription: "Learn about TheWhiteScreen.org - the ultra-fast, free, distraction-free online white screen tool.",
      paragraphs: [
        "TheWhiteScreen.org was built with a clear mission: to provide an ultra-fast, clean, and distraction-free fullscreen white screen tool accessible instantly on any device worldwide without ads, popups, or required sign-ups.",
        "Our web application leverages static-first architecture (Astro.js) to guarantee 100/100 performance, instant rendering, and zero loading lag across all modern web browsers and screen resolutions."
      ],
      sections: [
        {
          heading: "Our Story & Purpose",
          content: "Whether you are a software engineer inspecting laptop displays for dead pixels, a professional requiring front fill light for Zoom and video calls, a student cleaning dust off a monitor, or an artist tracing drawings, having an instant pure white screen is essential. We designed this tool to be universally available, lightweight, and completely free forever."
        },
        {
          heading: "Core Principles",
          bullets: [
            "100% Free & No Registration: No paywalls, subscriptions, or account requirements.",
            "Privacy-First Architecture: All screen rendering occurs locally inside your web browser. No personal data is ever collected or transmitted.",
            "Global Accessibility: Fully localized across 14 international languages with low-latency edge deployment.",
            "High-Resolution Exports: Download high-definition blank white wallpapers up to 8K Ultra HD in PNG, JPG, or WEBP formats."
          ]
        },
        {
          heading: "Contact & Feedback",
          content: "We welcome feedback, feature suggestions, and partnership inquiries. Visit our Contact Us page to reach our support team directly."
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      metaDescription: "Read the Privacy Policy for TheWhiteScreen.org. Learn how we protect user privacy with zero data collection.",
      lastUpdated: "Last Updated: August 28, 2026",
      paragraphs: [
        "At TheWhiteScreen.org, protecting your privacy is our highest priority. This Privacy Policy outlines our strict commitment to safeguarding your online security while using our website and tools."
      ],
      sections: [
        {
          heading: "1. Zero Personal Data Collection",
          content: "TheWhiteScreen.org does NOT collect, capture, or store any personal data, IP addresses, or browsing history. No user accounts or personal details are required to access any of our display tools."
        },
        {
          heading: "2. Client-Side Rendering",
          content: "All screen color changes, canvas generations, and image downloads occur 100% locally inside your web browser. No images, screen buffers, or canvas assets are sent to or stored on our servers."
        },
        {
          heading: "3. Browser Local Storage",
          content: "We use standard browser localStorage solely to save functional UI preferences, such as remembering your Dark/Light mode theme selection and custom color favorites. This data remains strictly stored on your own device."
        },
        {
          heading: "4. Third-Party Services",
          content: "We do not sell, rent, or trade user data to third-party advertisers. Minimal privacy-focused analytics may be used strictly to monitor site uptime and core performance."
        },
        {
          heading: "5. Contact Information",
          content: "If you have any questions regarding this Privacy Policy, please contact us at privacy@thewhitescreen.org."
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      metaDescription: "Terms and Conditions for using TheWhiteScreen.org online white screen and background tools.",
      lastUpdated: "Last Updated: August 28, 2026",
      paragraphs: [
        "Welcome to TheWhiteScreen.org. By accessing or using our website, tools, and downloadable wallpapers, you agree to comply with and be bound by the following Terms & Conditions."
      ],
      sections: [
        {
          heading: "1. Permitted Use of Service",
          content: "You are granted a non-exclusive, free right to access and use our online display tools for personal, educational, commercial, or creative purposes."
        },
        {
          heading: "2. Intellectual Property",
          content: "All blank color wallpapers generated using our tool are royalty-free and can be downloaded for personal or commercial background use."
        },
        {
          heading: "3. Disclaimer of Warranties",
          content: "Our services are provided 'AS IS' without warranties of any kind. While our tool helps identify stuck pixels and monitor dust, we do not guarantee hardware repair."
        },
        {
          heading: "4. Limitation of Liability",
          content: "TheWhiteScreen.org shall not be liable for any direct or indirect damages arising from the use or inability to use our website."
        }
      ]
    },
    cookie: {
      title: "Cookie Policy",
      metaDescription: "Cookie Policy for TheWhiteScreen.org detailing browser local storage usage.",
      lastUpdated: "Last Updated: August 28, 2026",
      paragraphs: [
        "TheWhiteScreen.org does NOT use tracking cookies or advertising cookies."
      ],
      sections: [
        {
          heading: "1. Functional Browser Storage",
          content: "We use browser localStorage exclusively for saving functional interface preferences (such as your chosen Dark/Light theme mode and custom color presets)."
        },
        {
          heading: "2. Managing Storage Data",
          content: "You can clear your local browser storage data at any time via your browser settings under Clear Browsing Data."
        }
      ]
    },
    license: {
      title: "License Agreement",
      metaDescription: "Review the free open usage license for TheWhiteScreen.org wallpapers and display tools.",
      lastUpdated: "Last Updated: August 28, 2026",
      paragraphs: [
        "All blank color images, wallpapers, and canvas outputs generated on TheWhiteScreen.org are covered by a permissive royalty-free license."
      ],
      sections: [
        {
          heading: "What is Allowed:",
          bullets: [
            "Use generated wallpapers for desktop, tablet, and mobile device backgrounds.",
            "Incorporate images into commercial graphic design, video productions, and presentations.",
            "Use full screens for webcam illumination during Zoom video calls and live streaming."
          ]
        },
        {
          heading: "What is Restricted:",
          bullets: [
            "Reselling blank white background images on stock asset platforms as standalone items.",
            "Attempting automated scraping or DDoS attacks against our web infrastructure."
          ]
        }
      ]
    },
    contact: {
      title: "Contact Us",
      metaDescription: "Contact TheWhiteScreen.org team for support, feedback, and inquiries.",
      intro: "Have questions, feedback, or feature requests for TheWhiteScreen.org? Send us a message below.",
      nameLabel: "Your Name",
      emailLabel: "Your Email Address",
      messageLabel: "Your Message",
      submitBtn: "Send Message",
      directTitle: "Direct Email Support",
      directText: "You can also reach our team directly at support@thewhitescreen.org."
    }
  },
  fr: {
    about: {
      title: "À Propos de TheWhiteScreen.org",
      metaDescription: "Découvrez TheWhiteScreen.org - l'outil écran blanc plein écran gratuit, rapide et sans distraction.",
      paragraphs: [
        "TheWhiteScreen.org a été créé avec une mission précise : fournir un outil d'écran blanc plein écran ultra-rapide, propre et sans distraction, accessible instantanément sur n'importe quel appareil dans le monde entier sans publicité ni inscription.",
        "Notre application web utilise une architecture statique (Astro.js) pour garantir une performance optimale, un chargement instantané et aucun temps de latence."
      ],
      sections: [
        {
          heading: "Notre Histoire et Notre Mission",
          content: "Que vous soyez développeur inspectant des écrans pour détecter les pixels morts, un professionnel cherchant un éclairage doux pour des visioconférences Zoom, un étudiant nettoyant la poussière de son moniteur ou un artiste calquant des dessins, disposer d'un écran blanc pur instantané est essentiel."
        },
        {
          heading: "Nos Principes Fondamentaux",
          bullets: [
            "100% Gratuit et Sans Inscription : Aucun paiement caché ni création de compte obligatoire.",
            "Confidentialité Garantie : Tout le rendu est effectué localement dans votre navigateur sans collecte de données.",
            "Accessibilité Mondiale : Disponible en 14 langues mondiales avec un déploiement haute vitesse.",
            "Téléchargements Haute Résolution : Téléchargez des fonds d'écran blancs jusqu'en 8K Ultra HD en PNG, JPG ou WEBP."
          ]
        },
        {
          heading: "Contact et Assistance",
          content: "Pour toute question ou suggestion, visitez notre page de contact pour joindre notre équipe."
        }
      ]
    },
    privacy: {
      title: "Politique de Confidentialité",
      metaDescription: "Consultez la politique de confidentialité de TheWhiteScreen.org. Protection totale sans collecte de données.",
      lastUpdated: "Dernière mise à jour : 28 août 2026",
      paragraphs: [
        "Chez TheWhiteScreen.org, la protection de votre vie privée est notre priorité absolue."
      ],
      sections: [
        {
          heading: "1. Aucune Collecte de Données Personnelles",
          content: "TheWhiteScreen.org ne collecte, ne conserve et ne stocke aucune donnée personnelle ni adresse IP. Aucun compte utilisateur n'est requis."
        },
        {
          heading: "2. Traitement Côté Client",
          content: "Toutes les opérations d'affichage et de téléchargement d'images sont traitées à 100% localement dans votre navigateur web."
        },
        {
          heading: "3. Stockage Local du Navigateur",
          content: "Nous utilisons le stockage local (localStorage) uniquement pour conserver vos préférences d'interface (comme le mode sombre)."
        },
        {
          heading: "4. Services Tiers",
          content: "Nous ne vendons et ne partageons aucune donnée avec des annonceurs tiers."
        },
        {
          heading: "5. Contact",
          content: "Pour toute question concernant cette politique, contactez-nous à privacy@thewhitescreen.org."
        }
      ]
    },
    terms: {
      title: "Conditions Générales d'Utilisation",
      metaDescription: "Conditions d'utilisation de TheWhiteScreen.org pour l'outil écran blanc en ligne.",
      lastUpdated: "Dernière mise à jour : 28 août 2026",
      paragraphs: [
        "Bienvenue sur TheWhiteScreen.org. En utilisant notre site web et nos outils, vous acceptez les présentes conditions générales."
      ],
      sections: [
        {
          heading: "1. Utilisation Autorisée",
          content: "Vous disposez d'un droit gratuit et non exclusif d'utiliser nos outils d'affichage à des fins personnelles ou commerciales."
        },
        {
          heading: "2. Propriété Intellectuelle",
          content: "Toutes les images blanches générées sont libres de droits pour une utilisation comme fond d'écran."
        },
        {
          heading: "3. Exclusion de Garantie",
          content: "Nos outils sont fournis 'EN L'ÉTAT' sans garantie d'aucune sorte quant au dépannage matériel."
        },
        {
          heading: "4. Limitation de Responsabilité",
          content: "TheWhiteScreen.org ne saurait être tenu responsable des dommages directs ou indirects liés à l'utilisation du site."
        }
      ]
    },
    cookie: {
      title: "Politique Relative aux Cookies",
      metaDescription: "Information sur l'utilisation du stockage local et des cookies sur TheWhiteScreen.org.",
      lastUpdated: "Dernière mise à jour : 28 août 2026",
      paragraphs: [
        "TheWhiteScreen.org N'UTILISE PAS de cookies de suivi ou de cookies publicitaires."
      ],
      sections: [
        {
          heading: "1. Stockage Fonctionnel",
          content: "Le stockage local (localStorage) est utilisé uniquement pour enregistrer vos préférences d'affichage (mode sombre/clair)."
        },
        {
          heading: "2. Gestion des Données",
          content: "Vous pouvez effacer les données enregistrées à tout moment dans les paramètres de votre navigateur."
        }
      ]
    },
    license: {
      title: "Accord de Licence",
      metaDescription: "Licence d'utilisation libre des images et fonds d'écran blancs de TheWhiteScreen.org.",
      lastUpdated: "Dernière mise à jour : 28 août 2026",
      paragraphs: [
        "Toutes les images et fonds d'écran blancs créés sur TheWhiteScreen.org sont distribués sous une licence libre de droits."
      ],
      sections: [
        {
          heading: "Ce qui est autorisé :",
          bullets: [
            "Utiliser les fonds d'écran générés pour PC, tablette et smartphone.",
            "Intégrer les images dans des projets graphiques et vidéos commerciaux.",
            "Utiliser l'écran blanc pour l'éclairage de visioconférences Zoom."
          ]
        },
        {
          heading: "Ce qui est interdit :",
          bullets: [
            "Revendre les images blanches sur des banques d'images payantes.",
            "Tenter des attaques automatisées ou du scraping sur nos serveurs."
          ]
        }
      ]
    },
    contact: {
      title: "Contactez-Nous",
      metaDescription: "Contactez l'équipe de TheWhiteScreen.org pour toute question ou remarque.",
      intro: "Vous avez des questions ou des suggestions concernant TheWhiteScreen.org ? Envoyez-nous un message ci-dessous.",
      nameLabel: "Votre Nom",
      emailLabel: "Votre Adresse Email",
      messageLabel: "Votre Message",
      submitBtn: "Envoyer le Message",
      directTitle: "Support par Email",
      directText: "Vous pouvez également contacter notre équipe par email à support@thewhitescreen.org."
    }
  },
  de: {
    about: {
      title: "Über TheWhiteScreen.org",
      metaDescription: "Erfahren Sie mehr über TheWhiteScreen.org – das schnelle, kostenlose und werbefreie Online-Tool für weißen Bildschirm.",
      paragraphs: [
        "TheWhiteScreen.org wurde mit einem klaren Ziel entwickelt: Ein ultraschnelles, sauberes und ablenkungsfreies Vollbild-Tool für einen weißen Bildschirm bereitzustellen, das sofort auf jedem Gerät weltweit ohne Registrierung verfügbar ist.",
        "Unsere Webanwendung nutzt eine statische Architektur (Astro.js), um eine perfekte Performance und ladezeitfreie Nutzung in jedem Browser zu gewährleisten."
      ],
      sections: [
        {
          heading: "Unsere Geschichte & Zielsetzung",
          content: "Ob Sie als Entwickler Bildschirme auf Pixelfehler prüfen, als Profi ein weiches Licht für Zoom-Meetings benötigen oder als Zeichner Vorlagen abpausen – eine rein weiße Fläche ist unverzichtbar."
        },
        {
          heading: "Unsere Grundprinzipien",
          bullets: [
            "100% Kostenlos: Keine versteckten Gebühren oder Registrierung erforderlich.",
            "Datenschutz an erster Stelle: Alle Berechnungen erfolgen lokal in Ihrem Browser.",
            "Globale Verfügbarkeit: In 14 Sprachen weltweit verfügbar.",
            "Hohe Auflösungen: Downloads bis zu 8K Ultra HD in PNG, JPG oder WEBP."
          ]
        },
        {
          heading: "Kontakt & Feedback",
          content: "Haben Sie Fragen oder Feedback? Besuchen Sie unsere Kontaktseite, um uns direkt zu erreichen."
        }
      ]
    },
    privacy: {
      title: "Datenschutzerklärung",
      metaDescription: "Datenschutzerklärung von TheWhiteScreen.org. Höchster Schutz ohne Datenerfassung.",
      lastUpdated: "Zuletzt aktualisiert: 28. August 2026",
      paragraphs: [
        "Der Schutz Ihrer Privatsphäre hat für TheWhiteScreen.org höchste Priorität."
      ],
      sections: [
        {
          heading: "1. Keine Erfassung persönlicher Daten",
          content: "TheWhiteScreen.org erfasst, speichert oder verarbeitet keinerlei personenbezogene Daten oder IP-Adressen."
        },
        {
          heading: "2. Lokale Ausführung im Browser",
          content: "Alle Bildgenerierungen und Farbänderungen werden zu 100% lokal in Ihrem Browser ausgeführt."
        },
        {
          heading: "3. Lokaler Browserspeicher",
          content: "Wir nutzen localStorage ausschließlich zum Speichern funktionaler Einstellungen wie des Dark-Mode-Themes."
        },
        {
          heading: "4. Keine Weitergabe an Dritte",
          content: "Es werden keine Daten an Werbenetzwerke oder Drittanbieter verkauft oder weitergegeben."
        },
        {
          heading: "5. Kontakt",
          content: "Bei Fragen zum Datenschutz erreichen Sie uns unter privacy@thewhitescreen.org."
        }
      ]
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      metaDescription: "AGB für die Nutzung von TheWhiteScreen.org.",
      lastUpdated: "Zuletzt aktualisiert: 28. August 2026",
      paragraphs: [
        "Willkommen bei TheWhiteScreen.org. Durch die Nutzung unserer Website erklären Sie sich mit den folgenden Bedingungen einverstanden."
      ],
      sections: [
        {
          heading: "1. Nutzung des Dienstes",
          content: "Sie dürfen unsere Online-Tools kostenlos für persönliche, bildungsbezogene oder kommerzielle Zwecke nutzen."
        },
        {
          heading: "2. Urheberrecht & Bilder",
          content: "Alle erzeugten weißen Hintergründe sind lizenzfrei und dürfen frei verwendet werden."
        },
        {
          heading: "3. Gewährleistungsausschluss",
          content: "Die Dienste werden 'WIE GESEHEN' ohne Garantien bezüglich Hardware-Reparaturen bereitgestellt."
        },
        {
          heading: "4. Haftungsbeschränkung",
          content: "TheWhiteScreen.org haftet nicht für direkte oder indirekte Schäden aus der Nutzung der Website."
        }
      ]
    },
    cookie: {
      title: "Cookie-Richtlinie",
      metaDescription: "Informationen zur Nutzung von lokalem Speicher auf TheWhiteScreen.org.",
      lastUpdated: "Zuletzt aktualisiert: 28. August 2026",
      paragraphs: [
        "TheWhiteScreen.org verwendet KEINE Tracking-Cookies oder Werbe-Cookies."
      ],
      sections: [
        {
          heading: "1. Funktionaler Speicher",
          content: "Der lokale Browserspeicher (localStorage) wird nur für Theme-Einstellungen (Hell-/Dunkelmodus) verwendet."
        },
        {
          heading: "2. Daten verwalten",
          content: "Sie können den lokalen Speicher jederzeit in Ihren Browsereinstellungen löschen."
        }
      ]
    },
    license: {
      title: "Lizenzvereinbarung",
      metaDescription: "Kostenlose Lizenz für weiße Hintergründe von TheWhiteScreen.org.",
      lastUpdated: "Zuletzt aktualisiert: 28. August 2026",
      paragraphs: [
        "Alle auf TheWhiteScreen.org erstellten weißen Bilder stehen unter einer freien Lizenz."
      ],
      sections: [
        {
          heading: "Erlaubt:",
          bullets: [
            "Nutzung als Hintergrundbild für PC, Tablet und Smartphone.",
            "Verwendung in kommerziellen Grafik- und Videoprojekten.",
            "Einsatz als Videolicht bei Zoom-Meetings."
          ]
        },
        {
          heading: "Nicht erlaubt:",
          bullets: [
            "Weiterverkauf der leeren weißen Bilder auf Stockfoto-Plattformen.",
            "Automatisierte Scraping-Angriffe auf unsere Infrastruktur."
          ]
        }
      ]
    },
    contact: {
      title: "Kontakt",
      metaDescription: "Kontaktieren Sie das Team von TheWhiteScreen.org bei Fragen oder Feedback.",
      intro: "Haben Sie Fragen oder Anregungen zu TheWhiteScreen.org? Schreiben Sie uns eine Nachricht.",
      nameLabel: "Ihr Name",
      emailLabel: "Ihre E-Mail-Adresse",
      messageLabel: "Ihre Nachricht",
      submitBtn: "Nachricht Senden",
      directTitle: "Direkter E-Mail-Support",
      directText: "Sie erreichen uns auch direkt per E-Mail unter support@thewhitescreen.org."
    }
  },
  es: {
    about: {
      title: "Acerca de TheWhiteScreen.org",
      metaDescription: "Conoce TheWhiteScreen.org - la herramienta de pantalla blanca en línea rápida, gratuita y sin distracciones.",
      paragraphs: [
        "TheWhiteScreen.org fue creada con un propósito claro: ofrecer una herramienta de pantalla blanca a pantalla completa rápida, limpia y sin anuncios ni registros obligatorios.",
        "Construida con tecnología estática (Astro.js), garantiza un rendimiento ultrarrápido sin tiempos de carga."
      ],
      sections: [
        {
          heading: "Nuestra Historia",
          content: "Ya sea para limpiar la pantalla de polvo, probar píxeles muertos en monitores nuevos o usarla como luz suave para llamadas en Zoom, contar con una pantalla blanca pura es fundamental."
        },
        {
          heading: "Principios Clave",
          bullets: [
            "100% Gratuito: Sin pagos ocultos ni registro de cuenta.",
            "Privacidad Garantizada: Renderizado local en tu propio navegador.",
            "Disponible en 14 Idiomas con máxima velocidad.",
            "Descargas en Alta Definición hasta 8K Ultra HD."
          ]
        },
        {
          heading: "Contacto",
          content: "Visita nuestra página de contacto para enviarnos tus comentarios o sugerencias."
        }
      ]
    },
    privacy: {
      title: "Política de Privacidad",
      metaDescription: "Política de privacidad de TheWhiteScreen.org. Protección total sin recolección de datos.",
      lastUpdated: "Última actualización: 28 de agosto de 2026",
      paragraphs: [
        "En TheWhiteScreen.org nos tomamos muy en serio la protección de tu privacidad."
      ],
      sections: [
        {
          heading: "1. Sin Recolección de Datos Personales",
          content: "No recopilamos ni almacenamos datos personales ni direcciones IP."
        },
        {
          heading: "2. Procesamiento Local",
          content: "Toda la generación de pantalla e imágenes ocurre 100% en tu navegador."
        },
        {
          heading: "3. Almacenamiento Local",
          content: "Utilizamos localStorage únicamente para recordar tus preferencias de tema visual."
        },
        {
          heading: "4. Terceros",
          content: "No compartimos datos con redes publicitarias ni terceros."
        },
        {
          heading: "5. Contacto",
          content: "Para dudas sobre privacidad escribe a privacy@thewhitescreen.org."
        }
      ]
    },
    terms: {
      title: "Términos y Condiciones",
      metaDescription: "Términos de uso de TheWhiteScreen.org.",
      lastUpdated: "Última actualización: 28 de agosto de 2026",
      paragraphs: [
        "Bienvenido a TheWhiteScreen.org. Al utilizar nuestro sitio web aceptas los siguientes términos."
      ],
      sections: [
        {
          heading: "1. Uso Permitido",
          content: "Puedes usar nuestras herramientas de forma gratuita para fines personales o comerciales."
        },
        {
          heading: "2. Propiedad Intelectual",
          content: "Los fondos blancos generados son libres de derechos para cualquier uso."
        },
        {
          heading: "3. Exención de Garantías",
          content: "Las herramientas se proporcionan 'TAL CUAL' sin garantía de reparación física de pantallas."
        },
        {
          heading: "4. Limitación de Responsabilidad",
          content: "No nos hacemos responsables por daños derivados del uso del sitio."
        }
      ]
    },
    cookie: {
      title: "Política de Cookies",
      metaDescription: "Información sobre el almacenamiento local en TheWhiteScreen.org.",
      lastUpdated: "Última actualización: 28 de agosto de 2026",
      paragraphs: [
        "TheWhiteScreen.org NO utiliza cookies de rastreo ni publicidad."
      ],
      sections: [
        {
          heading: "1. Almacenamiento Funcional",
          content: "El almacenamiento local sólo guarda preferencias como el modo oscuro."
        },
        {
          heading: "2. Gestión de Datos",
          content: "Puedes borrar los datos locales desde los ajustes de tu navegador."
        }
      ]
    },
    license: {
      title: "Acuerdo de Licencia",
      metaDescription: "Licencia de uso libre para imágenes y fondos de TheWhiteScreen.org.",
      lastUpdated: "Última actualización: 28 de agosto de 2026",
      paragraphs: [
        "Todas las imágenes blancas creadas en el sitio tienen licencia libre de derechos."
      ],
      sections: [
        {
          heading: "Permitido:",
          bullets: [
            "Usar los fondos en computadoras, tabletas y móviles.",
            "Incluir imágenes en proyectos de diseño gráfico y videos.",
            "Usar la pantalla como luz para llamadas de Zoom."
          ]
        },
        {
          heading: "No permitido:",
          bullets: [
            "Revender las imágenes blancas en bancos de fotos de stock.",
            "Ataques automatizados contra nuestros servidores."
          ]
        }
      ]
    },
    contact: {
      title: "Contacto",
      metaDescription: "Contacta al equipo de TheWhiteScreen.org para dudas o sugerencias.",
      intro: "¿Tienes preguntas o sugerencias sobre TheWhiteScreen.org? Envíanos un mensaje.",
      nameLabel: "Tu Nombre",
      emailLabel: "Tu Correo Electrónico",
      messageLabel: "Tu Mensaje",
      submitBtn: "Enviar Mensaje",
      directTitle: "Soporte Directo por Email",
      directText: "Escríbenos directamente a support@thewhitescreen.org."
    }
  }
};

// Fallback logic for unsupported or pending locales to ensure rich translations always exist
export function getLegalContent(lang: string) {
  return legalTranslations[lang] || legalTranslations['en'];
}
