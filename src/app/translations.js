export const supportedLanguages = [
  { code: 'nb', locale: 'nb-NO' },
  { code: 'en', locale: 'en-GB' },
]

export const translations = {
  nb: {
    languageLabel: 'Språk',
    languageNames: {
      nb: 'Norsk',
      en: 'Engelsk',
    },
    nav: {
      certification: 'Sertifisering',
      about: 'Om oss',
      membership: 'Bli medlem',
      donation: 'Donasjon',
      terms: 'Salgsvilkår',
      toggleLabel: 'Meny',
      home: 'Til forsiden',
    },
    hero: {
      eyebrow: 'Foreningen Quiz i Oslo',
      title: 'QiO bygger quizkulturen',
      lead:
        'QiO er en ideell forening som jobber for utvikling av quizkulturen i Norge, med utgangspunkt i hovedstaden. Vi skaper samlingspunkter, gjør samarbeid med organisasjoner og sertifiserer quizmastere.',
      primaryCta: 'Bli medlem',
    },
    info: {
      heading: 'Bli sertifisert quizmaster',
      paragraphs: [
        'Delta på QiOs sertifiseringsprogram for å bekrefte din kunnskap og kanskje lære noe du ikke har tenkt på. Sertifisering består av bekreftelse av gjennomført quiz, et tilfeldig utvalg kursmodudler fra vår kursdatabase, med en oppfølgende prøve som beviser at innholdet er lest og forstått.',

      ],
      tip: 'Sertifiserings er gratis. Den tekniske løsningen er ikke helt ferdigstilt, men vil havne på denne nettsiden innen utgangen av 2025.',
    },
    certification: {
      slug: '/sertifisering',
      hero: {
        eyebrow: 'QiO-sertifisering',
        title: 'Sertifiser deg som quizmaster',
        lead:
          'Bli sertifisert quizmaster med dette kjappe kurset og motta sertifikat og personlig emblem. Sertifikatet gjelder kun for betalende medlemmer i QiO og er gyldig i ett år. Du kan forlenge ett år til ved å ta neste kurs om ett år. Kurset er gratis.',
      },
      overview: {
        heading: null,
        paragraphs: [],
      },
      ctaLabel: 'Start kurset',
      modules: {
        heading: 'Kurset inneholder',
        ctaLabel: null,
        items: [
          {
            code: '1.1',
            title: 'Rollen som quizmaster',
            description:
              'Definer forventninger, ansvar og hvordan du bygger trygghet i rommet.',
          },
          {
            code: '1.2',
            title: 'Spørsmålskvalitet',
            description:
              'Lær rammeverk for vanskelighetsgrad, variasjon og kildekritikk.',
          },
          {
            code: '2.1',
            title: 'Inkludering og tilgjengelighet',
            description:
              'Legg til rette for deltagelse uansett bakgrunn, språk og funksjonsevne.',
          },
          {
            code: '2.2',
            title: 'Sosialt ansvar',
            description:
              'Skap trygge rammer og håndter konflikter med profesjonell kommunikasjon.',
          },
          {
            code: '3.1',
            title: 'Teknikk og verktøy',
            description:
              'Få kontroll på lyd, visuelle hjelpemidler og digitale støtteverktøy.',
          },
          {
            code: '3.2',
            title: 'Låning og gjenbruk',
            description:
              'Finn, krediter og gjenbruk materiale uten å miste din egen profil.',
          },
          {
            code: '4.1',
            title: 'Habilitet',
            description:
              'Forstå forventninger til habilitet, habilitetserklæringer og transparens.',
          },
          {
            code: '4.2',
            title: 'Honorar',
            description:
              'Sett verdibaserte priser og avtalemaler for ulike typer oppdrag.',
          },
          {
            code: 'Eksamen',
            title: 'Eksamen',
            description:
              'Samle alt du har lært i en praktisk vurdering og få sertifiseringen bekreftet.',
          },
        ],
      },
      enrollment: {
        heading: 'Skriv inn e-posten du er registrert med i QiO',
        description:
          'Vi bruker adressen til å bekrefte medlemskapet ditt og synkronisere progresjonen din.',
        label: 'E-postadresse',
        placeholder: 'navn@domene.no',
        cta: 'Bekreft at du er quizmaster',
        error: 'Skriv inn en gyldig e-postadresse (format x@x.x).',
      },
      verification: {
        heading: 'Bekreft at du er quizmaster',
        description:
          'Skriv inn navnet på et sted du arrangerer eller har arrangert quiz. Dette steget hjelper oss å koble deg mot riktig medlemsdata.',
        label: 'Sted eller arrangement',
        placeholder: 'Eksempel: Kulturhuset Oslo',
        hint: 'Du kan legge inn flere steder senere om du ønsker.',
        error: 'Skriv inn minst tre tegn.',
        cta: 'Fortsett til modul 1.1',
      },
      lessons: {
        '1.1': {
          title: '1.1 Rollen som quizmaster',
          intro: [],
          sections: [
            {
              heading: null,
              description:
                'Som quizmaster setter du grunnlaget for quizen og hvilke rammer som gjelder. I tillegg har du et medansvar for de øvrige rammene rundt quizen.\n\nDen første delen av kurset vil handle om rollen som quizmaster.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '1.2': {
          title: '1.2 Spørsmålskvalitet',
          intro: [],
          sections: [
            {
              heading: 'Valg av autoritet',
              description:
                'I starten av hver quiz setter du rammene for quizen, setter stemningen og bidrar til å sette stemningen i rommet.\n\nDu kan velge om det er åpent for diskusjon om spørsmålene, hvilke kilder som i så fall gjelder, eller om du praktiserer «quizmasters privilege» der du alltid har rett.\n\nSelv om du har en fast quiz, er det viktig å være tydelig med hvilke rammer som gjelder. Dette både for å friske opp for faste lag, og ikke minst for å informere nye lag om hva som er rammene for quizen.',
              confirmRequired: true,
              confirmLabel: 'Lest',
            },
            {
              heading: 'Tydelighet om svar',
              description:
                'Holder det med etternavn på personer? Hvis du har et musikkspørsmål, er det navn på låt, artist eller årstall som gjelder? Hva hvis det er flere samarbeidende artister? Vær tydelig, og informer også om antall mulige poeng.',
              confirmRequired: true,
              confirmLabel: 'Lest',
            },
            {
              heading: 'Transparens',
              description:
                'Det er viktig å være tydelig når det kommer til gjennomføringen av quizen. Hvis du snakker med lagene og for eksempel gir ekstra informasjon, er det ryddigste å gi den samme informasjonen til alle.',
              confirmRequired: true,
              confirmLabel: 'Lest',
            },
            {
              heading: 'Alkoholloven',
              description:
                'Alkoholloven legger begrensninger på hvordan man kan snakke om alkohol i markedsføring og som utsalgssted. For eksempel er det ikke lov å markedsføre alkohol i «massekommunikasjon i markedsføringsøyemed» dersom avsender har økonomisk interesse. Det betyr at du for eksempel ikke kan ha markedsføring for øl eller ølrabatt i din markedsføring som quizmaster.',
              confirmRequired: true,
              confirmLabel: 'Lest',
            },
            {
              heading: 'Alkohollovens gråsoner',
              description:
                'Et serveringssted kan ikke informere om for eksempel «Happy Hour» eller på annen måte oppfordre til alkoholbruk andre steder enn i baren, og selv der med begrensninger. Som quizmaster er du i utgangspunktet en scenekunstner og står fritt til å snakke om hva du vil, litt som en standupkomiker. Det er imidlertid Næringsetaten ved skjenkekontrollen som skjønnsmessig vurderer hva som kan gi «prikk» på serveringsstedets skjenkebevilling, så det er viktig å ha god dialog med ledelsen på stedet for å avklare hvordan man omtaler alkohol, eventuelle rabatter, utvalg med mer som quizmaster.',
              confirmRequired: true,
              confirmLabel: 'Lest',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '2.1': {
          title: '2.1 Spørsmålskvalitet',
          intro: [],
          sections: [
            {
              heading: 'Gode og dårlige kilder',
              description:
                'De beste kildene er de som har en faglig redaksjon, som for eksempel Store Norske Leksikon eller Encyclopedia Britannica, m.fl.',
            },
            {
              heading: 'Middels gode kilder',
              description:
                'Wikipedia holder vanligvis en høy kvalitet, men bør dobbeltsjekkes. Det gjelder spesielt nisjeartikler, som kanskje ikke er skrevet av kyndige, inneholder skrivefeil eller ikke har blitt oppdatert på lenge. Wikipedia kan også bomme på årstall for utgivelser av musikk eller på hvem som er sittende statsleder når årstallene er tvetydige. Vær oppmerksom når forfatteren har tatt et valg uten å spesifisere.',
            },
            {
              heading: 'Musikk',
              description:
                'Det kan være krevende å finne 100 % troverdige kilder for musikk. Wikipedia er som regel brukbar, men bør dobbeltsjekkes. På Discogs finner du ofte første fysiske utgivelse av singler og album, og det er en god kryss-sjekk. Unngå Google som eneste kilde; søkemotoren skiller dårlig mellom innspillingsår og utgivelsesår.',
            },
            {
              heading: 'Dårlige kilder',
              description:
                'Strømmetjenester varierer mellom å bruke faktisk utgivelsesdato og datoen musikken ble tilgjengelig hos dem. Den som laster opp musikk kan også skrive feil årstall. Derfor er strømmeplattformer uegnet som primærkilde.',
            },
            {
              heading: 'Kunstig intelligens',
              description:
                'Språkmodeller er notorisk svake på årstall, kilder og etterprøvbarhet. De prioriterer et tilfredsstillende svar til deg som bruker, og bommer selv på jus, vitenskap og kjente historiske fakta. Vær svært nøye med promptingen, dobbeltsjekk mot troverdige kilder, eller dropp AI helt.',
            },
            {
              heading: 'Gjenbruk',
              description:
                'Å låne spørsmål er i utgangspunktet uproblematisk. Quizspørsmål behandles som matoppskrifter: du kan låne en oppskrift, men ikke kopiere en hel bok. Å blåkopiere en annen quizmaster eller en avis er dårlig praksis. Generelle spørsmål – som høyeste fjell eller vinner av et fotball-VM – kan aldri være plagiat, fordi temaene er universelle.',
            },
            {
              heading: 'Formulering',
              description:
                'Formuler spørsmål uten tvetydighet. Istedenfor «Hva heter ekskonen til X?» hvis personen har flere ekskoner, skriv «Hva het personen X var gift med før hen giftet seg med Y?» for å unngå forvirring.',
            },
            {
              heading: 'Mangfold',
              description:
                'Lagspillerne har ulike interesser og kunnskaper. Sørg for variasjon slik at alle har noe å bidra med, ellers mister du engasjementet i laget.',
            },
            {
              heading: 'Inkludering',
              description:
                'En god quiz treffer unge, gamle, akademikere, gatesmarte og folk med ulik bakgrunn. For mange Norge-spesifikke spørsmål kan gjøre det kjedelig for deltakere som ikke har vokst opp her.',
            },
            {
              heading: 'God stemning',
              description:
                'Vær bevisst på betente og mørke temaer. Spillere kan ha egne eller familiens erfaringer med krig, sult eller andre traumer. Politisk betente temaer kan også trigge konflikter. Det er ikke forbudt å berøre vanskelige temaer, men bruk dem med måte for å ivareta den gode stemningen.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '2.2': {
          title: '2.2 Teknikk og verktøy',
          intro: [],
          sections: [
            {
              heading: 'Lydutstyr',
              description:
                'Forskjellige lokaler har ulike lydoppsett, men det finnes noen generelle råd for god praksis. Bli kjent med utstyret og avtal ansvar med stedet på forhånd.',
            },
            {
              heading: 'Mikseren',
              description:
                'Unngå å sette master-kanalen for høyt. Ikke la master stå på maks og styre alt via kanalnivå. Sett master på et moderat nivå og hold kanalene under rød sone – det gir behagelig lyd og beskytter utstyret.',
            },
            {
              heading: 'Egen mikser',
              description:
                'Hvis stedet ikke har mikser, vurder å ta med din egen. Det gir mer kontroll, fleksibilitet i plassering og gjør det enklere å jobbe på flere venues. Sjekk hva som finnes på huset og test i god tid.',
            },
            {
              heading: 'Mikrofonteknikk',
              description:
                'Vanligvis bruker du dynamisk håndholdt mikrofon eller lavalier/headset. En dynamisk mikrofon skal peke rett mot munnen. Lavalier må plasseres nær munnen og uten kontakt med klær. Headset må sitte slik at pust ikke treffer mikrofonkapselen direkte.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '3.1': {
          title: '3.1 Honorar',
          intro: [],
          sections: [
            {
              heading: 'Små og store aktører',
              description:
                'Still høyere krav til store aktører enn til «kneipa på hjørnet». Store venues har større budsjetter og tjener ofte mer på quizkvelder enn små steder.',
            },
            {
              heading: 'Et sted å starte',
              description:
                'For å forhandle honorar må du ha et utgangspunkt. Ulike prismodeller gir forskjellige måter å beregne honoraret ditt på.',
            },
            {
              heading: 'Kostnader, avskrivninger og pensjon',
              description:
                'Som frilanser har du både direkte kostnader og tidsbruk. Ta med regnskapssystem, nettside og utstyr i kalkylen – små beløp blir store over tid. Selv transportutgifter kan bli flere tusen kroner i året. Husk også tiden du bruker på regnskap og markedsføring.',
            },
            {
              heading: 'Frilans vs ansatt',
              description:
                'Frilansere har ikke pensjonsavtale, forsikringer eller arbeidsgiveravgift. Et vanlig utgangspunkt er å sette av 10 % til pensjon og 10–17 % til administrasjon og regnskap.',
            },
            {
              heading: 'Minstelønn i servering',
              description:
                'Minstelønnen i serveringsbransjen (2024) er 191 kr/t. Jobber du to timer før og to timer under arrangementet, og fakturerer under 764 kr, ligger du allerede under minstelønn. Legger du til arbeidsgiveravgift og lovpålagt pensjon, må bedriften ut minst 886 kr. Med anbefalt pensjon og administrasjon er du på 1107 kr, før kostnader. Alt under dette er i praksis skampris.',
            },
            {
              heading: 'Omsetningsbasert honorar',
              description:
                'Du kan avtale en prosentandel av omsetningen før, under og etter quizen. Regn ut forventet snitthonorar, så du ikke står igjen med en uforholdsmessig lav sum.',
            },
            {
              heading: 'CREO-sats for musikere',
              description:
                'Musikere er sammenlignbare frilansere. CREO anbefaler minst 5900 kr per musiker per konsert. Det er ikke en perfekt parallell, men gir et holdepunkt for hva profesjonelle opptredener kan koste.',
            },
            {
              heading: 'Prisvekstjustering',
              description:
                'Priser øker nesten hvert år. Inkluder prisjustering i avtalene dine. Du kan bruke prisvekstkalkulatorer én gang i året, eller sette en fast justering på 2,5 % (Norges Banks inflasjonsmål).',
            },
            {
              heading: 'Svart betaling',
              description:
                'Svart betaling skader alle parter og er ulovlig. Si alltid nei, og vær forsiktig med aktører som foreslår slike løsninger.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '3.2': {
          title: '3.2 Låning og gjenbruk',
          intro: [
            'Inspirasjon er normalt, men du må kunne vise til gode kilder og sette ditt preg på materialet.',
            'Modulen gir deg grunnregler for kreditering, lisensiering og samarbeid med andre quizmastere.',
          ],
          sections: [
            {
              heading: 'Læringsmål',
              items: [
                'Forstå når du må innhente eksplisitt tillatelse.',
                'Skille mellom offentlig domene, Creative Commons og kjøpt materiale.',
                'Dokumentere egen kildebruk i spørsmålsbanken.',
              ],
            },
            {
              heading: 'Praktisk øvelse',
              ordered: true,
              items: [
                'Finn tre spørsmål du ønsker å gjenbruke og noter originalkilden.',
                'Tilpass spørsmålene med egen vinkling eller ekstra ledetråder.',
                'Legg til krediteringstekst i quizmanuset ditt.',
              ],
            },
            {
              heading: 'Samarbeid',
              description:
                'Lag en kort avtale-mal du kan bruke når du utveksler spørsmålssett med andre.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '4.1': {
          title: '4.1 Sosialt ansvar',
          intro: [],
          sections: [
            {
              heading: 'Fysiske begrensninger',
              items: [
                'Svaksynte',
                'Hørselshemmede',
                'Nærsynte',
                'Dyslektikere',
                'Bevegelseshemmede',
              ],
            },
            {
              heading: 'Alkohol',
              items: [
                'Skap et trygt sted for alle',
                'Legg til rette for deltakelse uten alkoholpress',
                'Vær bevisst på eget forbruk',
              ],
            },
            {
              heading: 'Språk og bakgrunn',
              items: [
                'Unngå over-vanskelige ord og faguttrykk',
                'Ta hensyn til deltakere som ikke har levd hele livet i Norge',
                'Vis respekt for ulike religionsbakgrunner',
              ],
            },
            {
              heading: 'Samfunnsbidrag',
              items: [
                'Du bidrar til allmenn dannelse',
                'Du bidrar til integrering',
                'Du gir folk med ulike livsløp en arena å møtes på',
              ],
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        '4.2': {
          title: '4.2 Bekreft ansvar',
          intro: [],
          sections: [
            {
              heading: null,
              description:
                'Jeg bekrefter at jeg som del av sertifisering vil være bevisst mitt ansvar som aktør i quizbransjen og min solidaritet med andre quizmastere gjennom ryddig og profesjonell gjennomføring av arrangementer og mest mulig riktig prising.',
            },
          ],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
            next: 'Gå videre til {code}',
          },
        },
        Eksamen: {
          title: 'Eksamen',
          intro: [],
          sections: [],
          actions: {
            backToOverview: 'Tilbake til kursoversikten',
          },
          multipleChoice: [
            {
              id: 'eksamen-1',
              module: '1.2',
              question: 'Hvorfor er det viktig å informere om reglene før quizen starter?',
              options: [
                { label: 'Fordi nye lag ikke vet hva reglene er', correct: true },
                { label: 'Fordi faste lag kan ha glemt hva reglene er', correct: true },
                { label: 'Fordi det er viktig å fylle tiden med noe', correct: false },
              ],
            },
            {
              id: 'eksamen-2',
              module: '1.2',
              question: 'Kan du markedsføre en rabatt på øl på stedet der du holder quiz?',
              options: [
                { label: 'Ikke i sosiale medier', correct: true },
                { label: 'Ja, hvor som helst', correct: false },
                {
                  label: 'Ja, på selve quizen, men skjenkekontrollen kan tolke det som alkoholmarkedsføring',
                  correct: true,
                },
              ],
            },
            {
              id: 'eksamen-3',
              module: '2.1',
              question: 'Hvilken av disse er regnet som en god kilde?',
              options: [
                { label: 'Store Norske Leksikon', correct: true },
                { label: 'En fan-blogg', correct: false },
                { label: 'Noe du hørte fra en kompis', correct: false },
              ],
            },
            {
              id: 'eksamen-4',
              module: '2.1',
              question: 'Hva er fallgruvene ved å bruke kunstig intelligens?',
              options: [
                { label: 'Den kan lett bomme på årstall', correct: true },
                { label: 'Den prøver å tilfredsstille deg mer enn den er kildekritisk', correct: true },
                { label: 'AI lager altfor vanskelige spørsmål', correct: false },
              ],
            },
            {
              id: 'eksamen-5',
              module: '2.1',
              question: 'Er det greit å bruke spørsmål fra andre quizmastere?',
              options: [
                { label: 'Ja, men ikke å kopiere hele quizen', correct: true },
                { label: 'Ja, men bare hvis den er under Creative Commons-lisens', correct: false },
                { label: 'Nei, man kan ikke bruke et spørsmål man har hørt eller lest et sted', correct: false },
              ],
            },
            {
              id: 'eksamen-6',
              module: '2.2',
              question: 'Hvorfor er det viktig å ikke sette master-kanalen til maks på en mikser?',
              options: [
                { label: 'Fordi det kan ødelegge utstyr', correct: true },
                { label: 'Fordi det kan bli altfor høyt volum', correct: true },
                { label: 'Fordi det bruker mye strøm', correct: false },
              ],
            },
            {
              id: 'eksamen-7',
              module: '2.2',
              question: 'Hvordan skal man bruke en dynamisk mikrofon?',
              options: [
                { label: 'Man skal sikte den rett mot munnen', correct: true },
                { label: 'Man skal holde den opp-ned som en kul rapper', correct: false },
                { label: 'Man skal ha den lengst mulig unna munnen', correct: false },
              ],
            },
            {
              id: 'eksamen-8',
              module: '3.1',
              question: 'Hva er CREO sin anbefalte minstesats for en konsert?',
              options: [
                { label: '5900 kr for hele bandet', correct: false },
                { label: '5900 kr per musiker', correct: true },
                { label: '2900 kr per musiker', correct: false },
              ],
            },
            {
              id: 'eksamen-9',
              module: '3.1',
              question: 'Hvis du får omsetningsbasert honorar på 5 %, og kassa omsetter for 30 000, hva blir honoraret?',
              options: [
                { label: '1500 kr', correct: true },
                { label: '3000 kr', correct: false },
                { label: '750 kr', correct: false },
              ],
            },
            {
              id: 'eksamen-10',
              module: '3.1',
              question: 'Hvor mye bør du sette av til pensjon som frilanser?',
              options: [
                { label: 'Ca. 10 %', correct: true },
                { label: 'Ca. 2 %', correct: false },
                { label: 'Ingenting, pensjon går helt automatisk', correct: false },
              ],
            },
            {
              id: 'eksamen-11',
              module: '3.1',
              question: 'Hvorfor bør du ikke godta svart betaling?',
              options: [
                { label: 'Fordi det er ulovlig', correct: true },
                { label: 'Fordi det er et tegn på at oppdragsgiveren er useriøs', correct: true },
                { label: 'Fordi det er stress å sette inn kontanter i banken', correct: false },
              ],
            },
            {
              id: 'eksamen-12',
              module: '4.1',
              question: 'Hvordan bør du forholde deg til alkoholforbruk?',
              options: [
                { label: 'Oppfordre til mest mulig drikking for å få opp omsetningen', correct: false },
                { label: 'Drikke mest mulig selv hvis du får det gratis', correct: false },
                {
                  label: 'Legge opp til et miljø der man hverken dømmer de som drikker, eller de som ikke gjør det',
                  correct: true,
                },
              ],
            },
            {
              id: 'eksamen-13',
              module: '4.1',
              question: 'Hvorfor kan det være dumt å stille mange spørsmål om for eksempel norske TV-serier?',
              options: [
                { label: 'Fordi det er kjedelig', correct: false },
                {
                  label: 'Fordi noen lag kan bestå av personer som flyttet til Norge etter seriene gikk på TV',
                  correct: true,
                },
                { label: 'Fordi ikke alle har TV', correct: false },
              ],
            },
            {
              id: 'eksamen-14',
              module: '4.1',
              question: 'Hvordan kan quiz bidra til integrering og fellesskap?',
              options: [
                {
                  label: 'Gjennom å skape en arena der forskjellige typer mennesker møtes',
                  correct: true,
                },
                { label: 'Gjennom å bidra til allmenn dannelse', correct: true },
                { label: 'Gjennom å bidra til kulturell integrering', correct: true },
              ],
            },
          ],
          submitLabel: 'Send inn svar',
          successMessage: 'Gratulerer! Du bestod eksamen.',
          failureMessage: 'Sjekk at du har valgt alle riktige svar og ingen feil, og prøv igjen.',
        },
      },
      overlay: {
        question: 'Er du medlem?',
        yes: 'Ja',
        joinNow: 'Bli medlem nå',
      },
    },
    membership: {
      slug: '/bli-medlem',
      selectorLabel: 'Velg medlemskap',
      ctaLabel: 'Bli medlem',
      ctaHref: '/betal',
      categories: {
        person: 'Person',
        quizmaster: 'Quizmaster',
        company: 'Bedrift',
        angel: 'Engel',
        donation: 'Donasjon',
      },
      hero: {
        eyebrow: 'Medlemskap i QiO',
        title: 'Bli medlem i QiO',
        lead:
          'Bidra til å bygge Oslos quiz-fellesskap! Som registrert ideell forening går alle pengene til foreningens arbeid.',
        primaryCta: 'Bli medlem',
      },
      sections: [
        {
          heading: 'Bidra til å bygge QiO!',
          paragraphs: [
            'Vi er en nystartet organisasjon. Ved å bli medlem støtter du oppbygningen av Quiz-Oslo og gir oss mulighet til å avholde arrangementer og søke støtte til viktige og morsomme arrangementer.',
          ],
        },
        {
          heading: 'Dette får du som medlem',
          tag: '150 kr /år',
          category: 'person',
          items: [
            'Du blir en QiO-quizzer',
            'Invitasjon til arrangementer',
            'Nyhetsbrev med quizoppgaver',
            'Tips om quizteknikk og strategi',
            'Bidra til at quizer blir mer tilgjengelige',
            'Bli med på å bygge et quiz-fellesskap',
            'Loddtrekning av eksklusiv VIQ-merch (Very Important Quizzer)',
          ],
        },
        {
          heading: 'For quizmastere',
          tag: '150 kr /år',
          category: 'quizmaster',
          items: [
            'Samme fordeler som personmedlemsskap',
            'Bli sertifisert quizmaster i vårt sertifiseringsprogram. Det tar under en time og gir deg rett til å bruke "Medlem av Profesjonelle quizere i QiO (MQIO)"-merket.',
          ],
        },
        {
          heading: 'For bedrifter',
          tag: '750 kr /år',
          category: 'company',
          description: 'Som bedriftsmedlem får du',
          items: [
            'Tilgang til arrangementer for alle ansatte i bedriften',
            'Generelle tips og råd til arrangement (sertifisering kommer))',
            'Tips og råd om hvordan gjøre arrangementer tilgjengelige for flere',
          ],
        },
        {
          heading: 'Englemedlem',
          tag: '550 kr /år',
          category: 'angel',
          description: 'For deg som vil bidra litt ekstra',
          items: [
            'To gavekort på medlemsskap',
            'VIQ (Very Important Quizzer) kopp',
            'Bidra litt ekstra til QiOs arbeid',
            'Masse kjærlighet fra foreningen',
          ],
        },
        {
          heading: 'Donasjon',
          category: 'donation',
          disableActions: true,
          description:
            'Du kan donere til foreningen ved å bruke Vipps-nummer XXXXXX.',
          image: '/Vipps_QR.png',
          imageAlt: 'Vipps QR-kode for QiO',
          paragraphs: [
            'Skann QR-koden eller søk etter nummeret i appen og velg beløpet du ønsker å bidra med. Takk for støtten! '
          ],
        },
      ],
    },
    payment: {
      slug: '/betal',
      hero: {
        eyebrow: 'Medlemsbetaling',
        title: 'Fullfør QiO-medlemskapet ditt',
        lead:
          'Betal årsavgiften for å aktivere medlemskapet. Merk betalingen med navnet ditt slik at vi finner deg i registeret.',
        primaryCtaHref: 'https://vipps.no/',
        payLabel: 'Registrer og betal',
      },
      overview: {
        heading: 'Fullfør QiO-medlemskapet ditt',
        description:
          'Velg medlemskapet som passer deg. Kontingenten gjelder i 12 måneder fra betalingsdato.',
        selectorLabel: 'Velg medlemskap',
        options: [
          {
            id: 'person',
            title: 'Person',
            price: '150 kr / år',
            description:
              'For deg som vil støtte quizmiljøet og delta på arrangementer.',
          },
          {
            id: 'quizmaster',
            title: 'Quizmaster',
            price: '150 kr / år',
            description:
              'Samme fordeler som personmedlemskap, inkludert tilgang til sertifiseringsprogrammet.',
          },
          {
            id: 'company',
            title: 'Bedrift',
            price: '750 kr / år',
            description:
              'For bedrifter og arrangørsteder som ønsker å samarbeide med QiO.',
          },
          {
            id: 'angel',
            title: 'Engel',
            price: '550 kr / år',
            description:
              'For deg som vil bidra litt ekstra og gi to gavekort på medlemskap.',
          },
        ],
      },
      form: {
        heading: 'Oppgi kontaktinformasjon',
        firstNameLabel: 'Fornavn',
        firstNamePlaceholder: 'Fornavn',
        lastNameLabel: 'Etternavn',
        lastNamePlaceholder: 'Etternavn',
        phoneLabel: 'Telefonnummer',
        phonePlaceholder: 'Telefonnummer',
        emailLabel: 'E-post',
        emailPlaceholder: 'navn@example.com',
        consentLabel:
          'Jeg godtar oppbevaring av personopplysninger og digital kommunikasjon.',
        termsConsentLabel: 'Jeg godtar {terms}',
        termsLinkLabel: 'salgsvilkårene',
      },
      instructions: {
        heading: 'Slik betaler du med Vipps',
        intro: 'Følg stegene under når du åpner Vipps-appen.',
        steps: [
          'Åpne Vipps og søk etter "Quiz i Oslo".',
          'Velg medlemskategorien du ønsker og skriv navnet ditt i meldingsfeltet.',
          'Bekreft betalingen og lagre kvitteringen.',
        ],
        note:
          'Trenger du faktura eller hjelp? Send oss en e-post på {email}.',
      },
      confirmation: {
        heading: 'Etter at du har betalt',
        steps: [
          'Vipps sender deg kvittering - lagre den for egen oversikt.',
          'Vi registrerer betalingen og bekrefter medlemskapet ditt innen to virkedager.',
          'Du mottar medlemsinformasjon og invitasjoner på e-postadressen du har oppgitt.',
        ],
        note:
          'Har du ikke fått bekreftelse innen to virkedager? Ta kontakt på {email}.',
      },
      contact: {
        heading: 'Spørsmål?',
        description:
          'Send oss en e-post på {email}, så hjelper vi deg med riktig medlemskap eller betalingsmåte.',
        ctaLabel: 'Send e-post',
        ctaHref:
          'mailto:hei@quizioslo.no?subject=Sp%C3%B8rsm%C3%A5l%20om%20medlemsbetaling',
      },
    },
    terms: {
      slug: '/salgsvilkar',
      heading: 'Salgsvilkår for Quiz i Oslo',
      hero: {
        title: 'Salgsvilkår',
        lead:
          'Disse vilkårene gjelder for kjøp av medlemskap i foreningen Quiz i Oslo (organisasjonsnummer 933 380 041).',
      },
      downloadLabel: 'Last ned salgsvilkårene (PDF)',
      downloadHref: '/Salgsvilkaar.pdf',
      sections: [
        {
          heading: 'Parter',
          paragraphs: [
            'Selger er:\nQuiz i Oslo\nOrganisasjonsnummer: 933 380 041\nAdresse: Schweigaards gate 60B\nE-post: qioforeningen@gmail.com\nTelefon: 4669313O',
            'Kjøper er den personen som registrerer seg som medlem og betaler kontingent via vår nettside.',
          ],
        },
        {
          heading: 'Betaling',
          paragraphs: [
            'Medlemskontingent betales med Vipps eller annen tilgjengelig betalingsløsning. Betalingen registreres umiddelbart, og medlemskapet aktiveres når betalingen er gjennomført.',
          ],
        },
        {
          heading: 'Levering',
          paragraphs: [
            'Medlemskapet gjelder fra det tidspunktet betalingen er registrert og gir tilgang til medlemsfordeler som beskrevet på vår nettside.',
          ],
        },
        {
          heading: 'Angrerett',
          paragraphs: [
            'Som hovedregel gjelder angrerettloven for forbrukerkjøp. Ved kjøp av medlemskap i en ideell forening gjelder angreretten i 14 dager fra kjøpsdato dersom medlemskapet ikke er tatt i bruk. For å benytte angreretten må du kontakte oss skriftlig på e-post innen fristen.',
          ],
        },
        {
          heading: 'Retur',
          paragraphs: [
            'Siden medlemskap ikke er en fysisk vare, gjelder ikke returrett utover angreretten.',
          ],
        },
        {
          heading: 'Reklamasjonshåndtering',
          paragraphs: [
            'Dersom det oppstår feil eller mangler knyttet til registreringen eller leveringen av medlemskapet, ber vi deg kontakte oss så snart som mulig på e-post. Vi vil behandle henvendelsen innen rimelig tid og sørge for en løsning.',
          ],
        },
        {
          heading: 'Medlemskap – fornyelse og oppsigelse',
          paragraphs: [
            'Medlemskapet fornyes automatisk hver 12. måned via samme betalingsmåte som ble brukt ved innmelding. Du vil få varsel i forkant av fornyelsen.',
            'Du kan når som helst si opp medlemskapet ved å kontakte oss på e-post. Oppsigelsen trer i kraft ved utløpet av inneværende medlemsperiode, og videre betalinger vil da stoppe.',
            'Endringer av kontaktinformasjon eller medlemskategori gjøres ved å kontakte oss på e-post.',
          ],
        },
        {
          heading: 'Konfliktløsning',
          paragraphs: [
            'Vi ønsker å løse eventuelle tvister i minnelighet. Dersom dette ikke lykkes, kan saken bringes inn for Forbrukerrådet eller ordinær domstolsbehandling etter norsk lov.',
          ],
        },
      ],
    },
    footer: {
      rights: '© {year} Quiz i Oslo. Alle rettigheter forbeholdt.',
      follow: 'Følg oss på',
      socialName: 'Instagram',
      socialHint: 'for teasere og giveaways.',
      termsLinkLabel: 'Salgsvilkår',
    },
  },
  en: {
    languageLabel: 'Language',
    languageNames: {
      nb: 'Norwegian',
      en: 'English',
    },
    nav: {
      certification: 'Certification',
      about: 'About',
      membership: 'Join QiO',
      donation: 'Donation',
      terms: 'Terms of Sale',
      toggleLabel: 'Menu',
      home: 'Go to homepage',
    },
    hero: {
      eyebrow: 'The Quiz in Oslo Association',
      title: 'QiO grows the quiz community',
      lead:
        'QiO is a non-profit dedicated to developing the quiz culture in Norway, with Oslo as its home base. We build meeting places, train quiz hosts, and connect teams with new venues.',
      primaryCta: 'Join the network',
    },
    info: {
      heading: 'Become a certified quizmaster',
      paragraphs: [
        'Join QiO’s certification track to learn how to plan, write, and deliver professional quiz nights. The program blends digital modules with hands-on sessions led by experienced hosts.',
        'Email {email} with your name and a short description of your experience to receive details on the next course and the certification criteria.',
      ],
      tip: 'Tip: We prioritise applicants who already host quizzes or collaborate with a venue.',
      email: 'hei@quizioslo.no',
    },
    certification: {
      slug: '/certification',
      hero: {
        eyebrow: 'QiO Certification',
        title: 'Become a certified quizmaster',
        lead:
          'Become a certified quizmaster through this quick course to receive a certificate and personal emblem. It is available only to paying QiO members, valid for one year, and can be extended by retaking next year’s course. The course is free.',
      },
      overview: {
        heading: null,
        paragraphs: [],
      },
      ctaLabel: 'Start the course',
      modules: {
        heading: 'Course contents',
        ctaLabel: null,
        items: [
          {
            code: '1.1',
            title: 'The quizmaster role',
            description:
              'Clarify expectations, responsibilities, and how to create a safe atmosphere.',
          },
          {
            code: '1.2',
            title: 'Question quality',
            description:
              'Apply frameworks for difficulty balance, variety, and source evaluation.',
          },
          {
            code: '2.1',
            title: 'Inclusion and accessibility',
            description:
              'Design experiences that welcome every background, language, and ability.',
          },
          {
            code: '2.2',
            title: 'Social responsibility',
            description:
              'Establish safe expectations and handle conflicts with professional communication.',
          },
          {
            code: '3.1',
            title: 'Tools and tech',
            description:
              'Master audio, visual aids, and digital utilities that support your quiz.',
          },
          {
            code: '3.2',
            title: 'Borrowing and reuse',
            description:
              'Source, credit, and adapt material without losing your signature style.',
          },
          {
            code: '4.1',
            title: 'Integrity',
            description:
              'Understand impartiality standards, declarations, and transparent practices.',
          },
          {
            code: '4.2',
            title: 'Fees',
            description:
              'Set value-based pricing and agreements for different engagements.',
          },
          {
            code: 'Exam',
            title: 'Exam',
            description:
              'Demonstrate everything you have built in a practical assessment to complete the certification.',
          },
        ],
      },
      enrollment: {
        heading: 'Enter the email linked to your QiO membership',
        description:
          'We use it to confirm your membership and keep your course progress in sync.',
        label: 'Email address',
        placeholder: 'name@example.com',
        cta: 'Confirm you are a quizmaster',
        error: 'Enter a valid email address (format x@x.x).',
      },
      verification: {
        heading: 'Confirm you are a quizmaster',
        description:
          'Share the name of a venue where you host or have hosted a quiz. This helps us connect you to the right membership data.',
        label: 'Venue or event name',
        placeholder: 'Example: Kulturhuset Oslo',
        hint: 'You can add more venues later if you need to.',
        error: 'Enter at least three characters.',
        cta: 'Continue to module 1.1',
      },
      lessons: {
        '1.1': {
          title: '1.1 The quizmaster role',
          intro: [],
          sections: [
            {
              heading: null,
              description:
                'As a quizmaster you set the foundations for the quiz and the frame for how the event runs. You also share responsibility for the surrounding experience.\n\nThe first part of the course focuses on the quizmaster role.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '1.2': {
          title: '1.2 Question quality',
          intro: [],
          sections: [
            {
              heading: 'Choosing authority',
              description:
                'At the beginning of every quiz you establish the boundaries for the event, set the tone, and shape the energy in the room.\n\nYou decide whether questions are open to discussion, which sources apply if they are, or whether you practise the “quizmaster’s privilege” where your answer stands.\n\nEven if you host a recurring quiz, it is important to restate the ground rules. That refreshes expectations for regular teams and, most importantly, informs new teams about how your quiz works.',
              confirmRequired: true,
              confirmLabel: 'Read',
            },
            {
              heading: 'Clarity on answers',
              description:
                'Is a last name enough for people questions? For music rounds, do you expect song title, artist, year—or something else? What about collaborations or medleys? Be explicit, and mention how many points are available.',
              confirmRequired: true,
              confirmLabel: 'Read',
            },
            {
              heading: 'Transparency',
              description:
                'Be clear about how you will run the quiz. If you talk to a team and share extra detail, share the same information with everyone to stay fair.',
              confirmRequired: true,
              confirmLabel: 'Read',
            },
            {
              heading: 'Alcohol Act',
              description:
                'Norwegian alcohol legislation limits how alcohol can be promoted in marketing and at licensed venues. For instance, you may not advertise alcohol in “mass communication for marketing purposes” if you have a financial stake. That means you cannot promote beer or beer discounts as part of your quizmaster marketing.',
              confirmRequired: true,
              confirmLabel: 'Read',
            },
            {
              heading: 'Alcohol Act grey areas',
              description:
                'Licensed venues cannot advertise “Happy Hour,” or otherwise encourage alcohol consumption outside the bar area—and even there, with restrictions. As a quizmaster you are effectively a performing artist and can talk about most things, similar to a stand-up comedian. However, the licensing authority evaluates what could give the venue penalty “strikes,” so maintain a good dialogue with management about how you mention alcohol, discounts, selection, and similar topics on the mic.',
              confirmRequired: true,
              confirmLabel: 'Read',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '2.1': {
          title: '2.1 Question quality',
          intro: [],
          sections: [
            {
              heading: 'Strong vs weak sources',
              description:
                'The strongest sources have an editorial process, such as Store Norske Leksikon, Encyclopedia Britannica, or similar peer-reviewed references.',
            },
            {
              heading: 'Moderate sources',
              description:
                'Wikipedia is usually reliable but should be double-checked—especially niche articles that might be outdated, incomplete, or written by non-experts. It often misstates release years or current leaders when timelines are ambiguous, so verify before you rely on it.',
            },
            {
              heading: 'Music references',
              description:
                'Music trivia rarely has a single definitive source. Wikipedia is a good starting point, but verify details. Discogs often lists the first physical release of singles and albums, which makes it a solid cross-check. Avoid relying on Google alone; it mixes up recording and release years.',
            },
            {
              heading: 'Poor sources',
              description:
                'Streaming services frequently switch between the original release date and the date a track reached their platform. Uploaders can also enter the wrong year. Treat streaming metadata as untrustworthy.',
            },
            {
              heading: 'Artificial intelligence',
              description:
                'Language models struggle with dates, sourcing, and self-verification. They prioritise confident answers over accuracy—even on topics like law, science, or well-known facts. Prompt carefully, verify against trusted references, or skip AI entirely.',
            },
            {
              heading: 'Reuse',
              description:
                'Borrowing individual questions is acceptable. Like recipes, quiz questions are reusable, but copying whole sets is poor form. General knowledge (highest mountain, World Cup winners, etc.) will naturally overlap across quizzes, so that is not plagiarism.',
            },
            {
              heading: 'Wording',
              description:
                'Write questions unambiguously. Instead of “What is X’s ex-wife called?” when X has multiple ex-partners, clarify: “Name the spouse X divorced before marrying Y.” Clear wording prevents disputes.',
            },
            {
              heading: 'Variety',
              description:
                'Teams are diverse; vary topics and formats so everyone contributes. Without variety, some players disengage because they never get to shine.',
            },
            {
              heading: 'Inclusion',
              description:
                'Design rounds that resonate with different backgrounds—young, older, academic, street-smart, and people with varied cultural references. Too many Norway-specific questions can alienate participants without that context.',
            },
            {
              heading: 'Keep the vibe positive',
              description:
                'Handle sensitive themes with care. Players or their families may have lived through war, famine, or other traumas. This does not ban serious topics, but balance them so the atmosphere stays light and welcoming.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '2.2': {
          title: '2.2 Tools and tech',
          intro: [],
          sections: [
            {
              heading: 'Audio equipment',
              description:
                'Every venue has a different audio setup, but a few general best practices apply. Learn the gear in advance and align responsibilities with the venue.',
            },
            {
              heading: 'Mixers',
              description:
                'Avoid pushing the master channel to the limit. Keep the master at a moderate level and manage the channel faders so they never clip. This protects the hardware and keeps the sound comfortable.',
            },
            {
              heading: 'Bringing your own mixer',
              description:
                'If the venue lacks a mixer, consider bringing your own. It gives you more control, flexibility, and lets you host from different spots in the room. Confirm what gear is available and test ahead of time.',
            },
            {
              heading: 'Microphone technique',
              description:
                'Most quizmasters use handheld dynamic microphones or lavalier/headset mics. Point a dynamic mic directly at your mouth. Keep a lavalier close, but clear of clothing noise. Headsets should sit so breath does not hit the capsule.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '3.1': {
          title: '3.1 Fees',
          intro: [],
          sections: [
            {
              heading: 'Small vs large clients',
              description:
                'Expect higher fees from larger venues than from the neighbourhood bar. Bigger operations have deeper budgets and usually profit more from quiz nights.',
            },
            {
              heading: 'A place to begin',
              description:
                'Negotiations require a baseline. Choose a pricing model that helps you calculate your minimum acceptable fee.',
            },
            {
              heading: 'Costs, depreciation, and pension',
              description:
                'Freelancers cover direct expenses and time costs. Account for bookkeeping tools, websites, and gear—small recurring fees add up. Even transport can cost thousands per year. Include admin and marketing time in your fee.',
            },
            {
              heading: 'Freelancer vs employee',
              description:
                'Freelancers have no pension plan, insurance, or employer contributions. A common rule is to set aside 10% for pension and 10–17% for administration and accounting overhead.',
            },
            {
              heading: 'Hospitality minimum wage',
              description:
                'The Norwegian hospitality minimum wage (2024) is NOK 191/hour. Two hours of prep plus two hours hosting means anything under NOK 764 is below that baseline. Including employer contributions and the minimum pension puts the figure at NOK 886; adding recommended pension savings and admin raises it to NOK 1,107—before costs. Fees below this are underpricing your work.',
            },
            {
              heading: 'Turnover-based fees',
              description:
                'You can negotiate a percentage of the venue’s turnover during (and around) the quiz. Estimate the average payout so you do not end up with a low result.',
            },
            {
              heading: 'CREO rate for musicians',
              description:
                'Musicians are a comparable freelance reference. CREO’s recommended minimum is NOK 5,900 per musician per concert. It is not a perfect analogue, but it offers a benchmark for professional live work.',
            },
            {
              heading: 'Indexing for inflation',
              description:
                'Prices rise almost every year. Build price adjustments into your contracts. Use yearly price index calculators, or agree on a flat 2.5% increase (Norway’s inflation target).',
            },
            {
              heading: 'Cash-in-hand jobs',
              description:
                'Under-the-table payment harms everyone and is illegal. Decline such offers, and be cautious with partners who suggest them.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '3.2': {
          title: '3.2 Borrowing and reuse',
          intro: [
            'Inspiration is part of the craft, but you must credit creators and add your signature to every question set.',
            'Learn the ground rules for licensing, credit, and collaboration with fellow hosts.',
          ],
          sections: [
            {
              heading: 'Learning goals',
              items: [
                'Know when you need explicit permission before reuse.',
                'Distinguish public domain, Creative Commons, and licensed material.',
                'Document your sources inside the question bank.',
              ],
            },
            {
              heading: 'Practical exercise',
              ordered: true,
              items: [
                'Select three questions you want to reuse and note the original source.',
                'Adapt each question with your own framing or hints.',
                'Add attribution text to your quiz script.',
              ],
            },
            {
              heading: 'Collaboration',
              description:
                'Draft a short memorandum you can use when swapping question sets with other hosts.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '4.1': {
          title: '4.1 Social responsibility',
          intro: [],
          sections: [
            {
              heading: 'Physical considerations',
              items: [
                'Low vision',
                'Hearing impairment',
                'Near-sightedness',
                'Dyslexia',
                'Mobility challenges',
              ],
            },
            {
              heading: 'Alcohol',
              items: [
                'Create a safe space for everyone',
                'Keep participation welcoming without alcohol pressure',
                'Monitor your own consumption while hosting',
              ],
            },
            {
              heading: 'Language and background',
              items: [
                'Avoid overly complex words and jargon',
                'Welcome people who have not lived their whole lives in Norway',
                'Respect different religious backgrounds',
              ],
            },
            {
              heading: 'Community impact',
              items: [
                'You nurture general knowledge',
                'You support integration',
                'You create a meeting place for people with diverse life paths',
              ],
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        '4.2': {
          title: '4.2 Confirm responsibility',
          intro: [],
          sections: [
            {
              heading: null,
              description:
                'I confirm that, as part of my certification, I will stay mindful of my responsibility within the quiz community and act in solidarity with fellow quizmasters through professional execution and fair pricing.',
            },
          ],
          actions: {
            backToOverview: 'Back to overview',
            next: 'Go to {code}',
          },
        },
        Exam: {
          title: 'Exam',
          intro: [],
          sections: [],
          actions: {
            backToOverview: 'Back to overview',
          },
          multipleChoice: [
            {
              id: 'exam-1',
              module: '1.2',
              question: 'Why is it important to explain the rules before the quiz starts?',
              options: [
                { label: 'Because new teams do not know the rules yet', correct: true },
                { label: 'Because returning teams might have forgotten them', correct: true },
                { label: 'Because you need to fill the time with something', correct: false },
              ],
            },
            {
              id: 'exam-2',
              module: '1.2',
              question: 'Can you promote a beer discount at the venue where you host the quiz?',
              options: [
                { label: 'Not on social media', correct: true },
                { label: 'Yes, anywhere you like', correct: false },
                {
                  label: 'Yes, during the quiz, but the licensing authority might treat it as alcohol marketing',
                  correct: true,
                },
              ],
            },
            {
              id: 'exam-3',
              module: '2.1',
              question: 'Which of these counts as a strong source?',
              options: [
                { label: 'Store Norske Leksikon', correct: true },
                { label: 'A fan blog', correct: false },
                { label: 'Something you heard from a friend', correct: false },
              ],
            },
            {
              id: 'exam-4',
              module: '2.1',
              question: 'What are the risks of using artificial intelligence?',
              options: [
                { label: 'It easily gets dates wrong', correct: true },
                { label: 'It aims to satisfy the user more than it is source critical', correct: true },
                { label: 'AI always writes questions that are too difficult', correct: false },
              ],
            },
            {
              id: 'exam-5',
              module: '2.1',
              question: 'Is it acceptable to reuse questions from other quizmasters?',
              options: [
                { label: 'Yes, but do not copy an entire quiz', correct: true },
                { label: 'Yes, but only if it has a Creative Commons licence', correct: false },
                { label: 'No, you may never reuse a question you have heard or read elsewhere', correct: false },
              ],
            },
            {
              id: 'exam-6',
              module: '2.2',
              question: 'Why should you avoid setting the master channel to maximum on a mixer?',
              options: [
                { label: 'Because it can damage the equipment', correct: true },
                { label: 'Because the volume can become uncomfortably loud', correct: true },
                { label: 'Because it uses a lot of electricity', correct: false },
              ],
            },
            {
              id: 'exam-7',
              module: '2.2',
              question: 'How should you use a dynamic microphone?',
              options: [
                { label: 'Aim it straight at your mouth', correct: true },
                { label: 'Hold it upside down like a rapper', correct: false },
                { label: 'Keep it as far away from your mouth as possible', correct: false },
              ],
            },
            {
              id: 'exam-8',
              module: '3.1',
              question: 'What is CREO’s recommended minimum rate for a concert?',
              options: [
                { label: 'NOK 5,900 for the whole band', correct: false },
                { label: 'NOK 5,900 per musician', correct: true },
                { label: 'NOK 2,900 per musician', correct: false },
              ],
            },
            {
              id: 'exam-9',
              module: '3.1',
              question: 'If you earn a 5% turnover-based fee on NOK 30,000 in sales, what is your fee?',
              options: [
                { label: 'NOK 1,500', correct: true },
                { label: 'NOK 3,000', correct: false },
                { label: 'NOK 750', correct: false },
              ],
            },
            {
              id: 'exam-10',
              module: '3.1',
              question: 'How much should you set aside for pension as a freelancer?',
              options: [
                { label: 'Around 10%', correct: true },
                { label: 'Around 2%', correct: false },
                { label: 'Nothing—pension happens automatically', correct: false },
              ],
            },
            {
              id: 'exam-11',
              module: '3.1',
              question: 'Why should you refuse cash-in-hand payment?',
              options: [
                { label: 'Because it is illegal', correct: true },
                { label: 'Because it is a warning sign the client is unprofessional', correct: true },
                { label: 'Because depositing cash in the bank is a hassle', correct: false },
              ],
            },
            {
              id: 'exam-12',
              module: '4.1',
              question: 'How should you approach alcohol consumption?',
              options: [
                { label: 'Encourage as much drinking as possible to boost sales', correct: false },
                { label: 'Drink as much as you can if it is free', correct: false },
                {
                  label: 'Foster an atmosphere where both drinkers and non-drinkers feel welcome',
                  correct: true,
                },
              ],
            },
            {
              id: 'exam-13',
              module: '4.1',
              question: 'Why can asking lots of questions about Norwegian TV series be risky?',
              options: [
                { label: 'Because they are boring', correct: false },
                {
                  label: 'Because some teams may include people who moved to Norway after the shows aired',
                  correct: true,
                },
                { label: 'Because not everyone owns a TV', correct: false },
              ],
            },
            {
              id: 'exam-14',
              module: '4.1',
              question: 'How can a quiz contribute to integration and community?',
              options: [
                {
                  label: 'By giving people with different backgrounds a place to meet',
                  correct: true,
                },
                { label: 'By supporting general knowledge', correct: true },
                { label: 'By encouraging cultural integration', correct: true },
              ],
            },
          ],
          submitLabel: 'Submit answers',
          successMessage: 'Great job! You passed the exam.',
          failureMessage: 'Double-check the correct answers and try again.',
        },
      },
      overlay: {
        question: 'Are you a member?',
        yes: 'Yes',
        joinNow: 'Join now',
      },
    },
    membership: {
      slug: '/membership',
      selectorLabel: 'Choose membership type',
      ctaLabel: 'Become a member',
      ctaHref: '/payment',
      categories: {
        person: 'Person',
        quizmaster: 'Quizmaster',
        company: 'Company',
        angel: 'Angel',
        donation: 'Donation',
      },
      hero: {
        eyebrow: 'QiO Membership',
        title: 'Join the QiO community',
        lead:
          'Help grow Oslo’s quiz community! As a registered nonprofit, every krone goes directly into community-building and member events.',
        primaryCta: 'Apply for membership',
      },
      sections: [
        {
          heading: 'Help grow QiO!',
          paragraphs: [
            'We are a newly founded organisation. Your membership helps build Quiz Oslo, supports member gatherings, and lets us apply for funding that keeps meaningful and fun quiz events running.',
          ],
        },
        {
          heading: 'Membership benefits',
          tag: 'NOK 150 / year',
          category: 'person',
          items: [
            'You become a QiO quizzer',
            'Invitations to member events',
            'Newsletter with quiz challenges',
            'Tips on quiz technique and strategy',
            'Help make quizzes more accessible',
            'Join a growing quiz community',
            'Drawings for exclusive VIQ merch (Very Important Quizzer)',
          ],
        },
        {
          heading: 'For quizmasters',
          tag: 'NOK 150 / year',
          category: 'quizmaster',
          items: [
            'All individual member benefits included',
            'Become certified through our QiO training track. It takes under an hour and grants you the right to use the “Member of Professional Quiz Hosts in QiO (MQIO)” badge.',
          ],
        },
        {
          heading: 'For companies',
          tag: 'NOK 750 / year',
          category: 'company',
          description: 'As a corporate member you receive',
          items: [
            'Access to QiO events for everyone in your organisation',
            'Venue partners (bars and similar) can request host certification with a digital badge and wall certificate (a small fee applies for the physical certificate)',
            'Advice on how to make workplace events more accessible',
          ],
        },
        {
          heading: 'Angel membership',
          tag: 'NOK 550 / year',
          category: 'angel',
          description: 'For those who want to contribute a little extra',
          items: [
            'Two gift memberships',
            'VIQ (Very Important Quizzer) mug',
            'Additional support for QiO’s community work',
            'A whole lot of love from the association',
          ],
        },
        {
          heading: 'Donation',
          category: 'donation',
          disableActions: true,
          description:
            'You can support the association by using Vipps number 933108.',
          image: '/Vipps_QR.png',
          imageAlt: 'Vipps QR code for QiO',
          paragraphs: [
            'Scan the QR code or search for the number in the app and choose your donation amount. Thank you for the support!'
          ],
        },
      ],
    },
    payment: {
      slug: '/payment',
      hero: {
        eyebrow: 'Membership payment',
        title: 'Complete your QiO membership',
        lead:
          'Pay the annual fee to activate your membership. Include your name so we can match the payment to your registration.',
        primaryCtaHref: 'https://vipps.no/',
        payLabel: 'Register and pay',
      },
      overview: {
        heading: 'Complete your QiO membership',
        description:
          'Choose the membership that fits you. The fee covers 12 months from the payment date.',
        selectorLabel: 'Choose membership type',
        options: [
          {
            id: 'person',
            title: 'Individual',
            price: 'NOK 150 / year',
            description:
              'For individuals who want to support the quiz community and join events.',
          },
          {
            id: 'quizmaster',
            title: 'Quizmaster',
            price: 'NOK 150 / year',
            description:
              'Includes the individual benefits plus access to the certification track.',
          },
          {
            id: 'company',
            title: 'Company',
            price: 'NOK 750 / year',
            description:
              'For companies and venues that want to collaborate with QiO.',
          },
          {
            id: 'angel',
            title: 'Angel',
            price: 'NOK 550 / year',
            description:
              'For supporters who contribute a little extra and receive two gift memberships.',
          },
        ],
      },
      form: {
        heading: 'Enter your contact details',
        firstNameLabel: 'First name',
        firstNamePlaceholder: 'First name',
        lastNameLabel: 'Last name',
        lastNamePlaceholder: 'Last name',
        phoneLabel: 'Phone number',
        phonePlaceholder: 'Phone number',
        emailLabel: 'Email',
        emailPlaceholder: 'name@example.com',
        consentLabel:
          'I agree to data storage and digital communication.',
        termsConsentLabel: 'I accept the {terms}',
        termsLinkLabel: 'terms of sale',
      },
      instructions: {
        heading: 'How to pay with Vipps',
        intro: 'Follow these steps when you open the Vipps app.',
        steps: [
          'Open Vipps and search for "Quiz i Oslo".',
          'Select the membership type you want and add your name in the message field.',
          'Confirm the payment and save the receipt.',
        ],
        note: 'Need an invoice or help? Email us at {email}.',
      },
      confirmation: {
        heading: 'After you have paid',
        steps: [
          'Vipps sends you a receipt - keep it for your records.',
          'We register the payment and confirm your membership within two business days.',
          'You receive membership information and invitations on the email address you provided.',
        ],
        note:
          'If you do not receive a confirmation within two business days, contact us at {email}.',
      },
      contact: {
        heading: 'Questions?',
        description:
          'Send us an email at {email} and we will help you choose the right membership or payment method.',
        ctaLabel: 'Email us',
        ctaHref:
          'mailto:hei@quizioslo.no?subject=Membership%20payment%20question',
      },
    },
    terms: {
      slug: '/terms-of-sale',
      heading: 'Terms of Sale for Quiz i Oslo',
      hero: {
        title: 'Terms of Sale',
        lead:
          'These terms apply to the purchase of memberships in the Quiz i Oslo association (organisation number 933 380 041).',
      },
      downloadLabel: 'Download terms of sale (PDF)',
      downloadHref: '/Salgsvilkaar.pdf',
      sections: [
        {
          heading: 'Parties',
          paragraphs: [
            'The seller is:\nQuiz i Oslo\nOrganisation number: 933 380 041\nAddress: Schweigaards gate 60B\nEmail: qioforeningen@gmail.com\nPhone: 4669313O',
            'The buyer is the person who registers as a member and pays the membership fee through our website.',
          ],
        },
        {
          heading: 'Payment',
          paragraphs: [
            'Membership fees are paid with Vipps or another available payment provider. The payment is registered immediately, and the membership activates once the transaction is completed.',
          ],
        },
        {
          heading: 'Delivery',
          paragraphs: [
            'The membership is valid from the moment the payment is registered and grants access to the member benefits described on our website.',
          ],
        },
        {
          heading: 'Right of withdrawal',
          paragraphs: [
            'The Right of Withdrawal Act applies to consumer purchases. For memberships in a non-profit association, the right of withdrawal applies for 14 days from the purchase date provided the membership has not been used. To exercise this right, contact us in writing by email within the deadline.',
          ],
        },
        {
          heading: 'Returns',
          paragraphs: [
            'Because membership is not a physical product, no return right applies beyond the right of withdrawal.',
          ],
        },
        {
          heading: 'Handling complaints',
          paragraphs: [
            'If you experience errors or issues related to the registration or delivery of the membership, contact us by email as soon as possible. We will process your inquiry within a reasonable time and provide a solution.',
          ],
        },
        {
          heading: 'Membership renewal and cancellation',
          paragraphs: [
            'Membership renews automatically every 12 months using the same payment method you used when joining. You will receive a notice ahead of the renewal.',
            'You may cancel your membership at any time by contacting us by email. The cancellation takes effect at the end of the current membership period, and future payments will stop.',
            'To update your contact information or membership category, please contact us by email.',
          ],
        },
        {
          heading: 'Dispute resolution',
          paragraphs: [
            'We aim to resolve any disputes amicably. If that is not possible, the case can be brought before the Norwegian Consumer Council or the ordinary courts under Norwegian law.',
          ],
        },
      ],
    },
    footer: {
      rights: '© {year} Quiz in Oslo. All rights reserved.',
      follow: 'Follow us on',
      socialName: 'Instagram',
      socialHint: 'for teasers and giveaways.',
      termsLinkLabel: 'Terms of sale',
    },
  },
}
