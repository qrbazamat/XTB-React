const createPost = (id, title, imgUrl, description, views = 0, createTime, hashtags) => {
    return { id, title, imgUrl, description, views, createTime, hashtags }
}

const postsData = [
    createPost(
        24,
        "Namanganda IT maktablarga kompyuter texnikalari topshirildi",
        "./src/Components/Images/news/3_TIHIScV.jpg",
        [
            "Axborot texnologiyalari va kommunikatsiyalarini joriy etish va rivojlantirish vazirligi tomonidan ajratilgan 96 dona kompyuter texnikalari Namangan viloyatiga yetib keldi.",
            "O'zbekiston Respublikasi Prezidentining \"Axborot texnologiyalari sohasida ta’lim tizimini yanada takomillashtirish, ilmiy tadqiqotlarni rivojlantirish va ularni IT-industriya bilan integratsiya qilish chora-tadbirlari to'g'risida\"gi 2020 yil 6 oktabrdagi PQ-4851 son qarorga muvofiq, Namangan viloyatida 2021 yil tashkil etilgan 6 ta (Uychi tuman 22-DIUM, Norin tuman 34-DIUM, Uchqo'rg'on tuman 2-DIUM, Chortoq tuman 8-DIUM, Pop tuman 40-DIUM, Chust tuman 6-DIUM) \"Informatika va axborot texnologiyalariga ixtisoslashtirilgan maktablari\" uchun kompyuter texnikalari topshirildi."
        ],
        20456,
        new Date("2022-01-29"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        11,
        "Namanganda umumiy o'rta talim muassasalaridagi yoshlar yetakchilari o'rtasida “Yilning eng faol yoshlar yetakchisi” Respublika ko'rik-tanlovining viloyat bosqichi bo'lib o'tdi.",
        "./src/Components/Images/news/2.jpg",
        [
            "Yoshlar yetakchilarining faoliyat samaradorligini oshirish, ilg'or tajribalarini ommalashtirish, ular o'rtasida hamkorlik va ijobiy raqobat muhitini yaratish, faol, iqtidorli va tashabbuskor yetakchilarni qo'llab-quvvatlashga qaratilgan ko'rik –tanlovda shahar va tuman bosqichlarida g'oliblikni qo'lga kiritgan 14 nafar ishtirokchi o'zaro bellashdi. Xalq talimi vazirligining O'quvchi va yoshlar tashkilotlari bilan ishlash bo'limi boshlig'i Ulug'bek Xaydarov, Yoshlar ittifoqi Markaziy kengashi bo'lim boshlig'i Abbos Tog'aymurodov, viloyat xalq talimi boshqarmasi boshlig'i o'rinbosari Xayrullo Abdurahmonov, Yoshlar ishlari agentligining viloyat blshqarma boshlig'i Baxtiyor Mirzatov, Yoshlar Ittifoki Namangan viloyat kengashi raisi Muxtarama Abdullaxanovalarning hakamligi ostida 4 yo'nalishda baholab borilgan tanlov qizg'in va murosasiz kechdi. Yakuniy natijalarga ko'ra 1 -o'rinni Mingbuloq tumani 34-maktab yoshlar yetakchisi Shoxsanam Karimova egallagan bo'lsa, 2 -o'rinni Pop tumani 32-maktab yoshlar yetakchisi Ziyoda Dabonova, 3 -o'rinni Uchqo'rg'on tumani 46-maxsus maktab - internati yoshlar yetakchisi  Madina Mirzevalar qo'lga kiritishdi. G'olib va sovrindorlar diplom va esdalik sovg'alari bilan taqdirlandilar.",
            "Namangan viloyat xalq talimi boshqarmasi Axborot xizmati"
        ],
        2054,
        new Date("2021-12-13"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        10,
        "Наманган филиали томонидан 2021 йилда 712 та умумтаълим мактабларига 507 километр оптик толали алоқа кабеллари тортилиб, хизмат кўрсатиш сифати янги босқичга олиб чиқилди.",
        "./src/Components/Images/news/10.jpg",
        [
            "Наманган филиали томонидан 2021 йилда 712 та умумтаълим мактабларига 507 километр оптик толали алоқа кабеллари тортилиб, хизмат кўрсатиш сифати янги босқичга олиб чиқилди.",
            "Ўқувчилар ўзлаштиришини ҳисобга олиш, ўқитувчилар фаолиятига оид статистика ва ҳисоботларни шакллантиришни таъминловчи “Электрон кундалик” ягона тизимини вилоятдаги 464 та таълим муассасаларида жорий этилди. Бу ишлар давом этмоқда",
            "Шуни алоҳида таъкидлаш лозимки, kundalik.com тизимини ишга  тушиши соҳани рақамлаштиришда муҳим омил бўлиб хизмат қилиб, қоғозбозликка чек қўйди."
        ],
        4219,
        new Date("2021-12-13"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        9,
        "NAMANGANDA O'QUVCHILARNI KASB-HUNARGA YO'NALTIRISH BORASIDAGI TASHABBUSLAR KЕNG QAMROV KASB ETMOQDA.",
        "./src/Components/Images/news/1.jpg",
        [
            "Xalq ta'limi vazirligi tashabbusi bilan ayni kunlarda Namangan viloyatida o'quvchilarning sifatli ta'lim olishlari bilan bir qatorda ularni kasb-hunarga yo'naltirish bo'yicha yangi g'oya va tashabbuslari ilgari surilmoqda",
            "Jumladan, Namangan shahar XTB tasarrufida 54 ta umumta'lim maktabi bo'lib, 5 - 11-sinflarda jami 45471 nafar o'quvchi ta'lim olmoqda",
            "Ularning 32079 nafari darsdan bo'sh vaqtlarida ustoz-shogird an'analari asosida xunarmadchilikni o'rganishmoqda.",
            "Jumladan, 3637 nafar o'quvchi duradgorlik yo'nalishida, 7275 nafari tikuvchilik bo'yicha mashg'ulotlarda mahoratini oshirayotgan bo'lsa, 727 o'quvchi do'ppido'zlik, 2910 nafari kosibchilik sir-asrorlarini o'rganmoqda",
            "Shu kabi avtomobillarga texnik xizmat ko'rsatish, tunukasozlik, qassobchilik, pazandalik, kashtachilik, sartaroshlik, nonvoylik, zargarlik, mebelsoz-usta payvandchi-elektrik kabi o'nlab yo'nalishlarda to'garaklar faoliyati yo'lga qo'yilgan bo'lib, ularda bir necha minglab yoshlar bo'sh vaqtini samarali o'tkazish barobarida ertangi kun sari munosib kasb-korni egallagan holda qadam tashlamoqdalar.Abdullo Abdusattorov ana shunday intiluvchan va izlanuvchan yoshlardan. U shahardagi 11-maktabning 11-sinfida fanlarni a'lo baholarga o'zlashtirish barobarida 3 yildan buyon maxsido'zlikni o'rganib, ayni paytda o'zi mustaqil faoliyat yuritish qobiliyatiga ega bo'ldi. Har kuni darsdan so'ng maktab yaqinidagi, mahallada joylashgan maxsido'zlik sexida tengdoshlari bilan oyiga 1000 dona maxsi tikayotgan Abdullo Abdusattorovning oyiga o'rtacha daromadi 3 mln. so'mni tashkil qilmoqda. Sanobar Inomova esa shahardagi 29-maktabning 7-sinf o'quvchisi. Kashtachilik bilan 12 yildan buyon onasi, opasi, oila a'zolari bilan birgalikda shug'ullanayotgan Sanobar oila budjetiga har oyda 2,5 – 3 million so'm daromad keltirmoqda.Xuddi shu maktabning 9-sinf o'quvchisi Hadicha Muhammadovaning maftunkor gullar yasash borasidagi mahorati taxsinga sazovor. 2 yildan buyon onasi, ukasi birgalikda go'zallikka oshno ajib gullar yasash bilan shug'illanayotgan mohir gulchi o'zi yasagan mahsulotlarni “Hadicha” nomli xususiy do'konida sotadi. Hadichaning oylik daromadi 10 million so'mni tashkil qilmoqda. E'tiborlisi, hali o'zi maktab o'quvchisi bo'lsa-da, uning 35 ga yaqin shogirdi bor.Shahardagi 30-maktabning 9-sinf o'quvchisi Abdulahad G'aniyev ham hozirdanoq o'z istiqboliga mustahkam poydevor yaratayotgan tirishqoq yoshlardan.",
            "Duradgorlik bilan 3 yildan buyon shug'illanayotgan Abdulahad ayni paytda oyiga 1 – 1,2 million so'm daromat topmoqda.Uning maktabdoshi, 10-sinf o'quvchisi Ulug'bek G'ulomjonov ham 5 yildirki, duradgorlik bilan shug'ullanadi. Har oyda 1,5 – 2 million so'm daromad qilib, oilasiga yaxshigina naf keltirayotgan Ulug'bekning kasb-hunar ortidan saodatga intilayotgan tengdoshlari bisyor",
            "Shunday iqtidorli, iste'dodli, ham ilm-ma'rifatga oshno, ham kasbu hunar saboqlarini o'rganib borayotgan yoshlarni viloyatdagi 712 ta maktabning barchasida ko'plab uchratish mumkin.",
            "Bu esa, ertamiz egalari istiqbol odimlarida shahdam ekanligidan dalolat beradi."
        ],
        86710,
        new Date("2021-12-14"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        8,
        "VILOYAT XALQ TA'LIMI BOSHQARMASI BOSHLIG'I “KASABA UYUSHMALARI KUNIGA 1 YIL\" ESDALIK NISHONI BILAN TAQDIRLANDI",
        "./src/Components/Images/news/3.jpg",
        [
            "Viloyat kasaba uyushmasi binosida “Kasaba uyushmalari kuniga 1 yil” esdalik nishonlarini topshirish hamda kasaba uyushmalari Federatsiyasi mukofoti Laureati, “Eng yaxshi sektor rahbari”, “Eng yaxshi mahalla raisi”, ”Kasaba uyushmalari Federatsiyasi laureati” sovrindorlarini taqdirlash marosimi bo'lib o'tdi. Viloyat hokimi, Oliy Majlis Senati a'zosi Shavkat Abdurazaqov hamda O'zbekiston Kasaba uyushmalari Federatsiyasining viloyatdagi vakili, O'zbekiston sog'liqni saqlash xodimlari kasaba uyushmasi Respublika Kengashining raisi Farhod Xanapiyayev ishtirok etgan mazkur tadbirda viloyat xalq ta'limi boshqarmasi boshlig'i Rustamjon Israilov “Kasaba uyushmalari kuniga 1 yil” esdalik ko'krak nishoni bilan taqdirlandi.Kosonsoy tumanidagi 52-DIUM ning matematika fani o'qituvchisi Vohidjon Mamatov O'zbekiston Respublikasi mustaqilligining 30 yilligi munosabati bilan “O'zbekiston kasaba uyushmalari Laureati respublika ko'rik-tanlovi” da matematika fani bo'yicha g'oliblikni qo'lga kiritdi hamda 10 mln so'm pul mukofoti bilan taqdirlandi.",
            "Namangan viloyati xalq ta'limi boshqarmasi Axborot xizmati"
        ],
        47351,
        new Date("2021-11-04"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        7,
        "VILOYAT XALQ TA'LIMI BOSHQARMASIDA TANQIDIY-TAHLILIY YIG'ILISH BO'LIB O'TDI",
        "./src/Components/Images/news/4.jpg",
        [
            "Viloyat xalq ta'limi boshqarmasida o'quvchilar bilan bog'liq yo'l transport xodisalari, umumiy o'rta ta'lim muassasalarida koronovirus infeksiyasi tarqalishini oldini olish borasida ko'rilayotgan chora-tadbirlar hamda maktablarda epidemiologik havfsizlik talablariga qat'iy rioya qilish, Davlatobod tumani xalq ta'limi bo'limi va ta'lim muassasalarida ta'lim jarayonini tashkil etilishi, o'quvchilar o'rtasida jinoyatchilikni oldini olish borasida amalga oshirilayotgan tadbirlar samaradorligini o'rganish yakuni masalalarida muhokama yig'ilishi bo'lib o'tdi. Unda Xalq ta'limi vazirining nazorat-huquqiy xizmati bosh mutaxassisi Xabibulla Matkarimov, viloyat xalq ta'limi boshqarmasi boshlig'i Rustamjon Israilov, viloyat YHXB boshlig'i Ergash Haydarov, viloyati YHXB birinchi tumanlararo YPX otryad komandiri o'rinbosari Xusniddin Safarov, viloyat sanitariya-epidemiologiya osoyishtaligi va jamoat salomatligi boshqarmasi bo'lim boshlig'i Asliddin Payg'ambarov, tuman va shahar xalq ta'limi bo'limlari mudirlari, ma'naviy-axloqiy tarbiya va bolalarni ijtimoiy himoyalash sho''basi mudirlari, Davlatobod tumanidagi umumta'lim maktablari direktorlari ishtirok etdilar. Yig'ilishda o'quvchilar ishtirokida yo'l transport xodisalarini oldini olish, umumta'lim maktablari direktorlari, o'qituvchilar bolalar havfsizligini ta'minlash choralarini ko'rishlari borasida to'xtalib o'tilib, yo'l transport xodisalarini oldini olish maqsadida umumta'lim maktablarida sinflar kesimida ta'lim navbatliligini SanPIN qoidalari doirasida tashkil etish kerakligi bildirildi. ",
            "Umumiy o'rta ta'lim muassasalarida koronovirus infeksiyasi tarqalishini oldini olish, “Maktabgacha ta'lim tashkilotlari, umumta'lim, o'rta maxsus, professional va oliy ta'lim muassasalarida “COVID-19” koronavirus infeksiyasining tarqalishini oldini olish bo'yicha profilaktika va epidemiyaga qarshi chora-tadbirlarni belgilash tartibi to'g'risida”gi 34-12-sonli uslubiy qo'llanmasi asosida tashkil etilayotgan ishlar muhokama qilinib, O'zbekiston Respublika Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmatining 2021 yil 21 sentabrdagi 15-8/6558-sonli ko'rsatma xatiga asosan, Jahon sog'liqni saqlash tashkiloti ekspertlarining tavsiyasiga ko'ra “COVID - 19” ga qarshi 12 yoshdan katta bolalarni Pfizer vaksinasi bilan ota-onasining roziligi va ixtiyoriylik asosida emlashga ruxsat berilganligi, Sog'liqni saqlash vazirligining 2021 yil 17 avgustdagi 204-sonli buyrug'iga asosan emlash xavfsizligi ta'minlangan va vrach ko'rigidan so'ng ruxsat berilgan 12 yoshdan katta bo'lgan sog'lom bolalarga koronovirus infeksiyasiga qarshi Pfizer vaksinasi bilan emlanishi mumkinligi ko'rsatib o'tilganligi ta'kidlandi. Davlatobod tumanidagi ta'lim muassasalarida joriy yilning 9 oyi mobaynida o'quvchilar tomonidan sodir etilgan jinoyatchilik, xuquqbuzarlik va o'z joniga qasd qilish holatlari va uni oldini olish bo'yicha amalga oshirilayotgan ishlar tahlili ko'rib chiqilib, ta'lim muassasalarida ijtimoiy ma'naviy-muhitni sog'lomlashtirish, yoshlar o'rtasida jinoyatchilik va xuquqbuzarliklarni oldini olish maqsadida ishlab chiqilgan chora-tadbirlar rejasi ijrosiga oid hujjatlar o'z vaqtida yuritilmaganligi, jinoyatchilikni oldini olishga kompleks yondashilmaganligi, umumiy profilaktik tadbirlar xalq ta'limi bo'limi mudiri tomonidan muvofiqlashtirilmaganligi tanqid ostiga olindi. Yig'ilish so'nggida kelgusida amalga oshirilishi lozim bo'lgan vazifalar belgilanib, tizimli ish tashkil etishga kelishib olindi."
        ],
        64889,
        new Date("2021-12-05"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        6,
        "“Yilning eng yaxshi o'zbek tili o'qituvchisi” tanlovining respublika bosqichi g'oliblari taqdirlandi",
        "./src/Components/Images/news/5.jpg",
        [
            "Joriy yilning 10 noyabr kuni poytaxtimizdagi 110-sonli umumta'lim maktabida “Yilning eng yaxshi o'zbek tili o'qituvchisi” tanlovining respublika bosqichi g'oliblarini taqdirlash marosimi o'tkazildi.",
            "Tanlovning respublika bosqichi g'oliblari quyidagi miqdorda pul mukofotlari bilan taqdirlandi:",
            "1-o'rin uchun — 30 mln. so'mdan, ",
            "2-o'rin uchun — 20 mln. so'mdan, ",
            "3-o'rin uchun — 10 mln. so'mdan pul mukofotlari hamda “Xalq ta'limi a'lochisi” ko'krak nishoni bilan taqdirlandi.",
            "Batafsil: 👉https://bit.ly/30bOPgD",
            "Tanlovning yakuniy natijalariga ko'ra Ona tili fanidan:",
            "1-o'rinni Surxondaryo viloyati Jarqo'rg'on tumani 46-sonli umumiy o'rta taʼlim maktabi ona tili va adabiyot fani o'qituvchisi Xusniddin Turg'unboyev;",
            "2-o'rinni Toshkent viloyati Olmaliq shahri 19-sonli ixtisoslashtirilgan davlat umumtaʼlim maktabi ona tili va adabiyot fani o'qituvchisi Nilufar Xakimova;",
            "3-o'rinni Navoiy viloyati Navoiy shahri 11-sonli ayrim fanlar chuqurlashtirib o'qitiladigan ixtisoslashtirilgan maktab ona tili va adabiyot fani o'qituvchisi Komila Rajabova egalladi.",
            "O'zbek tili fanidan:",
            "1-o'rinni Qoraqalpog'iston Respublikasi Nukus shahri 44-sonli umumiy o'rta taʼlim maktabi o'zbek tili o'qituvchisi Mehriyo Tuleshova;",
            "2-o'rinni Namangan viloyati Uchqo'rg'on tumani 39-sonli umumiy o'rta taʼlim maktabi o'zbek tili o'qituvchisi Sevara Abdullayeva;",
            "3-o'rinni Toshkent shahri Yakkasaroy tumani 91-sonli ixtisoslashtirilgan davlat umumtaʼpim maktabi o'zbek tili o'qituvchisi Oybek Boyatov egalladi.",
            "Tanlovning respublika bosqichida har ikkala fan yo'nalishida g'oliblarning har biri quyidagi miqdorda pul mukofotlari bilan taqdirlandi:",
            "1-o'rin uchun - 30 mln. so'mdan,",
            "2-o'rin uchun - 20 mln. so'mdan,",
            "3-o'rin uchun - 10 mln. so'mdan pul mukofotlari hamda \"Xalq taʼlimi aʼlochisi\" ko'krak nishoni bilan taqdirlandi."
        ],
        76803,
        new Date("2021-11-11"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        5,
        "Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov va Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailova Chust tumaniga tashrif buyirishdi.",
        "./src/Components/Images/news/6.jpg",
        [
            "Namangan viloyati Chust tumanida Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov va Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailova ishtirokida \"Kundalik avtomatlashtirilgan axborot tiuzimini\" joriy etilgan umumta'lim maktablari uchun o'quv seminarlari  tashkil etildi.  Seminar davomida Namangan viloyati xalq ta'limi boshqarmasi AKT bo'limi boshlig'i A.Usmanov so'zga chiqib ushbu tizim qulayliklar to'g'risida tushunchalar berib o'tdi. R.Komilov kundalik tizimi joriy etish bo'yicha qonuniy hujjatlar to'g'risida tushunchalar berdi hamda bugungi kunda o'rganilgan maktablarning yutuq va kamchiliklari to'g'risida to'xtalib o'tdi. G.Ismoilova tizimda ishlash bo'yicha seminar treningini davomida tizimda o'qituvchi, maktab rahbarlari, ota onalar va o'quvchilar foydalanishidagi vazifalar,  imkoniyatlarini to'liq tushuntirib o'tdi."
        ],
        73399,
        new Date("2021-11-11"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        4,
        "Namanganlik o'quvchi muddatidan oldin talaba bo'ldi",
        "./src/Components/Images/news/16_LQva0BD.jpg",
        [
            "Uchqo'rg'on tumanidagi 13-umumiy o'rta ta'lim maktabning 11-\"B\" sinf o'quvchisi Xusanboy Kotibjonov yoshligidan tirishqoq, har bir mashg'ulotni diqqat-e'tibor bilan o'rganadigan va tashabbuskor o'quvchilardan biridir.",
            "U bir nechta xalqaro imtihonlarni topshirib yuqori balli sertifikatlar sohibi bo'lgan.  Xusanboy yaqinda muddatidan oldin birdaniga 3 ta nufuzli xorijiy OTMga talaba sifatida qabul qilindi. ",
            "Jumladan, AQShning ILLIOINS WESLEYAN universiteti tomonidan 116.000 dollarlik grant, AQSHning TRINITY universiteti tomonidan 120.000 dollarlik grant,  Germaniyaning   JAKOBS UNIVERSITY BREMEN universiteti tomonidan 32.000 yevro miqdoridagi grantlar sohibi bo'lib muddatidan oldin talabalikka  qabul qilindi. ",
            "Xusanboyning o'qishlariga muvaffaqiyatlar tilab qolamiz."
        ],
        10244,
        new Date("2022-01-13"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        3,
        "Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov va Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailovalar Yangiqorgon tumanida",
        "./src/Components/Images/news/11.jpg",
        [
            "2021-yil 12-noyabr kuni  Namangan viloyati Yangiqo'rg'on tumaniga  O'zbekiston Respublikasi Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov va Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailovalar tashrif buyurishdi. Tashrif davomida tumandagi umumta'lim maktablarida  “ Kundalik com” platformasida faoliyat yuritayotgan ta'lim muassasalarida olib borilayotgan ishlar to'g'risida maktab o'qituvchi va o'quvchilari bilan suhbat o'tkazildi. Tashrif yakunida tuman Madaniyat uyida tumandagi barcha ta'lim muassasalari direktorlari,o'quv hamda ma'naviy –ma'rifiy ishlar bo'yicha direktor o'rinbosarlari bilan o'quv-amaliy seminari  tashkil etildi.Seminar davomida Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov  tomonidan “ Kundalik com” platformasi  to'g'risida  seminar ishtirokchilariga tushunchalar berilib, seminar ishtirokchilarini qiziqtirgan savollariga javob berildi. Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailova o'z taqdimoti bilan seminar ishtirokchilariga “ Kundalik com” platformasida ishlash uslublari yuzasidan amaliy mashg'ulot o'tib, elektron platformaning  afzalliklari to'g'risida ma'lumotlar taqdim etdi. Seminar yakunida viloyat Xalq ta'limi boshqarmasi AKT bo'limi boshlig'i A. Usmanov  hamda tuman xalq ta'limi bo'limi mudiri D.Arolovlar “ Kundalik com” platformasining  ta'lim tizimidagi o'rni, tizimning hozigi kundagi ahamiyati ,  maktab o'qituvchi ,o'quvchi  hamda ularning ota-onalari uchun yaratigan sharoitlar haqida o'z fikr- mulohaza va takliflarini bildirdi."
        ],
        27354,
        new Date("1970-01-01"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        2,
        "NAMANGANDA “5 TASHABBUS” FЕSTIVALI G'OLIBLARI BIR MILLIARD SO'MLIK ROBOTOTЕXNIKA, MUSIQA VA SPORT ANJOMLARI BILAN TAQDIRLANDI",
        "./src/Components/Images/news/12.jpg",
        [
            "Davlatimiz rahbari tomonidan belgilab berilgan besh muhim tashabbus kelajagimiz egalarini har jihatdan yetuk, ertangi kunga munosib kamol topishlariga qanot bag'ishlab, ularni barkamollik yo'lida yuksak marralar sari ruhlantirmoqda.",
            "Xalq ta'limi vazirligi tomonidan ko'rilayotgan chora-tadbirlar, o'tkazilayotgan tanlovlar, festivallar doirasida viloyatdagi 712 ta ta'lim muassasalarining 500000 nafardan ortiq iqtidorli o'quvchilari joriy yilda turli tanlov va musobaqalarda ishtirok etdi. Yakuniy natijalarga ko'ra 203 nafar o'quvchi muvaffaqiyat qozondilar. Namangan viloyat madaniyat markazida “5 tashabbus” festivalida o'quvchilari g'olib bo'lgan maktablarni taqdirlashga bag'ishlangan bayram festivali bo'lib o'tdi. Tantanada ishtirok etgan Xalq ta'limi vaziri o'rinbosari Vahobjon Rajapov, viloyat hokimi o'rinbosari G'ulomjon Murodxo'jayev, viloyat xalq ta'limi boshqarmasi boshlig'i Rustamjon Israilovlar barcha ishtirokchilarni muvaffaqiyat bilan qutlab, yanada zafarli marralarni zabt etishga chorladilar.",
            "G'olib maktab jamoalarga vazirlikning diplom, sertifikat  va qimmatbaho mukofotlari taqdim etildi. Tanlov yana shunisi bilan yuksak ahamiyat kasb etdiki, respublikamiz bo'ylab mazkur jarayonlarda faol qatnashib, yuksak natijalarni ko'rsatgan maktablarga vazirlik tomonidan bir milliard so'mlik robototexnika, musiqa va sport jihozlari sovg'a qilindi.Jarayonda g'oliblar, ishtirokchilar, kuzatuvchilar va mehmonlar tantana munosabati bilan tashkil etilgan ko'rgazma bilan yaqindan tanishdilar. Ko'rgazmadan joy olgan ijodiy ishlar, o'quvchilar va ilm dargohlari jamoalarining izlanishlari mahsuli, axborot texnologiyalari va ularning ish samaradorligi bilan bog'liq vositalar barcha ishtirokchilarda katta taassurot qoldirdi. O'quvchi-yoshlar ishtirokidagi chiqishlar, ular ijro etgan kuy-qo'shiqlar va raqslar taqdirlash marosimiga yanada tantanavorlik bag'ishladi."
        ],
        39665,
        new Date("2021-11-16"),
        [
            "xtb",
            "news",
            "talim"
        ]
    ),
    createPost(
        1,
        "NAMANGAN VILOYATI NORIN TUMANIDA KUNDALIK COM ELEKTRON JURNAL TIZIMINING YURITILISHI BO'YICHA XALQ TA'LIM VAZIRLIGI VA KUNDALIK KOMPANIYASIDAN ISHCHI GURUH A'ZOLARI TUMANDAGI MAKTABLARGA TASHRIF BUYURISHDI.",
        "./src/Components/Images/news/13.jpg",
        [
            "2021-yil 16-noyabr kuni Namangan viloyati Norin tumaniga O'zbekiston Respublikasi Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov va Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailovalar tashrif buyurishdi. Tashrif davomida tumandagi umumta'lim maktablarida “ Kundalik com” platformasida faoliyat yuritayotgan ta'lim muassasalarida olib borilayotgan ishlar to'g'risida maktab o'qituvchi va o'quvchilari bilan suhbat o'tkazildi. Tashrif yakunida tuman hokimligida tumandagi barcha ta'lim muassasalari direktorlari,o'quv hamda ma'naviy –ma'rifiy ishlar bo'yicha direktor o'rinbosarlari bilan o'quv-amaliy seminari tashkil etildi.Seminar davomida Xalq ta'limi vazirligining Ta'lim jarayonini raqamlashtirish bo'yicha maslahatchisi Rustam Kamilov tomonidan “ Kundalik com” platformasi to'g'risida seminar ishtirokchilariga tushunchalar berilib, seminar ishtirokchilarini qiziqtirgan savollariga javob berildi. Kundalik kompaniyasi metodika boshqarmasi boshlig'i Gulnora Ismailova o'z taqdimoti bilan seminar ishtirokchilariga “ Kundalik com” platformasida ishlash uslublari yuzasidan amaliy mashg'ulot o'tib, elektron platformaning afzalliklari to'g'risida ma'lumotlar berib o'tishdilar. Semenarda Namangan viloyati xalq ta'limi boshqarmasi Axborot kommunikatsiya texnologiyalarini joriy etish va rivojlantirish bo'limi boshlig'i A.Usmonov so'zga chiqib kundalik com elektron jurnal tizimini tizimli yo'lga qo'yish bo'yicha va uni nazorat qilish bo'yicha kerakli ma'lumotlarni berdi. Yig'ilish yakunida Norin tuman xalq ta'limi bo'limi mudiri Javlonbek Nurmuxamadov so'zga chiqib kelgan mehmonlarga xalq ta'lim vazirligi va kundalik kompaniyasi raxbariyatiga minnatdorchilik bildirib o'tdi."
        ],
        56072,
        new Date("2021-11-17"),
        [
            "xtb",
            "news",
            "talim"
        ]
    )
]

export default postsData