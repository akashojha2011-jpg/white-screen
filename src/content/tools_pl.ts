import type { LocalizedToolContent } from './tools';

export const TOOLS_PL: Record<string, LocalizedToolContent & { name: string }> = {
  "dead-pixel-test": {
    "name": "Test Martwych Pikseli",
    "title": "Test Martwych Pikseli – Sprawdź Monitor i Smartfon Online",
    "metaDescription": "Sprawdź monitor lub telefon pod kątem martwych i zaciętych pikseli w trybie pełnoekranowym. Darmowe narzędzie z cyklem RGB dla matryc LCD i OLED.",
    "h1": "Test Martwych Pikseli (Pełny Ekran)",
    "intro": "Zlokalizuj uszkodzone, zacięte lub martwe subpiksele na monitorze komputera, laptopie, tablecie i smartfonie. Narzędzie wyświetla jednolite plansze testowe w kolorach: czerwonym, zielonym, niebieskim, białym i czarnym.",
    "featuresTitle": "Jak Działa Test Martwych Pikseli",
    "features": [
      {
        "title": "Wykrywanie Martwych Pikseli",
        "desc": "Martwe piksele pozostają trwale wygaszone, widoczne jako małe czarne punkty na jasnym tle."
      },
      {
        "title": "Izolacja Zaciętych Subpikseli",
        "desc": "Zacięte piksele świecą stale jednym kolorem bazowym. Zmiana barw tła natychmiast je ujawnia."
      },
      {
        "title": "Automatyczny Cykl Barw RGB",
        "desc": "Ustaw interwał na 3, 5 lub 10 sekund, aby bez pośpiechu sprawdzić całą powierzchnię panelu."
      },
      {
        "title": "Działa na Każdym Typie Matrycy",
        "desc": "Kompatybilny z matrycami OLED, AMOLED, IPS, VA i TN w dowolnej rozdzielczości."
      }
    ],
    "instructionsTitle": "Instrukcja Przeprowadzenia Testu",
    "instructions": [
      "Przed rozpoczęciem dokładnie wyczyść ekran ściereczką z mikrofibry, aby nie pomylić kurzu z wadą piksela.",
      "Kliknij przycisk 'Pełny Ekran', aby schować karty i paski systemowe.",
      "Przełączaj kolory klawiszami 1-5 lub włącz automatyczny cykl, uważnie obserwując każdy fragment wyświetlacza."
    ],
    "faqs": [
      {
        "q": "Czym różni się zacięty piksel od martwego?",
        "a": "Martwy piksel jest trwale czarny (brak zasilania), podczas gdy zacięty piksel świeci stale jednym kolorem (czerwonym, zielonym lub niebieskim) i często można go odblokować."
      },
      {
        "q": "Czy szybki cykl kolorów RGB może naprawić zacięty piksel?",
        "a": "Tak, gwałtowne zmiany barw pobudzają tranzystory zaciętego subpiksela, co w wielu przypadkach przywraca jego prawidłowe działanie."
      },
      {
        "q": "Jak odróżnić drobinkę kurzu od uszkodzonego piksela?",
        "a": "Spójrz na ekran pod innym kątem: kurz znajduje się na zewnętrznym szkle i rzuca cień, podczas gdy uszkodzony piksel świeci bezpośrednio w warstwie ciekłokrystalicznej."
      },
      {
        "q": "Ile martwych pikseli kwalifikuje monitor do wymiany gwarancyjnej?",
        "a": "Zależy to od klasy normy ISO producenta; przeważnie od 3 do 5 uszkodzonych subpikseli uprawnia do naprawy gwarancyjnej."
      },
      {
        "q": "Czy test działa na iPhone i iPadzie?",
        "a": "Tak, działa bez instalacji bezpośrednio w przeglądarce Safari i Chrome na systemach iOS oraz Android."
      }
    ]
  },
  "screen-cleaning": {
    "name": "Tryb Czyszczenia Ekranu",
    "title": "Tryb Czyszczenia Ekranu – Czyste Białe Światło dla Monitorów i Laptopów",
    "metaDescription": "Wyświetl równomierny biały ekran o maksymalnej jasności do czyszczenia matrycy z kurzu i smug. Stałe podświetlenie bez wygaszania monitora.",
    "h1": "Tryb Czyszczenia Ekranu (Ekran Zawsze Włączony)",
    "intro": "Bezpiecznie wyczyść matrycę laptopa, monitora stacjonarnego lub smartfona. Jednolite białe światło o 100% jasności natychmiast uwidacznia najdrobniejsze cząsteczki kurzu, odciski palców i smugi.",
    "featuresTitle": "Zalety Trybu Czyszczenia Ekranu",
    "features": [
      {
        "title": "Błyskawiczne Wykrywanie Zabrudzeń",
        "desc": "Rozproszone białe światło sprawia, że plamy niewidoczne na ciemnym tle stają się natychmiast zauważalne."
      },
      {
        "title": "Blokada Wygaszania Ekranu",
        "desc": "Monitor nie zgaśnie ani nie przejdzie w tryb oszczędzania energii w trakcie przecierania."
      },
      {
        "title": "Zero Instalowania Aplikacji",
        "desc": "Bezpieczne narzędzie online działające bezpośrednio w Twojej przeglądarce."
      },
      {
        "title": "Ochrona Powłoki Antyrefleksyjnej",
        "desc": "Umożliwia czyszczenie z minimalnym, równomiernym naciskiem bez ryzyka porysowania matrycy."
      }
    ],
    "instructionsTitle": "Jak Bezpiecznie Wyczyścić Monitor",
    "instructions": [
      "Włącz tryb Pełny Ekran, aby rozświetlić matrycę do samych krawędzi.",
      "Użyj gruszki fotograficznej, aby zdmuchnąć luźne drobiny piasku przed dotknięciem ekranu.",
      "Delikatnie przetrzyj powierzchnię suchą lub lekko zwilżoną wodą destylowaną ściereczką z mikrofibry."
    ],
    "faqs": [
      {
        "q": "Dlaczego warto czyścić monitor przy włączonym białym ekranie?",
        "a": "Ponieważ podświetlenie od tyłu uwidacznia tłuste plamy i smugi, które zlewają się z czernią wyłączonego ekranu."
      },
      {
        "q": "Czy można czyścić włączony ekran?",
        "a": "Tak, przy delikatnym nacisku mikrofibry widzisz na bieżąco usuwany brud bez ryzyka uszkodzenia."
      },
      {
        "q": "Jaki płyn jest w 100% bezpieczny dla ekranu?",
        "a": "Czysta woda destylowana naniesiona na ściereczkę z mikrofibry. Unikaj płynów do szyb z alkoholem lub amoniakiem."
      },
      {
        "q": "Jak usunąć trudne smugi bez zarysowań?",
        "a": "Lekko zwilż róg ściereczki wodą destylowaną, wykonaj delikatne koliste ruchy i natychmiast osusz suchą częścią."
      },
      {
        "q": "Czy ręczniki papierowe niszczą ekran?",
        "a": "Tak, zawierają szorstkie włókna celulozowe, które powodują trwałe mikrorysy na filtrach antyodblaskowych."
      }
    ]
  },
  "zoom-ring-light": {
    "name": "Światło do Zoom Ring Light",
    "title": "Światło do Zoom Ring Light – Rozproszone Oświetlenie Twarzy z Ekranu",
    "metaDescription": "Wykorzystaj monitor jako lampę pierścieniową do wideorozmów na Zoom, Teams i Meet. Regulacja jasności i temperatury barwowej dla idealnego wyglądu.",
    "h1": "Światło do Zoom Ring Light (Wirtualna Lampa do Kamery)",
    "intro": "Popraw jakość obrazu ze swojej kamery internetowej bez kupowania drogich lamp LED. Zamień ekran monitora lub laptopa w wielkie, miękkie źródło światła z regulacją ciepła barwowego.",
    "featuresTitle": "Funkcje Wirtualnego Oświetlenia",
    "features": [
      {
        "title": "Regulacja Temperatury Barwowej",
        "desc": "Płynnie dopasuj odcień od ciepłego (2700K) do chłodnego (6500K) dla naturalnego wyglądu skóry."
      },
      {
        "title": "Wielka Powierzchnia Świecąca",
        "desc": "Duży ekran daje znacznie bardziej miękkie cienie niż mała, punktowa lampa LED."
      },
      {
        "title": "Płynna Kontrola Jasności",
        "desc": "Dostosuj intensywność podświetlenia, aby nie razić oczu podczas długich spotkań."
      },
      {
        "title": "Brak Odblasków w Okularach",
        "desc": "Ciepłe, rozproszone światło minimalizuje ostre refleksy na szkłach korekcyjnych."
      }
    ],
    "instructionsTitle": "Jak Ustawić Oświetlenie do Wideorozmowy",
    "instructions": [
      "Otwórz to narzędzie na monitorze znajdującym się bezpośrednio za Twoją kamerą internetową.",
      "Dostosuj suwak temperatury barwowej tak, aby kolor cery wyglądał świeżo i naturalnie.",
      "Ustaw okno Zoom obok lub włącz tryb pełnego ekranu, aby uzyskać maksymalną jasność."
    ],
    "faqs": [
      {
        "q": "Czy monitor może skutecznie zastąpić lampę ring light?",
        "a": "Tak, dzięki dużej powierzchni matryca komputera generuje niezwykle miękkie, profesjonalne światło studyjne."
      },
      {
        "q": "Jaka temperatura barwowa jest najlepsza dla twarzy?",
        "a": "Zazwyczaj lekko ocieplone światło (około 50-60% suwaka) neutralizuje blady odcień powodowany przez tanią optykę kamer."
      },
      {
        "q": "Czy ekran nie męczy oczu przy długim świeceniu?",
        "a": "Dzięki regulacji jasności możesz dobrać poziom komfortowy dla wzroku, zachowując dobre doświetlenie kamery."
      },
      {
        "q": "Czy narzędzie działa na dwóch monitorach?",
        "a": "Tak, idealnie sprawdza się uruchomione na jednym monitorze, podczas gdy na drugim masz prezentację lub rozmowę."
      },
      {
        "q": "Czy wpływa na czas pracy laptopa na baterii?",
        "a": "Wysoka jasność zużywa więcej energii, dlatego podczas ważnych spotkań zaleca się podłączenie zasilacza."
      }
    ]
  },
  "webcam-light": {
    "name": "Oświetlenie Kamery Internetowej",
    "title": "Oświetlenie Kamery Internetowej – Naturalne Doświetlenie do Rozmów Wideo",
    "metaDescription": "Darmowe oświetlenie z ekranu dla kamer internetowych. Usuń cienie pod oczami i popraw jakość wideo w słabo oświetlonym pokoju.",
    "h1": "Oświetlenie Kamery Internetowej (Doświetlenie Twarzy)",
    "intro": "Tanie kamery internetowe generują ziarnisty i zaszumiony obraz w słabym oświetleniu. Nasze narzędzie wypełnia ekran czystym, jasnym światłem, usuwając szumy z matrycy aparatu.",
    "featuresTitle": "Kluczowe Korzyści dla Twojego Wideo",
    "features": [
      {
        "title": "Redukcja Szumów Matrycy",
        "desc": "Większa ilość światła pozwala kamerze obniżyć ISO, eliminując ziarno i pikselozę."
      },
      {
        "title": "Wygładzenie Cieni pod Oczami",
        "desc": "Frontowe światło o dużej powierzchni zmiękcza rysy twarzy i dodaje blasku w oczach."
      },
      {
        "title": "Natychmiastowe Działanie",
        "desc": "Brak kabli, ładowarek i statywów – włączasz jednym kliknięciem w przeglądarce."
      },
      {
        "title": "Pełna Regulacja Koloru",
        "desc": "Możliwość wyboru dowolnego odcienia bieli dostosowanego do oświetlenia w pokoju."
      }
    ],
    "instructionsTitle": "Wskazówki Dotyczące Optymalnego Ustawienia",
    "instructions": [
      "Ustaw ekran naprzeciwko siebie na wysokości oczu lub lekko powyżej.",
      "Zwiększ jasność suwakiem aż do uzyskania ostrego i wyraźnego obrazu w podglądzie kamery.",
      "Zadbaj, aby za Twoimi plecami nie było mocniejszego źródła światła (np. odsłoniętego okna)."
    ],
    "faqs": [
      {
        "q": "Dlaczego moja kamera ma ziarnisty obraz w pokoju?",
        "a": "W ciemnym otoczeniu mały sensor automatycznie podbija czułość ISO, co wywołuje cyfrowy szum."
      },
      {
        "q": "Czy to narzędzie działa ze wszystkimi komunikatorami?",
        "a": "Tak, doświetla Twoją twarz fizycznie, więc działa z Zoom, Skype, Teams, Discord, Google Meet i OBS."
      },
      {
        "q": "Jak uniknąć odbicia ekranu w okularach?",
        "a": "Ustaw monitor odrobinę wyżej i lekko pochyl go w dół, a suwakiem wybierz nieco cieplejszy ton."
      },
      {
        "q": "Czy mogę używać smartfona jako dodatkowego oświetlenia bocznego?",
        "a": "Tak! Otwórz naszą stronę na telefonie i ustaw go z boku, aby zlikwidować asymetryczne cienie."
      },
      {
        "q": "Czy narzędzie jest bezpłatne do zastosowań komercyjnych?",
        "a": "Tak, w 100% bezpłatne do streamingu, rozmów kwalifikacyjnych i pracy zdalnej."
      }
    ]
  },
  "screen-flicker-test": {
    "name": "Test Migotania Ekranu (PWM)",
    "title": "Test Migotania Ekranu – Sprawdź PWM i Zmęczenie Oczu Online",
    "metaDescription": "Sprawdź, czy Twój monitor lub laptop migocze z powodu modulacji PWM. Darmowy test online dla ochrony wzroku przed bólem głowy i zmęczeniem.",
    "h1": "Test Migotania Ekranu (Wykrywanie PWM)",
    "intro": "Wiele nowoczesnych wyświetlaczy reguluje jasność poprzez szybkie włączanie i wyłączanie podświetlenia (PWM). Choć migotanie bywa niewidoczne gołym okiem, może wywoływać chroniczne zmęczenie oczu i migreny.",
    "featuresTitle": "Dlaczego Warto Sprawdzić Migotanie Ekranu",
    "features": [
      {
        "title": "Identyfikacja PWM",
        "desc": "Pozwala ustalić, czy podświetlenie monitora pracuje w technologii Flicker-Free."
      },
      {
        "title": "Ochrona Przed Bólami Głowy",
        "desc": "Wykrycie migotania pomaga ustawić bezpieczny poziom jasności eliminujący PWM."
      },
      {
        "title": "Test Pióra i Kamery",
        "desc": "Wskazówki krok po kroku, jak potwierdzić modulację aparatem w smartfonie."
      },
      {
        "title": "Zgodność z Normami Ergonomii",
        "desc": "Pomaga stworzyć zdrowe i bezpieczne stanowisko do wielogodzinnej pracy."
      }
    ],
    "instructionsTitle": "Metody Wykrywania Migotania",
    "instructions": [
      "Włącz tryb Pełny Ekran i obniż jasność monitora do około 20-30%.",
      "Skieruj aparat telefonu z ustawionym krótkim czasem naświetlania na ekran – pasy oznaczają PWM.",
      "Machaj ołówkiem lub palcem przed ekranem: rozmyty wachlarz oznacza brak PWM, klatkowanie oznacza migotanie."
    ],
    "faqs": [
      {
        "q": "Co to jest PWM w monitorach?",
        "a": "PWM (Pulse Width Modulation) to metoda regulacji jasności poprzez pulsacyjne wyłączanie diod podświetlenia z wysoką częstotliwością."
      },
      {
        "q": "Jakie objawy powoduje migotanie ekranu?",
        "a": "Pieczenie oczu, suchość spojówek, trudności ze skupieniem wzroku oraz napięciowe bóle głowy."
      },
      {
        "q": "Co oznacza oznaczenie Flicker-Free?",
        "a": "Oznacza, że monitor reguluje jasność poprzez zmianę napięcia stałego (DC Dimming) bez żadnego migotania."
      },
      {
        "q": "Czy zwiększenie jasności do 100% eliminuje migotanie PWM?",
        "a": "W większości paneli tak, przy 100% diody świecą w sposób ciągły bez pulsowania."
      },
      {
        "q": "Czy okulary z antyrefleksem chronią przed PWM?",
        "a": "Nie, antyrefleks eliminuje odblaski światła, ale nie zatrzymuje fizycznego pulsowania jasności matrycy."
      }
    ]
  },
  "backlight-bleed-test": {
    "name": "Test Ulotu Podświetlenia",
    "title": "Test Ulotu Podświetlenia (Backlight Bleed) – Sprawdź Monitor IPS i VA",
    "metaDescription": "Przetestuj monitor pod kątem wycieków światła i ulotu podświetlenia w ciemnym pokoju. Odróżnij backlight bleed od zjawiska IPS glow.",
    "h1": "Test Ulotu Podświetlenia (Ciemny Ekran)",
    "intro": "Wyciek podświetlenia (Backlight Bleeding) to wada montażowa krawędzi matrycy ciekłokrystalicznej, powodująca niepożądane żółte lub białe poświaty przy krawędziach ekranu w ciemnych scenach.",
    "featuresTitle": "Diagnostyka Podświetlenia Matrycy",
    "features": [
      {
        "title": "Czysta Czerń Pełnoekranowa",
        "desc": "Wyświetla idealną czerń bez żadnych elementów interfejsu rozpraszających wzrok."
      },
      {
        "title": "Odróżnienie Bleed od IPS Glow",
        "desc": "Praktyczne metody diagnozy: bleed nie zmienia się pod kątem, glow zmienia się wraz z ruchem głowy."
      },
      {
        "title": "Weryfikacja Nowo Zakupionego Sprzętu",
        "desc": "Kluczowy test w okresie 14 dni na odstąpienie od umowy zakupu monitora lub laptopa."
      },
      {
        "title": "Ocena Równomierności Czerni",
        "desc": "Niezbędne badanie dla graczy i kinomanów oglądających filmy w ciemnym pokoju."
      }
    ],
    "instructionsTitle": "Jak Przeprowadzić Prawidłowy Test",
    "instructions": [
      "Całkowicie zgaś światło w pomieszczeniu i zasłoń okna.",
      "Włącz tryb Pełny Ekran na tym narzędziu i odczekaj chwilę, aż wzrok przyzwyczai się do ciemności.",
      "Obserwuj krawędzie monitora z odległości około 1 metra prostopadle do środka ekranu."
    ],
    "faqs": [
      {
        "q": "Czym różni się Backlight Bleed od IPS Glow?",
        "a": "Backlight bleed to punktowy wyciek światła z krawędzi stały pod każdym kątem. IPS glow to srebrzysta poświata w rogach zależna od kąta patrzenia."
      },
      {
        "q": "Czy ulot podświetlenia można naprawić oprogramowaniem?",
        "a": "Nie, jest to wada mechaniczna wynikająca z naprężeń w obudowie i ramce panelu."
      },
      {
        "q": "Czy wyciek światła podlega reklamacji?",
        "a": "W skrajnych przypadkach tak, jeśli utrudnia normalne korzystanie z urządzenia w ciemnych scenach."
      },
      {
        "q": "Czy ekrany OLED mają backlight bleed?",
        "a": "Nie! W panelach OLED każdy piksel świeci niezależnie, więc czerń oznacza całkowicie wyłączony piksel."
      },
      {
        "q": "Czy lekkie poluzowanie śrub obudowy może pomóc?",
        "a": "Czasami zmniejszenie naprężenia ramki redukuje nacisk na matrycę, ale grozi utratą gwarancji."
      }
    ]
  },
  "oled-burn-in-test": {
    "name": "Test Wypalenia Ekranu OLED",
    "title": "Test Wypalenia Ekranu OLED – Sprawdź Powidoki i Nierównomierność",
    "metaDescription": "Sprawdź telewizor, monitor lub smartfon OLED pod kątem wypalenia pikseli i powidoków. Czyste plansze testowe w kolorach czerwonym, szarym i białym.",
    "h1": "Test Wypalenia OLED (Weryfikacja Matrycy)",
    "intro": "Ekrany OLED oferują bezkonkurencyjny kontrast, jednak organiczne diody ulegają nierównomiernemu zużyciu przy długotrwałym wyświetlaniu statycznych elementów (paski zadań, logo stacji telewizyjnych).",
    "featuresTitle": "Zalety Narzędzia Diagnostycznego OLED",
    "features": [
      {
        "title": "Plansze o Średniej Szarości",
        "desc": "Szary kolor o jasności 5% i 20% najlepiej ujawnia wczesne stadia wypalenia i zjawisko bandingu."
      },
      {
        "title": "Izolacja Barw Podstawowych",
        "desc": "Osobne plansze dla czerwonych, zielonych i niebieskich subpikseli ułatwiają identyfikację degradacji."
      },
      {
        "title": "Rozróżnienie Powidoków od Wypalenia",
        "desc": "Pomaga ocenić, czy cień jest tymczasowym retencjonowaniem obrazu, czy trwałym uszkodzeniem."
      },
      {
        "title": "Wsparcie dla TV i Smartfonów",
        "desc": "Działa płynnie w przeglądarkach telewizorów LG, Samsung, Sony oraz telefonów z Androidem i iOS."
      }
    ],
    "instructionsTitle": "Procedura Testowania Matrycy OLED",
    "instructions": [
      "Włącz tryb Pełny Ekran i wybierz kolor szary lub jednolity czerwony.",
      "Przyjrzyj się miejscom, gdzie zwykle znajdują się paski zadań, ikony pulpitu lub logo programów.",
      "Jeśli zauważysz zarysy statycznych elementów, uruchom procedurę czyszczenia pikseli w menu telewizora."
    ],
    "faqs": [
      {
        "q": "Czym różni się retencja obrazu od trwałego wypalenia?",
        "a": "Retencja (powidok) to tymczasowy stan ustępujący po kilku minutach. Wypalenie to trwałe, nieodwracalne zużycie emiterów organicznych."
      },
      {
        "q": "Który kolor najszybciej ulega wypaleniu na matrycach OLED?",
        "a": "Zazwyczaj subpiksele czerwone lub niebieskie, zależnie od architektury panelu (WOLED vs QD-OLED)."
      },
      {
        "q": "Czy wbudowana funkcja odświeżania pikseli pomaga?",
        "a": "Tak, cykl kompensacyjny wyrównuje napięcia zasilania diod, redukując widoczność drobnych nierównomierności."
      },
      {
        "q": "Jak chronić monitor OLED przed wypaleniem?",
        "a": "Ukrywaj pasek zadań Windows, stosuj czarne tło pulpitu i ustawiaj krótki czas wygaszania ekranu."
      },
      {
        "q": "Czy producenci uznają wypalenie w ramach gwarancji?",
        "a": "Coraz więcej producentów monitorów dla graczy obejmuje wypalenie 3-letnią gwarancją producenta."
      }
    ]
  },
  "monitor-uniformity-test": {
    "name": "Test Jednolitości Monitora",
    "title": "Test Jednolitości Monitora – Sprawdź Równomierność Jasności i Koloru",
    "metaDescription": "Profesjonalny test jednolitości luminancji i balansu bieli na całej powierzchni monitora. Narzędzie online dla grafików, fotografów i graczy.",
    "h1": "Test Jednolitości Monitora (Luminancja i Kolor)",
    "intro": "Nierównomierne podświetlenie lub plamy o zmiennym zabarwieniu (tzw. dirty screen effect) potrafią zepsuć obróbkę fotografii i komfort pracy. Przetestuj swój monitor na pełnym ekranie.",
    "featuresTitle": "Parametry Podlegające Ocenie",
    "features": [
      {
        "title": "Równomierność Luminancji",
        "desc": "Sprawdź, czy narożniki ekranu nie są zauważalnie ciemniejsze od jego centrum."
      },
      {
        "title": "Stabilność Temperatury Barwowej",
        "desc": "Upewnij się, że biel po lewej stronie ma ten sam odcień co po prawej."
      },
      {
        "title": "Wykrywanie Efektu Brudnego Ekranu (DSE)",
        "desc": "Szare plansze testowe ujawniają pionowe pasy i plamy w warstwie dyfuzora."
      },
      {
        "title": "Niezbędnik dla Grafików",
        "desc": "Pozwala zweryfikować, czy monitor nadaje się do precyzyjnego retuszu zdjęć i DTP."
      }
    ],
    "instructionsTitle": "Jak Ocenić Jednolitość Ekranu",
    "instructions": [
      "Ustaw monitor na wprost oczu w odległości roboczej i włącz pełny ekran z neutralną bielą.",
      "Podziel wzrokiem ekran na 9 równych stref (siatka 3x3) i porównaj jasność każdej z nich.",
      "Przełącz na kolor 50% szary, aby wykryć ewentualne plamy lub pasy w tle."
    ],
    "faqs": [
      {
        "q": "Jaka odchyłka jasności jest dopuszczalna w dobrym monitorze?",
        "a": "W monitorach biurowych do 15-20%, natomiast profesjonalne monitory graficzne nie powinny przekraczać 5-8%."
      },
      {
        "q": "Co to jest system kompensacji jednolitości (Uniformity Compensation)?",
        "a": "To technologia stosowana w profesjonalnych monitorach (np. EIZO, NEC), która cyfrowo koryguje jasność poszczególnych stref panelu."
      },
      {
        "q": "Czy zagięte monitory (Curved) mają gorszą jednolitość?",
        "a": "Często tak, zagięcie matrycy wywołuje dodatkowe naprężenia mechaniczne sprzyjające wyciekom światła."
      },
      {
        "q": "Dlaczego rogi monitora wydają się ciemniejsze?",
        "a": "To zjawisko winietowania podświetlenia krawędziowego, typowe dla tańszych konstrukcji."
      },
      {
        "q": "Czy kalibracja kolorymetrem może naprawić nierówny ekran?",
        "a": "Kalibracja ustawia poprawny punkt bieli w centrum, ale nie zlikwiduje fizycznej nierówności podświetlenia."
      }
    ]
  },
  "tracing-lightbox": {
    "name": "Deska do Kalkowania z Ekranu",
    "title": "Podświetlana Deska do Kalkowania – Zamień Tablet i Laptop w Lightbox",
    "metaDescription": "Wykorzystaj ekran laptopa lub tabletu jako podświetlaną deskę kreślarską do kalkowania rysunków, kaligrafii i tatuaży. Maksymalna biel bez wygaszania.",
    "h1": "Deska do Kalkowania z Ekranu (Cyfrowy Lightbox)",
    "intro": "Nie musisz kupować drogiej deski kreślarskiej LED. Zamień ekran swojego iPada, tabletu z Androidem lub laptopa w idealnie gładki, podświetlany stół kreślarski do precyzyjnego przerysowywania.",
    "featuresTitle": "Zalety Cyfrowej Deski do Kalkowania",
    "features": [
      {
        "title": "Przenikanie Przez Gruby Papier",
        "desc": "Maksymalna jasność bieli pozwala bez trudu przekalkować rysunek na papier akwarelowy i brystol."
      },
      {
        "title": "Zablokowany Dotyk i Brak Wygaszania",
        "desc": "Dzięki Screen Wake Lock ekran nie wyłączy się, gdy przyłożysz kartkę i ołówek."
      },
      {
        "title": "Zero Kosztów Dodatkowych",
        "desc": "Darmowe rozwiązanie dla artystów, tatuażystów, kaligrafów i studentów architektury."
      },
      {
        "title": "Idealnie Płaska Powierzchnia",
        "desc": "Szklany ekran nowoczesnego tabletu zapewnia doskonałe oparcie dla dłoni i precyzyjne linie."
      }
    ],
    "instructionsTitle": "Jak Używać Ekranu do Kalkowania",
    "instructions": [
      "Zwiększ jasność urządzenia do maksimum i włącz tryb Pełny Ekran na naszym narzędziu.",
      "Połóż oryginalny szkic na ekranie, a na niego nałóż czystą kartkę papieru.",
      "W słabiej oświetlonym pokoju linie oryginału będą wyraźnie prześwitywać przez wierzchnią warstwę."
    ],
    "faqs": [
      {
        "q": "Czy nacisk ołówka lub pióra nie uszkodzi ekranu?",
        "a": "Używaj miękkich ołówków (2B-4B) lub cienkopisów i rysuj z lekkim naciskiem. Warto stosować folię lub szkło ochronne."
      },
      {
        "q": "Przez jak gruby papier przebije światło z monitora?",
        "a": "Standardowy papier do ksero (80g/m²) prześwituje idealnie, papier techniczny (do 200g/m²) jest w pełni czytelny przy zgaszonym świetle."
      },
      {
        "q": "Jak zapobiec przypadkowym kliknięciom podczas rysowania na tablecie?",
        "a": "Włącz funkcję 'Dostęp nadzorowany' w iPadzie lub przypnij aplikację w Androidzie, aby zablokować gesty."
      },
      {
        "q": "Czy białe światło nie męczy wzroku podczas długiego rysowania?",
        "a": "Możesz lekko ocieplić biel suwakiem barwy, aby uzyskać światło zbliżone do naturalnego pergaminu."
      },
      {
        "q": "Czy to bezpieczne dla baterii tabletu?",
        "a": "Tak, choć praca na 100% jasności szybciej zużywa akumulator, więc przy dłuższych projektach warto podłączyć ładowarkę."
      }
    ]
  },
  "photography-backdrop": {
    "name": "Tło Fotograficzne z Ekranu",
    "title": "Tło Fotograficzne z Ekranu – Cyfrowe Tło do Zdjęć Produktowych",
    "metaDescription": "Wykorzystaj monitor komputera jako czyste, bezcieniowe tło do fotografii makro i produktowej. Pobierz jednolite tła w 4K i 8K.",
    "h1": "Tło Fotograficzne z Ekranu (Fotografia Studyjna)",
    "intro": "Stwórz domowe studio fotograficzne w kilka sekund. Wyświetl jednolite, bezcieniowe tło na ekranie monitora lub telewizora i fotografuj przedmioty, biżuterię lub elektronikę z profesjonalnym efektem.",
    "featuresTitle": "Zastosowanie w Fotografii Produktowej",
    "features": [
      {
        "title": "Bezcieniowe Podświetlenie Od Dołu",
        "desc": "Połóż tablet poziomo, aby uzyskać efekt lewitującego produktu bez żadnych cieni pod spodem."
      },
      {
        "title": "Wybór Dowolnego Koloru Tła",
        "desc": "Błyskawicznie zmieniaj kolory od śnieżnobiałego po głęboką czerń bez kupowania kartonów studyjnych."
      },
      {
        "title": "Kreatywne Odbicia i Refleksy",
        "desc": "Błyszcząca tafla matrycy tworzy eleganckie, lustrzane odbicie ekskluzywnych przedmiotów."
      },
      {
        "title": "Gotowe do Nagrań Wideo",
        "desc": "Płynne, bezmigotliwe światło sprawdza się idealnie do ujęć produktowych w rolkach i na TikToku."
      }
    ],
    "instructionsTitle": "Wskazówki Fotograficzne",
    "instructions": [
      "Ustaw przedmiot bezpośrednio przed ekranem lub na powierzchni leżącego tabletu.",
      "Użyj dłuższego obiektywu (np. 50mm lub 85mm) i otwartej przysłony, aby delikatnie rozmyć strukturę pikseli w tle.",
      "Dobierz balans bieli w aparacie do temperatury wyświetlanego tła (np. 6500K dla sRGB)."
    ],
    "faqs": [
      {
        "q": "Czy na zdjęciach nie będzie widać siatki pikseli (mory)?",
        "a": "Odsunięcie przedmiotu od ekranu o 20-30 cm i mała głębia ostrości całkowicie rozmywają piksele tła."
      },
      {
        "q": "Jaki kolor tła najlepiej sprawdza się dla biżuterii?",
        "a": "Czysta czerń lub głęboki granat tworzą wspaniały kontrast z błyszczącym złotem i srebrem."
      },
      {
        "q": "Czy mogę używać telewizora jako wielkiego tła do większych obiektów?",
        "a": "Tak, duży telewizor 55-65 cali pozwala fotografować buty, torebki czy sprzęt audio."
      },
      {
        "q": "Jak uniknąć zarysowania ekranu przez fotografowane przedmioty?",
        "a": "Połóż na matrycy cienką taflę czystego szkła akrylowego (pleksi) jako warstwę ochronną."
      },
      {
        "q": "Czy kolory na ekranie są zgodne ze standardem poligraficznym?",
        "a": "Nasz generator tworzy kolory w sRGB, co zapewnia wierne odwzorowanie na skalibrowanych aparatach."
      }
    ]
  },
  "color-picker-fullscreen": {
    "name": "Pełnoekranowy Wybór Koloru",
    "title": "Pełnoekranowy Wybór Koloru – Dowolny Odcień HEX i RGB na Całym Ekranie",
    "metaDescription": "Wprowadź dowolny kod koloru HEX lub RGB i wyświetl go na pełnym ekranie. Bezpłatne narzędzie online dla projektantów i kalibracji.",
    "h1": "Pełnoekranowy Wybór Koloru (HEX / RGB)",
    "intro": "Sprawdź, jak Twój wybrany kolor prezentuje się na żywo na całej powierzchni matrycy. Wpisz dowolny kod HEX, wartości RGB lub skorzystaj z próbnika barw, aby natychmiast rozświetlić wyświetlacz.",
    "featuresTitle": "Możliwości Narzędzia do Wyboru Koloru",
    "features": [
      {
        "title": "Precyzyjne Wprowadzanie Kodu",
        "desc": "Pełna obsługa 6-znakowych kodów HEX oraz formatu RGB (0-255)."
      },
      {
        "title": "Próbnik Kolorów w Czasie Rzeczywistym",
        "desc": "Intuicyjna paleta barw z natychmiastowym podglądem na żywo."
      },
      {
        "title": "Generowanie Tapet z Własnego Koloru",
        "desc": "Zapisz stworzony odcień jako bezstratną tapetę w jakości do 8K."
      },
      {
        "title": "Zgodność ze Standardem sRGB",
        "desc": "Gwarantuje dokładne odwzorowanie cyfrowe bez przekłamań gamma."
      }
    ],
    "instructionsTitle": "Jak Wybrać i Wyświetlić Kolor",
    "instructions": [
      "Wpisz kod koloru (np. #2A75D3) w polu tekstowym lub kliknij próbnik palety.",
      "Kliknij przycisk 'Pełny Ekran', aby zalać cały monitor wybranym odcieniem.",
      "Naciśnij klawisz ESC, aby powrócić do ustawień i zmienić barwę."
    ],
    "faqs": [
      {
        "q": "Czy mogę wpisać nazwę koloru zamiast kodu HEX?",
        "a": "Narzędzie akceptuje kody szesnastkowe HEX (np. #ffffff) oraz format RGB dla maksymalnej precyzji."
      },
      {
        "q": "Czy kolor wygląda identycznie na każdym monitorze?",
        "a": "Zależy to od kalibracji i przestrzeni barwnej matrycy; na monitorach z pokryciem 100% sRGB kolor jest wzorcowy."
      },
      {
        "q": "Czy mogę zapisać wybrany kolor jako plik graficzny?",
        "a": "Tak, przewiń stronę do panelu pobierania, aby wyeksportować tło w wybranej rozdzielczości."
      },
      {
        "q": "Czy narzędzie pamięta mój ostatni wybrany kolor?",
        "a": "Tak, ustawienia są bezpiecznie zapisywane w pamięci lokalnej Twojej przeglądarki."
      },
      {
        "q": "Czy wybór koloru działa na telefonach komórkowych?",
        "a": "Działa bezproblemowo na ekranach smartfonów z systemem Android i iOS."
      }
    ]
  },
  "fullscreen-rgb-cycle": {
    "name": "Cykl Kolorów RGB Pełny Ekran",
    "title": "Cykl Kolorów RGB Pełny Ekran – Automatyczny Tester Matrycy i Pikseli",
    "metaDescription": "Automatyczny cykl barw RGB na pełnym ekranie z regulowanym czasem zmiany. Idealny do testowania monitorów, naprawy pikseli i dynamicznego światła.",
    "h1": "Cykl Kolorów RGB Pełny Ekran (Auto-Tester)",
    "intro": "Automatycznie przełączaj pełnoekranowe plansze testowe pomiędzy kolorem czerwonym, zielonym, niebieskim, białym i czarnym. Skuteczne narzędzie do diagnozy matrycy i ożywiania zaciętych pikseli.",
    "featuresTitle": "Kluczowe Opcje Cyklu Kolorów",
    "features": [
      {
        "title": "Regulowany Czas Trwania Planszy",
        "desc": "Wybierz interwał 3, 5 lub 10 sekund zależnie od potrzeb badania."
      },
      {
        "title": "Stymulacja Zaciętych Subpikseli",
        "desc": "Zmienne impulsy barwne pomagają przywrócić sprawność zawieszonym tranzystorom ciekłokrystalicznym."
      },
      {
        "title": "Płynne Przejścia bez Zacięć",
        "desc": "Zoptymalizowany pod kątem 60 fps kod gwarantuje idealnie płynną pracę przeglądarki."
      },
      {
        "title": "Dynamiczne Oświetlenie Tła",
        "desc": "Świetny dodatek wizualny jako nastrojowa lampa RGB do Twojego pokoju gamingowego."
      }
    ],
    "instructionsTitle": "Jak Uruchomić Cykl Barw",
    "instructions": [
      "Wybierz preferowany czas trwania pojedynczego koloru w panelu sterowania.",
      "Kliknij przycisk 'Uruchom Cykl Pikseli RGB' i przejdź w tryb pełnoekranowy.",
      "Obserwuj matrycę pod kątem punktów, które nie reagują na zmianę koloru tła."
    ],
    "faqs": [
      {
        "q": "Jak długo powinien trwać cykl naprawczy dla zaciętego piksela?",
        "a": "Zaleca się pozostawienie włączonego cyklu na 15 do 30 minut dla pełnej stymulacji tranzystorów."
      },
      {
        "q": "Czy cykl kolorów może uszkodzić sprawny ekran?",
        "a": "Absolutnie nie, zmiana barw to w 100% naturalny i bezpieczny sposób pracy każdej matrycy."
      },
      {
        "q": "Jak zatrzymać cykl w dowolnym momencie?",
        "a": "Kliknij przycisk 'Zatrzymaj Cykl Pikseli' lub naciśnij klawisz ESC, aby wyjść z pełnego ekranu."
      },
      {
        "q": "Czy narzędzie działa w tle?",
        "a": "Zaleca się pozostawienie aktywnego okna na wierzchu, aby przeglądarka nie ograniczała liczby klatek na sekundę."
      },
      {
        "q": "Jakie kolory wchodzą w skład pętli testowej?",
        "a": "Czerwień (#FF0000), Zieleń (#00FF00), Błękit (#0000FF), Biel (#FFFFFF) oraz Czerń (#000000)."
      }
    ]
  },
  "black-screen-10-hours": {
    "name": "Czarny Ekran na 10 Godzin",
    "title": "Czarny Ekran na 10 Godzin – Czysta Czerń do Snu, Relaksu i OLED",
    "metaDescription": "Wyświetl czysty czarny ekran przez 10 godzin bez wygaszania. Idealny do spokojnego snu, oszczędzania baterii na OLED i słuchania muzyki w nocy.",
    "h1": "Czarny Ekran na 10 Godzin (Czysta Czerń)",
    "intro": "Potrzebujesz całkowitej ciemności w pokoju bez wyłączania komputera? Nasz czarny ekran utrzymuje urządzenie w stanie czuwania, eliminując zbędne światło matrycy podczas snu lub pobierania plików.",
    "featuresTitle": "Zalety 10-Godzinnego Czarnego Ekranu",
    "features": [
      {
        "title": "Głęboki i Spokojny Sen",
        "desc": "Zaciemnia sypialnię, powstrzymując niebieskie światło zakłócające produkcję melatoniny."
      },
      {
        "title": "Zerowe Zużycie Energii na OLED",
        "desc": "Piksele ekranów OLED całkowicie gasną przy kolorze czarnym, oszczędzając prąd."
      },
      {
        "title": "Zapobieganie Uśpieniu Systemu",
        "desc": "Komputer może pobierać pliki, renderować grafikę lub odtwarzać dźwięk przez całą noc."
      },
      {
        "title": "Ochrona Przed Wypaleniem",
        "desc": "Chroni matrycę przed utrwalaniem statycznych elementów podczas długiej bezczynności."
      }
    ],
    "instructionsTitle": "Jak Korzystać z Czarnego Ekranu Nocą",
    "instructions": [
      "Włącz tryb Pełny Ekran, aby schować pasek zadań i kursor myszy.",
      "Upewnij się, że komputer ma podłączone zasilanie sieciowe.",
      "Gdy się obudzisz, po prostu porusz myszką lub naciśnij ESC, aby wrócić do pracy."
    ],
    "faqs": [
      {
        "q": "Czy ten ekran na pewno nie wyłączy się w środku nocy?",
        "a": "Tak, wbudowana blokada Screen Wake Lock uniemożliwia przejście systemu w stan uśpienia."
      },
      {
        "q": "Czy czarny ekran oszczędza baterię na zwykłym monitorze LCD?",
        "a": "W matrycach LCD podświetlenie LED nadal delikatnie świeci, jednak na ekranach OLED zużycie prądu spada niemal do zera."
      },
      {
        "q": "Czy rano obudzi mnie dźwięk budzika z komputera?",
        "a": "Tak, wszystkie dźwięki systemowe, odtwarzacze muzyki i budziki działają w tle normalnie."
      },
      {
        "q": "Jak wyjść z czarnego ekranu po przebudzeniu?",
        "a": "Wystarczy nacisnąć klawisz ESC lub kliknąć myszką w dowolnym miejscu."
      },
      {
        "q": "Czy mogę słuchać podcastów na YouTube przy czarnym ekranie?",
        "a": "Tak, uruchom odtwarzanie w osobnej karcie, a na wierzchu włącz nasze pełnoekranowe narzędzie."
      }
    ]
  },
  "white-screen-1-hour": {
    "name": "Biały Ekran na 1 Godzinę",
    "title": "Biały Ekran na 1 Godzinę – Stałe Jasne Światło do Pracy i Nauki",
    "metaDescription": "Czysty biały ekran pełnoekranowy ze stałym 1-godzinnym czasem świecenia. Idealny do sesji skupienia, doświetlenia kamery i porannej energii.",
    "h1": "Biały Ekran na 1 Godzinę (Sesja Światła)",
    "intro": "Utrzymaj optymalną jasność otoczenia przez dokładnie jedną godzinę. Doskonałe narzędzie do zorganizowanych sesji pracy w technice Pomodoro, doświetlania wideokonferencji lub porannego pobudzenia.",
    "featuresTitle": "Zastosowanie Sesji 1-Godzinnej",
    "features": [
      {
        "title": "Kontrola Czasu i Skupienia",
        "desc": "Wyznacza precyzyjne ramy czasowe na intensywną pracę koncepcyjną bez rozpraszaczy."
      },
      {
        "title": "Stabilne Światło do Rozmowy",
        "desc": "Zapewnia niezmienne oświetlenie twarzy przez całe 60-minutowe spotkanie biznesowe."
      },
      {
        "title": "Fototerapia Poranna",
        "desc": "Jasne białe światło o poranku wspomaga hamowanie melatoniny i zwiększa czujność umysłu."
      },
      {
        "title": "Automatyczny Brak Wygaszania",
        "desc": "Gwarancja ciągłego podświetlenia bez potrzeby ciągłego poruszania myszą."
      }
    ],
    "instructionsTitle": "Jak Przeprowadzić Godzinną Sesję",
    "instructions": [
      "Ustaw wygodną pozycję przed monitorem i włącz pełny ekran.",
      "Rozpocznij swoje zadanie, ciesząc się równomiernym światłem sprzyjającym koncentracji.",
      "Po upływie godziny zrób 5-minutową przerwę na relaks dla oczu."
    ],
    "faqs": [
      {
        "q": "Dlaczego sesja trwa akurat 1 godzinę?",
        "a": "To optymalny czas intensywnego bloku skupienia przed zalecaną przerwą na odpoczynek wzroku."
      },
      {
        "q": "Czy białe światło pomaga na senność rano?",
        "a": "Tak, wysoka luminancja o temperaturze dziennej stymuluje receptory melanopsynowe w siatkówce, budząc organizm."
      },
      {
        "q": "Czy mogę skrócić lub wydłużyć ten czas?",
        "a": "Tak, możesz wyjść w dowolnej chwili klawiszem ESC lub skorzystać z naszego konfigurowalnego timera ekranu."
      },
      {
        "q": "Czy ekran nagrzewa się podczas godzinnej pracy na pełnej bieli?",
        "a": "Nowoczesne monitory LED nagrzewają się minimalnie i są w pełni przystosowane do ciągłego wyświetlania jasnych scen."
      },
      {
        "q": "Czy narzędzie działa na tablecie leżącym na biurku?",
        "a": "Oczywiście, tablet z białym ekranem to świetna lampka biurkowa do czytania notatek."
      }
    ]
  },
  "screen-timer": {
    "name": "Timer Ekranu Pełnoekranowy",
    "title": "Timer Ekranu Pełnoekranowy – Zegar Odliczający do Prezentacji i Pracy",
    "metaDescription": "Pełnoekranowy zegar i timer odliczający czas do prezentacji, ćwiczeń i pracy w skupieniu. Czytelne cyfry i estetyczne tło bez rozpraszaczy.",
    "h1": "Timer Ekranu Pełnoekranowy (Odliczanie Czasu)",
    "intro": "Zorganizuj swój czas z maksymalną czytelnością. Pełnoekranowy timer odliczający minuty i sekundy na kontrastowym tle ułatwia prowadzenie prezentacji, warsztatów, debat i bloków pracy głębokiej.",
    "featuresTitle": "Atuty Pełnoekranowego Timera",
    "features": [
      {
        "title": "Gigantyczne i Czytelne Cyfry",
        "desc": "Doskonale widoczne z drugiego końca sali konferencyjnej, klasy lub domowego biura."
      },
      {
        "title": "Minimalistyczny Design",
        "desc": "Brak zbędnych animacji i reklam – tylko czysty czas pomagający utrzymać dyscyplinę."
      },
      {
        "title": "Kontrast Dopasowany do Wzroku",
        "desc": "Działa na ciemnym lub jasnym tle w zależności od oświetlenia w pomieszczeniu."
      },
      {
        "title": "Pewność Działania",
        "desc": "Dzięki Screen Wake Lock ekran nie wygaśnie podczas przemówienia publicznego."
      }
    ],
    "instructionsTitle": "Jak Używać Timera Ekranowego",
    "instructions": [
      "Wprowadź docelowy czas w minutach lub sekundach w panelu sterowania.",
      "Uruchom odliczanie i przejdź w tryb pełnego ekranu klawiszem F.",
      "Kontroluj upływający czas bez nerwowego zerkania na zegarek na ręku."
    ],
    "faqs": [
      {
        "q": "Do czego najczęściej używa się pełnoekranowego timera?",
        "a": "Do wystąpień publicznych, prelekcji TEDx, egzaminów szkolnych, treningów interwałowych i techniki Pomodoro."
      },
      {
        "q": "Czy po zakończeniu odliczania rozlega się sygnał dźwiękowy?",
        "a": "Tak, delikatny sygnał dźwiękowy informuje o upływie ustawionego czasu."
      },
      {
        "q": "Czy timer działa poprawnie na rzutnikach i projektorach?",
        "a": "Świetnie współpracuje ze wszystkimi projektorami i zewnętrznymi ekranami podłączonymi przez HDMI."
      },
      {
        "q": "Czy można zapauzować odliczanie w trakcie przemówienia?",
        "a": "Tak, spacja umożliwia natychmiastowe zatrzymanie i wznowienie odliczania."
      },
      {
        "q": "Czy narzędzie wymaga połączenia z internetem po załadowaniu?",
        "a": "Nie, po jednorazowym otwarciu w przeglądarce timer odlicza czas całkowicie lokalnie w pamięci urządzenia."
      }
    ]
  }
};
