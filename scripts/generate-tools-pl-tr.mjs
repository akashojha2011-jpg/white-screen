// scripts/generate-tools-pl-tr.mjs
import fs from 'fs';
import path from 'path';

// Define the 15 tools in Polish and Turkish
const toolsPlData = {
  'dead-pixel-test': {
    name: "Test Martwych Pikseli",
    title: "Test Martwych Pikseli – Sprawdź Monitor i Smartfon Online",
    metaDescription: "Sprawdź monitor lub telefon pod kątem martwych i zaciętych pikseli w trybie pełnoekranowym. Darmowe narzędzie z cyklem RGB dla matryc LCD i OLED.",
    h1: "Test Martwych Pikseli (Pełny Ekran)",
    intro: "Zlokalizuj uszkodzone, zacięte lub martwe subpiksele na monitorze komputera, laptopie, tablecie i smartfonie. Narzędzie wyświetla jednolite plansze testowe w kolorach: czerwonym, zielonym, niebieskim, białym i czarnym.",
    featuresTitle: "Jak Działa Test Martwych Pikseli",
    features: [
      { title: "Wykrywanie Martwych Pikseli", desc: "Martwe piksele pozostają trwale wygaszone, widoczne jako małe czarne punkty na jasnym tle." },
      { title: "Izolacja Zaciętych Subpikseli", desc: "Zacięte piksele świecą stale jednym kolorem bazowym. Zmiana barw tła natychmiast je ujawnia." },
      { title: "Automatyczny Cykl Barw RGB", desc: "Ustaw interwał na 3, 5 lub 10 sekund, aby bez pośpiechu sprawdzić całą powierzchnię panelu." },
      { title: "Działa na Każdym Typie Matrycy", desc: "Kompatybilny z matrycami OLED, AMOLED, IPS, VA i TN w dowolnej rozdzielczości." }
    ],
    instructionsTitle: "Instrukcja Przeprowadzenia Testu",
    instructions: [
      "Przed rozpoczęciem dokładnie wyczyść ekran ściereczką z mikrofibry, aby nie pomylić kurzu z wadą piksela.",
      "Kliknij przycisk 'Pełny Ekran', aby schować karty i paski systemowe.",
      "Przełączaj kolory klawiszami 1-5 lub włącz automatyczny cykl, uważnie obserwując każdy fragment wyświetlacza."
    ],
    faqs: [
      { q: "Czym różni się zacięty piksel od martwego?", a: "Martwy piksel jest trwale czarny (brak zasilania), podczas gdy zacięty piksel świeci stale jednym kolorem (czerwonym, zielonym lub niebieskim) i często można go odblokować." },
      { q: "Czy szybki cykl kolorów RGB może naprawić zacięty piksel?", a: "Tak, gwałtowne zmiany barw pobudzają tranzystory zaciętego subpiksela, co w wielu przypadkach przywraca jego prawidłowe działanie." },
      { q: "Jak odróżnić drobinkę kurzu od uszkodzonego piksela?", a: "Spójrz na ekran pod innym kątem: kurz znajduje się na zewnętrznym szkle i rzuca cień, podczas gdy uszkodzony piksel świeci bezpośrednio w warstwie ciekłokrystalicznej." },
      { q: "Ile martwych pikseli kwalifikuje monitor do wymiany gwarancyjnej?", a: "Zależy to od klasy normy ISO producenta; przeważnie od 3 do 5 uszkodzonych subpikseli uprawnia do naprawy gwarancyjnej." },
      { q: "Czy test działa na iPhone i iPadzie?", a: "Tak, działa bez instalacji bezpośrednio w przeglądarce Safari i Chrome na systemach iOS oraz Android." }
    ]
  },
  'screen-cleaning': {
    name: "Tryb Czyszczenia Ekranu",
    title: "Tryb Czyszczenia Ekranu – Czyste Białe Światło dla Monitorów i Laptopów",
    metaDescription: "Wyświetl równomierny biały ekran o maksymalnej jasności do czyszczenia matrycy z kurzu i smug. Stałe podświetlenie bez wygaszania monitora.",
    h1: "Tryb Czyszczenia Ekranu (Ekran Zawsze Włączony)",
    intro: "Bezpiecznie wyczyść matrycę laptopa, monitora stacjonarnego lub smartfona. Jednolite białe światło o 100% jasności natychmiast uwidacznia najdrobniejsze cząsteczki kurzu, odciski palców i smugi.",
    featuresTitle: "Zalety Trybu Czyszczenia Ekranu",
    features: [
      { title: "Błyskawiczne Wykrywanie Zabrudzeń", desc: "Rozproszone białe światło sprawia, że plamy niewidoczne na ciemnym tle stają się natychmiast zauważalne." },
      { title: "Blokada Wygaszania Ekranu", desc: "Monitor nie zgaśnie ani nie przejdzie w tryb oszczędzania energii w trakcie przecierania." },
      { title: "Zero Instalowania Aplikacji", desc: "Bezpieczne narzędzie online działające bezpośrednio w Twojej przeglądarce." },
      { title: "Ochrona Powłoki Antyrefleksyjnej", desc: "Umożliwia czyszczenie z minimalnym, równomiernym naciskiem bez ryzyka porysowania matrycy." }
    ],
    instructionsTitle: "Jak Bezpiecznie Wyczyścić Monitor",
    instructions: [
      "Włącz tryb Pełny Ekran, aby rozświetlić matrycę do samych krawędzi.",
      "Użyj gruszki fotograficznej, aby zdmuchnąć luźne drobiny piasku przed dotknięciem ekranu.",
      "Delikatnie przetrzyj powierzchnię suchą lub lekko zwilżoną wodą destylowaną ściereczką z mikrofibry."
    ],
    faqs: [
      { q: "Dlaczego warto czyścić monitor przy włączonym białym ekranie?", a: "Ponieważ podświetlenie od tyłu uwidacznia tłuste plamy i smugi, które zlewają się z czernią wyłączonego ekranu." },
      { q: "Czy można czyścić włączony ekran?", a: "Tak, przy delikatnym nacisku mikrofibry widzisz na bieżąco usuwany brud bez ryzyka uszkodzenia." },
      { q: "Jaki płyn jest w 100% bezpieczny dla ekranu?", a: "Czysta woda destylowana naniesiona na ściereczkę z mikrofibry. Unikaj płynów do szyb z alkoholem lub amoniakiem." },
      { q: "Jak usunąć trudne smugi bez zarysowań?", a: "Lekko zwilż róg ściereczki wodą destylowaną, wykonaj delikatne koliste ruchy i natychmiast osusz suchą częścią." },
      { q: "Czy ręczniki papierowe niszczą ekran?", a: "Tak, zawierają szorstkie włókna celulozowe, które powodują trwałe mikrorysy na filtrach antyodblaskowych." }
    ]
  },
  'zoom-ring-light': {
    name: "Światło do Zoom Ring Light",
    title: "Światło do Zoom Ring Light – Rozproszone Oświetlenie Twarzy z Ekranu",
    metaDescription: "Wykorzystaj monitor jako lampę pierścieniową do wideorozmów na Zoom, Teams i Meet. Regulacja jasności i temperatury barwowej dla idealnego wyglądu.",
    h1: "Światło do Zoom Ring Light (Wirtualna Lampa do Kamery)",
    intro: "Popraw jakość obrazu ze swojej kamery internetowej bez kupowania drogich lamp LED. Zamień ekran monitora lub laptopa w wielkie, miękkie źródło światła z regulacją ciepła barwowego.",
    featuresTitle: "Funkcje Wirtualnego Oświetlenia",
    features: [
      { title: "Regulacja Temperatury Barwowej", desc: "Płynnie dopasuj odcień od ciepłego (2700K) do chłodnego (6500K) dla naturalnego wyglądu skóry." },
      { title: "Wielka Powierzchnia Świecąca", desc: "Duży ekran daje znacznie bardziej miękkie cienie niż mała, punktowa lampa LED." },
      { title: "Płynna Kontrola Jasności", desc: "Dostosuj intensywność podświetlenia, aby nie razić oczu podczas długich spotkań." },
      { title: "Brak Odblasków w Okularach", desc: "Ciepłe, rozproszone światło minimalizuje ostre refleksy na szkłach korekcyjnych." }
    ],
    instructionsTitle: "Jak Ustawić Oświetlenie do Wideorozmowy",
    instructions: [
      "Otwórz to narzędzie na monitorze znajdującym się bezpośrednio za Twoją kamerą internetową.",
      "Dostosuj suwak temperatury barwowej tak, aby kolor cery wyglądał świeżo i naturalnie.",
      "Ustaw okno Zoom obok lub włącz tryb pełnego ekranu, aby uzyskać maksymalną jasność."
    ],
    faqs: [
      { q: "Czy monitor może skutecznie zastąpić lampę ring light?", a: "Tak, dzięki dużej powierzchni matryca komputera generuje niezwykle miękkie, profesjonalne światło studyjne." },
      { q: "Jaka temperatura barwowa jest najlepsza dla twarzy?", a: "Zazwyczaj lekko ocieplone światło (około 50-60% suwaka) neutralizuje blady odcień powodowany przez tanią optykę kamer." },
      { q: "Czy ekran nie męczy oczu przy długim świeceniu?", a: "Dzięki regulacji jasności możesz dobrać poziom komfortowy dla wzroku, zachowując dobre doświetlenie kamery." },
      { q: "Czy narzędzie działa na dwóch monitorach?", a: "Tak, idealnie sprawdza się uruchomione na jednym monitorze, podczas gdy na drugim masz prezentację lub rozmowę." },
      { q: "Czy wpływa na czas pracy laptopa na baterii?", a: "Wysoka jasność zużywa więcej energii, dlatego podczas ważnych spotkań zaleca się podłączenie zasilacza." }
    ]
  },
  'webcam-light': {
    name: "Oświetlenie Kamery Internetowej",
    title: "Oświetlenie Kamery Internetowej – Naturalne Doświetlenie do Rozmów Wideo",
    metaDescription: "Darmowe oświetlenie z ekranu dla kamer internetowych. Usuń cienie pod oczami i popraw jakość wideo w słabo oświetlonym pokoju.",
    h1: "Oświetlenie Kamery Internetowej (Doświetlenie Twarzy)",
    intro: "Tanie kamery internetowe generują ziarnisty i zaszumiony obraz w słabym oświetleniu. Nasze narzędzie wypełnia ekran czystym, jasnym światłem, usuwając szumy z matrycy aparatu.",
    featuresTitle: "Kluczowe Korzyści dla Twojego Wideo",
    features: [
      { title: "Redukcja Szumów Matrycy", desc: "Większa ilość światła pozwala kamerze obniżyć ISO, eliminując ziarno i pikselozę." },
      { title: "Wygładzenie Cieni pod Oczami", desc: "Frontowe światło o dużej powierzchni zmiękcza rysy twarzy i dodaje blasku w oczach." },
      { title: "Natychmiastowe Działanie", desc: "Brak kabli, ładowarek i statywów – włączasz jednym kliknięciem w przeglądarce." },
      { title: "Pełna Regulacja Koloru", desc: "Możliwość wyboru dowolnego odcienia bieli dostosowanego do oświetlenia w pokoju." }
    ],
    instructionsTitle: "Wskazówki Dotyczące Optymalnego Ustawienia",
    instructions: [
      "Ustaw ekran naprzeciwko siebie na wysokości oczu lub lekko powyżej.",
      "Zwiększ jasność suwakiem aż do uzyskania ostrego i wyraźnego obrazu w podglądzie kamery.",
      "Zadbaj, aby za Twoimi plecami nie było mocniejszego źródła światła (np. odsłoniętego okna)."
    ],
    faqs: [
      { q: "Dlaczego moja kamera ma ziarnisty obraz w pokoju?", a: "W ciemnym otoczeniu mały sensor automatycznie podbija czułość ISO, co wywołuje cyfrowy szum." },
      { q: "Czy to narzędzie działa ze wszystkimi komunikatorami?", a: "Tak, doświetla Twoją twarz fizycznie, więc działa z Zoom, Skype, Teams, Discord, Google Meet i OBS." },
      { q: "Jak uniknąć odbicia ekranu w okularach?", a: "Ustaw monitor odrobinę wyżej i lekko pochyl go w dół, a suwakiem wybierz nieco cieplejszy ton." },
      { q: "Czy mogę używać smartfona jako dodatkowego oświetlenia bocznego?", a: "Tak! Otwórz naszą stronę na telefonie i ustaw go z boku, aby zlikwidować asymetryczne cienie." },
      { q: "Czy narzędzie jest bezpłatne do zastosowań komercyjnych?", a: "Tak, w 100% bezpłatne do streamingu, rozmów kwalifikacyjnych i pracy zdalnej." }
    ]
  },
  'screen-flicker-test': {
    name: "Test Migotania Ekranu (PWM)",
    title: "Test Migotania Ekranu – Sprawdź PWM i Zmęczenie Oczu Online",
    metaDescription: "Sprawdź, czy Twój monitor lub laptop migocze z powodu modulacji PWM. Darmowy test online dla ochrony wzroku przed bólem głowy i zmęczeniem.",
    h1: "Test Migotania Ekranu (Wykrywanie PWM)",
    intro: "Wiele nowoczesnych wyświetlaczy reguluje jasność poprzez szybkie włączanie i wyłączanie podświetlenia (PWM). Choć migotanie bywa niewidoczne gołym okiem, może wywoływać chroniczne zmęczenie oczu i migreny.",
    featuresTitle: "Dlaczego Warto Sprawdzić Migotanie Ekranu",
    features: [
      { title: "Identyfikacja PWM", desc: "Pozwala ustalić, czy podświetlenie monitora pracuje w technologii Flicker-Free." },
      { title: "Ochrona Przed Bólami Głowy", desc: "Wykrycie migotania pomaga ustawić bezpieczny poziom jasności eliminujący PWM." },
      { title: "Test Pióra i Kamery", desc: "Wskazówki krok po kroku, jak potwierdzić modulację aparatem w smartfonie." },
      { title: "Zgodność z Normami Ergonomii", desc: "Pomaga stworzyć zdrowe i bezpieczne stanowisko do wielogodzinnej pracy." }
    ],
    instructionsTitle: "Metody Wykrywania Migotania",
    instructions: [
      "Włącz tryb Pełny Ekran i obniż jasność monitora do około 20-30%.",
      "Skieruj aparat telefonu z ustawionym krótkim czasem naświetlania na ekran – pasy oznaczają PWM.",
      "Machaj ołówkiem lub palcem przed ekranem: rozmyty wachlarz oznacza brak PWM, klatkowanie oznacza migotanie."
    ],
    faqs: [
      { q: "Co to jest PWM w monitorach?", a: "PWM (Pulse Width Modulation) to metoda regulacji jasności poprzez pulsacyjne wyłączanie diod podświetlenia z wysoką częstotliwością." },
      { q: "Jakie objawy powoduje migotanie ekranu?", a: "Pieczenie oczu, suchość spojówek, trudności ze skupieniem wzroku oraz napięciowe bóle głowy." },
      { q: "Co oznacza oznaczenie Flicker-Free?", a: "Oznacza, że monitor reguluje jasność poprzez zmianę napięcia stałego (DC Dimming) bez żadnego migotania." },
      { q: "Czy zwiększenie jasności do 100% eliminuje migotanie PWM?", a: "W większości paneli tak, przy 100% diody świecą w sposób ciągły bez pulsowania." },
      { q: "Czy okulary z antyrefleksem chronią przed PWM?", a: "Nie, antyrefleks eliminuje odblaski światła, ale nie zatrzymuje fizycznego pulsowania jasności matrycy." }
    ]
  },
  'backlight-bleed-test': {
    name: "Test Ulotu Podświetlenia",
    title: "Test Ulotu Podświetlenia (Backlight Bleed) – Sprawdź Monitor IPS i VA",
    metaDescription: "Przetestuj monitor pod kątem wycieków światła i ulotu podświetlenia w ciemnym pokoju. Odróżnij backlight bleed od zjawiska IPS glow.",
    h1: "Test Ulotu Podświetlenia (Ciemny Ekran)",
    intro: "Wyciek podświetlenia (Backlight Bleeding) to wada montażowa krawędzi matrycy ciekłokrystalicznej, powodująca niepożądane żółte lub białe poświaty przy krawędziach ekranu w ciemnych scenach.",
    featuresTitle: "Diagnostyka Podświetlenia Matrycy",
    features: [
      { title: "Czysta Czerń Pełnoekranowa", desc: "Wyświetla idealną czerń bez żadnych elementów interfejsu rozpraszających wzrok." },
      { title: "Odróżnienie Bleed od IPS Glow", desc: "Praktyczne metody diagnozy: bleed nie zmienia się pod kątem, glow zmienia się wraz z ruchem głowy." },
      { title: "Weryfikacja Nowo Zakupionego Sprzętu", desc: "Kluczowy test w okresie 14 dni na odstąpienie od umowy zakupu monitora lub laptopa." },
      { title: "Ocena Równomierności Czerni", desc: "Niezbędne badanie dla graczy i kinomanów oglądających filmy w ciemnym pokoju." }
    ],
    instructionsTitle: "Jak Przeprowadzić Prawidłowy Test",
    instructions: [
      "Całkowicie zgaś światło w pomieszczeniu i zasłoń okna.",
      "Włącz tryb Pełny Ekran na tym narzędziu i odczekaj chwilę, aż wzrok przyzwyczai się do ciemności.",
      "Obserwuj krawędzie monitora z odległości około 1 metra prostopadle do środka ekranu."
    ],
    faqs: [
      { q: "Czym różni się Backlight Bleed od IPS Glow?", a: "Backlight bleed to punktowy wyciek światła z krawędzi stały pod każdym kątem. IPS glow to srebrzysta poświata w rogach zależna od kąta patrzenia." },
      { q: "Czy ulot podświetlenia można naprawić oprogramowaniem?", a: "Nie, jest to wada mechaniczna wynikająca z naprężeń w obudowie i ramce panelu." },
      { q: "Czy wyciek światła podlega reklamacji?", a: "W skrajnych przypadkach tak, jeśli utrudnia normalne korzystanie z urządzenia w ciemnych scenach." },
      { q: "Czy ekrany OLED mają backlight bleed?", a: "Nie! W panelach OLED każdy piksel świeci niezależnie, więc czerń oznacza całkowicie wyłączony piksel." },
      { q: "Czy lekkie poluzowanie śrub obudowy może pomóc?", a: "Czasami zmniejszenie naprężenia ramki redukuje nacisk na matrycę, ale grozi utratą gwarancji." }
    ]
  },
  'oled-burn-in-test': {
    name: "Test Wypalenia Ekranu OLED",
    title: "Test Wypalenia Ekranu OLED – Sprawdź Powidoki i Nierównomierność",
    metaDescription: "Sprawdź telewizor, monitor lub smartfon OLED pod kątem wypalenia pikseli i powidoków. Czyste plansze testowe w kolorach czerwonym, szarym i białym.",
    h1: "Test Wypalenia OLED (Weryfikacja Matrycy)",
    intro: "Ekrany OLED oferują bezkonkurencyjny kontrast, jednak organiczne diody ulegają nierównomiernemu zużyciu przy długotrwałym wyświetlaniu statycznych elementów (paski zadań, logo stacji telewizyjnych).",
    featuresTitle: "Zalety Narzędzia Diagnostycznego OLED",
    features: [
      { title: "Plansze o Średniej Szarości", desc: "Szary kolor o jasności 5% i 20% najlepiej ujawnia wczesne stadia wypalenia i zjawisko bandingu." },
      { title: "Izolacja Barw Podstawowych", desc: "Osobne plansze dla czerwonych, zielonych i niebieskich subpikseli ułatwiają identyfikację degradacji." },
      { title: "Rozróżnienie Powidoków od Wypalenia", desc: "Pomaga ocenić, czy cień jest tymczasowym retencjonowaniem obrazu, czy trwałym uszkodzeniem." },
      { title: "Wsparcie dla TV i Smartfonów", desc: "Działa płynnie w przeglądarkach telewizorów LG, Samsung, Sony oraz telefonów z Androidem i iOS." }
    ],
    instructionsTitle: "Procedura Testowania Matrycy OLED",
    instructions: [
      "Włącz tryb Pełny Ekran i wybierz kolor szary lub jednolity czerwony.",
      "Przyjrzyj się miejscom, gdzie zwykle znajdują się paski zadań, ikony pulpitu lub logo programów.",
      "Jeśli zauważysz zarysy statycznych elementów, uruchom procedurę czyszczenia pikseli w menu telewizora."
    ],
    faqs: [
      { q: "Czym różni się retencja obrazu od trwałego wypalenia?", a: "Retencja (powidok) to tymczasowy stan ustępujący po kilku minutach. Wypalenie to trwałe, nieodwracalne zużycie emiterów organicznych." },
      { q: "Który kolor najszybciej ulega wypaleniu na matrycach OLED?", a: "Zazwyczaj subpiksele czerwone lub niebieskie, zależnie od architektury panelu (WOLED vs QD-OLED)." },
      { q: "Czy wbudowana funkcja odświeżania pikseli pomaga?", a: "Tak, cykl kompensacyjny wyrównuje napięcia zasilania diod, redukując widoczność drobnych nierównomierności." },
      { q: "Jak chronić monitor OLED przed wypaleniem?", a: "Ukrywaj pasek zadań Windows, stosuj czarne tło pulpitu i ustawiaj krótki czas wygaszania ekranu." },
      { q: "Czy producenci uznają wypalenie w ramach gwarancji?", a: "Coraz więcej producentów monitorów dla graczy obejmuje wypalenie 3-letnią gwarancją producenta." }
    ]
  },
  'monitor-uniformity-test': {
    name: "Test Jednolitości Monitora",
    title: "Test Jednolitości Monitora – Sprawdź Równomierność Jasności i Koloru",
    metaDescription: "Profesjonalny test jednolitości luminancji i balansu bieli na całej powierzchni monitora. Narzędzie online dla grafików, fotografów i graczy.",
    h1: "Test Jednolitości Monitora (Luminancja i Kolor)",
    intro: "Nierównomierne podświetlenie lub plamy o zmiennym zabarwieniu (tzw. dirty screen effect) potrafią zepsuć obróbkę fotografii i komfort pracy. Przetestuj swój monitor na pełnym ekranie.",
    featuresTitle: "Parametry Podlegające Ocenie",
    features: [
      { title: "Równomierność Luminancji", desc: "Sprawdź, czy narożniki ekranu nie są zauważalnie ciemniejsze od jego centrum." },
      { title: "Stabilność Temperatury Barwowej", desc: "Upewnij się, że biel po lewej stronie ma ten sam odcień co po prawej." },
      { title: "Wykrywanie Efektu Brudnego Ekranu (DSE)", desc: "Szare plansze testowe ujawniają pionowe pasy i plamy w warstwie dyfuzora." },
      { title: "Niezbędnik dla Grafików", desc: "Pozwala zweryfikować, czy monitor nadaje się do precyzyjnego retuszu zdjęć i DTP." }
    ],
    instructionsTitle: "Jak Ocenić Jednolitość Ekranu",
    instructions: [
      "Ustaw monitor na wprost oczu w odległości roboczej i włącz pełny ekran z neutralną bielą.",
      "Podziel wzrokiem ekran na 9 równych stref (siatka 3x3) i porównaj jasność każdej z nich.",
      "Przełącz na kolor 50% szary, aby wykryć ewentualne plamy lub pasy w tle."
    ],
    faqs: [
      { q: "Jaka odchyłka jasności jest dopuszczalna w dobrym monitorze?", a: "W monitorach biurowych do 15-20%, natomiast profesjonalne monitory graficzne nie powinny przekraczać 5-8%." },
      { q: "Co to jest system kompensacji jednolitości (Uniformity Compensation)?", a: "To technologia stosowana w profesjonalnych monitorach (np. EIZO, NEC), która cyfrowo koryguje jasność poszczególnych stref panelu." },
      { q: "Czy zagięte monitory (Curved) mają gorszą jednolitość?", a: "Często tak, zagięcie matrycy wywołuje dodatkowe naprężenia mechaniczne sprzyjające wyciekom światła." },
      { q: "Dlaczego rogi monitora wydają się ciemniejsze?", a: "To zjawisko winietowania podświetlenia krawędziowego, typowe dla tańszych konstrukcji." },
      { q: "Czy kalibracja kolorymetrem może naprawić nierówny ekran?", a: "Kalibracja ustawia poprawny punkt bieli w centrum, ale nie zlikwiduje fizycznej nierówności podświetlenia." }
    ]
  },
  'tracing-lightbox': {
    name: "Deska do Kalkowania z Ekranu",
    title: "Podświetlana Deska do Kalkowania – Zamień Tablet i Laptop w Lightbox",
    metaDescription: "Wykorzystaj ekran laptopa lub tabletu jako podświetlaną deskę kreślarską do kalkowania rysunków, kaligrafii i tatuaży. Maksymalna biel bez wygaszania.",
    h1: "Deska do Kalkowania z Ekranu (Cyfrowy Lightbox)",
    intro: "Nie musisz kupować drogiej deski kreślarskiej LED. Zamień ekran swojego iPada, tabletu z Androidem lub laptopa w idealnie gładki, podświetlany stół kreślarski do precyzyjnego przerysowywania.",
    featuresTitle: "Zalety Cyfrowej Deski do Kalkowania",
    features: [
      { title: "Przenikanie Przez Gruby Papier", desc: "Maksymalna jasność bieli pozwala bez trudu przekalkować rysunek na papier akwarelowy i brystol." },
      { title: "Zablokowany Dotyk i Brak Wygaszania", desc: "Dzięki Screen Wake Lock ekran nie wyłączy się, gdy przyłożysz kartkę i ołówek." },
      { title: "Zero Kosztów Dodatkowych", desc: "Darmowe rozwiązanie dla artystów, tatuażystów, kaligrafów i studentów architektury." },
      { title: "Idealnie Płaska Powierzchnia", desc: "Szklany ekran nowoczesnego tabletu zapewnia doskonałe oparcie dla dłoni i precyzyjne linie." }
    ],
    instructionsTitle: "Jak Używać Ekranu do Kalkowania",
    instructions: [
      "Zwiększ jasność urządzenia do maksimum i włącz tryb Pełny Ekran na naszym narzędziu.",
      "Połóż oryginalny szkic na ekranie, a na niego nałóż czystą kartkę papieru.",
      "W słabiej oświetlonym pokoju linie oryginału będą wyraźnie prześwitywać przez wierzchnią warstwę."
    ],
    faqs: [
      { q: "Czy nacisk ołówka lub pióra nie uszkodzi ekranu?", a: "Używaj miękkich ołówków (2B-4B) lub cienkopisów i rysuj z lekkim naciskiem. Warto stosować folię lub szkło ochronne." },
      { q: "Przez jak gruby papier przebije światło z monitora?", a: "Standardowy papier do ksero (80g/m²) prześwituje idealnie, papier techniczny (do 200g/m²) jest w pełni czytelny przy zgaszonym świetle." },
      { q: "Jak zapobiec przypadkowym kliknięciom podczas rysowania na tablecie?", a: "Włącz funkcję 'Dostęp nadzorowany' w iPadzie lub przypnij aplikację w Androidzie, aby zablokować gesty." },
      { q: "Czy białe światło nie męczy wzroku podczas długiego rysowania?", a: "Możesz lekko ocieplić biel suwakiem barwy, aby uzyskać światło zbliżone do naturalnego pergaminu." },
      { q: "Czy to bezpieczne dla baterii tabletu?", a: "Tak, choć praca na 100% jasności szybciej zużywa akumulator, więc przy dłuższych projektach warto podłączyć ładowarkę." }
    ]
  },
  'photography-backdrop': {
    name: "Tło Fotograficzne z Ekranu",
    title: "Tło Fotograficzne z Ekranu – Cyfrowe Tło do Zdjęć Produktowych",
    metaDescription: "Wykorzystaj monitor komputera jako czyste, bezcieniowe tło do fotografii makro i produktowej. Pobierz jednolite tła w 4K i 8K.",
    h1: "Tło Fotograficzne z Ekranu (Fotografia Studyjna)",
    intro: "Stwórz domowe studio fotograficzne w kilka sekund. Wyświetl jednolite, bezcieniowe tło na ekranie monitora lub telewizora i fotografuj przedmioty, biżuterię lub elektronikę z profesjonalnym efektem.",
    featuresTitle: "Zastosowanie w Fotografii Produktowej",
    features: [
      { title: "Bezcieniowe Podświetlenie Od Dołu", desc: "Połóż tablet poziomo, aby uzyskać efekt lewitującego produktu bez żadnych cieni pod spodem." },
      { title: "Wybór Dowolnego Koloru Tła", desc: "Błyskawicznie zmieniaj kolory od śnieżnobiałego po głęboką czerń bez kupowania kartonów studyjnych." },
      { title: "Kreatywne Odbicia i Refleksy", desc: "Błyszcząca tafla matrycy tworzy eleganckie, lustrzane odbicie ekskluzywnych przedmiotów." },
      { title: "Gotowe do Nagrań Wideo", desc: "Płynne, bezmigotliwe światło sprawdza się idealnie do ujęć produktowych w rolkach i na TikToku." }
    ],
    instructionsTitle: "Wskazówki Fotograficzne",
    instructions: [
      "Ustaw przedmiot bezpośrednio przed ekranem lub na powierzchni leżącego tabletu.",
      "Użyj dłuższego obiektywu (np. 50mm lub 85mm) i otwartej przysłony, aby delikatnie rozmyć strukturę pikseli w tle.",
      "Dobierz balans bieli w aparacie do temperatury wyświetlanego tła (np. 6500K dla sRGB)."
    ],
    faqs: [
      { q: "Czy na zdjęciach nie będzie widać siatki pikseli (mory)?", a: "Odsunięcie przedmiotu od ekranu o 20-30 cm i mała głębia ostrości całkowicie rozmywają piksele tła." },
      { q: "Jaki kolor tła najlepiej sprawdza się dla biżuterii?", a: "Czysta czerń lub głęboki granat tworzą wspaniały kontrast z błyszczącym złotem i srebrem." },
      { q: "Czy mogę używać telewizora jako wielkiego tła do większych obiektów?", a: "Tak, duży telewizor 55-65 cali pozwala fotografować buty, torebki czy sprzęt audio." },
      { q: "Jak uniknąć zarysowania ekranu przez fotografowane przedmioty?", a: "Połóż na matrycy cienką taflę czystego szkła akrylowego (pleksi) jako warstwę ochronną." },
      { q: "Czy kolory na ekranie są zgodne ze standardem poligraficznym?", a: "Nasz generator tworzy kolory w sRGB, co zapewnia wierne odwzorowanie na skalibrowanych aparatach." }
    ]
  },
  'color-picker-fullscreen': {
    name: "Pełnoekranowy Wybór Koloru",
    title: "Pełnoekranowy Wybór Koloru – Dowolny Odcień HEX i RGB na Całym Ekranie",
    metaDescription: "Wprowadź dowolny kod koloru HEX lub RGB i wyświetl go na pełnym ekranie. Bezpłatne narzędzie online dla projektantów i kalibracji.",
    h1: "Pełnoekranowy Wybór Koloru (HEX / RGB)",
    intro: "Sprawdź, jak Twój wybrany kolor prezentuje się na żywo na całej powierzchni matrycy. Wpisz dowolny kod HEX, wartości RGB lub skorzystaj z próbnika barw, aby natychmiast rozświetlić wyświetlacz.",
    featuresTitle: "Możliwości Narzędzia do Wyboru Koloru",
    features: [
      { title: "Precyzyjne Wprowadzanie Kodu", desc: "Pełna obsługa 6-znakowych kodów HEX oraz formatu RGB (0-255)." },
      { title: "Próbnik Kolorów w Czasie Rzeczywistym", desc: "Intuicyjna paleta barw z natychmiastowym podglądem na żywo." },
      { title: "Generowanie Tapet z Własnego Koloru", desc: "Zapisz stworzony odcień jako bezstratną tapetę w jakości do 8K." },
      { title: "Zgodność ze Standardem sRGB", desc: "Gwarantuje dokładne odwzorowanie cyfrowe bez przekłamań gamma." }
    ],
    instructionsTitle: "Jak Wybrać i Wyświetlić Kolor",
    instructions: [
      "Wpisz kod koloru (np. #2A75D3) w polu tekstowym lub kliknij próbnik palety.",
      "Kliknij przycisk 'Pełny Ekran', aby zalać cały monitor wybranym odcieniem.",
      "Naciśnij klawisz ESC, aby powrócić do ustawień i zmienić barwę."
    ],
    faqs: [
      { q: "Czy mogę wpisać nazwę koloru zamiast kodu HEX?", a: "Narzędzie akceptuje kody szesnastkowe HEX (np. #ffffff) oraz format RGB dla maksymalnej precyzji." },
      { q: "Czy kolor wygląda identycznie na każdym monitorze?", a: "Zależy to od kalibracji i przestrzeni barwnej matrycy; na monitorach z pokryciem 100% sRGB kolor jest wzorcowy." },
      { q: "Czy mogę zapisać wybrany kolor jako plik graficzny?", a: "Tak, przewiń stronę do panelu pobierania, aby wyeksportować tło w wybranej rozdzielczości." },
      { q: "Czy narzędzie pamięta mój ostatni wybrany kolor?", a: "Tak, ustawienia są bezpiecznie zapisywane w pamięci lokalnej Twojej przeglądarki." },
      { q: "Czy wybór koloru działa na telefonach komórkowych?", a: "Działa bezproblemowo na ekranach smartfonów z systemem Android i iOS." }
    ]
  },
  'fullscreen-rgb-cycle': {
    name: "Cykl Kolorów RGB Pełny Ekran",
    title: "Cykl Kolorów RGB Pełny Ekran – Automatyczny Tester Matrycy i Pikseli",
    metaDescription: "Automatyczny cykl barw RGB na pełnym ekranie z regulowanym czasem zmiany. Idealny do testowania monitorów, naprawy pikseli i dynamicznego światła.",
    h1: "Cykl Kolorów RGB Pełny Ekran (Auto-Tester)",
    intro: "Automatycznie przełączaj pełnoekranowe plansze testowe pomiędzy kolorem czerwonym, zielonym, niebieskim, białym i czarnym. Skuteczne narzędzie do diagnozy matrycy i ożywiania zaciętych pikseli.",
    featuresTitle: "Kluczowe Opcje Cyklu Kolorów",
    features: [
      { title: "Regulowany Czas Trwania Planszy", desc: "Wybierz interwał 3, 5 lub 10 sekund zależnie od potrzeb badania." },
      { title: "Stymulacja Zaciętych Subpikseli", desc: "Zmienne impulsy barwne pomagają przywrócić sprawność zawieszonym tranzystorom ciekłokrystalicznym." },
      { title: "Płynne Przejścia bez Zacięć", desc: "Zoptymalizowany pod kątem 60 fps kod gwarantuje idealnie płynną pracę przeglądarki." },
      { title: "Dynamiczne Oświetlenie Tła", desc: "Świetny dodatek wizualny jako nastrojowa lampa RGB do Twojego pokoju gamingowego." }
    ],
    instructionsTitle: "Jak Uruchomić Cykl Barw",
    instructions: [
      "Wybierz preferowany czas trwania pojedynczego koloru w panelu sterowania.",
      "Kliknij przycisk 'Uruchom Cykl Pikseli RGB' i przejdź w tryb pełnoekranowy.",
      "Obserwuj matrycę pod kątem punktów, które nie reagują na zmianę koloru tła."
    ],
    faqs: [
      { q: "Jak długo powinien trwać cykl naprawczy dla zaciętego piksela?", a: "Zaleca się pozostawienie włączonego cyklu na 15 do 30 minut dla pełnej stymulacji tranzystorów." },
      { q: "Czy cykl kolorów może uszkodzić sprawny ekran?", a: "Absolutnie nie, zmiana barw to w 100% naturalny i bezpieczny sposób pracy każdej matrycy." },
      { q: "Jak zatrzymać cykl w dowolnym momencie?", a: "Kliknij przycisk 'Zatrzymaj Cykl Pikseli' lub naciśnij klawisz ESC, aby wyjść z pełnego ekranu." },
      { q: "Czy narzędzie działa w tle?", a: "Zaleca się pozostawienie aktywnego okna na wierzchu, aby przeglądarka nie ograniczała liczby klatek na sekundę." },
      { q: "Jakie kolory wchodzą w skład pętli testowej?", a: "Czerwień (#FF0000), Zieleń (#00FF00), Błękit (#0000FF), Biel (#FFFFFF) oraz Czerń (#000000)." }
    ]
  },
  'black-screen-10-hours': {
    name: "Czarny Ekran na 10 Godzin",
    title: "Czarny Ekran na 10 Godzin – Czysta Czerń do Snu, Relaksu i OLED",
    metaDescription: "Wyświetl czysty czarny ekran przez 10 godzin bez wygaszania. Idealny do spokojnego snu, oszczędzania baterii na OLED i słuchania muzyki w nocy.",
    h1: "Czarny Ekran na 10 Godzin (Czysta Czerń)",
    intro: "Potrzebujesz całkowitej ciemności w pokoju bez wyłączania komputera? Nasz czarny ekran utrzymuje urządzenie w stanie czuwania, eliminując zbędne światło matrycy podczas snu lub pobierania plików.",
    featuresTitle: "Zalety 10-Godzinnego Czarnego Ekranu",
    features: [
      { title: "Głęboki i Spokojny Sen", desc: "Zaciemnia sypialnię, powstrzymując niebieskie światło zakłócające produkcję melatoniny." },
      { title: "Zerowe Zużycie Energii na OLED", desc: "Piksele ekranów OLED całkowicie gasną przy kolorze czarnym, oszczędzając prąd." },
      { title: "Zapobieganie Uśpieniu Systemu", desc: "Komputer może pobierać pliki, renderować grafikę lub odtwarzać dźwięk przez całą noc." },
      { title: "Ochrona Przed Wypaleniem", desc: "Chroni matrycę przed utrwalaniem statycznych elementów podczas długiej bezczynności." }
    ],
    instructionsTitle: "Jak Korzystać z Czarnego Ekranu Nocą",
    instructions: [
      "Włącz tryb Pełny Ekran, aby schować pasek zadań i kursor myszy.",
      "Upewnij się, że komputer ma podłączone zasilanie sieciowe.",
      "Gdy się obudzisz, po prostu porusz myszką lub naciśnij ESC, aby wrócić do pracy."
    ],
    faqs: [
      { q: "Czy ten ekran na pewno nie wyłączy się w środku nocy?", a: "Tak, wbudowana blokada Screen Wake Lock uniemożliwia przejście systemu w stan uśpienia." },
      { q: "Czy czarny ekran oszczędza baterię na zwykłym monitorze LCD?", a: "W matrycach LCD podświetlenie LED nadal delikatnie świeci, jednak na ekranach OLED zużycie prądu spada niemal do zera." },
      { q: "Czy rano obudzi mnie dźwięk budzika z komputera?", a: "Tak, wszystkie dźwięki systemowe, odtwarzacze muzyki i budziki działają w tle normalnie." },
      { q: "Jak wyjść z czarnego ekranu po przebudzeniu?", a: "Wystarczy nacisnąć klawisz ESC lub kliknąć myszką w dowolnym miejscu." },
      { q: "Czy mogę słuchać podcastów na YouTube przy czarnym ekranie?", a: "Tak, uruchom odtwarzanie w osobnej karcie, a na wierzchu włącz nasze pełnoekranowe narzędzie." }
    ]
  },
  'white-screen-1-hour': {
    name: "Biały Ekran na 1 Godzinę",
    title: "Biały Ekran na 1 Godzinę – Stałe Jasne Światło do Pracy i Nauki",
    metaDescription: "Czysty biały ekran pełnoekranowy ze stałym 1-godzinnym czasem świecenia. Idealny do sesji skupienia, doświetlenia kamery i porannej energii.",
    h1: "Biały Ekran na 1 Godzinę (Sesja Światła)",
    intro: "Utrzymaj optymalną jasność otoczenia przez dokładnie jedną godzinę. Doskonałe narzędzie do zorganizowanych sesji pracy w technice Pomodoro, doświetlania wideokonferencji lub porannego pobudzenia.",
    featuresTitle: "Zastosowanie Sesji 1-Godzinnej",
    features: [
      { title: "Kontrola Czasu i Skupienia", desc: "Wyznacza precyzyjne ramy czasowe na intensywną pracę koncepcyjną bez rozpraszaczy." },
      { title: "Stabilne Światło do Rozmowy", desc: "Zapewnia niezmienne oświetlenie twarzy przez całe 60-minutowe spotkanie biznesowe." },
      { title: "Fototerapia Poranna", desc: "Jasne białe światło o poranku wspomaga hamowanie melatoniny i zwiększa czujność umysłu." },
      { title: "Automatyczny Brak Wygaszania", desc: "Gwarancja ciągłego podświetlenia bez potrzeby ciągłego poruszania myszą." }
    ],
    instructionsTitle: "Jak Przeprowadzić Godzinną Sesję",
    instructions: [
      "Ustaw wygodną pozycję przed monitorem i włącz pełny ekran.",
      "Rozpocznij swoje zadanie, ciesząc się równomiernym światłem sprzyjającym koncentracji.",
      "Po upływie godziny zrób 5-minutową przerwę na relaks dla oczu."
    ],
    faqs: [
      { q: "Dlaczego sesja trwa akurat 1 godzinę?", a: "To optymalny czas intensywnego bloku skupienia przed zalecaną przerwą na odpoczynek wzroku." },
      { q: "Czy białe światło pomaga na senność rano?", a: "Tak, wysoka luminancja o temperaturze dziennej stymuluje receptory melanopsynowe w siatkówce, budząc organizm." },
      { q: "Czy mogę skrócić lub wydłużyć ten czas?", a: "Tak, możesz wyjść w dowolnej chwili klawiszem ESC lub skorzystać z naszego konfigurowalnego timera ekranu." },
      { q: "Czy ekran nagrzewa się podczas godzinnej pracy na pełnej bieli?", a: "Nowoczesne monitory LED nagrzewają się minimalnie i są w pełni przystosowane do ciągłego wyświetlania jasnych scen." },
      { q: "Czy narzędzie działa na tablecie leżącym na biurku?", a: "Oczywiście, tablet z białym ekranem to świetna lampka biurkowa do czytania notatek." }
    ]
  },
  'screen-timer': {
    name: "Timer Ekranu Pełnoekranowy",
    title: "Timer Ekranu Pełnoekranowy – Zegar Odliczający do Prezentacji i Pracy",
    metaDescription: "Pełnoekranowy zegar i timer odliczający czas do prezentacji, ćwiczeń i pracy w skupieniu. Czytelne cyfry i estetyczne tło bez rozpraszaczy.",
    h1: "Timer Ekranu Pełnoekranowy (Odliczanie Czasu)",
    intro: "Zorganizuj swój czas z maksymalną czytelnością. Pełnoekranowy timer odliczający minuty i sekundy na kontrastowym tle ułatwia prowadzenie prezentacji, warsztatów, debat i bloków pracy głębokiej.",
    featuresTitle: "Atuty Pełnoekranowego Timera",
    features: [
      { title: "Gigantyczne i Czytelne Cyfry", desc: "Doskonale widoczne z drugiego końca sali konferencyjnej, klasy lub domowego biura." },
      { title: "Minimalistyczny Design", desc: "Brak zbędnych animacji i reklam – tylko czysty czas pomagający utrzymać dyscyplinę." },
      { title: "Kontrast Dopasowany do Wzroku", desc: "Działa na ciemnym lub jasnym tle w zależności od oświetlenia w pomieszczeniu." },
      { title: "Pewność Działania", desc: "Dzięki Screen Wake Lock ekran nie wygaśnie podczas przemówienia publicznego." }
    ],
    instructionsTitle: "Jak Używać Timera Ekranowego",
    instructions: [
      "Wprowadź docelowy czas w minutach lub sekundach w panelu sterowania.",
      "Uruchom odliczanie i przejdź w tryb pełnego ekranu klawiszem F.",
      "Kontroluj upływający czas bez nerwowego zerkania na zegarek na ręku."
    ],
    faqs: [
      { q: "Do czego najczęściej używa się pełnoekranowego timera?", a: "Do wystąpień publicznych, prelekcji TEDx, egzaminów szkolnych, treningów interwałowych i techniki Pomodoro." },
      { q: "Czy po zakończeniu odliczania rozlega się sygnał dźwiękowy?", a: "Tak, delikatny sygnał dźwiękowy informuje o upływie ustawionego czasu." },
      { q: "Czy timer działa poprawnie na rzutnikach i projektorach?", a: "Świetnie współpracuje ze wszystkimi projektorami i zewnętrznymi ekranami podłączonymi przez HDMI." },
      { q: "Czy można zapauzować odliczanie w trakcie przemówienia?", a: "Tak, spacja umożliwia natychmiastowe zatrzymanie i wznowienie odliczania." },
      { q: "Czy narzędzie wymaga połączenia z internetem po załadowaniu?", a: "Nie, po jednorazowym otwarciu w przeglądarce timer odlicza czas całkowicie lokalnie w pamięci urządzenia." }
    ]
  }
};

