import type { LanguageCode } from '../i18n/config';

export interface LegalSection {
  heading: string;
  content?: string;
  bullets?: string[];
}

export interface LocalizedLegalContent {
  title: string;
  metaDescription: string;
  h1: string;
  lastUpdated: string;
  paragraphs: string[];
  sections: LegalSection[];
  contactInfo?: {
    email: string;
    responseTime: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitBtn: string;
  };
}

export interface LegalDefinition {
  id: string;
  content: Record<LanguageCode, LocalizedLegalContent>;
}

export const ALL_LEGALS: LegalDefinition[] = [
  {
    id: 'about',
    content: {
      "en": {
            "title": "About TheWhiteScreen.org - Fast, Clean Display Utilities",
            "metaDescription": "Learn about TheWhiteScreen.org, an ultra-fast, privacy-first fullscreen display tool designed for screen testing, lighting, and creative workflows.",
            "h1": "About TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org was built with a clear mission: to provide an ultra-fast, clean, and distraction-free fullscreen screen tool accessible instantly on any device worldwide without ads, popups, or required sign-ups.",
                  "Our web application leverages static-first architecture to guarantee instant rendering, zero loading lag, and maximum privacy across all modern web browsers and screen resolutions."
            ],
            "sections": [
                  {
                        "heading": "Our Purpose & Mission",
                        "content": "Whether you are a software engineer inspecting laptop displays for dead pixels, a professional requiring front fill light for Zoom and video calls, a student cleaning dust off a monitor, or an artist tracing drawings, having an instant pure white screen is essential. We designed this tool to be universally available, lightweight, and completely free forever."
                  },
                  {
                        "heading": "Core Principles",
                        "bullets": [
                              "100% Free & No Registration: No paywalls, subscriptions, or account requirements.",
                              "Privacy-First Architecture: All screen rendering occurs locally inside your web browser. No personal data is ever collected or transmitted.",
                              "Global Accessibility: Fully localized across international languages with edge deployment.",
                              "High-Resolution Exports: Download high-definition blank wallpapers up to 8K Ultra HD in PNG, JPG, or WEBP formats."
                        ]
                  }
            ]
      },
      "es": {
            "title": "Acerca de TheWhiteScreen.org - Herramienta de Pantalla",
            "metaDescription": "Conoce TheWhiteScreen.org: herramienta de pantalla completa ultrarrápida para pruebas de pantalla, iluminación de videollamadas y dibujo.",
            "h1": "Acerca de TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org fue creada con un propósito claro: ofrecer una herramienta de pantalla completa rápida, limpia y sin anuncios intrusivos ni registros obligatorios en cualquier dispositivo.",
                  "Nuestra aplicación web utiliza una arquitectura estática optimizada para garantizar una carga instantánea y máxima privacidad en todos los navegadores y resoluciones modernas."
            ],
            "sections": [
                  {
                        "heading": "Nuestro Propósito",
                        "content": "Ya sea que estés inspeccionando monitores en busca de píxeles muertos, necesitando luz frontal para videollamadas de Zoom, limpiando polvo de tu pantalla o calcando ilustraciones, contar con una pantalla limpia es indispensable."
                  },
                  {
                        "heading": "Principios Fundamentales",
                        "bullets": [
                              "100% Gratuito y Sin Registro: Sin barreras de pago ni necesidad de crear cuentas.",
                              "Privacidad Garantizada: Todo el renderizado ocurre en tu navegador local sin recopilar datos personales.",
                              "Accesibilidad Global: Totalmente traducido a múltiples idiomas con servidores de baja latencia.",
                              "Descargas en Alta Resolución: Exporta fondos limpios hasta resolución 8K Ultra HD."
                        ]
                  }
            ]
      },
      "fr": {
            "title": "À Propos de TheWhiteScreen.org - Utilitaires d'Écran",
            "metaDescription": "Découvrez TheWhiteScreen.org : outil plein écran ultra-rapide et gratuit pour tester vos écrans, éclairer vos appels vidéo et dessiner.",
            "h1": "À Propos de TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org a été conçu avec une mission claire : fournir un outil plein écran ultra-rapide, propre et sans distractions, accessible instantanément sur tout appareil sans publicité intrusive.",
                  "Notre plateforme repose sur une architecture statique assurant un affichage instantané et un respect total de votre vie privée sur tous les navigateurs modernes."
            ],
            "sections": [
                  {
                        "heading": "Notre Mission",
                        "content": "Que vous vérifiiez la présence de pixels morts sur un écran neuf, cherchiez un éclairage d'appoint pour vos réunions vidéo, nettoyiez la poussière ou calquiez un croquis, un écran monochrome pur est un outil indispensable au quotidien."
                  },
                  {
                        "heading": "Nos Engagements",
                        "bullets": [
                              "100% Gratuit et Sans Inscription : Aucun abonnement ni compte requis.",
                              "Respect de la Vie Privée : Tout s'exécute localement dans votre navigateur sans collecte de données.",
                              "Accessibilité Mondiale : Traduction complète et hébergement distribué ultra-rapide.",
                              "Téléchargements Haute Résolution : Fonds d'écran vierges jusqu'en 8K Ultra HD."
                        ]
                  }
            ]
      },
      "de": {
            "title": "Über TheWhiteScreen.org - Bildschirm-Werkzeuge",
            "metaDescription": "Erfahren Sie mehr über TheWhiteScreen.org: blitzschnelles Vollbild-Werkzeug für Bildschirmtests, Videobeleuchtung und Zeichenarbeiten.",
            "h1": "Über TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org wurde mit einem klaren Ziel entwickelt: ein extrem schnelles, sauberes und ablenkungsfreies Vollbild-Tool bereitzustellen, das ohne Anmeldung und ohne störende Werbung auf jedem Gerät funktioniert.",
                  "Unsere statische Architektur garantiert sofortige Ladezeiten und kompromisslosen Datenschutz in allen modernen Webbrowsern."
            ],
            "sections": [
                  {
                        "heading": "Unser Zweck",
                        "content": "Ob Sie Pixelfehler auf einem neuen Monitor suchen, eine gleichmäßige Ausleuchtung für Zoom-Konferenzen benötigen, Staub vom Display wischen oder Skizzen abpausen möchten: Ein reiner Vollbildschirm ist ein essenzielles Werkzeug."
                  },
                  {
                        "heading": "Unsere Grundsätze",
                        "bullets": [
                              "100% Kostenlos & Ohne Registrierung: Keine Bezahlschranken, keine Abonnements.",
                              "Datenschutz an erster Stelle: Alle Berechnungen erfolgen lokal im Browser ohne Datenspeicherung.",
                              "Weltweite Zugänglichkeit: Vollständig mehrsprachig auf Hochgeschwindigkeits-Servern.",
                              "Hochauflösende Downloads: Einfarbige Bildschirmhintergründe bis zu 8K Ultra HD."
                        ]
                  }
            ]
      },
      "pt": {
            "title": "Sobre o TheWhiteScreen.org - Ferramentas de Tela",
            "metaDescription": "Conheça o TheWhiteScreen.org: ferramenta de tela cheia ultrarrápida e gratuita para testes de tela, iluminação de vídeo e desenhos.",
            "h1": "Sobre o TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "O TheWhiteScreen.org foi criado com um objetivo claro: disponibilizar uma ferramenta de tela cheia ultrarrápida, limpa e sem distrações, utilizável em qualquer aparelho sem necessidade de cadastro ou anúncios abusivos.",
                  "Nossa plataforma utiliza arquitetura estática para proporcionar renderização instantânea e máxima privacidade em qualquer navegador."
            ],
            "sections": [
                  {
                        "heading": "Nossa Missão",
                        "content": "Seja para identificar pixels mortos ou travados no monitor, iluminar o rosto em chamadas de vídeo, limpar poeira da tela ou decalcar ilustrações, uma tela em cor pura em modo tela cheia é uma ferramenta indispensável."
                  },
                  {
                        "heading": "Princípios Fundamentais",
                        "bullets": [
                              "100% Grátis e Sem Cadastro: Sem planos pagos, assinaturas ou cadastros obrigatórios.",
                              "Privacidade Total: A exibição e processamento ocorrem apenas no seu navegador local.",
                              "Acesso Global: Totalmente localizado e distribuído com baixíssima latência.",
                              "Downloads em Alta Resolução: Baixe papéis de parede limpos em até 8K Ultra HD."
                        ]
                  }
            ]
      },
      "id": {
            "title": "Tentang TheWhiteScreen.org - Alat Layar Cepat & Bersih",
            "metaDescription": "Pelajari tentang TheWhiteScreen.org: utilitas layar penuh cepat dan gratis untuk uji piksel mati, pencahayaan webcam, dan meja gambar.",
            "h1": "Tentang TheWhiteScreen.org",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org diciptakan dengan misi jelas: menyediakan alat layar penuh yang sangat cepat, bersih, dan bebas gangguan di perangkat apa pun tanpa perlu pendaftaran akun.",
                  "Situs kami menggunakan arsitektur statis modern yang menjamin kecepatan kilat dan privasi penuh di semua peramban web modern."
            ],
            "sections": [
                  {
                        "heading": "Tujuan & Manfaat",
                        "content": "Baik saat Anda memeriksa piksel mati pada layar laptop baru, membutuhkan cahaya depan untuk panggilan video Zoom, membersihkan debu layar, atau menjiplak gambar, layar satu warna penuh adalah alat praktis yang sangat dibutuhkan."
                  },
                  {
                        "heading": "Prinsip Utama Kami",
                        "bullets": [
                              "100% Gratis & Tanpa Daftar: Tidak ada biaya tersembunyi atau syarat masuk.",
                              "Privasi Penuh: Semua tampilan berjalan di dalam peramban lokal Anda tanpa melacak data.",
                              "Aksesibilitas Global: Diterjemahkan secara lengkap dalam berbagai bahasa dunia.",
                              "Unduhan Resolusi Tinggi: Unduh wallpaper polos berkualitas tinggi hingga resolusi 8K."
                        ]
                  }
            ]
      }
}
  },
  {
    id: 'contact',
    content: {
      "en": {
            "title": "Contact Us - TheWhiteScreen.org Support & Inquiries",
            "metaDescription": "Contact the TheWhiteScreen.org engineering team for feature requests, technical feedback, or support inquiries.",
            "h1": "Contact Support",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "We are dedicated to maintaining TheWhiteScreen.org as the highest quality display utility on the web. If you encounter bugs, have suggestions for new tools, or wish to report issues, our team is ready to help."
            ],
            "sections": [
                  {
                        "heading": "Direct Communication Channels",
                        "content": "For technical feedback, bug reports, or partnership opportunities, reach out directly via email at support@thewhitescreen.org. We aim to respond to all inquiries within 24 to 48 business hours."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24-48 hours",
                  "nameLabel": "Your Full Name",
                  "emailLabel": "Email Address",
                  "messageLabel": "Message or Feedback",
                  "submitBtn": "Send Message"
            }
      },
      "es": {
            "title": "Contacto - Soporte de TheWhiteScreen.org",
            "metaDescription": "¿Tienes dudas o sugerencias? Ponte en contacto con el equipo de TheWhiteScreen.org.",
            "h1": "Contacto y Soporte",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Nos dedicamos a mantener TheWhiteScreen.org con la mejor calidad y rapidez. Si encuentras algún error o deseas sugerir una nueva función, estamos a tu disposición."
            ],
            "sections": [
                  {
                        "heading": "Canal Directo de Asistencia",
                        "content": "Puedes escribirnos en cualquier momento a support@thewhitescreen.org. Respondemos a todas las consultas en un plazo de 24 a 48 horas laborales."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24-48 horas",
                  "nameLabel": "Nombre Completo",
                  "emailLabel": "Correo Electrónico",
                  "messageLabel": "Mensaje o Sugerencia",
                  "submitBtn": "Enviar Mensaje"
            }
      },
      "fr": {
            "title": "Contactez-Nous - Support TheWhiteScreen.org",
            "metaDescription": "Contactez l'équipe de TheWhiteScreen.org pour toute question technique ou suggestion.",
            "h1": "Contact et Support",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Nous nous efforçons de maintenir TheWhiteScreen.org au plus haut niveau de qualité et de rapidité. N'hésitez pas à nous faire part de vos retours ou suggestions."
            ],
            "sections": [
                  {
                        "heading": "Assistance Directe",
                        "content": "Écrivez-nous directement par e-mail à support@thewhitescreen.org. Notre équipe vous répond sous 24 à 48 heures ouvrées."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24 à 48 heures",
                  "nameLabel": "Nom Complet",
                  "emailLabel": "Adresse E-mail",
                  "messageLabel": "Message ou Remarque",
                  "submitBtn": "Envoyer le Message"
            }
      },
      "de": {
            "title": "Kontakt - TheWhiteScreen.org Support",
            "metaDescription": "Kontaktieren Sie das Team von TheWhiteScreen.org für Feedback, Anfragen und technischen Support.",
            "h1": "Kontakt und Support",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Wir legen großen Wert auf höchste Qualität und Zuverlässigkeit. Bei Fragen, Fehlermeldungen oder Funktionsvorschlägen stehen wir Ihnen gerne zur Verfügung."
            ],
            "sections": [
                  {
                        "heading": "Direkter Support-Kanal",
                        "content": "Schreiben Sie uns direkt per E-Mail an support@thewhitescreen.org. Wir beantworten alle Anfragen in der Regel innerhalb von 24 bis 48 Stunden."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24-48 Stunden",
                  "nameLabel": "Ihr Vollständiger Name",
                  "emailLabel": "E-Mail-Adresse",
                  "messageLabel": "Ihre Nachricht",
                  "submitBtn": "Nachricht Senden"
            }
      },
      "pt": {
            "title": "Fale Conosco - Suporte TheWhiteScreen.org",
            "metaDescription": "Entre em contato com a equipe do TheWhiteScreen.org para dúvidas, sugestões e suporte técnico.",
            "h1": "Fale Conosco e Suporte",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Nosso compromisso é manter o TheWhiteScreen.org como a ferramenta de tela mais rápida e confiável da web. Se tiver dúvidas ou sugestões, fale conosco."
            ],
            "sections": [
                  {
                        "heading": "Canais de Comunicação",
                        "content": "Envie um e-mail diretamente para support@thewhitescreen.org. Respondemos a todas as mensagens em até 24 a 48 horas úteis."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24-48 horas úteis",
                  "nameLabel": "Seu Nome Completo",
                  "emailLabel": "Endereço de E-mail",
                  "messageLabel": "Mensagem ou Sugestão",
                  "submitBtn": "Enviar Mensagem"
            }
      },
      "id": {
            "title": "Hubungi Kami - Dukungan TheWhiteScreen.org",
            "metaDescription": "Hubungi tim TheWhiteScreen.org untuk saran fitur, pertanyaan teknis, atau bantuan layanan.",
            "h1": "Hubungi Dukungan",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Kami berkomitmen menghadirkan utilitas layar dengan kualitas terbaik dan tercepat di web. Jika Anda menemukan kendala atau memiliki saran, tim kami siap membantu."
            ],
            "sections": [
                  {
                        "heading": "Saluran Komunikasi Langsung",
                        "content": "Silakan hubungi kami melalui email di support@thewhitescreen.org. Kami merespons pesan dalam 24 hingga 48 jam kerja."
                  }
            ],
            "contactInfo": {
                  "email": "support@thewhitescreen.org",
                  "responseTime": "24-48 jam",
                  "nameLabel": "Nama Lengkap Anda",
                  "emailLabel": "Alamat Email",
                  "messageLabel": "Pesan atau Masukan",
                  "submitBtn": "Kirim Pesan"
            }
      }
}
  },
  {
    id: 'privacy-policy',
    content: {
      "en": {
            "title": "Privacy Policy - TheWhiteScreen.org Data Protection",
            "metaDescription": "Read the TheWhiteScreen.org privacy policy: zero tracking, no personal data harvesting, and full local browser privacy.",
            "h1": "Privacy Policy",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "At TheWhiteScreen.org, accessible at https://www.thewhitescreen.org, your digital privacy is our foremost priority. This Privacy Policy document describes how information is handled when using our website and services.",
                  "We believe in data minimization. TheWhiteScreen.org does not require user accounts, passwords, or personal data collection to access full screen color and utility features."
            ],
            "sections": [
                  {
                        "heading": "1. Information We Do Not Collect",
                        "bullets": [
                              "No names, email addresses, phone numbers, or physical addresses are collected when browsing.",
                              "No user account creation or credential storage is required or maintained.",
                              "All canvas downloads and screen color rendering execute purely in your local browser runtime."
                        ]
                  },
                  {
                        "heading": "2. Cookies and Local Storage",
                        "content": "We use standard browser localStorage solely to persist your local user preferences (such as dark mode toggle and tool slider settings). This data remains on your physical device and is never synchronized to external servers."
                  },
                  {
                        "heading": "3. Third-Party Services and Analytics",
                        "content": "We may utilize privacy-respecting analytics and content delivery networks (Cloudflare) to maintain server availability, combat DDoS attacks, and measure aggregate visitor counts without tracking individual identities or cross-site behavior."
                  }
            ]
      },
      "es": {
            "title": "Política de Privacidad - TheWhiteScreen.org",
            "metaDescription": "Conoce nuestra política de privacidad: cero rastreo invasivo, sin recolección de datos personales y ejecución 100% local en tu navegador.",
            "h1": "Política de Privacidad",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "En TheWhiteScreen.org, accesible en https://www.thewhitescreen.org, tu privacidad es una prioridad absoluta. Esta política explica de forma clara cómo tratamos tu información.",
                  "Defendemos el principio de minimización de datos: no requerimos cuentas de usuario, contraseñas ni recolección de información personal para utilizar nuestras herramientas."
            ],
            "sections": [
                  {
                        "heading": "1. Información que No Recopilamos",
                        "bullets": [
                              "No solicitamos ni almacenamos nombres, correos ni datos sensibles para el uso ordinario.",
                              "No exigimos la creación de cuentas de usuario ni el registro de credenciales.",
                              "Todo el renderizado de color y la generación de fondos se ejecutan de manera local en tu navegador."
                        ]
                  },
                  {
                        "heading": "2. Uso de Almacenamiento Local",
                        "content": "Utilizamos el almacenamiento local del navegador únicamente para recordar preferencias del usuario, como el tema visual o los últimos valores de brillo configurados."
                  },
                  {
                        "heading": "3. Servicios de Terceros",
                        "content": "Podemos emplear redes de distribución de contenido (como Cloudflare) para proteger la plataforma contra ataques y servir los recursos con la menor latencia posible."
                  }
            ]
      },
      "fr": {
            "title": "Politique de Confidentialité - TheWhiteScreen.org",
            "metaDescription": "Consultez notre politique de confidentialité : aucun suivi invasif, zéro collecte de données personnelles et respect absolu de la vie privée.",
            "h1": "Politique de Confidentialité",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Sur TheWhiteScreen.org, accessible à l'adresse https://www.thewhitescreen.org, la protection de votre vie privée est une priorité fondamentale.",
                  "Nous appliquons le principe de minimisation des données : aucun compte utilisateur ni donnée personnelle n'est requis pour profiter de nos fonctionnalités d'écran complet."
            ],
            "sections": [
                  {
                        "heading": "1. Données que Nous Ne Collectons Pas",
                        "bullets": [
                              "Aucun nom, adresse e-mail ou coordonnée personnelle n'est exigé pour naviguer.",
                              "Aucun profil d'utilisateur ni mot de passe n'est enregistré sur nos serveurs.",
                              "L'affichage des couleurs et la création de fonds d'écran s'exécutent entièrement en local sur votre appareil."
                        ]
                  },
                  {
                        "heading": "2. Cookies et Stockage Local",
                        "content": "Nous utilisons le stockage local de votre navigateur pour conserver vos préférences d'affichage (mode sombre, curseurs de réglage), sans jamais les transmettre à des tiers."
                  },
                  {
                        "heading": "3. Réseaux de Diffusion et Sécurité",
                        "content": "Nous utilisons des services de distribution sécurisés (Cloudflare) afin d'assurer la haute disponibilité du site et de nous prémunir contre les attaques informatiques."
                  }
            ]
      },
      "de": {
            "title": "Datenschutzerklärung - TheWhiteScreen.org",
            "metaDescription": "Datenschutz bei TheWhiteScreen.org: Keine Nachverfolgung, keine Speicherung persönlicher Daten und rein lokale Ausführung im Browser.",
            "h1": "Datenschutzerklärung",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Auf TheWhiteScreen.org, erreichbar unter https://www.thewhitescreen.org, genießt der Schutz Ihrer persönlichen Daten höchste Priorität.",
                  "Wir verfolgen den Grundsatz der Datensparsamkeit: Die Nutzung aller Werkzeuge erfordert keinerlei Benutzerkonto, Registrierung oder Angabe persönlicher Daten."
            ],
            "sections": [
                  {
                        "heading": "1. Daten, die wir nicht erheben",
                        "bullets": [
                              "Es werden beim Besuch keine Namen, E-Mail-Adressen oder Standortdaten erhoben.",
                              "Es existieren keine Benutzerkonten oder Passwörter auf unseren Servern.",
                              "Alle Berechnungen, Farbwechsel und Bild-Downloads erfolgen direkt im Browser auf Ihrem Endgerät."
                        ]
                  },
                  {
                        "heading": "2. Lokaler Speicher (localStorage)",
                        "content": "Wir nutzen den lokalen Speicher Ihres Browsers ausschließlich zur Speicherung von Nutzerthemen (z. B. Dark Mode) und individuellen Schieberegler-Einstellungen."
                  },
                  {
                        "heading": "3. Infrastruktur und Sicherheit",
                        "content": "Zur Auslieferung und Absicherung der Website werden Edge-Netzwerke eingesetzt, um Ausfallzeiten zu minimieren und Schutz vor DDoS-Angriffen zu gewährleisten."
                  }
            ]
      },
      "pt": {
            "title": "Política de Privacidade - TheWhiteScreen.org",
            "metaDescription": "Política de privacidade do TheWhiteScreen.org: sem rastreamento abusivo, sem coleta de dados privados e execução 100% no navegador.",
            "h1": "Política de Privacidade",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "No TheWhiteScreen.org, acessível pelo endereço https://www.thewhitescreen.org, a proteção da sua privacidade digital é prioridade absoluta.",
                  "Adotamos o princípio de minimização de dados: o acesso às ferramentas de tela e testes não requer cadastro, login ou fornecimento de informações pessoais."
            ],
            "sections": [
                  {
                        "heading": "1. Informações que Não Coletamos",
                        "bullets": [
                              "Não coletamos nomes, números de telefone ou dados bancários ao navegar.",
                              "Não existem contas de usuário nem senhas armazenadas em nossos servidores.",
                              "A exibição de cores e a geração de papéis de parede ocorrem no próprio navegador do seu dispositivo."
                        ]
                  },
                  {
                        "heading": "2. Armazenamento Local",
                        "content": "Utilizamos o armazenamento local do navegador apenas para registrar preferências simples, como tema escuro e posições de controles deslizantes."
                  },
                  {
                        "heading": "3. Redes de Entrega e Segurança",
                        "content": "Podemos empregar redes de distribuição de conteúdo globais para assegurar carregamento ultrarrápido e proteção contra tráfego malicioso."
                  }
            ]
      },
      "id": {
            "title": "Kebijakan Privasi - TheWhiteScreen.org",
            "metaDescription": "Kebijakan privasi TheWhiteScreen.org: tanpa pelacakan data pribadi, privasi penuh, dan pemrosesan lokal dalam peramban web Anda.",
            "h1": "Kebijakan Privasi",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Di TheWhiteScreen.org (https://www.thewhitescreen.org), privasi pengunjung adalah prioritas tertinggi kami.",
                  "Kami menerapkan prinsip minimisasi data: seluruh utilitas layar dapat digunakan tanpa membuat akun pengguna, kata sandi, atau memberikan informasi pribadi apa pun."
            ],
            "sections": [
                  {
                        "heading": "1. Data yang Tidak Kami Kumpulkan",
                        "bullets": [
                              "Tidak ada nama, alamat surel, atau data kontak yang dipungut saat menjelajahi situs.",
                              "Tidak memerlukan pembuatan profil pengguna maupun pendaftaran kata sandi.",
                              "Seluruh pewarnaan layar dan pengunduhan wallpaper berjalan langsung di dalam peramban lokal Anda."
                        ]
                  },
                  {
                        "heading": "2. Penyimpanan Lokal Peramban",
                        "content": "Kami hanya memakai localStorage peramban untuk menyimpan preferensi tampilan seperti mode gelap dan setelan penggeser kecerahan."
                  },
                  {
                        "heading": "3. Jaringan Pengiriman & Keamanan",
                        "content": "Kami menggunakan jaringan CDN global tepercaya untuk menjaga keandalan situs, mencegah serangan siber, dan memastikan pemuatan secepat kilat."
                  }
            ]
      }
}
  },
  {
    id: 'terms-and-conditions',
    content: {
      "en": {
            "title": "Terms and Conditions - TheWhiteScreen.org Usage Terms",
            "metaDescription": "Review the terms and conditions for using TheWhiteScreen.org, including intellectual property, permissible usage, and disclaimers.",
            "h1": "Terms and Conditions",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Welcome to TheWhiteScreen.org. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.",
                  "If you disagree with any portion of these terms, please discontinue use of the website immediately."
            ],
            "sections": [
                  {
                        "heading": "1. Permitted Use",
                        "bullets": [
                              "You may use TheWhiteScreen.org for personal, educational, creative, and professional display testing purposes free of charge.",
                              "You may download generated color wallpapers for personal desktop and mobile backgrounds.",
                              "You may not attempt to disrupt or impair website infrastructure through automated scraping or denial-of-service attacks."
                        ]
                  },
                  {
                        "heading": "2. Disclaimer of Warranties",
                        "content": "The services and tools provided on TheWhiteScreen.org are offered 'as is' without warranties of any kind. While our tools assist in identifying dead pixels, backlight bleed, and display defects, we do not guarantee repair of hardware defects or panel hardware longevity."
                  },
                  {
                        "heading": "3. Limitation of Liability",
                        "content": "In no event shall TheWhiteScreen.org or its operators be liable for any damages arising out of the use or inability to use the tools and content provided on this website."
                  }
            ]
      },
      "es": {
            "title": "Términos y Condiciones - TheWhiteScreen.org",
            "metaDescription": "Consulta los términos y condiciones de uso de TheWhiteScreen.org, descargos de responsabilidad y condiciones de servicio.",
            "h1": "Términos y Condiciones",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Bienvenido a TheWhiteScreen.org. Al acceder y utilizar este sitio web, aceptas cumplir con los presentes términos y condiciones de uso.",
                  "Si no estás de acuerdo con alguna cláusula, te recomendamos suspender el uso del servicio."
            ],
            "sections": [
                  {
                        "heading": "1. Uso Permitido",
                        "bullets": [
                              "Puedes usar las herramientas con fines personales, educativos, artísticos o profesionales de forma gratuita.",
                              "Puedes descargar los fondos generados para uso privado en tus pantallas.",
                              "Está prohibido realizar ataques automatizados o intentar vulnerar la infraestructura del sitio."
                        ]
                  },
                  {
                        "heading": "2. Exención de Garantías",
                        "content": "Las herramientas se suministran 'tal cual' sin garantías expresas o implícitas. Aunque facilitan la detección de anomalías, no garantizamos la reparación de fallos físicos de hardware."
                  },
                  {
                        "heading": "3. Límite de Responsabilidad",
                        "content": "TheWhiteScreen.org no será responsable por ningún daño derivado del uso o imposibilidad de uso del sitio web."
                  }
            ]
      },
      "fr": {
            "title": "Conditions Générales d'Utilisation - TheWhiteScreen.org",
            "metaDescription": "Conditions générales d'utilisation de TheWhiteScreen.org : règles d'usage, propriété intellectuelle et limitations de responsabilité.",
            "h1": "Conditions Générales d'Utilisation",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Bienvenue sur TheWhiteScreen.org. En accédant à ce site, vous acceptez d'être lié par les présentes conditions générales d'utilisation.",
                  "Si vous n'acceptez pas ces conditions, veuillez cesser immédiatement d'utiliser ce service."
            ],
            "sections": [
                  {
                        "heading": "1. Utilisation Autorisée",
                        "bullets": [
                              "L'utilisation du site est gratuite à des fins personnelles, artistiques, éducatives ou professionnelles.",
                              "Le téléchargement de fonds d'écran générés est autorisé pour un usage privé.",
                              "Il est interdit d'endommager ou de surcharger l'infrastructure par des requêtes abusives ou malveillantes."
                        ]
                  },
                  {
                        "heading": "2. Exclusion de Garantie",
                        "content": "Les outils sont fournis en l'état sans garantie quant à la réparation mécanique de défauts matériels d'affichage."
                  },
                  {
                        "heading": "3. Responsabilité Limitée",
                        "content": "TheWhiteScreen.org ne saurait être tenu responsable d'éventuels dommages résultant de l'utilisation de nos outils."
                  }
            ]
      },
      "de": {
            "title": "Allgemeine Geschäftsbedingungen - TheWhiteScreen.org",
            "metaDescription": "Nutzungsbedingungen von TheWhiteScreen.org: Erlaubte Nutzung, Haftungsausschluss und Urheberrechte.",
            "h1": "Nutzungsbedingungen",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Willkommen auf TheWhiteScreen.org. Mit dem Zugriff auf diese Website erklären Sie sich mit den nachfolgenden Nutzungsbedingungen einverstanden.",
                  "Sollten Sie mit diesen Bestimmungen nicht einverstanden sein, sehen Sie bitte von einer Nutzung der Website ab."
            ],
            "sections": [
                  {
                        "heading": "1. Zulässige Nutzung",
                        "bullets": [
                              "Die Nutzung der Werkzeuge ist für private, kreative und geschäftliche Displaytests kostenfrei gestattet.",
                              "Erstellte Bildschirmhintergründe dürfen für den persönlichen Gebrauch heruntergeladen werden.",
                              "Jegliche automatisierte Überlastung oder Beeinträchtigung der Serverinfrastruktur ist untersagt."
                        ]
                  },
                  {
                        "heading": "2. Haftungsausschluss",
                        "content": "Die Dienste werden ohne Mängelgewähr bereitgestellt. Wir übernehmen keine Garantie für die Beseitigung physischer Hardware- oder Pixelschäden."
                  },
                  {
                        "heading": "3. Haftungsbeschränkung",
                        "content": "TheWhiteScreen.org haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung der Website entstehen."
                  }
            ]
      },
      "pt": {
            "title": "Termos e Condições - TheWhiteScreen.org",
            "metaDescription": "Consulte os termos e condições de uso do TheWhiteScreen.org, direitos autorais e isenções de responsabilidade.",
            "h1": "Termos e Condições",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Bem-vindo ao TheWhiteScreen.org. Ao utilizar este site, você concorda em cumprir e respeitar os seguintes termos e condições.",
                  "Caso discorde de qualquer disposição, solicitamos que interrompa a navegação."
            ],
            "sections": [
                  {
                        "heading": "1. Uso Permitido",
                        "bullets": [
                              "Você pode utilizar o site gratuitamente para fins pessoais, educativos ou profissionais de teste de display.",
                              "É permitido fazer o download de papéis de parede gerados para uso particular em seus dispositivos.",
                              "É expressamente proibido sobrecarregar a infraestrutura por meio de ataques ou bots maliciosos."
                        ]
                  },
                  {
                        "heading": "2. Isenção de Garantias",
                        "content": "Os serviços são fornecidos 'no estado em que se encontram', sem garantias implícitas sobre reparação mecânica de telas defeituosas."
                  },
                  {
                        "heading": "3. Limitação de Responsabilidade",
                        "content": "O TheWhiteScreen.org não se responsabiliza por quaisquer prejuízos decorrentes da utilização das informações e ferramentas do site."
                  }
            ]
      },
      "id": {
            "title": "Syarat dan Ketentuan - TheWhiteScreen.org",
            "metaDescription": "Syarat dan ketentuan pemakaian TheWhiteScreen.org, batasan tanggung jawab, dan aturan penggunaan layanan.",
            "h1": "Syarat dan Ketentuan",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Selamat datang di TheWhiteScreen.org. Dengan mengakses situs web ini, Anda setuju untuk terikat oleh syarat dan ketentuan berikut.",
                  "Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak melanjutkan penggunaan situs."
            ],
            "sections": [
                  {
                        "heading": "1. Penggunaan yang Diizinkan",
                        "bullets": [
                              "Anda dapat memanfaatkan utilitas layar secara gratis untuk kebutuhan pribadi, edukasi, maupun profesional.",
                              "Anda diperbolehkan mengunduh wallpaper warna polos untuk latar belakang perangkat Anda.",
                              "Dilarang keras melakukan tindakan yang merusak atau membebani server secara ilegal."
                        ]
                  },
                  {
                        "heading": "2. Penolakan Jaminan",
                        "content": "Alat disediakan 'sebagaimana adanya'. Kami tidak menjamin bahwa alat ini dapat memperbaiki kerusakan perangkat keras atau panel fisik secara permanen."
                  },
                  {
                        "heading": "3. Batasan Tanggung Jawab",
                        "content": "TheWhiteScreen.org tidak bertanggung jawab atas segala kerugian yang timbul akibat pemakaian alat di situs ini."
                  }
            ]
      }
}
  },
  {
    id: 'cookie-policy',
    content: {
      "en": {
            "title": "Cookie Policy - TheWhiteScreen.org Browser Storage",
            "metaDescription": "Learn about cookie usage and local storage policies at TheWhiteScreen.org: minimal, functional, and non-intrusive.",
            "h1": "Cookie Policy",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "This Cookie Policy explains how TheWhiteScreen.org uses browser cookies and comparable client-side storage technologies.",
                  "We are committed to transparent, privacy-respecting standards without intrusive behavioral advertising cookies."
            ],
            "sections": [
                  {
                        "heading": "1. What Are Cookies and Local Storage?",
                        "content": "Cookies and localStorage are small text files stored locally within your web browser that allow sites to remember your interface preferences between visits."
                  },
                  {
                        "heading": "2. How We Use Them",
                        "bullets": [
                              "Theme Preferences: Remembering whether you chose light or dark UI mode.",
                              "Tool Settings: Retaining custom brightness, warmth, or cycle intervals during your session.",
                              "Security: Preventing abusive requests via edge CDN security tokens."
                        ]
                  },
                  {
                        "heading": "3. Managing Your Preferences",
                        "content": "You can manage or clear stored cookies and localStorage data at any time through your browser's security and privacy settings."
                  }
            ]
      },
      "es": {
            "title": "Política de Cookies - TheWhiteScreen.org",
            "metaDescription": "Descubre cómo utilizamos el almacenamiento local y las cookies en TheWhiteScreen.org: únicamente funcional y sin rastreo publicitario.",
            "h1": "Política de Cookies",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Esta política describe cómo TheWhiteScreen.org utiliza cookies y tecnologías de almacenamiento local en tu navegador.",
                  "Nuestro compromiso es garantizar una experiencia libre de publicidad invasiva y con respeto pleno a tu intimidad."
            ],
            "sections": [
                  {
                        "heading": "1. ¿Qué son las cookies y el almacenamiento local?",
                        "content": "Son pequeños ficheros guardados en tu navegador que permiten recordar ajustes de la interfaz entre sesiones de uso."
                  },
                  {
                        "heading": "2. Finalidad de su Uso",
                        "bullets": [
                              "Preferencia de Tema: Guardar tu elección de modo claro u oscuro.",
                              "Ajustes de Herramientas: Mantener niveles de brillo o temperatura de color durante tu navegación.",
                              "Seguridad de Red: Validar el tráfico legítimo contra ataques informáticos."
                        ]
                  },
                  {
                        "heading": "3. Cómo Administrarlas",
                        "content": "Puedes eliminar o desactivar las cookies y los datos locales cuando desees desde el menú de opciones de tu navegador."
                  }
            ]
      },
      "fr": {
            "title": "Politique de Cookies - TheWhiteScreen.org",
            "metaDescription": "Informations sur l'utilisation des cookies et du stockage local sur TheWhiteScreen.org : strictement fonctionnel et respectueux.",
            "h1": "Politique de Cookies",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Cette politique explique l'utilisation des cookies et du stockage local par TheWhiteScreen.org.",
                  "Nous refusons les traceurs publicitaires intrusifs pour préserver une navigation fluide et respectueuse."
            ],
            "sections": [
                  {
                        "heading": "1. Définition des Cookies et du Stockage Local",
                        "content": "Il s'agit de petites données enregistrées sur votre appareil pour mémoriser vos paramètres d'un chargement à l'autre."
                  },
                  {
                        "heading": "2. Utilisation sur Notre Site",
                        "bullets": [
                              "Préférences d'affichage : Mémorisation du thème sombre ou clair.",
                              "Paramètres des outils : Sauvegarde locale de vos réglages de luminosité et de couleur.",
                              "Sécurité : Protection contre le trafic malveillant via notre réseau de diffusion."
                        ]
                  },
                  {
                        "heading": "3. Gestion de Vos Données",
                        "content": "Vous pouvez à tout moment effacer ces données dans les paramètres de confidentialité de votre navigateur internet."
                  }
            ]
      },
      "de": {
            "title": "Cookie-Richtlinie - TheWhiteScreen.org",
            "metaDescription": "Erfahren Sie mehr über Cookies und lokalen Speicher bei TheWhiteScreen.org: rein technisch notwendig und datenschutzfreundlich.",
            "h1": "Cookie-Richtlinie",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Diese Richtlinie beschreibt den Umgang mit Cookies und lokalem Speicher auf TheWhiteScreen.org.",
                  "Wir verzichten auf aufdringliche Tracking-Cookies von Werbenetzwerken."
            ],
            "sections": [
                  {
                        "heading": "1. Was sind Cookies und lokaler Speicher?",
                        "content": "Es handelt sich um kleine Datenmengen, die im Browser abgelegt werden, um Einstellungen für spätere Besuche zu sichern."
                  },
                  {
                        "heading": "2. Einsatzbereiche",
                        "bullets": [
                              "Oberflächeneinstellungen: Speichern des gewählten Designs (Hell- oder Dunkelmodus).",
                              "Werkzeugeinstellungen: Merken von Schiebereglern für Helligkeit und Lichttemperatur.",
                              "Schutzmaßnahmen: Abwehr automatisierter Angriffe durch CDN-Sicherheitsfilter."
                        ]
                  },
                  {
                        "heading": "3. Löschen und Deaktivieren",
                        "content": "In den Datenschutzeinstellungen Ihres Browsers können Sie gespeicherte Daten jederzeit einsehen und vollständig löschen."
                  }
            ]
      },
      "pt": {
            "title": "Política de Cookies - TheWhiteScreen.org",
            "metaDescription": "Saiba como o TheWhiteScreen.org utiliza cookies e armazenamento local: foco estritamente funcional e sem anúncios invasivos.",
            "h1": "Política de Cookies",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Esta política detalha como o TheWhiteScreen.org emprega cookies e o armazenamento local do navegador.",
                  "Valorizamos a transparência e não fazemos uso de cookies invasivos para rastreamento publicitário."
            ],
            "sections": [
                  {
                        "heading": "1. O que são Cookies e Armazenamento Local?",
                        "content": "São recursos do navegador que guardam pequenos arquivos para manter suas preferências de uso salvas."
                  },
                  {
                        "heading": "2. Para que Servem",
                        "bullets": [
                              "Aparência: Lembrar a escolha entre o tema claro e o escuro.",
                              "Controles: Salvar temporariamente valores de brilho e matiz das ferramentas de luz.",
                              "Segurança: Assegurar a proteção de infraestrutura contra acessos automatizados."
                        ]
                  },
                  {
                        "heading": "3. Controle pelo Usuário",
                        "content": "Você tem total liberdade para limpar esses dados nas configurações de privacidade do seu navegador quando quiser."
                  }
            ]
      },
      "id": {
            "title": "Kebijakan Cookie - TheWhiteScreen.org",
            "metaDescription": "Penjelasan tentang penggunaan cookie dan penyimpanan lokal di TheWhiteScreen.org: murni fungsional dan tanpa pelacakan iklan.",
            "h1": "Kebijakan Cookie",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "Kebijakan ini memaparkan cara TheWhiteScreen.org memanfaatkan cookie dan penyimpanan lokal peramban.",
                  "Kami berkomitmen tidak menggunakan cookie pelacak iklan pihak ketiga yang mengganggu privasi Anda."
            ],
            "sections": [
                  {
                        "heading": "1. Apa itu Cookie dan Penyimpanan Lokal?",
                        "content": "Yaitu berkas data ringkas yang disimpan pada peramban Anda untuk mencatat preferensi tampilan agar tetap tersimpan."
                  },
                  {
                        "heading": "2. Bagaimana Kami Menggunakannya",
                        "bullets": [
                              "Preferensi Tema: Mengingat pilihan tampilan mode gelap atau terang.",
                              "Pengaturan Alat: Menjaga setelan penggeser kecerahan selama sesi berlangsung.",
                              "Keamanan Sistem: Menjamin keamanan jaringan dari serangan bot."
                        ]
                  },
                  {
                        "heading": "3. Pengelolaan Cookie",
                        "content": "Anda dapat menghapus data cookie kapan saja melalui menu setelan privasi pada peramban web yang Anda gunakan."
                  }
            ]
      }
}
  },
  {
    id: 'license',
    content: {
      "en": {
            "title": "License Information - TheWhiteScreen.org Open Usage",
            "metaDescription": "Understand licensing terms for TheWhiteScreen.org tools, software components, and generated high-resolution color media assets.",
            "h1": "License & Usage Rights",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org is committed to providing accessible screen utilities for developers, photographers, creators, and general consumers across the globe.",
                  "This document details licensing considerations for our client-side software components, website design, and downloaded wallpaper assets."
            ],
            "sections": [
                  {
                        "heading": "1. Generated Wallpaper Assets",
                        "content": "All single-color and gradient wallpapers generated via our canvas download tool are released into the public domain (CC0 1.0 Universal). You may freely download, modify, distribute, and utilize them for personal, commercial, or artistic projects without attribution."
                  },
                  {
                        "heading": "2. Website Code and Architecture",
                        "content": "The custom design, branding, articles, guides, and source code of TheWhiteScreen.org are protected by copyright laws. Reproduction of our technical articles or branding without express authorization is prohibited."
                  }
            ]
      },
      "es": {
            "title": "Licencia de Uso - TheWhiteScreen.org",
            "metaDescription": "Información sobre licencias y derechos de uso para fondos de pantalla y contenidos de TheWhiteScreen.org.",
            "h1": "Licencia y Derechos de Uso",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org ofrece utilidades accesibles para fotógrafos, diseñadores, desarrolladores y usuarios en todo el mundo.",
                  "Este documento explica los derechos aplicables a los recursos generados y al código de nuestro sitio web."
            ],
            "sections": [
                  {
                        "heading": "1. Fondos de Pantalla Generados",
                        "content": "Todos los fondos de color descargados mediante nuestra herramienta se liberan bajo Dominio Público (CC0 1.0). Eres libre de utilizarlos para proyectos personales o comerciales sin necesidad de atribución."
                  },
                  {
                        "heading": "2. Código y Contenido Editorial",
                        "content": "El diseño, guías técnicas, textos y marca de TheWhiteScreen.org están protegidos por derechos de autor. No se permite la reproducción no autorizada de nuestros artículos."
                  }
            ]
      },
      "fr": {
            "title": "Licence d'Utilisation - TheWhiteScreen.org",
            "metaDescription": "Conditions de licence et droits d'utilisation des fonds d'écran et des outils de TheWhiteScreen.org.",
            "h1": "Licence et Droits d'Utilisation",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org met à disposition des outils d'écran gratuits et performants pour les créateurs et utilisateurs du monde entier.",
                  "Retrouvez ici les conditions de licence régissant nos fonds d'écran téléchargeables ainsi que notre contenu."
            ],
            "sections": [
                  {
                        "heading": "1. Fonds d'Écran Générés",
                        "content": "Tous les fonds d'écran monochromes générés par l'outil sont placés sous licence Domaine Public (CC0 1.0). Vous pouvez les employer librement pour vos projets personnels ou commerciaux sans mention requise."
                  },
                  {
                        "heading": "2. Propriété Intellectuelle du Site",
                        "content": "La marque, l'identité visuelle et les guides techniques de TheWhiteScreen.org demeurent protégés par le droit d'auteur."
                  }
            ]
      },
      "de": {
            "title": "Lizenzbestimmungen - TheWhiteScreen.org",
            "metaDescription": "Lizenzbedingungen und Nutzungsrechte für herunterladbare Hintergründe und Inhalte von TheWhiteScreen.org.",
            "h1": "Lizenz und Nutzungsrechte",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org bietet frei zugängliche Bildschirm-Werkzeuge für Fotografen, Entwickler und Anwender weltweit.",
                  "Dieses Dokument regelt die Lizenzbedingungen für erstellte Grafiken und den redaktionellen Inhalt der Seite."
            ],
            "sections": [
                  {
                        "heading": "1. Heruntergeladene Bilddateien",
                        "content": "Alle über unser Werkzeug erzeugten einfarbigen Hintergründe stehen unter der Creative Commons Zero (CC0 1.0) Lizenz und dürfen frei für private wie kommerzielle Zwecke ohne Namensnennung verwendet werden."
                  },
                  {
                        "heading": "2. Redaktionelle Inhalte & Code",
                        "content": "Texte, technische Leitfäden und das Design von TheWhiteScreen.org unterliegen dem Urheberrecht. Eine unbefugte Vervielfältigung ist nicht gestattet."
                  }
            ]
      },
      "pt": {
            "title": "Licença de Uso - TheWhiteScreen.org",
            "metaDescription": "Direitos autorais e termos de licença dos papéis de parede e conteúdos do TheWhiteScreen.org.",
            "h1": "Licença e Direitos de Uso",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "O TheWhiteScreen.org foi desenvolvido para oferecer utilitários de exibição práticos para designers, fotógrafos e internautas em geral.",
                  "Aqui detalhamos a licença dos arquivos baixados e a proteção do nosso conteúdo original."
            ],
            "sections": [
                  {
                        "heading": "1. Papéis de Parede Gerados",
                        "content": "Todos os papéis de parede de cores puras exportados por nossa ferramenta pertencem ao Domínio Público (CC0 1.0), podendo ser usados comercialmente ou pessoalmente sem necessidade de créditos."
                  },
                  {
                        "heading": "2. Marca e Conteúdo Original",
                        "content": "A estrutura do site, tutoriais técnicos e identidade visual estão protegidos pelas leis de propriedade intelectual vigentes."
                  }
            ]
      },
      "id": {
            "title": "Lisensi dan Hak Cipta - TheWhiteScreen.org",
            "metaDescription": "Ketentuan lisensi aset wallpaper dan hak cipta materi di TheWhiteScreen.org.",
            "h1": "Lisensi & Hak Penggunaan",
            "lastUpdated": "2026-10-23",
            "paragraphs": [
                  "TheWhiteScreen.org didedikasikan untuk menyediakan utilitas layar yang mudah diakses bagi fotografer, pengembang, dan pengguna umum.",
                  "Halaman ini memuat pedoman lisensi untuk wallpaper yang diunduh serta konten editorial situs kami."
            ],
            "sections": [
                  {
                        "heading": "1. Aset Wallpaper yang Diunduh",
                        "content": "Seluruh wallpaper warna polos yang dihasilkan melalui alat unduh kami berstatus Domain Publik (CC0 1.0 Universal). Bebas dipakai untuk keperluan pribadi maupun komersial tanpa kewajiban atribusi."
                  },
                  {
                        "heading": "2. Konten Editorial dan Desain Situs",
                        "content": "Panduan teknis, tata letak, dan logo TheWhiteScreen.org dilindungi oleh undang-undang hak cipta dan dilarang untuk diduplikasi tanpa izin."
                  }
            ]
      }
}
  },
];

export function getLegalById(id: string): LegalDefinition | undefined {
  return ALL_LEGALS.find(l => l.id === id);
}
