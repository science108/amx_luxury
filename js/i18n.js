/* ============================================================
   AMX Luxury — i18n Language Switcher (EN / PL)
   ============================================================ */
(function () {
  'use strict';

  var T = {
    /* ====== NAVIGATION ====== */
    'nav.story':       { en: 'Our Story',   pl: 'Nasza Historia' },
    'nav.philosophy':  { en: 'Philosophy',  pl: 'Filozofia' },
    'nav.him':         { en: 'For Him',     pl: 'Dla Niego' },
    'nav.her':         { en: 'For Her',     pl: 'Dla Niej' },
    'nav.vegan':       { en: 'Why Vegan',   pl: 'Dlaczego Vegan' },

    /* ====== HERO ====== */
    'hero.badge':      { en: '100% Vegan · Cruelty-Free · Lab-Proven',
                         pl: '100% Wegańskie · Bez Okrucieństwa · Potwierdzone Klinicznie' },
    'hero.title1':     { en: 'Luxury That Cares.',   pl: 'Luksus, Który Dba.' },
    'hero.title2':     { en: 'Science That Works.',   pl: 'Nauka, Która Działa.' },
    'hero.subtitle':   { en: 'Plant-powered intimate care &amp; vegan collagen — born from ethics, perfected by science.',
                         pl: 'Roślinna pielęgnacja intymna i wegański kolagen — zrodzone z etyki, udoskonalone przez naukę.' },
    'hero.cta.him':    { en: 'For Him',   pl: 'Dla Niego' },
    'hero.cta.her':    { en: 'For Her',   pl: 'Dla Niej' },
    'hero.scroll':     { en: 'Scroll',    pl: 'Przewiń' },

    /* ====== STORY ====== */
    'story.label':       { en: 'Our Story',   pl: 'Nasza Historia' },
    'story.title':       { en: 'Why AMX Luxury?<br><em>A Personal Mission</em>',
                           pl: 'Dlaczego AMX Luxury?<br><em>Osobista Misja</em>' },
    'story.greeting':    { en: 'Hi, I\'m Anna Marysia.',
                           pl: 'Cześć, tu Anna Marysia.' },
    'story.intro.p1':    { en: 'For years, watching the beauty industry, I felt a growing unease. Collagen was everywhere &mdash; a miracle ingredient promising eternal youth. But no one was talking about the fact that this collagen means animal suffering, a fishing industry that I &mdash; a vegetarian since childhood &mdash; simply cannot accept.',
                           pl: 'Przez lata, obserwując świat beauty, czułam narastający zgrzyt. Wszędzie kolagen &mdash; cudowny składnik, który obiecuje wieczną młodość. Ale nikt nie mówił głośno o tym, że ten kolagen to cierpienie zwierząt, to przemysł rybny, którego ja &mdash; jako wegetarianka od dziecka &mdash; nie potrafię zaakceptować.' },
    'story.intro.p2':    { en: 'My followers, many of you from India, kept writing to me: <em>"Anna, how do we care for our skin while respecting life?"</em> I searched for an alternative that wouldn\'t just be an "eco-label," but real technology.',
                           pl: 'Moi odbiorcy, w tym wielu z Was z Indii, pisaliście do mnie: <em>„Aniu, jak dbać o skórę, szanując życie?"</em> Szukałam alternatywy, która nie byłaby tylko „eko-etykietką", ale realną technologią.' },
    'story.intro.p3':    { en: 'I went back to my roots. My father has been running a family supplement workshop for years, where ethics always came before profit. We sat down together in the lab. I wanted to create something that doesn\'t imitate animal collagen, but activates your own body to produce it.',
                           pl: 'Wróciłam do korzeni. Mój tata od lat prowadzi rodzinną manufakturę suplementów, gdzie etyka zawsze stała przed zyskiem. Usiedliśmy razem w laboratorium. Chciałam stworzyć coś, co nie naśladuje kolagenu zwierzęcego, ale pobudza Twój własny organizm do jego produkcji.' },
    'story.intro.p4':    { en: 'That\'s how the <strong>AMX Luxury</strong> duo was born. These aren\'t just products. They are my father\'s legacy and my promise to you: <strong>100% plant power, 0% suffering, 100% results.</strong>',
                           pl: 'Tak powstał duet <strong>AMX Luxury</strong>. To nie są tylko produkty. To dziedzictwo mojego taty i moja obietnica dla Was: <strong>100% roślinnej mocy, 0% cierpienia, 100% rezultatów.</strong>' },
    'story.ch1.title':   { en: 'The Search',   pl: 'Poszukiwania' },
    'story.ch1.text':    { en: 'Anna Marysia had been a vegetarian her entire life. As a wellness influencer, she watched the world embrace collagen &mdash; yet every product she found was derived from fish, bovine, or other animal sources. For someone who had never compromised her values, this was simply not an option.',
                           pl: 'Anna Marysia była wegetarianką przez całe swoje życie. Jako influencerka wellness, obserwowała, jak świat pokochał kolagen &mdash; ale każdy produkt, jaki znalazła, pochodził z ryb, bydła lub innych źródeł zwierzęcych. Dla kogoś, kto nigdy nie poszedł na kompromis ze swoimi wartościami, to po prostu nie wchodziło w grę.' },
    'story.quote1':      { en: '"I couldn\'t ask my community to put something into their bodies that contradicts everything we believe in."',
                           pl: '„Nie mogłam prosić mojej społeczności, żeby przyjmowali coś, co stoi w sprzeczności ze wszystkim, w co wierzymy."' },
    'story.ch2.title':   { en: 'A Shared Belief',   pl: 'Wspólne Przekonanie' },
    'story.ch2.text':    { en: 'Her audience &mdash; many from India and across Asia &mdash; shares a deep conviction: wellness should never come at the cost of another living being. They trusted Anna because she never faked it. She needed a solution that was as authentic as she was.',
                           pl: 'Jej odbiorcy &mdash; wielu z Indii i Azji &mdash; podziela głębokie przekonanie: wellness nigdy nie powinien być kosztem innej żywej istoty. Ufali Annie, bo nigdy niczego nie udawała. Potrzebowała rozwiązania tak autentycznego jak ona sama.' },
    'story.ch3.title':   { en: 'Family Roots',   pl: 'Rodzinne Korzenie' },
    'story.ch3.text':    { en: 'What many don\'t know is that Anna\'s father had been running an ethical supplement company for years &mdash; a quiet family business built on the belief that effective formulas and compassion can coexist. No animal testing. No animal-derived ingredients. Just science and integrity.',
                           pl: 'Wielu nie wie, że tata Anny od lat prowadzi etyczną firmę suplementów &mdash; cichą rodzinną manufakturę zbudowaną na przekonaniu, że skuteczne formuły i współczucie mogą współistnieć. Żadnych testów na zwierzętach. Żadnych składników odzwierzęcych. Tylko nauka i uczciwość.' },
    'story.quote2':      { en: '"My father proved that you don\'t have to harm to heal. I grew up watching him choose the harder, kinder path &mdash; every single time."',
                           pl: '„Mój tata udowodnił, że nie trzeba krzywdzić, żeby leczyć. Dorastałam, patrząc jak za każdym razem wybiera trudniejszą, łagodniejszą drogę."' },
    'story.ch4.title':   { en: 'AMX Luxury Is Born',   pl: 'Narodziny AMX Luxury' },
    'story.ch4.text':    { en: 'Father and daughter joined forces. Combining his decades of formulation expertise with her understanding of what modern, conscious consumers truly need, they created AMX Luxury &mdash; a line of lab-proven, plant-based products that deliver real results without a single compromise.',
                           pl: 'Ojciec i córka połączyli siły. Łącząc jego dekady doświadczenia w tworzeniu formuł z jej rozumieniem potrzeb nowoczesnych, świadomych konsumentów, stworzyli AMX Luxury &mdash; linię potwierdzonych klinicznie, roślinnych produktów, które dają realne rezultaty bez żadnych kompromisów.' },

    /* ====== VALUES ====== */
    'values.label':      { en: 'Our Philosophy',   pl: 'Nasza Filozofia' },
    'values.title':      { en: 'Three Pillars of<br><em>AMX Luxury</em>',
                           pl: 'Trzy Filary<br><em>AMX Luxury</em>' },
    'values.v1.title':   { en: '100% Vegan &amp; Cruelty-Free',
                           pl: '100% Wegańskie &amp; Bez Okrucieństwa' },
    'values.v1.text':    { en: 'Every ingredient is plant-derived. No animal testing, no animal by-products — ever. Certified compassion from formula to shelf.',
                           pl: 'Każdy składnik jest roślinny. Żadnych testów na zwierzętach, żadnych produktów ubocznych — nigdy. Certyfikowane współczucie od formuły po półkę.' },
    'values.v2.title':   { en: 'Laboratory Proven',   pl: 'Potwierdzone Klinicznie' },
    'values.v2.text':    { en: 'Rigorous clinical testing backs every claim. Our formulas aren\'t just natural — they\'re scientifically validated to deliver visible, measurable results.',
                           pl: 'Rygorystyczne badania kliniczne stoją za każdym twierdzeniem. Nasze formuły nie są tylko naturalne — są naukowo potwierdzone, by dawać widoczne, mierzalne rezultaty.' },
    'values.v3.title':   { en: 'Family Heritage',   pl: 'Rodzinne Dziedzictwo' },
    'values.v3.text':    { en: 'Built on decades of ethical supplement expertise passed from father to daughter. AMX Luxury is a family promise — that doing good and doing well are never mutually exclusive.',
                           pl: 'Zbudowane na dekadach etycznej wiedzy suplementacyjnej przekazywanej z ojca na córkę. AMX Luxury to rodzinna obietnica — że czynienie dobra i odnoszenie sukcesów nigdy się nie wykluczają.' },

    /* ====== SETS (landing page) ====== */
    'set.him.label':     { en: 'For Him',   pl: 'Dla Niego' },
    'set.him.title':     { en: 'The Men\'s Set',   pl: 'Zestaw Męski' },
    'set.subtitle':      { en: 'Complete intimate wellness — inside &amp; out.',
                           pl: 'Kompleksowe intymne wellness — wewnątrz i na zewnątrz.' },
    'set.her.label':     { en: 'For Her',   pl: 'Dla Niej' },
    'set.her.title':     { en: 'The Women\'s Set',   pl: 'Zestaw Damski' },
    'set.type.cream':    { en: 'Intimate Skin Cream',   pl: 'Krem do Pielęgnacji Intymnej' },
    'set.type.caps':     { en: 'Vegan Collagen Capsules',   pl: 'Wegańskie Kapsułki Kolagenowe' },
    'set.feat.peptides': { en: 'Vegan bioactive peptides',   pl: 'Wegańskie bioaktywne peptydy' },
    'set.feat.skin':     { en: 'Supports intimate skin health',   pl: 'Wspiera zdrowie skóry intymnej' },
    'set.feat.wellness': { en: 'Improves sexual wellness',   pl: 'Poprawia wellness seksualny' },
    'set.feat.derm':     { en: 'Dermatologist approved',   pl: 'Zatwierdzone dermatologicznie' },
    'set.feat.plant':    { en: 'Plant-based collagen support',   pl: 'Roślinne wsparcie kolagenu' },
    'set.feat.boost':    { en: 'Vegan collagen-boosting formula',   pl: 'Wegańska formuła wzmacniająca kolagen' },
    'set.feat.ethical':  { en: 'Ethically sourced ingredients',   pl: 'Etycznie pozyskane składniki' },
    'set.feat.28days':   { en: 'Visible results in 28 days',   pl: 'Widoczne efekty w 28 dni' },
    'set.type.serum':    { en: 'Rejuvenating Serum',   pl: 'Serum Odmładzające' },
    'set.feat.serum.conc':{ en: 'Concentrated active peptides',   pl: 'Skoncentrowane aktywne peptydy' },
    'set.feat.serum.fast':{ en: 'Fast-absorbing formula',   pl: 'Szybko wchłaniająca się formuła' },
    'set.feat.serum.amp': { en: 'Amplifies cream results',   pl: 'Wzmacnia efekty kremu' },
    'set.price.label':   { en: 'Complete Set',   pl: 'Kompletny Zestaw' },
    'set.price.duo':     { en: 'Duo Set',   pl: 'Zestaw Duo' },
    'set.price.complete':{ en: 'Complete Set',   pl: 'Pełny Zestaw' },
    'set.save.duo':      { en: 'save €9',   pl: 'oszczędź €9' },
    'set.save.complete': { en: 'save €18',   pl: 'oszczędź €18' },
    'set.cta.men':       { en: 'Order Men\'s Set',   pl: 'Zamów Zestaw Męski' },
    'set.cta.women':     { en: 'Order Women\'s Set',   pl: 'Zamów Zestaw Damski' },
    'set.sub.hint':      { en: 'or <a href="products/men-set.html">subscribe from €99/mo</a>',
                           pl: 'lub <a href="products/men-set.html">subskrybuj od €99/mies.</a>' },
    'set.sub.hint.w':    { en: 'or <a href="products/women-set.html">subscribe from €99/mo</a>',
                           pl: 'lub <a href="products/women-set.html">subskrybuj od €99/mies.</a>' },

    /* ====== VEGAN SECTION ====== */
    'vegan.label':       { en: 'Why It Matters',   pl: 'Dlaczego To Ważne' },
    'vegan.title':       { en: 'The world doesn\'t need<br>another animal-derived product.',
                           pl: 'Świat nie potrzebuje<br>kolejnego produktu odzwierzęcego.' },
    'vegan.stat1.label': { en: 'of collagen supplements are made from fish or bovine sources',
                           pl: 'suplementów kolagenu powstaje z ryb lub bydła' },
    'vegan.stat2.label': { en: 'animal ingredients in any AMX Luxury product',
                           pl: 'składników odzwierzęcych w produktach AMX Luxury' },
    'vegan.stat3.label': { en: 'plant-powered, lab-verified effectiveness',
                           pl: 'roślinna, klinicznie potwierdzona skuteczność' },
    'vegan.statement':   { en: 'We believe beauty and wellness should never demand a sacrifice from another living being. AMX Luxury proves that nature and science, combined with compassion, create something truly extraordinary.',
                           pl: 'Wierzymy, że piękno i wellness nigdy nie powinny wymagać ofiary ze strony innej żywej istoty. AMX Luxury dowodzi, że natura i nauka, połączone ze współczuciem, tworzą coś naprawdę niezwykłego.' },

    /* ====== FOOTER ====== */
    'footer.tagline':    { en: 'Luxury without compromise.<br>Science without cruelty.',
                           pl: 'Luksus bez kompromisów.<br>Nauka bez okrucieństwa.' },
    'footer.explore':    { en: 'Explore',   pl: 'Odkryj' },
    'footer.connect':    { en: 'Connect',   pl: 'Kontakt' },
    'footer.contact':    { en: 'Contact Us',   pl: 'Napisz do Nas' },
    'footer.newsletter': { en: 'Stay in Touch',   pl: 'Bądź na Bieżąco' },
    'footer.nl.text':    { en: 'Be the first to know about new products and exclusive offers.',
                           pl: 'Bądź pierwszą osobą, która dowie się o nowych produktach i ekskluzywnych ofertach.' },
    'footer.nl.ph':      { en: 'Your email',   pl: 'Twój email' },
    'footer.nl.btn':     { en: 'Join',   pl: 'Dołącz' },
    'footer.copy':       { en: '© 2026 AMX Luxury. All rights reserved.',
                           pl: '© 2026 AMX Luxury. Wszelkie prawa zastrzeżone.' },
    'footer.men':        { en: 'Men\'s Set',   pl: 'Zestaw Męski' },
    'footer.women':      { en: 'Women\'s Set',   pl: 'Zestaw Damski' },

    /* ====== PRODUCT PAGES (shared) ====== */
    'ph.badge':          { en: 'Best Value — Save €9',   pl: 'Najlepsza Wartość — Oszczędź €9' },
    'ph.title.men':      { en: 'The Men\'s Set',   pl: 'Zestaw Męski' },
    'ph.title.women':    { en: 'The Women\'s Set',   pl: 'Zestaw Damski' },
    'ph.tagline':        { en: 'Complete intimate wellness — outside &amp; inside.',
                           pl: 'Kompleksowe intymne wellness — na zewnątrz i wewnątrz.' },
    'ph.inc.cream':      { en: 'Advanced peptide cream · 50ml',
                           pl: 'Zaawansowany krem peptydowy · 50ml' },
    'ph.inc.caps':       { en: 'Vegan collagen capsules · 60 caps',
                           pl: 'Wegańskie kapsułki kolagenowe · 60 szt.' },
    'pricing.onetime':   { en: 'One-Time',   pl: 'Jednorazowo' },
    'pricing.subscribe': { en: 'Subscribe &amp; Save',   pl: 'Subskrybuj &amp; Oszczędzaj' },
    'pricing.once.label':{ en: 'one-time purchase',   pl: 'zakup jednorazowy' },
    'pricing.mo':        { en: '/ month',   pl: '/ miesiąc' },
    'pricing.save20':    { en: 'Save €20 every month',   pl: 'Oszczędzasz €20 każdego miesiąca' },
    'pricing.addtocart': { en: 'Add to Cart',   pl: 'Dodaj do Koszyka' },
    'pricing.subnow':    { en: 'Subscribe Now',   pl: 'Subskrybuj Teraz' },
    'pricing.note':      { en: 'Cancel anytime. Free shipping on all subscriptions.',
                           pl: 'Anuluj w dowolnym momencie. Darmowa wysyłka przy subskrypcji.' },
    'trust.vegan':       { en: '100% Vegan',   pl: '100% Wegańskie' },
    'trust.lab':         { en: 'Lab-Proven',   pl: 'Klinicznie Potwierdzone' },
    'trust.cruelty':     { en: 'Cruelty-Free',   pl: 'Bez Okrucieństwa' },

    /* ====== PRODUCT DETAILS ====== */
    'pd.cream.sub':      { en: 'Advanced Peptide Rejuvenating Cream · 50ml',
                           pl: 'Zaawansowany Peptydowy Krem Odmładzający · 50ml' },
    'pd.caps.sub':       { en: 'Vegan Collagen Activator Capsules · 60 caps',
                           pl: 'Wegańskie Kapsułki Aktywujące Kolagen · 60 szt.' },
    'pd.cream.h3':       { en: 'Why This Cream?',   pl: 'Dlaczego Ten Krem?' },
    'pd.cream.p1':       { en: 'Peptidermax is a multi-functional rejuvenating cream formulated for daily use, morning and night. Enriched with cutting-edge active peptides, it visibly improves skin condition and restores a healthy, youthful appearance.',
                           pl: 'Peptidermax to wielofunkcyjny krem odmładzający stworzony do codziennego użytku, rano i wieczorem. Wzbogacony o najnowocześniejsze aktywne peptydy, widocznie poprawia kondycję skóry i przywraca zdrowy, młodzieńczy wygląd.' },
    'pd.cream.p2':       { en: 'The formula actively supports collagen and elastin production — the key proteins for skin strength, elasticity, and firmness. Regular use reduces visible wrinkles and increases skin firmness.',
                           pl: 'Formuła aktywnie wspiera produkcję kolagenu i elastyny — kluczowych białek odpowiedzialnych za wytrzymałość, elastyczność i jędrność skóry. Regularne stosowanie redukuje widoczne zmarszczki i zwiększa jędrność skóry.' },
    'pd.ingredients.title':{ en: 'Key Active Ingredients',   pl: 'Kluczowe Składniki Aktywne' },
    'pd.neo.text':       { en: 'Known as the "needle in a cream" — a bioactive peptide that stimulates collagen and elastin production. A non-invasive alternative to injections with visible rejuvenation results.',
                           pl: 'Znany jako „igła w kremie" — bioaktywny peptyd stymulujący produkcję kolagenu i elastyny. Nieinwazyjna alternatywa dla zastrzyków z widocznymi efektami odmładzania.' },
    'pd.argi.text':      { en: 'Acetyl Hexapeptide-8 — the vegan botox. Relaxes facial muscles to smooth expression lines and prevent new wrinkles, especially on the forehead and around the eyes.',
                           pl: 'Acetyl Hexapeptide-8 — wegański botox. Rozluźnia mięśnie twarzy, wygładza zmarszczki mimiczne i zapobiega powstawaniu nowych, szczególnie na czole i wokół oczu.' },
    'pd.hemp.text':      { en: 'Natural plant-based nourishment that deeply hydrates and supports the skin\'s barrier function.',
                           pl: 'Naturalne roślinne odżywienie, które głęboko nawilża i wspiera barierę ochronną skóry.' },
    'pd.hl.3mo':         { en: 'One jar lasts approx. 3 months',   pl: 'Jeden słoiczek wystarcza na ok. 3 miesiące' },
    'pd.hl.2x':          { en: 'Apply daily — morning &amp; evening',   pl: 'Stosuj codziennie — rano i wieczorem' },
    'pd.hl.0pct':        { en: 'Animal-derived ingredients',   pl: 'Składników odzwierzęcych' },
    'pd.buy.label':      { en: 'Buy Separately',   pl: 'Kup Osobno' },
    'pd.buy.buy':        { en: 'Buy',   pl: 'Kup' },
    'pd.buy.sub':        { en: 'Subscribe',   pl: 'Subskrybuj' },
    'pd.buy.subscribe':  { en: 'subscribe',   pl: 'subskrypcja' },
    'pd.caps.h3':        { en: 'Why These Capsules?',   pl: 'Dlaczego Te Kapsułki?' },
    'pd.caps.p1':        { en: 'CollanActive Q28 Complex is a unique formula combining a full spectrum of amino acids with key ingredients supporting natural beauty and joint comfort. Instead of consuming animal collagen, you activate your own body\'s collagen production.',
                           pl: 'CollanActive Q28 Complex to unikalna formuła łącząca pełne spektrum aminokwasów z kluczowymi składnikami wspierającymi naturalne piękno i komfort stawów. Zamiast spożywać kolagen zwierzęcy, aktywujesz własną produkcję kolagenu.' },
    'pd.caps.p2':        { en: 'Vitamin C supports proper collagen production, zinc maintains healthy skin, hair, and nails, while biotin supports their natural condition. Hyaluronic acid, glucosamine, and curcumin maintain joint comfort and mobility.',
                           pl: 'Witamina C wspiera prawidłową produkcję kolagenu, cynk utrzymuje zdrową skórę, włosy i paznokcie, a biotyna wspiera ich naturalną kondycję. Kwas hialuronowy, glukozamina i kurkumina utrzymują komfort i ruchomość stawów.' },
    'pd.amino.text':     { en: 'Including L-Glycine, L-Proline, and Hydroxyproline — the essential building blocks of collagen that make up its triple-helix structure for skin strength and elasticity.',
                           pl: 'W tym L-Glicyna, L-Prolina i Hydroksyprolina — niezbędne cegiełki kolagenu tworzące jego strukturę potrójnej helisy, odpowiedzialne za wytrzymałość i elastyczność skóry.' },
    'pd.ha.text':        { en: 'Natural component of synovial fluid — provides hydration and elasticity to joints while deeply moisturizing skin from within.',
                           pl: 'Naturalny składnik płynu stawowego — zapewnia nawilżenie i elastyczność stawów, jednocześnie głęboko nawilżając skórę od wewnątrz.' },
    'pd.curc.text':      { en: 'Standardized turmeric extract with powerful antioxidant properties, traditionally used in Ayurveda for centuries.',
                           pl: 'Standaryzowany ekstrakt z kurkumy o silnych właściwościach antyoksydacyjnych, tradycyjnie stosowany w Ajurwedzie od wieków.' },
    'pd.bamboo.text':    { en: 'Organic silicon from bamboo shoots — participates in collagen and elastin synthesis, supporting skin firmness, hair strength, and nail health.',
                           pl: 'Organiczny krzem z pędów bambusa — uczestniczy w syntezie kolagenu i elastyny, wspierając jędrność skóry, siłę włosów i zdrowie paznokci.' },
    'pd.hl.30':          { en: 'Days supply per bottle (2 caps/day)',   pl: 'Dni wystarczy jeden pojemnik (2 kaps./dzień)' },
    'pd.hl.28':          { en: 'Days to visible results',   pl: 'Dni do widocznych efektów' },
    'pd.hl.5in1':        { en: 'Skin, hair, nails, joints &amp; bones',   pl: 'Skóra, włosy, paznokcie, stawy i kości' },
    /* ====== SERUM ====== */
    'pd.serum.sub':      { en: 'Rejuvenating Active Serum · 30ml',
                           pl: 'Odmładzające Aktywne Serum · 30ml' },
    'pd.serum.h3':       { en: 'Why This Serum?',   pl: 'Dlaczego To Serum?' },
    'pd.serum.p1':       { en: 'A concentrated formula that delivers active peptides and botanical extracts directly into the deeper layers of the skin. Lightweight and fast-absorbing, it works synergistically with Peptidermax cream to amplify results.',
                           pl: 'Skoncentrowana formuła dostarczająca aktywne peptydy i ekstrakty botaniczne bezpośrednio do głębszych warstw skóry. Lekka i szybko wchłaniająca się, działa synergistycznie z kremem Peptidermax, wzmacniając rezultaty.' },
    'pd.serum.p2':       { en: 'The serum targets fine lines, uneven skin texture, and loss of firmness. Used daily, it visibly smooths and rejuvenates skin within weeks.',
                           pl: 'Serum celuje w drobne zmarszczki, nierówną teksturę skóry i utratę jędrności. Stosowane codziennie, widocznie wygładza i odmładza skórę w ciągu tygodni.' },
    'pd.serum.hl.size':  { en: 'Approx. 2 months supply',   pl: 'Wystarcza na ok. 2 miesiące' },

    /* ====== UPSELL (3-product set) ====== */
    'pd.upsell.badge':      { en: 'Best Value — Save €18',   pl: 'Najlepsza Wartość — Oszczędź €18' },
    'pd.upsell.title':      { en: 'The Complete Set',   pl: 'Pełny Zestaw' },
    'pd.upsell.desc':       { en: 'Cream + Capsules + Serum — the full regimen for maximum results.',
                               pl: 'Krem + Kapsułki + Serum — pełna pielęgnacja dla maksymalnych rezultatów.' },
    'pd.upsell.subscribe':  { en: 'Subscribe €169/mo',   pl: 'Subskrybuj €169/mies.' },

    'sticky.addtocart':  { en: 'Add to Cart',   pl: 'Dodaj do Koszyka' },
    'sticky.men':        { en: 'Men\'s Set',   pl: 'Zestaw Męski' },
    'sticky.women':      { en: 'Women\'s Set',   pl: 'Zestaw Damski' }
  };

  /* ---------- Engine ---------- */

  function getLang() {
    return localStorage.getItem('amx_lang') || 'en';
  }

  function setLang(lang) {
    localStorage.setItem('amx_lang', lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[key] && T[key][lang]) {
        el.innerHTML = T[key][lang];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (T[key] && T[key][lang]) {
        el.placeholder = T[key][lang];
      }
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('lang-switch__btn--active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ---------- Init ---------- */

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
    applyLang(getLang());
  });
})();
