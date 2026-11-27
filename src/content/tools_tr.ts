import type { LocalizedToolContent } from './tools';

export const TOOLS_TR: Record<string, LocalizedToolContent & { name: string }> = {
  "dead-pixel-test": {
    "name": "Ölü Piksel Testi",
    "title": "Ölü Piksel Testi – Monitör ve Telefon Ekranı Testi Çevrimiçi",
    "metaDescription": "Monitörünüzü veya telefonunuzu ölü ve takılmış piksellere karşı tam ekranda test edin. LCD ve OLED paneller için RGB renk döngülü ücretsiz araç.",
    "h1": "Ölü Piksel Testi (Tam Ekran Monitör Testi)",
    "intro": "Bilgisayar monitörünüzde, dizüstü bilgisayarınızda, tabletinizde veya telefonunuzda bozuk, takılmış veya ölü alt pikselleri kolayca tespit edin. Aracımız Kırmızı, Yeşil, Mavi, Beyaz ve Siyah renkleri tam ekranda sunar.",
    "featuresTitle": "Ölü Piksel Testi Nasıl Çalışır?",
    "features": [
      {
        "title": "Ölü Piksel Tespiti",
        "desc": "Ölü pikseller tamamen sönük kalır ve açık renkli arka planlarda belirgin siyah noktalar olarak görünür."
      },
      {
        "title": "Takılmış Piksel İzolasyonu",
        "desc": "Takılmış pikseller sürekli tek bir renkte yanar. Zemin rengini değiştirmek onları anında açığa çıkarır."
      },
      {
        "title": "Otomatik RGB Renk Döngüsü",
        "desc": "Tüm paneli dikkatlice incelemek için döngü aralığını 3, 5 veya 10 saniyeye ayarlayın."
      },
      {
        "title": "Her Panel Türüyle Uyumlu",
        "desc": "OLED, AMOLED, IPS, VA ve TN ekranlarla her çözünürlükte sorunsuz çalışır."
      }
    ],
    "instructionsTitle": "Testi Uygulama Adımları",
    "instructions": [
      "Test öncesinde toz tanelerini piksel hatasıyla karıştırmamak için ekranınızı mikrofiber bezle silin.",
      "Tarayıcı sekmelerini ve pencereleri gizlemek için 'Tam Ekran' butonuna tıklayın.",
      "1-5 tuşlarıyla renkleri değiştirin veya otomatik döngüyü açarak ekranın her noktasını inceleyin."
    ],
    "faqs": [
      {
        "q": "Ölü piksel ile takılmış piksel arasındaki fark nedir?",
        "a": "Ölü piksel tamamen elektrik almayan siyah bir noktadır. Takılmış piksel ise tek bir renkte (kırmızı, yeşil, mavi) takılı kalmıştır ve bazen düzeltilebilir."
      },
      {
        "q": "Hızlı RGB renk döngüsü takılmış pikselleri düzeltebilir mi?",
        "a": "Evet, hızlı renk geçişleri takılmış alt pikselin transistörünü uyararak bazen normal çalışmasına geri döndürebilir."
      },
      {
        "q": "Toz lekesi ile ölü pikseli nasıl ayırt edebilirim?",
        "a": "Ekrana farklı açılardan bakın: toz camın üstündedir ve gölge yapar, ölü piksel ise doğrudan panelin içinde yer alır."
      },
      {
        "q": "Kaç ölü piksel garanti kapsamında değişim sağlar?",
        "a": "Üreticinin ISO standart politikasına göre değişir; genellikle 3 ila 5 bozuk piksel garanti değişimi için yeterlidir."
      },
      {
        "q": "iPhone ve iPad cihazlarda çalışır mı?",
        "a": "Evet, iOS ve Android cihazlarda Safari veya Chrome üzerinden uygulama yüklemeden doğrudan çalışır."
      }
    ]
  },
  "screen-cleaning": {
    "name": "Ekran Temizleme Modu",
    "title": "Ekran Temizleme Modu – Monitör ve Laptop İçin Saf Beyaz Ekran",
    "metaDescription": "Toz, parmak izi ve lekeleri kolayca görmek için homojen saf beyaz ekran. Ekran kapanmadan sürekli açık kalır.",
    "h1": "Ekran Temizleme Modu (Sürekli Açık Ekran)",
    "intro": "Dizüstü bilgisayarınızın, monitörünüzün veya telefonunuzun ekranını güvenle temizleyin. %100 parlaklıktaki saf beyaz ışık en küçük toz zerreciklerini ve parmak izlerini anında görünür kılar.",
    "featuresTitle": "Ekran Temizleme Modunun Avantajları",
    "features": [
      {
        "title": "Lekeleri Anında Görün",
        "desc": "Dağınık beyaz ışık, kapalı ekranda görünmeyen yağ lekelerini ve tozları belirginleştirir."
      },
      {
        "title": "Uyku Modunu Engeller",
        "desc": "Siz ekranı temizlerken monitörünüz kararmaz veya bekleme moduna geçmez."
      },
      {
        "title": "Yazılım Yükleme Gerektirmez",
        "desc": "Doğrudan web tarayıcınızdan güvenli ve reklamsız erişim."
      },
      {
        "title": "Parlama Önleyici Kaplamayı Korur",
        "desc": "Ekran yüzeyine gereksiz baskı uygulamadan nazikçe temizlemenize yardımcı olur."
      }
    ],
    "instructionsTitle": "Ekranınızı Güvenle Nasıl Temizlersiniz?",
    "instructions": [
      "Ekranın tamamını aydınlatmak için Tam Ekran moduna geçin.",
      "Yüzeydeki sert tozları temizlemeden önce bir hava pompası ile nazikçe uzaklaştırın.",
      "Saf mikrofiber bezi saf suyla çok hafif nemlendirerek dairesel hareketlerle silin."
    ],
    "faqs": [
      {
        "q": "Neden ekranı temizlerken beyaz ekran açmalıyım?",
        "a": "Arkadan gelen homojen beyaz aydınlatma, siyah kapalı ekranda gizlenen parmak izi ve yağ lekelerini net biçimde ortaya çıkarır."
      },
      {
        "q": "Ekran açıkken silmek zararlı mıdır?",
        "a": "Nazik bir mikrofiber bezle hafifçe silindiğinde tamamen güvenlidir ve temizlenen yerleri anında görmenizi sağlar."
      },
      {
        "q": "Ekran temizliğinde hangi sıvı kullanılmalıdır?",
        "a": "Mikrofiber beze çok az damlatılmış saf su (distile su). Alkol veya amonyak içeren cam temizleyiciler kaplamayı bozar."
      },
      {
        "q": "İnatçı lekeler nasıl çıkarılır?",
        "a": "Bezin bir ucunu distile suyla nemlendirip lekenin üzerinde birkaç saniye bekletin, ardından kuru tarafıyla kurulayın."
      },
      {
        "q": "Kağıt havlu veya mendil ekranı çizer mi?",
        "a": "Evet! Kağıt ürünleri sert ağaç lifleri içerir ve ekranın yansıma önleyici kaplamasında geri dönüşsüz mikro çizikler oluşturur."
      }
    ]
  },
  "zoom-ring-light": {
    "name": "Zoom Halka Işık Aracı",
    "title": "Zoom Halka Işık Aracı – Görüntülü Görüşmeler İçin Ekran Aydınlatması",
    "metaDescription": "Monitörünüzü Zoom, Teams ve Meet görüşmeleri için sanal ring light lambasına dönüştürün. Yüz aydınlatması için sıcaklık ve parlaklık ayarı.",
    "h1": "Zoom Halka Işık Aracı (Sanal Kamera Işığı)",
    "intro": "Pahalı LED halka ışıklar satın almadan web kamerası görüntünüzü profesyonel seviyeye çıkarın. Ekranınızı yüzünüzü yumuşak bir ışıkla aydınlatan geniş bir softbox paneline dönüştürün.",
    "featuresTitle": "Sanal Işık Panelinin Özellikleri",
    "features": [
      {
        "title": "Renk Sıcaklığı Ayarı",
        "desc": "Doğal ve canlı bir ten rengi için sıcak sarıdan soğuk beyaza kadar dilediğiniz gibi ayarlayın."
      },
      {
        "title": "Geniş Yüzeyli Yumuşak Işık",
        "desc": "Geniş ekran yüzeyi, küçük LED lambaların aksine göz altlarında sert gölgeler oluşturmaz."
      },
      {
        "title": "Hassas Parlaklık Kontrolü",
        "desc": "Gözlerinizi yormayacak ve kameranın pozlamasını dengeleyecek en ideal parlaklığı seçin."
      },
      {
        "title": "Gözlük Camında Parlamayı Azaltır",
        "desc": "Geniş açılı ve sıcak tonlu ışık gözlük kullananlar için keskin parlama noktalarını önler."
      }
    ],
    "instructionsTitle": "Zoom İçin Işık Nasıl Ayarlanır?",
    "instructions": [
      "Bu aracı web kamerasının hemen arkasında bulunan monitörünüzde açın.",
      "Yüz tonunuzun sağlıklı ve net görünmesi için renk sıcaklığı sürgüsünü ayarlayın.",
      "Zoom penceresini ekranın kenarına yerleştirin veya maksimum parlaklık için tam ekran yapın."
    ],
    "faqs": [
      {
        "q": "Monitör ışığı gerçek bir halka ışığın yerini tutabilir mi?",
        "a": "Evet, büyük ekran paneli ışığı çok daha homojen dağıtarak profesyonel stüdyo softbox etkisi yaratır."
      },
      {
        "q": "Ten rengi için hangi renk sıcaklığı en iyisidir?",
        "a": "Hafif sıcak tonlar (sürgüde %50-60 seviyesi) web kameralarının soluk renk üretimini dengeler."
      },
      {
        "q": "Uzun toplantılarda gözü yorar mı?",
        "a": "Parlaklık sürgüsünü odanızın ortamına göre kısarak gözlerinizi rahatlatabilirsiniz."
      },
      {
        "q": "Çift monitör kurulumunda kullanılabilir mi?",
        "a": "Evet, bir ekranda toplantıyı izlerken kameranın arkasındaki diğer ekranda bu ışığı açık tutabilirsiniz."
      },
      {
        "q": "Dizüstü bilgisayarın pilini hızlı bitirir mi?",
        "a": "Yüksek parlaklık pil tüketimini artıracağından önemli toplantılarda cihazı şarja takmanız önerilir."
      }
    ]
  },
  "webcam-light": {
    "name": "Webcam Aydınlatma Aracı",
    "title": "Webcam Aydınlatma Aracı – Karanlık Odalar İçin Yüz Doğu Işığı",
    "metaDescription": "Web kamerası için ücretsiz ekran ışığı. Yüzdeki gölgeleri yok edin ve loş ışıklı ortamlarda video kalitenizi anında artırın.",
    "h1": "Webcam Aydınlatma Aracı (Görüntülü Görüşme Işığı)",
    "intro": "Web kameraları loş ortamlarda grenli, karlı ve kalitesiz görüntü üretir. Ekranınızı parlak ve pürüzsüz bir ışık paneline dönüştürerek kamera sensöründeki tüm gürültüyü yok edin.",
    "featuresTitle": "Video Kalitenizi Artıran Özellikler",
    "features": [
      {
        "title": "Kamera Grenini ve Karlanmayı Önler",
        "desc": "Yeterli ışık alan kamera ISO değerini düşürerek kristal netliğinde görüntü verir."
      },
      {
        "title": "Göz Altı Gölgelerini Yumuşatır",
        "desc": "Önden gelen geniş ışık yorgunluk izlerini gizler ve gözlerde parlak bir ışıltı oluşturur."
      },
      {
        "title": "Ekstra Donanıma Gerek Yoktur",
        "desc": "Kablo, tripod veya masa lambası aramadan tek tıkla tarayıcınızdan aydınlatın."
      },
      {
        "title": "Tüm Görüntülü Uygulamalarla Uyumlu",
        "desc": "Zoom, Teams, Google Meet, Skype, Discord ve OBS ile kusursuz çalışır."
      }
    ],
    "instructionsTitle": "En İyi Görüntü İçin İpuçları",
    "instructions": [
      "Monitörünüzü göz hizanıza gelecek şekilde konumlandırın.",
      "Kameranızdaki önizleme netleşene kadar parlaklık sürgüsünü artırın.",
      "Arkanızda doğrudan kameraya vuran güçlü bir ışık kaynağı (örneğin açık pencere) olmamasına dikkat edin."
    ],
    "faqs": [
      {
        "q": "Web kameram neden karanlıkta karlı gösteriyor?",
        "a": "Yetersiz ışıkta küçük kamera sensörü ışığı artırmak için dijital kazancı (ISO) yükseltir ve bu da gürültüye yol açar."
      },
      {
        "q": "Gözlükteki yansımaları nasıl önleyebilirim?",
        "a": "Monitörünüzü hafifçe yukarı kaldırıp aşağı doğru eğin ve hafif sıcak bir renk tonu seçin."
      },
      {
        "q": "Telefonumu ek yan ışık olarak kullanabilir miyim?",
        "a": "Evet! Telefonunuzda sitemizi açıp yan tarafa koyarak yüzünüzdeki gölgeleri mükemmel şekilde dengeleyebilirsiniz."
      },
      {
        "q": "Canlı yayınlar için uygun mudur?",
        "a": "Twitch, YouTube ve TikTok yayıncıları için pratik ve son derece etkili bir ek aydınlatmadır."
      },
      {
        "q": "Ücretli midir?",
        "a": "%100 ücretsizdir, reklam veya filigran içermez."
      }
    ]
  },
  "screen-flicker-test": {
    "name": "Ekran Titreme Testi (PWM)",
    "title": "Ekran Titreme Testi – PWM Titremesi ve Göz Yorgunluğu Kontrolü",
    "metaDescription": "Monitörünüzün PWM nedeniyle titreyip titremediğini kontrol edin. Göz yorgunluğu ve baş ağrısını önlemek için ücretsiz çevrimiçi test.",
    "h1": "Ekran Titreme Testi (PWM Kontrolü)",
    "intro": "Pek çok modern ekran parlaklığı ayarlamak için arka aydınlatmayı hızla açıp kapatan PWM (Darbe Genişlik Modülasyonu) kullanır. Gözle fark edilmese bile bu titreme şiddetli baş ağrısına yol açabilir.",
    "featuresTitle": "Neden Ekran Titremesi Test Edilmelidir?",
    "features": [
      {
        "title": "PWM Tespiti",
        "desc": "Monitörünüzün gerçek Flicker-Free (titreşimsiz) teknolojisine sahip olup olmadığını belirler."
      },
      {
        "title": "Göz Sağlığını Koruma",
        "desc": "Titremenin başladığı parlaklık seviyesini bularak gözlerinizi korumanızı sağlar."
      },
      {
        "title": "Kalem ve Kamera ile Kolay Test",
        "desc": "Akıllı telefon kamerası ile saniyeler içinde doğrulayabileceğiniz pratik yöntemler."
      },
      {
        "title": "Ergonomik Çalışma Ortamı",
        "desc": "Uzun saatler bilgisayar başında çalışanlar için konforlu bir ekran ayarı sunar."
      }
    ],
    "instructionsTitle": "Titremeyi Tespit Etme Yöntemleri",
    "instructions": [
      "Tam Ekran modunu açın ve monitör parlaklığını yaklaşık %20-30 seviyesine düşürün.",
      "Telefonunuzun kamerasını ekrana tutun; ekranda hareket eden yatay çizgiler PWM titremesine işaret eder.",
      "Ekranın önünde bir kalemi hızla sallayın: kesintili gölgeler titremeyi, yumuşak bir yelpaze titreşimsizliği gösterir."
    ],
    "faqs": [
      {
        "q": "Monitörlerde PWM nedir?",
        "a": "PWM (Darbe Genişlik Modülasyonu), parlaklığı kısmak için arka aydınlatma LED'lerini yüksek hızda açıp kapatan bir yöntemdir."
      },
      {
        "q": "Ekran titremesi hangi sağlık sorunlarına yol açar?",
        "a": "Gözlerde kuruluk, yanma hissi, bulanık görme ve kronik migren/baş ağrısı yapabilir."
      },
      {
        "q": "Flicker-Free ne anlama gelir?",
        "a": "Monitörün parlaklığı açıp kapatarak değil, akım voltajını ayarlayarak (DC Karartma) titreşimsiz biçimde kıstığını ifade eder."
      },
      {
        "q": "Parlaklığı %100 yapmak titremeyi yok eder mi?",
        "a": "Genellikle evet, çünkü maksimum parlaklıkta LED'ler sürekli yanık kalır ve darbe döngüsü durur."
      },
      {
        "q": "Mavi ışık filtreli gözlükler titremeyi engeller mi?",
        "a": "Hayır, mavi ışık gözlükleri dalga boyunu filtreler ancak fiziksel parlaklık titreşimini durduramaz."
      }
    ]
  },
  "backlight-bleed-test": {
    "name": "Işık Sızması Testi (Backlight Bleed)",
    "title": "Işık Sızması Testi – IPS ve VA Monitörlerde Panel Sızıntısı Kontrolü",
    "metaDescription": "Karanlık bir odada monitörünüzün kenarlarındaki ışık sızmasını test edin. Backlight bleed ile normal IPS parlaması (IPS glow) farkını öğrenin.",
    "h1": "Işık Sızması Testi (Karanlık Ekran)",
    "intro": "Işık sızması (Backlight Bleeding), sıvı kristal panelin kenarlarındaki mekanik baskı veya montaj kusurları nedeniyle karanlık sahnelerde kenarlardan sarı veya beyaz ışık fışkırması durumudur.",
    "featuresTitle": "Panel Işık Dağılımı Teşhisi",
    "features": [
      {
        "title": "Saf Tam Ekran Siyah",
        "desc": "Gözü yanıltacak tüm arayüz pencerelerini gizleyerek saf siyah bir zemin sunar."
      },
      {
        "title": "Bleed ile IPS Glow Ayrımı",
        "desc": "Işık sızması açı değiştikçe sabit kalır; IPS parlaması ise bakış açısıyla birlikte yer değiştirir."
      },
      {
        "title": "Yeni Satın Alınan Cihaz Denetimi",
        "desc": "Monitör veya laptop satın aldıktan sonraki 14 günlük iade sürecinde yapılması gereken kritik test."
      },
      {
        "title": "Film ve Oyun Deneyimi",
        "desc": "Karanlık temalı oyunlarda ve sinema filmlerinde siyah kalitesini güvenceye alır."
      }
    ],
    "instructionsTitle": "Doğru Test Nasıl Yapılır?",
    "instructions": [
      "Odadaki tüm ışıkları kapatın ve perdeleri tamamen çekin.",
      "Bu araçta Tam Ekran modunu açın ve gözlerinizin karanlığa alışması için bir dakika bekleyin.",
      "Monitörün tam karşısından yaklaşık 1 metre mesafeden kenarları ve köşeleri gözlemleyin."
    ],
    "faqs": [
      {
        "q": "Işık sızması ile IPS Glow arasındaki fark nedir?",
        "a": "Işık sızması donanımsal kenar baskısından kaynaklanır ve sabittir. IPS Glow ise IPS kristallerinin yapısından dolayı köşelerde açıya bağlı değişen ışıltıdır."
      },
      {
        "q": "Işık sızması yazılımla düzeltilebilir mi?",
        "a": "Hayır, bu tamamen panel kasasının montajı ve mekanik yapısıyla ilgili fiziksel bir durumdur."
      },
      {
        "q": "Işık sızması garanti kapsamına girer mi?",
        "a": "Görüşü ve günlük kullanımı ciddi oranda bozan aşırı sızıntılar yetkili servislerce ayıplı mal sayılarak değiştirilir."
      },
      {
        "q": "OLED panellerde ışık sızması olur mu?",
        "a": "Kesinlikle hayır! OLED'de arka aydınlatma yoktur, siyah gösterilirken ilgili pikseller tamamen kapanır."
      },
      {
        "q": "Monitör vidasını gevşetmek sızmayı azaltır mı?",
        "a": "Bazen çerçeve baskısını azaltmak sızıntıyı hafifletebilir ancak cihazı açmak garantiyi geçersiz kılar."
      }
    ]
  },
  "oled-burn-in-test": {
    "name": "OLED Yanması Testi (Burn-In)",
    "title": "OLED Yanması Testi – Ekran İzi ve Kalıcı Yanık Tespiti",
    "metaDescription": "OLED televizyon, monitör veya telefonunuzu piksel yanmasına karşı test edin. Kırmızı, gri ve beyaz saf renk test panelleri.",
    "h1": "OLED Yanması Testi (Piksel Sağlığı Denetimi)",
    "intro": "OLED ekranlar kusursuz kontrast sunar ancak organik bileşenler sabit pencereler, görev çubukları veya kanal logoları gibi statik öğelerin uzun süre gösterilmesiyle düzensiz yıpranabilir.",
    "featuresTitle": "OLED Teşhis Aracının Yetenekleri",
    "features": [
      {
        "title": "%5 ve %20 Gri Test Alanları",
        "desc": "Orta gri tonlar, erken evre piksel yanıklarını ve dikey şeritlenme (banding) sorununu en net gösteren renktir."
      },
      {
        "title": "Temel Renk İzolasyonu",
        "desc": "Kırmızı, yeşil ve mavi alt piksellerin yıpranmasını ayrı ayrı test edebilme imkanı."
      },
      {
        "title": "Geçici İzi Kalıcı Yanıktan Ayırma",
        "desc": "Görüntü tutulmasının (image retention) geçici mi yoksa kalıcı bir yanık mı olduğunu anlamanızı sağlar."
      },
      {
        "title": "Akıllı TV'lerle Tam Uyumlu",
        "desc": "LG, Samsung, Sony ve Philips OLED TV web tarayıcılarında mükemmel tam ekran desteği."
      }
    ],
    "instructionsTitle": "OLED Paneli Test Etme Adımları",
    "instructions": [
      "Tam Ekran moduna geçin ve sırasıyla gri, kırmızı ve eflatun renkleri seçin.",
      "Görev çubuğunun veya sık izlediğiniz kanalların logolarının bulunduğu yerleri dikkatlice inceleyin.",
      "Kalıntı görüyorsanız TV ayarlarınızdan 'Piksel Temizleme' veya 'Piksel Yenileme' döngüsünü başlatın."
    ],
    "faqs": [
      {
        "q": "Geçici görüntü tutulması ile kalıcı yanık arasındaki fark nedir?",
        "a": "Geçici tutulma birkaç dakika içinde kaybolur. Kalıcı yanık ise organik piksellerin fiziksel olarak zayıflaması sonucu silinmeyen izdir."
      },
      {
        "q": "OLED'de en çabuk hangi renk yıpranır?",
        "a": "Panel mimarisine bağlı olarak genellikle kırmızı veya mavi alt pikseller daha yüksek enerjiyle çalıştığı için daha duyarlıdır."
      },
      {
        "q": "Piksel temizleme (Pixel Refresher) yanığı geçirir mi?",
        "a": "Küçük voltaj dengesizliklerini giderir ancak ileri seviyedeki kalıcı fiziksel aşınmayı tamamen yok edemez."
      },
      {
        "q": "OLED monitörümü yanmaktan nasıl korurum?",
        "a": "Windows görev çubuğunu otomatik gizleyin, siyah masaüstü duvar kağıdı kullanın ve uyku zamanlayıcısını kısa tutun."
      },
      {
        "q": "Üreticiler OLED yanmasını garantiye dahil ediyor mu?",
        "a": "Birçok yeni nesil oyuncu monitörü artık 3 yıllık yanma garantisi ile satılmaktadır."
      }
    ]
  },
  "monitor-uniformity-test": {
    "name": "Monitör Homojenlik Testi",
    "title": "Monitör Homojenlik Testi – Parlaklık ve Renk Dağılımı Kontrolü",
    "metaDescription": "Monitörünüzün tüm yüzeyindeki parlaklık ve renk homojenliğini test edin. Fotoğrafçılar, tasarımcılar ve oyuncular için ideal araç.",
    "h1": "Monitör Homojenlik Testi (Luminans ve Renk)",
    "intro": "Düzensiz arka aydınlatma veya ekranın farklı bölgelerindeki renk sapmaları (kirli ekran efekti - DSE) profesyonel fotoğraf düzenlemeyi ve görsel deneyimi olumsuz etkiler.",
    "featuresTitle": "Homojenlik Değerlendirme Kriterleri",
    "features": [
      {
        "title": "Parlaklık Dengesi",
        "desc": "Ekranın köşelerinin ve kenarlarının merkeze göre karanlık kalıp kalmadığını kontrol edin."
      },
      {
        "title": "Renk Sıcaklığı Tutarlılığı",
        "desc": "Ekranın sol tarafındaki beyaz tonun sağ tarafla aynı sıcaklıkta olduğundan emin olun."
      },
      {
        "title": "Kirli Ekran Efekti (DSE) Tespiti",
        "desc": "Açık gri zemin üzerinde dikey çizgileri, dalgalanmaları veya lekelenmeleri ortaya çıkarır."
      },
      {
        "title": "Grafik ve Tasarım İçin Şart",
        "desc": "Doğru baskı ve renk tutarlılığı için monitörünüzün uygunluğunu test eder."
      }
    ],
    "instructionsTitle": "Homojenlik Nasıl Test Edilir?",
    "instructions": [
      "Monitörünüzün tam karşısına oturun ve saf beyaz tam ekranı açın.",
      "Ekranı zihninizde 9 eşit kareye bölün (3x3 ızgara) ve bölgeler arasındaki aydınlığı karşılaştırın.",
      "Ardından %50 gri renge geçerek bulutlanma veya dalgalanma olup olmadığını inceleyin."
    ],
    "faqs": [
      {
        "q": "İyi bir monitörde kabul edilebilir parlaklık sapması nedir?",
        "a": "Standart ofis monitörlerinde %15-20'ye kadar sapma normaldir; profesyonel tasarım monitörlerinde bu oran %5-8'i aşmamalıdır."
      },
      {
        "q": "Kavisli (Curved) monitörlerde homojenlik neden daha zordur?",
        "a": "Panelin bükülmesi kristaller üzerinde gerilim yaratır ve köşelerde ışık dengesizliklerine yol açabilir."
      },
      {
        "q": "Ekran köşeleri neden daha karanlık görünür?",
        "a": "Bu durum köşe vinyeti olarak adlandırılır ve kenardan aydınlatmalı LED panellerin doğal bir özelliğidir."
      },
      {
        "q": "Kolorimetre ile kalibrasyon homojenliği düzeltir mi?",
        "a": "Kalibrasyon sadece merkez noktadaki renk doğruluğunu sağlar; fiziksel aydınlatma dengesizliğini donanımsal olarak düzeltemez."
      },
      {
        "q": "Uniformity Compensation (Homojenlik Dengeleme) nedir?",
        "a": "Üst düzey monitörlerde (EIZO, NEC vb.) ekran bölgelerinin parlaklığını dijital olarak dengeleyen dahili işlemci teknolojisidir."
      }
    ]
  },
  "tracing-lightbox": {
    "name": "Çizim İçin Işıklı Kutu Ekran",
    "title": "Çizim İçin Işıklı Kutu Ekran – Ekranı Çizim Masasına Dönüştürün",
    "metaDescription": "Laptop veya tabletinizi çizim, kaligrafi ve dövme şablonları için ışıklı kopya masasına dönüştürün. Kapanmayan saf beyaz ışık.",
    "h1": "Çizim İçin Işıklı Kutu Ekran (Dijital Lightbox)",
    "intro": "Pahalı ışıklı çizim masaları satın almanıza gerek yok! iPad'inizi, Android tabletinizi veya dizüstü bilgisayarınızı çizim ve şablon kopyalama için pürüzsüz bir ışık kutusuna dönüştürün.",
    "featuresTitle": "Dijital Işıklı Kutunun Avantajları",
    "features": [
      {
        "title": "Kalın Kağıtlardan Bile Geçen Işık",
        "desc": "Maksimum beyaz parlaklık, eskizlerin suluboya ve resim kağıtlarından rahatça görünmesini sağlar."
      },
      {
        "title": "Ekran Asla Kapanmaz",
        "desc": "Ekran Uyku Kilidi sayesinde siz kağıdı koyup çizerken ekran kararmaz veya bekleme moduna geçmez."
      },
      {
        "title": "Sıfır Maliyetli Çözüm",
        "desc": "Sanatçılar, dövme ustaları, mimarlar ve kaligrafi ile uğraşanlar için tamamen ücretsiz."
      },
      {
        "title": "Kusursuz Pürüzsüz Yüzey",
        "desc": "Modern tabletlerin cam yüzeyi cetvel ve kalem kullanımı için son derece düzgündür."
      }
    ],
    "instructionsTitle": "Çizim İçin Ekran Nasıl Kullanılır?",
    "instructions": [
      "Cihazınızın parlaklığını %100 seviyesine getirin ve bu araçta Tam Ekranı açın.",
      "Orijinal eskizinizi ekranın üzerine, temiz çizim kağıdınızı da onun üstüne yerleştirin.",
      "Odanın ışığını hafifçe kısarak alttan vuran ışıkla çizgileri kolayca kopyalayın."
    ],
    "faqs": [
      {
        "q": "Kalem bastırmak ekranıma zarar verir mi?",
        "a": "Yumuşak uçlu kurşun kalemler (2B-4B) kullanın ve hafif bastırın. Cihazınızda ekran koruyucu cam olması önerilir."
      },
      {
        "q": "Işık hangi kalınlıktaki kağıtlardan geçer?",
        "a": "Standart 80g fotokopi kağıtlarından çok rahat geçer; 200g resim kağıtları için odanın ışığını kapatmak yeterlidir."
      },
      {
        "q": "Tablette çizerken el temasını nasıl engellerim?",
        "a": "iPad'de 'Güdümlü Erişim' özelliğini, Android'de 'Ekran Sabitleme'yi açarak dokunmatik kontrolleri geçici olarak kilitleyebilirsiniz."
      },
      {
        "q": "Gözü yormaması için rengi değiştirebilir miyim?",
        "a": "Renk sürgüsünü hafifçe sıcak sarıya kaydırarak parşömen tonunda dinlendirici bir ışık elde edebilirsiniz."
      },
      {
        "q": "Tablet pili için güvenli midir?",
        "a": "Tamamen güvenlidir ancak maksimum parlaklık pil tüketeceği için şarj kablosunu takılı tutmanız tavsiye edilir."
      }
    ]
  },
  "photography-backdrop": {
    "name": "Fotoğraf Arka Planı Ekranı",
    "title": "Fotoğraf Arka Planı Ekranı – Ürün Çekimleri İçin Dijital Fon Işığı",
    "metaDescription": "Monitörünüzü makro ve ürün fotoğrafçılığı için gölgesiz, saf bir arka plan paneline dönüştürün. 4K ve 8K düz renk fonlar.",
    "h1": "Fotoğraf Arka Planı Ekranı (Ürün Fotoğrafçılığı)",
    "intro": "Saniyeler içinde evinizde profesyonel bir stüdyo kurun. Monitörünüzü veya televizyonunuzu gölgesiz düz bir arka plana dönüştürerek takı, teknolojik aletler veya figürler için kusursuz çekimler yapın.",
    "featuresTitle": "Stüdyo Fotoğrafçılığı İçin Özellikler",
    "features": [
      {
        "title": "Alttan Gölgesiz Işıklandırma",
        "desc": "Tabletinizi yatay koyarak ürünlerin altında hiçbir gölge bırakmayan parlak bir çekim alanı elde edin."
      },
      {
        "title": "Tek Tıkla Renk Değişimi",
        "desc": "Pahalı fon kartonları almadan beyaz, siyah veya renkli arka planlar arasında anında geçiş yapın."
      },
      {
        "title": "Zarif Cam Yansımaları",
        "desc": "Ekranın pürüzsüz cam yüzeyi lüks ürün çekimleri için şık ve estetik bir ayna yansıması sunar."
      },
      {
        "title": "Video Çekimleri İçin İdeal",
        "desc": "Reels, TikTok ve YouTube Shorts ürün tanıtımları için titreşimsiz pürüzsüz fon ışığı."
      }
    ],
    "instructionsTitle": "Fotoğraf Çekimi İpuçları",
    "instructions": [
      "Fotoğraflayacağınız nesneyi ekranın hemen önüne veya düz yatan tabletin üzerine yerleştirin.",
      "Piksel desenini yok etmek için açık diyaframlı (örneğin f/1.8 veya f/2.8) bir lens kullanarak arka planı hafifçe flulaştırın.",
      "Kameranızın beyaz dengesini ekran rengine göre ayarlayın (sRGB için genellikle 6500K)."
    ],
    "faqs": [
      {
        "q": "Fotoğraflarda piksel çizgileri (harelenme / moiré) çıkar mı?",
        "a": "Nesneyi ekrandan 15-20 cm öne koyup arka planı sığ alan derinliğiyle bulanıklaştırdığınızda pikseller tamamen kaybolur."
      },
      {
        "q": "Takı çekimleri için hangi zemin rengi uygundur?",
        "a": "Saf siyah veya koyu lacivert, altın ve pırlantaların ışıltısını ön plana çıkarmak için mükemmeldir."
      },
      {
        "q": "Büyük eşyalar için televizyonu fon olarak kullanabilir miyim?",
        "a": "Evet, 55-65 inçlik bir televizyon ayakkabı, çanta veya kulaklık çekimleri için dev bir fon paneli olur."
      },
      {
        "q": "Ekranın çizilmesini nasıl önlerim?",
        "a": "Ekran camının üzerine ince, temiz bir şeffaf pleksi veya akrilik plaka koyarak güvenle çalışabilirsiniz."
      },
      {
        "q": "Renkler standart fotoğraf renklerine uyar mı?",
        "a": "Aracımız sRGB renk uzayında çalıştığı için renk doğruluğu profesyonel standartlardadır."
      }
    ]
  },
  "color-picker-fullscreen": {
    "name": "Tam Ekran Renk Seçici",
    "title": "Tam Ekran Renk Seçici – İstediğiniz HEX ve RGB Rengini Tam Ekran Yapın",
    "metaDescription": "Herhangi bir HEX veya RGB kodunu girin ve tüm monitörünüzü o renkle kaplayın. Tasarımcılar ve ekran testi için ücretsiz araç.",
    "h1": "Tam Ekran Renk Seçici (HEX ve RGB)",
    "intro": "Seçtiğiniz bir rengin tüm ekranda nasıl göründüğünü deneyimleyin. İstediğiniz HEX kodunu veya RGB değerlerini girin, ekranınızı anında o renkle aydınlatın.",
    "featuresTitle": "Renk Seçici Aracının Yetenekleri",
    "features": [
      {
        "title": "Hassas Kod Girişi",
        "desc": "Standart 6 haneli HEX kodları ve 0-255 arası RGB sayısal değerleri için tam destek."
      },
      {
        "title": "Canlı Görsel Renk Paleti",
        "desc": "Görsel renk seçici ile ekrandaki ton değişimini eşzamanlı olarak izleyin."
      },
      {
        "title": "Kendi Renginizde Duvar Kağıdı İndirme",
        "desc": "Oluşturduğunuz özel rengi 8K Ultra HD çözünürlüğe kadar kayıpsız dosya olarak kaydedin."
      },
      {
        "title": "sRGB Standart Doğruluğu",
        "desc": "Tasarım projeleriniz için güvenilir ve standartlaştırılmış renk gösterimi sağlar."
      }
    ],
    "instructionsTitle": "Renk Nasıl Seçilir ve Görüntülenir?",
    "instructions": [
      "Metin kutusuna renk kodunuzu girin (örneğin #3498DB) veya renk kutusuna tıklayın.",
      "Tüm monitörü kaplamak için 'Tam Ekran' butonuna basın.",
      "Renk ayarlarını değiştirmek için klavyenizden ESC tuşuna basarak geri dönün."
    ],
    "faqs": [
      {
        "q": "HEX kodu yerine renk ismi yazabilir miyim?",
        "a": "Maksimum doğruluk için araç HEX (#ffffff gibi) veya RGB formatlarını kabul etmektedir."
      },
      {
        "q": "Renk her monitörde aynı görünür mü?",
        "a": "Monitörünüzün renk gamutu kapsamına ve kalibrasyonuna bağlı olarak küçük ton farkları olabilir."
      },
      {
        "q": "Seçtiğim rengi resim olarak kaydedebilir miyim?",
        "a": "Evet, sayfanın altındaki indirme bölümünden istediğiniz çözünürlükte PNG veya JPG olarak indirebilirsiniz."
      },
      {
        "q": "Son seçtiğim renk hatırlanır mı?",
        "a": "Evet, yaptığınız tercihler tarayıcınızın yerel belleğinde güvenle saklanır."
      },
      {
        "q": "Mobil cihazlarda tam ekran renk seçimi yapılabilir mi?",
        "a": "Android ve iOS akıllı telefonlarda kusursuz tam ekran deneyimi sunar."
      }
    ]
  },
  "fullscreen-rgb-cycle": {
    "name": "Tam Ekran RGB Renk Döngüsü",
    "title": "Tam Ekran RGB Renk Döngüsü – Otomatik Ekran ve Piksel Test Aracı",
    "metaDescription": "Ayarlanabilir geçiş süresine sahip tam ekran RGB renk döngüsü. Ekran testi, piksel onarımı ve dinamik oda ışığı için ideal.",
    "h1": "Tam Ekran RGB Renk Döngüsü (Otomatik Test)",
    "intro": "Ekranınızı kırmızı, yeşil, mavi, beyaz ve siyah renkler arasında otomatik olarak geçiş yaptırın. Panel denetimi ve sıkışmış pikselleri canlandırmak için mükemmel bir yardımcı.",
    "featuresTitle": "Renk Döngüsünün Temel Özellikleri",
    "features": [
      {
        "title": "Ayarlanabilir Geçiş Hızı",
        "desc": "İhtiyacınıza göre renk geçiş aralığını 3, 5 veya 10 saniye olarak belirleyin."
      },
      {
        "title": "Sıkışmış Piksel Uyarımı",
        "desc": "Dinamik renk geçişleri, tepki vermeyen sıvı kristal alt pikselleri harekete geçirmeye yardımcı olur."
      },
      {
        "title": "Takılmasız 60 FPS Geçiş",
        "desc": "Modern tarayıcı mimarisi sayesinde sıfır takılma ile akıcı renk gösterimi."
      },
      {
        "title": "Dinamik Ortam Aydınlatması",
        "desc": "Odanız veya oyun alanınız için harika bir atmosferik RGB arka plan ışığı."
      }
    ],
    "instructionsTitle": "Döngü Nasıl Başlatılır?",
    "instructions": [
      "Kontrol panelinden istediğiniz renk değişim aralığını seçin.",
      "'RGB Piksel Döngüsünü Başlat' butonuna tıklayın ve tam ekran moduna geçin.",
      "Renk değişimine tepki vermeyen veya sabit kalan pikselleri gözlemleyin."
    ],
    "faqs": [
      {
        "q": "Sıkışmış bir piksel için döngü ne kadar süre çalıştırılmalıdır?",
        "a": "Transistörlerin yeterince uyarılması için döngünün 15 ila 30 dakika açık bırakılması önerilir."
      },
      {
        "q": "Hızlı renk geçişleri ekrana zarar verir mi?",
        "a": "Kesinlikle hayır; renk değişimi tüm modern ekranların doğal ve güvenli çalışma şeklidir."
      },
      {
        "q": "Döngüyü istediğim an nasıl durdurabilirim?",
        "a": "'Piksel Döngüsünü Durdur' butonuna tıklayın veya ESC tuşuna basın."
      },
      {
        "q": "Arka planda çalışmaya devam eder mi?",
        "a": "Tarayıcının kare hızını düşürmesini önlemek için sayfa sekmesini açık tutmanız önerilir."
      },
      {
        "q": "Döngü hangi renkleri içerir?",
        "a": "Kırmızı (#FF0000), Yeşil (#00FF00), Mavi (#0000FF), Beyaz (#FFFFFF) ve Siyah (#000000)."
      }
    ]
  },
  "black-screen-10-hours": {
    "name": "10 Saat Kesintisiz Siyah Ekran",
    "title": "10 Saat Kesintisiz Siyah Ekran – Uyku, Rahatlama ve OLED Pil Tasarrufu",
    "metaDescription": "Kapanmadan 10 saat boyunca kesintisiz saf siyah ekran. Derin uyku, OLED cihazlarda pil tasarrufu ve gece müzik dinlemek için ideal.",
    "h1": "10 Saat Kesintisiz Siyah Ekran (Saf Siyahlık)",
    "intro": "Bilgisayarınızı kapatmadan odanızda tam bir karanlık mı istiyorsunuz? Siyah ekranımız gece indirme yaparken veya müzik dinlerken ekran ışığının uykunuzu bölmesini engeller.",
    "featuresTitle": "10 Saatlik Siyah Ekranın Faydaları",
    "features": [
      {
        "title": "Derin ve Deliksiz Uyku",
        "desc": "Odanızı karartarak melatonin salgılanmasını bozan mavi ekran ışığını tamamen ortadan kaldırır."
      },
      {
        "title": "OLED Panellerde Sıfır Tüketim",
        "desc": "OLED pikselleri siyahta tamamen söndüğü için saatlerce açık kalsa bile enerji harcamaz."
      },
      {
        "title": "Sistemin Uykuya Geçmesini Önler",
        "desc": "Bilgisayarınız gece boyunca dosya indirmeye veya render almaya kesintisiz devam eder."
      },
      {
        "title": "Piksel Yıpranmasını Önler",
        "desc": "Uzun süre açık kalan statik masaüstü simgelerinin ekranda kalıcı iz bırakmasını engeller."
      }
    ],
    "instructionsTitle": "Gece Kullanım Önerileri",
    "instructions": [
      "Görev çubuğunu ve fare imlecini gizlemek için Tam Ekran moduna geçin.",
      "Dizüstü bilgisayarınızın prize takılı olduğundan emin olun.",
      "Sabah uyandığınızda fareyi hareket ettirmeniz veya ESC tuşuna basmanız yeterlidir."
    ],
    "faqs": [
      {
        "q": "Ekran gece yarısı kendi kendine kapanır mı?",
        "a": "Hayır, entegre Ekran Uyku Kilidi işletim sisteminin uykuya geçmesini veya ekranı karartmasını engeller."
      },
      {
        "q": "Standart LCD monitörlerde elektrik tasarrufu sağlar mı?",
        "a": "LCD'lerde arka aydınlatma devrede kalır ancak OLED ekranlarda güç tüketimi neredeyse sıfıra iner."
      },
      {
        "q": "Bilgisayarın çalar saati veya alarmı sabah çalar mı?",
        "a": "Evet, tüm sistem sesleri, alarmlar ve arka plan uygulamaları normal şekilde çalışmaya devam eder."
      },
      {
        "q": "Sabah ekrandan nasıl çıkabilirim?",
        "a": "Klavyeden ESC tuşuna basarak veya farenize tıklayarak anında çıkabilirsiniz."
      },
      {
        "q": "YouTube videolarını sesli dinlerken kullanabilir miyim?",
        "a": "Evet, sesi yan sekmede açıp bu aracı tam ekran yaparak odanızı zifiri karanlık tutabilirsiniz."
      }
    ]
  },
  "white-screen-1-hour": {
    "name": "1 Saat Kesintisiz Beyaz Ekran",
    "title": "1 Saat Kesintisiz Beyaz Ekran – Odaklanma, Çalışma ve Kamera Işığı",
    "metaDescription": "Kapanmadan tam 1 saat boyunca saf beyaz ekran. Pomodoro çalışma seansları, toplantı aydınlatması ve sabah enerjisi için ideal.",
    "h1": "1 Saat Kesintisiz Beyaz Ekran (Işık Seansı)",
    "intro": "Tam 60 dakika boyunca odanızda sabit bir ışık düzeyi sağlayın. Pomodoro çalışma seansları, bir saatlik video konferanslar veya sabahları zinde uyanmak için mükemmel bir ışık aracı.",
    "featuresTitle": "1 Saatlik Işık Seansının Kullanım Alanları",
    "features": [
      {
        "title": "Zaman ve Odaklanma Kontrolü",
        "desc": "Dikkat dağıtıcı unsurlar olmadan 60 dakikalık derin odaklanma blokları belirler."
      },
      {
        "title": "Toplantılarda Sabit Aydınlatma",
        "desc": "Bir saatlik görüşme boyunca yüzünüzdeki aydınlatmanın asla değişmemesini sağlar."
      },
      {
        "title": "Sabah Işık Terapisi Etkisi",
        "desc": "Sabahları parlak beyaz ışığa bakmak uykulu hissettiren melatonini hızla bastırır."
      },
      {
        "title": "Otomatik Sürekli Açık Ekran",
        "desc": "Fareye dokunmanıza gerek kalmadan monitörün kapanmasını önler."
      }
    ],
    "instructionsTitle": "1 Saatlik Seans Nasıl Başlatılır?",
    "instructions": [
      "Monitörünüzün karşısına rahatça oturun ve Tam Ekran modunu açın.",
      "Gözünüzü yormayacak parlaklık seviyesini belirleyip görevinize odaklanın.",
      "Süre tamamlandığında gözlerinizi dinlendirmek için 5 dakikalık mola verin."
    ],
    "faqs": [
      {
        "q": "Neden seans süresi tam 1 saat?",
        "a": "Bir saatlik süre, göz sağlığı uzmanlarının mola vermeden önceki en verimli odaklanma eşiğidir."
      },
      {
        "q": "Sabah uykululuğuna iyi gelir mi?",
        "a": "Evet, gün ışığı sıcaklığındaki parlak ışık gözdeki fotoreseptörleri uyararak zihni canlandırır."
      },
      {
        "q": "İstediğim zaman süreyi bitirebilir miyim?",
        "a": "Elbette, ESC tuşuna basarak dilediğiniz an araçtan çıkabilirsiniz."
      },
      {
        "q": "Ekran bir saat boyunca açık kalınca aşırı ısınır mı?",
        "a": "Modern LED paneller ısıyı çok iyi dağıtır ve saatlerce beyaz göstermek için tasarlanmıştır."
      },
      {
        "q": "Masada duran tableti masa lambası gibi kullanabilir miyim?",
        "a": "Harika bir masa lambası olur! Kitap veya not okurken odanızı homojen biçimde aydınlatır."
      }
    ]
  },
  "screen-timer": {
    "name": "Tam Ekran Zamanlayıcı",
    "title": "Tam Ekran Zamanlayıcı – Sunumlar ve Çalışma İçin Büyük Geri Sayım Sayacı",
    "metaDescription": "Sunumlar, toplantılar, spor ve odaklanma için devasa tam ekran geri sayım sayacı. Dikkat dağıtmayan sade ve okunabilir tasarım.",
    "h1": "Tam Ekran Zamanlayıcı (Geri Sayım Sayacı)",
    "intro": "Zamanınızı en yüksek okunabilirlikle yönetin. Yüksek kontrastlı zemin üzerinde büyük rakamlarla geri sayan bu araç; sunumlar, seminerler, sınavlar ve derin çalışma seansları için tasarlandı.",
    "featuresTitle": "Tam Ekran Zamanlayıcının Artıları",
    "features": [
      {
        "title": "Devasa ve Net Rakamlar",
        "desc": "Büyük bir toplantı odasının veya sınıfın en arka sırasından bile rahatça okunabilir."
      },
      {
        "title": "Sade ve Dikkat Dağıtmayan Tasarım",
        "desc": "Gereksiz animasyon veya reklam barındırmaz, sadece geçen zamana odaklanmanızı sağlar."
      },
      {
        "title": "Göz Konforuna Uygun Kontrast",
        "desc": "Odanın aydınlığına göre açık veya koyu modda kullanabilme seçeneği."
      },
      {
        "title": "Kesintisiz Güvenilir Çalışma",
        "desc": "Ekran Uyku Kilidi sayesinde sunum ortasında ekran kararmaz veya kilitlenmez."
      }
    ],
    "instructionsTitle": "Zamanlayıcı Nasıl Kullanılır?",
    "instructions": [
      "Kontrol panelinden istediğiniz dakika ve saniye süresini belirleyin.",
      "Geri sayımı başlatın ve F tuşuna basarak tam ekrana geçin.",
      "Sürekli saate bakma stresi yaşamadan kalan süreyi rahatça takip edin."
    ],
    "faqs": [
      {
        "q": "Tam ekran zamanlayıcı en çok nerelerde kullanılır?",
        "a": "Sunumlar, TED konuşmaları, ders anlatımları, münazaralar ve Pomodoro çalışma döngülerinde."
      },
      {
        "q": "Süre bittiğinde sesli uyarı verir mi?",
        "a": "Evet, sürenin dolduğunu belirten nazik ve net bir sesli bildirim çalar."
      },
      {
        "q": "Projeksiyon cihazlarında ve TV'lerde çalışır mı?",
        "a": "HDMI veya kablosuz olarak bağlanan tüm harici projeksiyon ve televizyon ekranlarıyla tam uyumludur."
      },
      {
        "q": "Konuşma sırasında süreyi duraklatabilir miyim?",
        "a": "Klavyenizdeki boşluk (space) tuşu ile geri sayımı istediğiniz an durdurup devam ettirebilirsiniz."
      },
      {
        "q": "İnternet bağlantısı kopsa da çalışır mı?",
        "a": "Evet, tarayıcıda bir kez açıldıktan sonra tamamen yerel bellek üzerinden çevrimdışı çalışır."
      }
    ]
  }
};