const toolsTrData = {
  'dead-pixel-test': {
    name: "Ölü Piksel Testi",
    title: "Ölü Piksel Testi – Monitör ve Telefon Ekranı Testi Çevrimiçi",
    metaDescription: "Monitörünüzü veya telefonunuzu ölü ve takılmış piksellere karşı tam ekranda test edin. LCD ve OLED paneller için RGB renk döngülü ücretsiz araç.",
    h1: "Ölü Piksel Testi (Tam Ekran Monitör Testi)",
    intro: "Bilgisayar monitörünüzde, dizüstü bilgisayarınızda, tabletinizde veya telefonunuzda bozuk, takılmış veya ölü alt pikselleri kolayca tespit edin. Aracımız Kırmızı, Yeşil, Mavi, Beyaz ve Siyah renkleri tam ekranda sunar.",
    featuresTitle: "Ölü Piksel Testi Nasıl Çalışır?",
    features: [
      { title: "Ölü Piksel Tespiti", desc: "Ölü pikseller tamamen sönük kalır ve açık renkli arka planlarda belirgin siyah noktalar olarak görünür." },
      { title: "Takılmış Piksel İzolasyonu", desc: "Takılmış pikseller sürekli tek bir renkte yanar. Zemin rengini değiştirmek onları anında açığa çıkarır." },
      { title: "Otomatik RGB Renk Döngüsü", desc: "Tüm paneli dikkatlice incelemek için döngü aralığını 3, 5 veya 10 saniyeye ayarlayın." },
      { title: "Her Panel Türüyle Uyumlu", desc: "OLED, AMOLED, IPS, VA ve TN ekranlarla her çözünürlükte sorunsuz çalışır." }
    ],
    instructionsTitle: "Testi Uygulama Adımları",
    instructions: [
      "Test öncesinde toz tanelerini piksel hatasıyla karıştırmamak için ekranınızı mikrofiber bezle silin.",
      "Tarayıcı sekmelerini ve pencereleri gizlemek için 'Tam Ekran' butonuna tıklayın.",
      "1-5 tuşlarıyla renkleri değiştirin veya otomatik döngüyü açarak ekranın her noktasını inceleyin."
    ],
    faqs: [
      { q: "Ölü piksel ile takılmış piksel arasındaki fark nedir?", a: "Ölü piksel tamamen elektrik almayan siyah bir noktadır. Takılmış piksel ise tek bir renkte (kırmızı, yeşil, mavi) takılı kalmıştır ve bazen düzeltilebilir." },
      { q: "Hızlı RGB renk döngüsü takılmış pikselleri düzeltebilir mi?", a: "Evet, hızlı renk geçişleri takılmış alt pikselin transistörünü uyararak bazen normal çalışmasına geri döndürebilir." },
      { q: "Toz lekesi ile ölü pikseli nasıl ayırt edebilirim?", a: "Ekrana farklı açılardan bakın: toz camın üstündedir ve gölge yapar, ölü piksel ise doğrudan panelin içinde yer alır." },
      { q: "Kaç ölü piksel garanti kapsamında değişim sağlar?", a: "Üreticinin ISO standart politikasına göre değişir; genellikle 3 ila 5 bozuk piksel garanti değişimi için yeterlidir." },
      { q: "iPhone ve iPad cihazlarda çalışır mı?", a: "Evet, iOS ve Android cihazlarda Safari veya Chrome üzerinden uygulama yüklemeden doğrudan çalışır." }
    ]
  },
  'screen-cleaning': {
    name: "Ekran Temizleme Modu",
    title: "Ekran Temizleme Modu – Monitör ve Laptop İçin Saf Beyaz Ekran",
    metaDescription: "Toz, parmak izi ve lekeleri kolayca görmek için homojen saf beyaz ekran. Ekran kapanmadan sürekli açık kalır.",
    h1: "Ekran Temizleme Modu (Sürekli Açık Ekran)",
    intro: "Dizüstü bilgisayarınızın, monitörünüzün veya telefonunuzun ekranını güvenle temizleyin. %100 parlaklıktaki saf beyaz ışık en küçük toz zerreciklerini ve parmak izlerini anında görünür kılar.",
    featuresTitle: "Ekran Temizleme Modunun Avantajları",
    features: [
      { title: "Lekeleri Anında Görün", desc: "Dağınık beyaz ışık, kapalı ekranda görünmeyen yağ lekelerini ve tozları belirginleştirir." },
      { title: "Uyku Modunu Engeller", desc: "Siz ekranı temizlerken monitörünüz kararmaz veya bekleme moduna geçmez." },
      { title: "Yazılım Yükleme Gerektirmez", desc: "Doğrudan web tarayıcınızdan güvenli ve reklamsız erişim." },
      { title: "Parlama Önleyici Kaplamayı Korur", desc: "Ekran yüzeyine gereksiz baskı uygulamadan nazikçe temizlemenize yardımcı olur." }
    ],
    instructionsTitle: "Ekranınızı Güvenle Nasıl Temizlersiniz?",
    instructions: [
      "Ekranın tamamını aydınlatmak için Tam Ekran moduna geçin.",
      "Yüzeydeki sert tozları temizlemeden önce bir hava pompası ile nazikçe uzaklaştırın.",
      "Saf mikrofiber bezi saf suyla çok hafif nemlendirerek dairesel hareketlerle silin."
    ],
    faqs: [
      { q: "Neden ekranı temizlerken beyaz ekran açmalıyım?", a: "Arkadan gelen homojen beyaz aydınlatma, siyah kapalı ekranda gizlenen parmak izi ve yağ lekelerini net biçimde ortaya çıkarır." },
      { q: "Ekran açıkken silmek zararlı mıdır?", a: "Nazik bir mikrofiber bezle hafifçe silindiğinde tamamen güvenlidir ve temizlenen yerleri anında görmenizi sağlar." },
      { q: "Ekran temizliğinde hangi sıvı kullanılmalıdır?", a: "Mikrofiber beze çok az damlatılmış saf su (distile su). Alkol veya amonyak içeren cam temizleyiciler kaplamayı bozar." },
      { q: "İnatçı lekeler nasıl çıkarılır?", a: "Bezin bir ucunu distile suyla nemlendirip lekenin üzerinde birkaç saniye bekletin, ardından kuru tarafıyla kurulayın." },
      { q: "Kağıt havlu veya mendil ekranı çizer mi?", a: "Evet! Kağıt ürünleri sert ağaç lifleri içerir ve ekranın yansıma önleyici kaplamasında geri dönüşsüz mikro çizikler oluşturur." }
    ]
  },
  'zoom-ring-light': {
    name: "Zoom Halka Işık Aracı",
    title: "Zoom Halka Işık Aracı – Görüntülü Görüşmeler İçin Ekran Aydınlatması",
    metaDescription: "Monitörünüzü Zoom, Teams ve Meet görüşmeleri için sanal ring light lambasına dönüştürün. Yüz aydınlatması için sıcaklık ve parlaklık ayarı.",
    h1: "Zoom Halka Işık Aracı (Sanal Kamera Işığı)",
    intro: "Pahalı LED halka ışıklar satın almadan web kamerası görüntünüzü profesyonel seviyeye çıkarın. Ekranınızı yüzünüzü yumuşak bir ışıkla aydınlatan geniş bir softbox paneline dönüştürün.",
    featuresTitle: "Sanal Işık Panelinin Özellikleri",
    features: [
      { title: "Renk Sıcaklığı Ayarı", desc: "Doğal ve canlı bir ten rengi için sıcak sarıdan soğuk beyaza kadar dilediğiniz gibi ayarlayın." },
      { title: "Geniş Yüzeyli Yumuşak Işık", desc: "Geniş ekran yüzeyi, küçük LED lambaların aksine göz altlarında sert gölgeler oluşturmaz." },
      { title: "Hassas Parlaklık Kontrolü", desc: "Gözlerinizi yormayacak ve kameranın pozlamasını dengeleyecek en ideal parlaklığı seçin." },
      { title: "Gözlük Camında Parlamayı Azaltır", desc: "Geniş açılı ve sıcak tonlu ışık gözlük kullananlar için keskin parlama noktalarını önler." }
    ],
    instructionsTitle: "Zoom İçin Işık Nasıl Ayarlanır?",
    instructions: [
      "Bu aracı web kamerasının hemen arkasında bulunan monitörünüzde açın.",
      "Yüz tonunuzun sağlıklı ve net görünmesi için renk sıcaklığı sürgüsünü ayarlayın.",
      "Zoom penceresini ekranın kenarına yerleştirin veya maksimum parlaklık için tam ekran yapın."
    ],
    faqs: [
      { q: "Monitör ışığı gerçek bir halka ışığın yerini tutabilir mi?", a: "Evet, büyük ekran paneli ışığı çok daha homojen dağıtarak profesyonel stüdyo softbox etkisi yaratır." },
      { q: "Ten rengi için hangi renk sıcaklığı en iyisidir?", a: "Hafif sıcak tonlar (sürgüde %50-60 seviyesi) web kameralarının soluk renk üretimini dengeler." },
      { q: "Uzun toplantılarda gözü yorar mı?", a: "Parlaklık sürgüsünü odanızın ortamına göre kısarak gözlerinizi rahatlatabilirsiniz." },
      { q: "Çift monitör kurulumunda kullanılabilir mi?", a: "Evet, bir ekranda toplantıyı izlerken kameranın arkasındaki diğer ekranda bu ışığı açık tutabilirsiniz." },
      { q: "Dizüstü bilgisayarın pilini hızlı bitirir mi?", a: "Yüksek parlaklık pil tüketimini artıracağından önemli toplantılarda cihazı şarja takmanız önerilir." }
    ]
  },
  'webcam-light': {
    name: "Webcam Aydınlatma Aracı",
    title: "Webcam Aydınlatma Aracı – Karanlık Odalar İçin Yüz Doğu Işığı",
    metaDescription: "Web kamerası için ücretsiz ekran ışığı. Yüzdeki gölgeleri yok edin ve loş ışıklı ortamlarda video kalitenizi anında artırın.",
    h1: "Webcam Aydınlatma Aracı (Görüntülü Görüşme Işığı)",
    intro: "Web kameraları loş ortamlarda grenli, karlı ve kalitesiz görüntü üretir. Ekranınızı parlak ve pürüzsüz bir ışık paneline dönüştürerek kamera sensöründeki tüm gürültüyü yok edin.",
    featuresTitle: "Video Kalitenizi Artıran Özellikler",
    features: [
      { title: "Kamera Grenini ve Karlanmayı Önler", desc: "Yeterli ışık alan kamera ISO değerini düşürerek kristal netliğinde görüntü verir." },
      { title: "Göz Altı Gölgelerini Yumuşatır", desc: "Önden gelen geniş ışık yorgunluk izlerini gizler ve gözlerde parlak bir ışıltı oluşturur." },
      { title: "Ekstra Donanıma Gerek Yoktur", desc: "Kablo, tripod veya masa lambası aramadan tek tıkla tarayıcınızdan aydınlatın." },
      { title: "Tüm Görüntülü Uygulamalarla Uyumlu", desc: "Zoom, Teams, Google Meet, Skype, Discord ve OBS ile kusursuz çalışır." }
    ],
    instructionsTitle: "En İyi Görüntü İçin İpuçları",
    instructions: [
      "Monitörünüzü göz hizanıza gelecek şekilde konumlandırın.",
      "Kameranızdaki önizleme netleşene kadar parlaklık sürgüsünü artırın.",
      "Arkanızda doğrudan kameraya vuran güçlü bir ışık kaynağı (örneğin açık pencere) olmamasına dikkat edin."
    ],
    faqs: [
      { q: "Web kameram neden karanlıkta karlı gösteriyor?", a: "Yetersiz ışıkta küçük kamera sensörü ışığı artırmak için dijital kazancı (ISO) yükseltir ve bu da gürültüye yol açar." },
      { q: "Gözlükteki yansımaları nasıl önleyebilirim?", a: "Monitörünüzü hafifçe yukarı kaldırıp aşağı doğru eğin ve hafif sıcak bir renk tonu seçin." },
      { q: "Telefonumu ek yan ışık olarak kullanabilir miyim?", a: "Evet! Telefonunuzda sitemizi açıp yan tarafa koyarak yüzünüzdeki gölgeleri mükemmel şekilde dengeleyebilirsiniz." },
      { q: "Canlı yayınlar için uygun mudur?", a: "Twitch, YouTube ve TikTok yayıncıları için pratik ve son derece etkili bir ek aydınlatmadır." },
      { q: "Ücretli midir?", a: "%100 ücretsizdir, reklam veya filigran içermez." }
    ]
  },
  'screen-flicker-test': {
    name: "Ekran Titreme Testi (PWM)",
    title: "Ekran Titreme Testi – PWM Titremesi ve Göz Yorgunluğu Kontrolü",
    metaDescription: "Monitörünüzün PWM nedeniyle titreyip titremediğini kontrol edin. Göz yorgunluğu ve baş ağrısını önlemek için ücretsiz çevrimiçi test.",
    h1: "Ekran Titreme Testi (PWM Kontrolü)",
    intro: "Pek çok modern ekran parlaklığı ayarlamak için arka aydınlatmayı hızla açıp kapatan PWM (Darbe Genişlik Modülasyonu) kullanır. Gözle fark edilmese bile bu titreme şiddetli baş ağrısına yol açabilir.",
    featuresTitle: "Neden Ekran Titremesi Test Edilmelidir?",
    features: [
      { title: "PWM Tespiti", desc: "Monitörünüzün gerçek Flicker-Free (titreşimsiz) teknolojisine sahip olup olmadığını belirler." },
      { title: "Göz Sağlığını Koruma", desc: "Titremenin başladığı parlaklık seviyesini bularak gözlerinizi korumanızı sağlar." },
      { title: "Kalem ve Kamera ile Kolay Test", desc: "Akıllı telefon kamerası ile saniyeler içinde doğrulayabileceğiniz pratik yöntemler." },
      { title: "Ergonomik Çalışma Ortamı", desc: "Uzun saatler bilgisayar başında çalışanlar için konforlu bir ekran ayarı sunar." }
    ],
    instructionsTitle: "Titremeyi Tespit Etme Yöntemleri",
    instructions: [
      "Tam Ekran modunu açın ve monitör parlaklığını yaklaşık %20-30 seviyesine düşürün.",
      "Telefonunuzun kamerasını ekrana tutun; ekranda hareket eden yatay çizgiler PWM titremesine işaret eder.",
      "Ekranın önünde bir kalemi hızla sallayın: kesintili gölgeler titremeyi, yumuşak bir yelpaze titreşimsizliği gösterir."
    ],
    faqs: [
      { q: "Monitörlerde PWM nedir?", a: "PWM (Darbe Genişlik Modülasyonu), parlaklığı kısmak için arka aydınlatma LED'lerini yüksek hızda açıp kapatan bir yöntemdir." },
      { q: "Ekran titremesi hangi sağlık sorunlarına yol açar?", a: "Gözlerde kuruluk, yanma hissi, bulanık görme ve kronik migren/baş ağrısı yapabilir." },
      { q: "Flicker-Free ne anlama gelir?", a: "Monitörün parlaklığı açıp kapatarak değil, akım voltajını ayarlayarak (DC Karartma) titreşimsiz biçimde kıstığını ifade eder." },
      { q: "Parlaklığı %100 yapmak titremeyi yok eder mi?", a: "Genellikle evet, çünkü maksimum parlaklıkta LED'ler sürekli yanık kalır ve darbe döngüsü durur." },
      { q: "Mavi ışık filtreli gözlükler titremeyi engeller mi?", a: "Hayır, mavi ışık gözlükleri dalga boyunu filtreler ancak fiziksel parlaklık titreşimini durduramaz." }
    ]
  },
  'backlight-bleed-test': {
    name: "Işık Sızması Testi (Backlight Bleed)",
    title: "Işık Sızması Testi – IPS ve VA Monitörlerde Panel Sızıntısı Kontrolü",
    metaDescription: "Karanlık bir odada monitörünüzün kenarlarındaki ışık sızmasını test edin. Backlight bleed ile normal IPS parlaması (IPS glow) farkını öğrenin.",
    h1: "Işık Sızması Testi (Karanlık Ekran)",
    intro: "Işık sızması (Backlight Bleeding), sıvı kristal panelin kenarlarındaki mekanik baskı veya montaj kusurları nedeniyle karanlık sahnelerde kenarlardan sarı veya beyaz ışık fışkırması durumudur.",
    featuresTitle: "Panel Işık Dağılımı Teşhisi",
    features: [
      { title: "Saf Tam Ekran Siyah", desc: "Gözü yanıltacak tüm arayüz pencerelerini gizleyerek saf siyah bir zemin sunar." },
      { title: "Bleed ile IPS Glow Ayrımı", desc: "Işık sızması açı değiştikçe sabit kalır; IPS parlaması ise bakış açısıyla birlikte yer değiştirir." },
      { title: "Yeni Satın Alınan Cihaz Denetimi", desc: "Monitör veya laptop satın aldıktan sonraki 14 günlük iade sürecinde yapılması gereken kritik test." },
      { title: "Film ve Oyun Deneyimi", desc: "Karanlık temalı oyunlarda ve sinema filmlerinde siyah kalitesini güvenceye alır." }
    ],
    instructionsTitle: "Doğru Test Nasıl Yapılır?",
    instructions: [
      "Odadaki tüm ışıkları kapatın ve perdeleri tamamen çekin.",
      "Bu araçta Tam Ekran modunu açın ve gözlerinizin karanlığa alışması için bir dakika bekleyin.",
      "Monitörün tam karşısından yaklaşık 1 metre mesafeden kenarları ve köşeleri gözlemleyin."
    ],
    faqs: [
      { q: "Işık sızması ile IPS Glow arasındaki fark nedir?", a: "Işık sızması donanımsal kenar baskısından kaynaklanır ve sabittir. IPS Glow ise IPS kristallerinin yapısından dolayı köşelerde açıya bağlı değişen ışıltıdır." },
      { q: "Işık sızması yazılımla düzeltilebilir mi?", a: "Hayır, bu tamamen panel kasasının montajı ve mekanik yapısıyla ilgili fiziksel bir durumdur." },
      { q: "Işık sızması garanti kapsamına girer mi?", a: "Görüşü ve günlük kullanımı ciddi oranda bozan aşırı sızıntılar yetkili servislerce ayıplı mal sayılarak değiştirilir." },
      { q: "OLED panellerde ışık sızması olur mu?", a: "Kesinlikle hayır! OLED'de arka aydınlatma yoktur, siyah gösterilirken ilgili pikseller tamamen kapanır." },
      { q: "Monitör vidasını gevşetmek sızmayı azaltır mı?", a: "Bazen çerçeve baskısını azaltmak sızıntıyı hafifletebilir ancak cihazı açmak garantiyi geçersiz kılar." }
    ]
  },
  'oled-burn-in-test': {
    name: "OLED Yanması Testi (Burn-In)",
    title: "OLED Yanması Testi – Ekran İzi ve Kalıcı Yanık Tespiti",
    metaDescription: "OLED televizyon, monitör veya telefonunuzu piksel yanmasına karşı test edin. Kırmızı, gri ve beyaz saf renk test panelleri.",
    h1: "OLED Yanması Testi (Piksel Sağlığı Denetimi)",
    intro: "OLED ekranlar kusursuz kontrast sunar ancak organik bileşenler sabit pencereler, görev çubukları veya kanal logoları gibi statik öğelerin uzun süre gösterilmesiyle düzensiz yıpranabilir.",
    featuresTitle: "OLED Teşhis Aracının Yetenekleri",
    features: [
      { title: "%5 ve %20 Gri Test Alanları", desc: "Orta gri tonlar, erken evre piksel yanıklarını ve dikey şeritlenme (banding) sorununu en net gösteren renktir." },
      { title: "Temel Renk İzolasyonu", desc: "Kırmızı, yeşil ve mavi alt piksellerin yıpranmasını ayrı ayrı test edebilme imkanı." },
      { title: "Geçici İzi Kalıcı Yanıktan Ayırma", desc: "Görüntü tutulmasının (image retention) geçici mi yoksa kalıcı bir yanık mı olduğunu anlamanızı sağlar." },
      { title: "Akıllı TV'lerle Tam Uyumlu", desc: "LG, Samsung, Sony ve Philips OLED TV web tarayıcılarında mükemmel tam ekran desteği." }
    ],
    instructionsTitle: "OLED Paneli Test Etme Adımları",
    instructions: [
      "Tam Ekran moduna geçin ve sırasıyla gri, kırmızı ve eflatun renkleri seçin.",
      "Görev çubuğunun veya sık izlediğiniz kanalların logolarının bulunduğu yerleri dikkatlice inceleyin.",
      "Kalıntı görüyorsanız TV ayarlarınızdan 'Piksel Temizleme' veya 'Piksel Yenileme' döngüsünü başlatın."
    ],
    faqs: [
      { q: "Geçici görüntü tutulması ile kalıcı yanık arasındaki fark nedir?", a: "Geçici tutulma birkaç dakika içinde kaybolur. Kalıcı yanık ise organik piksellerin fiziksel olarak zayıflaması sonucu silinmeyen izdir." },
      { q: "OLED'de en çabuk hangi renk yıpranır?", a: "Panel mimarisine bağlı olarak genellikle kırmızı veya mavi alt pikseller daha yüksek enerjiyle çalıştığı için daha duyarlıdır." },
      { q: "Piksel temizleme (Pixel Refresher) yanığı geçirir mi?", a: "Küçük voltaj dengesizliklerini giderir ancak ileri seviyedeki kalıcı fiziksel aşınmayı tamamen yok edemez." },
      { q: "OLED monitörümü yanmaktan nasıl korurum?", a: "Windows görev çubuğunu otomatik gizleyin, siyah masaüstü duvar kağıdı kullanın ve uyku zamanlayıcısını kısa tutun." },
      { q: "Üreticiler OLED yanmasını garantiye dahil ediyor mu?", a: "Birçok yeni nesil oyuncu monitörü artık 3 yıllık yanma garantisi ile satılmaktadır." }
    ]
  },
  'monitor-uniformity-test': {
    name: "Monitör Homojenlik Testi",
    title: "Monitör Homojenlik Testi – Parlaklık ve Renk Dağılımı Kontrolü",
    metaDescription: "Monitörünüzün tüm yüzeyindeki parlaklık ve renk homojenliğini test edin. Fotoğrafçılar, tasarımcılar ve oyuncular için ideal araç.",
    h1: "Monitör Homojenlik Testi (Luminans ve Renk)",
    intro: "Düzensiz arka aydınlatma veya ekranın farklı bölgelerindeki renk sapmaları (kirli ekran efekti - DSE) profesyonel fotoğraf düzenlemeyi ve görsel deneyimi olumsuz etkiler.",
    featuresTitle: "Homojenlik Değerlendirme Kriterleri",
    features: [
      { title: "Parlaklık Dengesi", desc: "Ekranın köşelerinin ve kenarlarının merkeze göre karanlık kalıp kalmadığını kontrol edin." },
      { title: "Renk Sıcaklığı Tutarlılığı", desc: "Ekranın sol tarafındaki beyaz tonun sağ tarafla aynı sıcaklıkta olduğundan emin olun." },
      { title: "Kirli Ekran Efekti (DSE) Tespiti", desc: "Açık gri zemin üzerinde dikey çizgileri, dalgalanmaları veya lekelenmeleri ortaya çıkarır." },
      { title: "Grafik ve Tasarım İçin Şart", desc: "Doğru baskı ve renk tutarlılığı için monitörünüzün uygunluğunu test eder." }
    ],
    instructionsTitle: "Homojenlik Nasıl Test Edilir?",
    instructions: [
      "Monitörünüzün tam karşısına oturun ve saf beyaz tam ekranı açın.",
      "Ekranı zihninizde 9 eşit kareye bölün (3x3 ızgara) ve bölgeler arasındaki aydınlığı karşılaştırın.",
      "Ardından %50 gri renge geçerek bulutlanma veya dalgalanma olup olmadığını inceleyin."
    ],
    faqs: [
      { q: "İyi bir monitörde kabul edilebilir parlaklık sapması nedir?", a: "Standart ofis monitörlerinde %15-20'ye kadar sapma normaldir; profesyonel tasarım monitörlerinde bu oran %5-8'i aşmamalıdır." },
      { q: "Kavisli (Curved) monitörlerde homojenlik neden daha zordur?", a: "Panelin bükülmesi kristaller üzerinde gerilim yaratır ve köşelerde ışık dengesizliklerine yol açabilir." },
      { q: "Ekran köşeleri neden daha karanlık görünür?", a: "Bu durum köşe vinyeti olarak adlandırılır ve kenardan aydınlatmalı LED panellerin doğal bir özelliğidir." },
      { q: "Kolorimetre ile kalibrasyon homojenliği düzeltir mi?", a: "Kalibrasyon sadece merkez noktadaki renk doğruluğunu sağlar; fiziksel aydınlatma dengesizliğini donanımsal olarak düzeltemez." },
      { q: "Uniformity Compensation (Homojenlik Dengeleme) nedir?", a: "Üst düzey monitörlerde (EIZO, NEC vb.) ekran bölgelerinin parlaklığını dijital olarak dengeleyen dahili işlemci teknolojisidir." }
    ]
  },
  'tracing-lightbox': {
    name: "Çizim İçin Işıklı Kutu Ekran",
    title: "Çizim İçin Işıklı Kutu Ekran – Ekranı Çizim Masasına Dönüştürün",
    metaDescription: "Laptop veya tabletinizi çizim, kaligrafi ve dövme şablonları için ışıklı kopya masasına dönüştürün. Kapanmayan saf beyaz ışık.",
    h1: "Çizim İçin Işıklı Kutu Ekran (Dijital Lightbox)",
    intro: "Pahalı ışıklı çizim masaları satın almanıza gerek yok! iPad'inizi, Android tabletinizi veya dizüstü bilgisayarınızı çizim ve şablon kopyalama için pürüzsüz bir ışık kutusuna dönüştürün.",
    featuresTitle: "Dijital Işıklı Kutunun Avantajları",
    features: [
      { title: "Kalın Kağıtlardan Bile Geçen Işık", desc: "Maksimum beyaz parlaklık, eskizlerin suluboya ve resim kağıtlarından rahatça görünmesini sağlar." },
      { title: "Ekran Asla Kapanmaz", desc: "Ekran Uyku Kilidi sayesinde siz kağıdı koyup çizerken ekran kararmaz veya bekleme moduna geçmez." },
      { title: "Sıfır Maliyetli Çözüm", desc: "Sanatçılar, dövme ustaları, mimarlar ve kaligrafi ile uğraşanlar için tamamen ücretsiz." },
      { title: "Kusursuz Pürüzsüz Yüzey", desc: "Modern tabletlerin cam yüzeyi cetvel ve kalem kullanımı için son derece düzgündür." }
    ],
    instructionsTitle: "Çizim İçin Ekran Nasıl Kullanılır?",
    instructions: [
      "Cihazınızın parlaklığını %100 seviyesine getirin ve bu araçta Tam Ekranı açın.",
      "Orijinal eskizinizi ekranın üzerine, temiz çizim kağıdınızı da onun üstüne yerleştirin.",
      "Odanın ışığını hafifçe kısarak alttan vuran ışıkla çizgileri kolayca kopyalayın."
    ],
    faqs: [
      { q: "Kalem bastırmak ekranıma zarar verir mi?", a: "Yumuşak uçlu kurşun kalemler (2B-4B) kullanın ve hafif bastırın. Cihazınızda ekran koruyucu cam olması önerilir." },
      { q: "Işık hangi kalınlıktaki kağıtlardan geçer?", a: "Standart 80g fotokopi kağıtlarından çok rahat geçer; 200g resim kağıtları için odanın ışığını kapatmak yeterlidir." },
      { q: "Tablette çizerken el temasını nasıl engellerim?", a: "iPad'de 'Güdümlü Erişim' özelliğini, Android'de 'Ekran Sabitleme'yi açarak dokunmatik kontrolleri geçici olarak kilitleyebilirsiniz." },
      { q: "Gözü yormaması için rengi değiştirebilir miyim?", a: "Renk sürgüsünü hafifçe sıcak sarıya kaydırarak parşömen tonunda dinlendirici bir ışık elde edebilirsiniz." },
      { q: "Tablet pili için güvenli midir?", a: "Tamamen güvenlidir ancak maksimum parlaklık pil tüketeceği için şarj kablosunu takılı tutmanız tavsiye edilir." }
    ]
  },
  'photography-backdrop': {
    name: "Fotoğraf Arka Planı Ekranı",
    title: "Fotoğraf Arka Planı Ekranı – Ürün Çekimleri İçin Dijital Fon Işığı",
    metaDescription: "Monitörünüzü makro ve ürün fotoğrafçılığı için gölgesiz, saf bir arka plan paneline dönüştürün. 4K ve 8K düz renk fonlar.",
    h1: "Fotoğraf Arka Planı Ekranı (Ürün Fotoğrafçılığı)",
    intro: "Saniyeler içinde evinizde profesyonel bir stüdyo kurun. Monitörünüzü veya televizyonunuzu gölgesiz düz bir arka plana dönüştürerek takı, teknolojik aletler veya figürler için kusursuz çekimler yapın.",
    featuresTitle: "Stüdyo Fotoğrafçılığı İçin Özellikler",
    features: [
      { title: "Alttan Gölgesiz Işıklandırma", desc: "Tabletinizi yatay koyarak ürünlerin altında hiçbir gölge bırakmayan parlak bir çekim alanı elde edin." },
      { title: "Tek Tıkla Renk Değişimi", desc: "Pahalı fon kartonları almadan beyaz, siyah veya renkli arka planlar arasında anında geçiş yapın." },
      { title: "Zarif Cam Yansımaları", desc: "Ekranın pürüzsüz cam yüzeyi lüks ürün çekimleri için şık ve estetik bir ayna yansıması sunar." },
      { title: "Video Çekimleri İçin İdeal", desc: "Reels, TikTok ve YouTube Shorts ürün tanıtımları için titreşimsiz pürüzsüz fon ışığı." }
    ],
    instructionsTitle: "Fotoğraf Çekimi İpuçları",
    instructions: [
      "Fotoğraflayacağınız nesneyi ekranın hemen önüne veya düz yatan tabletin üzerine yerleştirin.",
      "Piksel desenini yok etmek için açık diyaframlı (örneğin f/1.8 veya f/2.8) bir lens kullanarak arka planı hafifçe flulaştırın.",
      "Kameranızın beyaz dengesini ekran rengine göre ayarlayın (sRGB için genellikle 6500K)."
    ],
    faqs: [
      { q: "Fotoğraflarda piksel çizgileri (harelenme / moiré) çıkar mı?", a: "Nesneyi ekrandan 15-20 cm öne koyup arka planı sığ alan derinliğiyle bulanıklaştırdığınızda pikseller tamamen kaybolur." },
      { q: "Takı çekimleri için hangi zemin rengi uygundur?", a: "Saf siyah veya koyu lacivert, altın ve pırlantaların ışıltısını ön plana çıkarmak için mükemmeldir." },
      { q: "Büyük eşyalar için televizyonu fon olarak kullanabilir miyim?", a: "Evet, 55-65 inçlik bir televizyon ayakkabı, çanta veya kulaklık çekimleri için dev bir fon paneli olur." },
      { q: "Ekranın çizilmesini nasıl önlerim?", a: "Ekran camının üzerine ince, temiz bir şeffaf pleksi veya akrilik plaka koyarak güvenle çalışabilirsiniz." },
      { q: "Renkler standart fotoğraf renklerine uyar mı?", a: "Aracımız sRGB renk uzayında çalıştığı için renk doğruluğu profesyonel standartlardadır." }
    ]
  },
  'color-picker-fullscreen': {
    name: "Tam Ekran Renk Seçici",
    title: "Tam Ekran Renk Seçici – İstediğiniz HEX ve RGB Rengini Tam Ekran Yapın",
    metaDescription: "Herhangi bir HEX veya RGB kodunu girin ve tüm monitörünüzü o renkle kaplayın. Tasarımcılar ve ekran testi için ücretsiz araç.",
    h1: "Tam Ekran Renk Seçici (HEX ve RGB)",
    intro: "Seçtiğiniz bir rengin tüm ekranda nasıl göründüğünü deneyimleyin. İstediğiniz HEX kodunu veya RGB değerlerini girin, ekranınızı anında o renkle aydınlatın.",
    featuresTitle: "Renk Seçici Aracının Yetenekleri",
    features: [
      { title: "Hassas Kod Girişi", desc: "Standart 6 haneli HEX kodları ve 0-255 arası RGB sayısal değerleri için tam destek." },
      { title: "Canlı Görsel Renk Paleti", desc: "Görsel renk seçici ile ekrandaki ton değişimini eşzamanlı olarak izleyin." },
      { title: "Kendi Renginizde Duvar Kağıdı İndirme", desc: "Oluşturduğunuz özel rengi 8K Ultra HD çözünürlüğe kadar kayıpsız dosya olarak kaydedin." },
      { title: "sRGB Standart Doğruluğu", desc: "Tasarım projeleriniz için güvenilir ve standartlaştırılmış renk gösterimi sağlar." }
    ],
    instructionsTitle: "Renk Nasıl Seçilir ve Görüntülenir?",
    instructions: [
      "Metin kutusuna renk kodunuzu girin (örneğin #3498DB) veya renk kutusuna tıklayın.",
      "Tüm monitörü kaplamak için 'Tam Ekran' butonuna basın.",
      "Renk ayarlarını değiştirmek için klavyenizden ESC tuşuna basarak geri dönün."
    ],
    faqs: [
      { q: "HEX kodu yerine renk ismi yazabilir miyim?", a: "Maksimum doğruluk için araç HEX (#ffffff gibi) veya RGB formatlarını kabul etmektedir." },
      { q: "Renk her monitörde aynı görünür mü?", a: "Monitörünüzün renk gamutu kapsamına ve kalibrasyonuna bağlı olarak küçük ton farkları olabilir." },
      { q: "Seçtiğim rengi resim olarak kaydedebilir miyim?", a: "Evet, sayfanın altındaki indirme bölümünden istediğiniz çözünürlükte PNG veya JPG olarak indirebilirsiniz." },
      { q: "Son seçtiğim renk hatırlanır mı?", a: "Evet, yaptığınız tercihler tarayıcınızın yerel belleğinde güvenle saklanır." },
      { q: "Mobil cihazlarda tam ekran renk seçimi yapılabilir mi?", a: "Android ve iOS akıllı telefonlarda kusursuz tam ekran deneyimi sunar." }
    ]
  },
  'fullscreen-rgb-cycle': {
    name: "Tam Ekran RGB Renk Döngüsü",
    title: "Tam Ekran RGB Renk Döngüsü – Otomatik Ekran ve Piksel Test Aracı",
    metaDescription: "Ayarlanabilir geçiş süresine sahip tam ekran RGB renk döngüsü. Ekran testi, piksel onarımı ve dinamik oda ışığı için ideal.",
    h1: "Tam Ekran RGB Renk Döngüsü (Otomatik Test)",
    intro: "Ekranınızı kırmızı, yeşil, mavi, beyaz ve siyah renkler arasında otomatik olarak geçiş yaptırın. Panel denetimi ve sıkışmış pikselleri canlandırmak için mükemmel bir yardımcı.",
    featuresTitle: "Renk Döngüsünün Temel Özellikleri",
    features: [
      { title: "Ayarlanabilir Geçiş Hızı", desc: "İhtiyacınıza göre renk geçiş aralığını 3, 5 veya 10 saniye olarak belirleyin." },
      { title: "Sıkışmış Piksel Uyarımı", desc: "Dinamik renk geçişleri, tepki vermeyen sıvı kristal alt pikselleri harekete geçirmeye yardımcı olur." },
      { title: "Takılmasız 60 FPS Geçiş", desc: "Modern tarayıcı mimarisi sayesinde sıfır takılma ile akıcı renk gösterimi." },
      { title: "Dinamik Ortam Aydınlatması", desc: "Odanız veya oyun alanınız için harika bir atmosferik RGB arka plan ışığı." }
    ],
    instructionsTitle: "Döngü Nasıl Başlatılır?",
    instructions: [
      "Kontrol panelinden istediğiniz renk değişim aralığını seçin.",
      "'RGB Piksel Döngüsünü Başlat' butonuna tıklayın ve tam ekran moduna geçin.",
      "Renk değişimine tepki vermeyen veya sabit kalan pikselleri gözlemleyin."
    ],
    faqs: [
      { q: "Sıkışmış bir piksel için döngü ne kadar süre çalıştırılmalıdır?", a: "Transistörlerin yeterince uyarılması için döngünün 15 ila 30 dakika açık bırakılması önerilir." },
      { q: "Hızlı renk geçişleri ekrana zarar verir mi?", a: "Kesinlikle hayır; renk değişimi tüm modern ekranların doğal ve güvenli çalışma şeklidir." },
      { q: "Döngüyü istediğim an nasıl durdurabilirim?", a: "'Piksel Döngüsünü Durdur' butonuna tıklayın veya ESC tuşuna basın." },
      { q: "Arka planda çalışmaya devam eder mi?", a: "Tarayıcının kare hızını düşürmesini önlemek için sayfa sekmesini açık tutmanız önerilir." },
      { q: "Döngü hangi renkleri içerir?", a: "Kırmızı (#FF0000), Yeşil (#00FF00), Mavi (#0000FF), Beyaz (#FFFFFF) ve Siyah (#000000)." }
    ]
  },
  'black-screen-10-hours': {
    name: "10 Saat Kesintisiz Siyah Ekran",
    title: "10 Saat Kesintisiz Siyah Ekran – Uyku, Rahatlama ve OLED Pil Tasarrufu",
    metaDescription: "Kapanmadan 10 saat boyunca kesintisiz saf siyah ekran. Derin uyku, OLED cihazlarda pil tasarrufu ve gece müzik dinlemek için ideal.",
    h1: "10 Saat Kesintisiz Siyah Ekran (Saf Siyahlık)",
    intro: "Bilgisayarınızı kapatmadan odanızda tam bir karanlık mı istiyorsunuz? Siyah ekranımız gece indirme yaparken veya müzik dinlerken ekran ışığının uykunuzu bölmesini engeller.",
    featuresTitle: "10 Saatlik Siyah Ekranın Faydaları",
    features: [
      { title: "Derin ve Deliksiz Uyku", desc: "Odanızı karartarak melatonin salgılanmasını bozan mavi ekran ışığını tamamen ortadan kaldırır." },
      { title: "OLED Panellerde Sıfır Tüketim", desc: "OLED pikselleri siyahta tamamen söndüğü için saatlerce açık kalsa bile enerji harcamaz." },
      { title: "Sistemin Uykuya Geçmesini Önler", desc: "Bilgisayarınız gece boyunca dosya indirmeye veya render almaya kesintisiz devam eder." },
      { title: "Piksel Yıpranmasını Önler", desc: "Uzun süre açık kalan statik masaüstü simgelerinin ekranda kalıcı iz bırakmasını engeller." }
    ],
    instructionsTitle: "Gece Kullanım Önerileri",
    instructions: [
      "Görev çubuğunu ve fare imlecini gizlemek için Tam Ekran moduna geçin.",
      "Dizüstü bilgisayarınızın prize takılı olduğundan emin olun.",
      "Sabah uyandığınızda fareyi hareket ettirmeniz veya ESC tuşuna basmanız yeterlidir."
    ],
    faqs: [
      { q: "Ekran gece yarısı kendi kendine kapanır mı?", a: "Hayır, entegre Ekran Uyku Kilidi işletim sisteminin uykuya geçmesini veya ekranı karartmasını engeller." },
      { q: "Standart LCD monitörlerde elektrik tasarrufu sağlar mı?", a: "LCD'lerde arka aydınlatma devrede kalır ancak OLED ekranlarda güç tüketimi neredeyse sıfıra iner." },
      { q: "Bilgisayarın çalar saati veya alarmı sabah çalar mı?", a: "Evet, tüm sistem sesleri, alarmlar ve arka plan uygulamaları normal şekilde çalışmaya devam eder." },
      { q: "Sabah ekrandan nasıl çıkabilirim?", a: "Klavyeden ESC tuşuna basarak veya farenize tıklayarak anında çıkabilirsiniz." },
      { q: "YouTube videolarını sesli dinlerken kullanabilir miyim?", a: "Evet, sesi yan sekmede açıp bu aracı tam ekran yaparak odanızı zifiri karanlık tutabilirsiniz." }
    ]
  },
  'white-screen-1-hour': {
    name: "1 Saat Kesintisiz Beyaz Ekran",
    title: "1 Saat Kesintisiz Beyaz Ekran – Odaklanma, Çalışma ve Kamera Işığı",
    metaDescription: "Kapanmadan tam 1 saat boyunca saf beyaz ekran. Pomodoro çalışma seansları, toplantı aydınlatması ve sabah enerjisi için ideal.",
    h1: "1 Saat Kesintisiz Beyaz Ekran (Işık Seansı)",
    intro: "Tam 60 dakika boyunca odanızda sabit bir ışık düzeyi sağlayın. Pomodoro çalışma seansları, bir saatlik video konferanslar veya sabahları zinde uyanmak için mükemmel bir ışık aracı.",
    featuresTitle: "1 Saatlik Işık Seansının Kullanım Alanları",
    features: [
      { title: "Zaman ve Odaklanma Kontrolü", desc: "Dikkat dağıtıcı unsurlar olmadan 60 dakikalık derin odaklanma blokları belirler." },
      { title: "Toplantılarda Sabit Aydınlatma", desc: "Bir saatlik görüşme boyunca yüzünüzdeki aydınlatmanın asla değişmemesini sağlar." },
      { title: "Sabah Işık Terapisi Etkisi", desc: "Sabahları parlak beyaz ışığa bakmak uykulu hissettiren melatonini hızla bastırır." },
      { title: "Otomatik Sürekli Açık Ekran", desc: "Fareye dokunmanıza gerek kalmadan monitörün kapanmasını önler." }
    ],
    instructionsTitle: "1 Saatlik Seans Nasıl Başlatılır?",
    instructions: [
      "Monitörünüzün karşısına rahatça oturun ve Tam Ekran modunu açın.",
      "Gözünüzü yormayacak parlaklık seviyesini belirleyip görevinize odaklanın.",
      "Süre tamamlandığında gözlerinizi dinlendirmek için 5 dakikalık mola verin."
    ],
    faqs: [
      { q: "Neden seans süresi tam 1 saat?", a: "Bir saatlik süre, göz sağlığı uzmanlarının mola vermeden önceki en verimli odaklanma eşiğidir." },
      { q: "Sabah uykululuğuna iyi gelir mi?", a: "Evet, gün ışığı sıcaklığındaki parlak ışık gözdeki fotoreseptörleri uyararak zihni canlandırır." },
      { q: "İstediğim zaman süreyi bitirebilir miyim?", a: "Elbette, ESC tuşuna basarak dilediğiniz an araçtan çıkabilirsiniz." },
      { q: "Ekran bir saat boyunca açık kalınca aşırı ısınır mı?", a: "Modern LED paneller ısıyı çok iyi dağıtır ve saatlerce beyaz göstermek için tasarlanmıştır." },
      { q: "Masada duran tableti masa lambası gibi kullanabilir miyim?", a: "Harika bir masa lambası olur! Kitap veya not okurken odanızı homojen biçimde aydınlatır." }
    ]
  },
  'screen-timer': {
    name: "Tam Ekran Zamanlayıcı",
    title: "Tam Ekran Zamanlayıcı – Sunumlar ve Çalışma İçin Büyük Geri Sayım Sayacı",
    metaDescription: "Sunumlar, toplantılar, spor ve odaklanma için devasa tam ekran geri sayım sayacı. Dikkat dağıtmayan sade ve okunabilir tasarım.",
    h1: "Tam Ekran Zamanlayıcı (Geri Sayım Sayacı)",
    intro: "Zamanınızı en yüksek okunabilirlikle yönetin. Yüksek kontrastlı zemin üzerinde büyük rakamlarla geri sayan bu araç; sunumlar, seminerler, sınavlar ve derin çalışma seansları için tasarlandı.",
    featuresTitle: "Tam Ekran Zamanlayıcının Artıları",
    features: [
      { title: "Devasa ve Net Rakamlar", desc: "Büyük bir toplantı odasının veya sınıfın en arka sırasından bile rahatça okunabilir." },
      { title: "Sade ve Dikkat Dağıtmayan Tasarım", desc: "Gereksiz animasyon veya reklam barındırmaz, sadece geçen zamana odaklanmanızı sağlar." },
      { title: "Göz Konforuna Uygun Kontrast", desc: "Odanın aydınlığına göre açık veya koyu modda kullanabilme seçeneği." },
      { title: "Kesintisiz Güvenilir Çalışma", desc: "Ekran Uyku Kilidi sayesinde sunum ortasında ekran kararmaz veya kilitlenmez." }
    ],
    instructionsTitle: "Zamanlayıcı Nasıl Kullanılır?",
    instructions: [
      "Kontrol panelinden istediğiniz dakika ve saniye süresini belirleyin.",
      "Geri sayımı başlatın ve F tuşuna basarak tam ekrana geçin.",
      "Sürekli saate bakma stresi yaşamadan kalan süreyi rahatça takip edin."
    ],
    faqs: [
      { q: "Tam ekran zamanlayıcı en çok nerelerde kullanılır?", a: "Sunumlar, TED konuşmaları, ders anlatımları, münazaralar ve Pomodoro çalışma döngülerinde." },
      { q: "Süre bittiğinde sesli uyarı verir mi?", a: "Evet, sürenin dolduğunu belirten nazik ve net bir sesli bildirim çalar." },
      { q: "Projeksiyon cihazlarında ve TV'lerde çalışır mı?", a: "HDMI veya kablosuz olarak bağlanan tüm harici projeksiyon ve televizyon ekranlarıyla tam uyumludur." },
      { q: "Konuşma sırasında süreyi duraklatabilir miyim?", a: "Klavyenizdeki boşluk (space) tuşu ile geri sayımı istediğiniz an durdurup devam ettirebilirsiniz." },
      { q: "İnternet bağlantısı kopsa da çalışır mı?", a: "Evet, tarayıcıda bir kez açıldıktan sonra tamamen yerel bellek üzerinden çevrimdışı çalışır." }
    ]
  }
};

// Write src/content/tools_pl.ts
const toolsPlOutput = `import type { LocalizedToolContent } from './tools';

export const TOOLS_PL: Record<string, LocalizedToolContent & { name: string }> = ${JSON.stringify(toolsPlData, null, 2)};
`;
fs.writeFileSync(path.resolve('src/content/tools_pl.ts'), toolsPlOutput, 'utf-8');
console.log('✓ src/content/tools_pl.ts generated');

// Write src/content/tools_tr.ts
const toolsTrOutput = `import type { LocalizedToolContent } from './tools';

export const TOOLS_TR: Record<string, LocalizedToolContent & { name: string }> = ${JSON.stringify(toolsTrData, null, 2)};
`;
fs.writeFileSync(path.resolve('src/content/tools_tr.ts'), toolsTrOutput, 'utf-8');
console.log('✓ src/content/tools_tr.ts generated');

// Update src/content/tools.ts
const toolsMainPath = path.resolve('src/content/tools.ts');
let toolsMain = fs.readFileSync(toolsMainPath, 'utf-8');

if (!toolsMain.includes('tools_pl')) {
  toolsMain = `import { TOOLS_PL } from './tools_pl';\nimport { TOOLS_TR } from './tools_tr';\n` + toolsMain;
  
  // Update getToolById names
  toolsMain = toolsMain.replace(
    'nl: TOOLS_NL[id]?.name || item.names.en,\n',
    `nl: TOOLS_NL[id]?.name || item.names.en,\n      pl: TOOLS_PL[id]?.name || item.names.en,\n      tr: TOOLS_TR[id]?.name || item.names.en,\n`
  );

  // Update getToolById content
  toolsMain = toolsMain.replace(
    'nl: (TOOLS_NL[id] as any) || (item.content as any).nl,\n',
    `nl: (TOOLS_NL[id] as any) || (item.content as any).nl,\n      pl: (TOOLS_PL[id] as any) || (item.content as any).pl,\n      tr: (TOOLS_TR[id] as any) || (item.content as any).tr,\n`
  );

  fs.writeFileSync(toolsMainPath, toolsMain, 'utf-8');
  console.log('✓ src/content/tools.ts updated with TOOLS_PL and TOOLS_TR');
}
