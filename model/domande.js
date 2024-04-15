const domande = [
    {
      id: 'data_nascita',
      label: 'Data di nascita:',
      type: 'date'
    },
    {
      id: 'luogo_residenza',
      label: 'Luogo di residenza:',
      type: 'select',
      options: [
        'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna', 'Friuli-Venezia Giulia',
        'Lazio', 'Liguria', 'Lombardia', 'Marche', 'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia',
        'Toscana', 'Trentino-Alto Adige', 'Umbria', "Valle d'Aosta", 'Veneto'
      ]
    },
    {
      id: 'familiarita_ia',
      label: 'Quanto sei familiare con il concetto di Intelligenza Artificiale (IA)?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto familiare' },
        { value: 'Abbastanza', label: 'Abbastanza familiare' },
        { value: 'Poco', label: 'Poco familiare' },
        { value: 'Niente', label: 'Non familiare' }
      ]
    },
    {
      id: 'opinione_ia',
      label: 'Qual è la tua opinione generale sull\'IA?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto positiva' },
        { value: 'Abbastanza', label: 'Positiva' },
        { value: 'Poco', label: 'Negativa' },
        { value: 'Niente', label: 'Molto negativa' }
      ]
    },
    {
      id: 'impatto_futuro_ia',
      label: 'Credi che l\'IA abbia un impatto significativo sul futuro della società?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto impattante' },
        { value: 'Abbastanza', label: 'Abbastanza impattante' },
        { value: 'Poco', label: 'Poco impattante' },
        { value: 'Niente', label: 'Non impattante' }
      ]
    },
    {
      id: 'impatto_futuro_ia_aperta',
      label: 'Se la risposta è sì, per quali motivi? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'paura_sostituzione_lavori',
      label: 'Sei preoccupato che l\'IA possa sostituire alcuni lavori umani in futuro?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto preoccupato' },
        { value: 'Abbastanza', label: 'Abbastanza preoccupato' },
        { value: 'Poco', label: 'Poco preoccupato' },
        { value: 'Niente', label: 'Non preoccupato' }
      ]
    },
    {
      id: 'paura_sostituzione_lavori_aperta',
      label: 'Se la risposta è sì, per quali motivi? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'settori_impatto',
      label: 'Secondo te, quanto impatto avrà l\'intelligenza artificiale su settori specifici?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto impattante' },
        { value: 'Abbastanza', label: 'Abbastanza impattante' },
        { value: 'Poco', label: 'Poco impattante' },
        { value: 'Niente', label: 'Non impattante' }
      ]
    },
    {
      id: 'settori_impatto_aperta',
      label: 'Se pensi abbiano un impatto, quali pensi siano i settori più coinvolti? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'preoccupazione_manipolazione',
      label: 'Ti preoccupa la possibilità che l\'IA possa essere utilizzata per manipolare le persone o violare la loro privacy?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto preoccupato' },
        { value: 'Abbastanza', label: 'Abbastanza preoccupato' },
        { value: 'Poco', label: 'Poco preoccupato' },
        { value: 'Niente', label: 'Non preoccupato' }
      ]
    },
    {
      id: 'preoccupazione_manipolazione_aperta',
      label: 'Se la risposta è sì, per quali motivi? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'contributo_risolvere_problemi',
      label: 'Quanto credi che l\'IA possa contribuire a risolvere problemi globali, come la povertà o il cambiamento climatico?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto' },
        { value: 'Abbastanza', label: 'Abbastanza' },
        { value: 'Poco', label: 'Poco' },
        { value: 'Niente', label: 'Niente' }
      ]
    },
    {
      id: 'contributo_risolvere_problemi_aperta',
      label: 'Se pensi che contribuisca, per quali motivi? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'ottimismo_pessimismo',
      label: 'Quanto ti senti ottimista o pessimista riguardo al futuro in cui l\'IA diventerà sempre più diffusa?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto ottimista' },
        { value: 'Abbastanza', label: 'Ottimista' },
        { value: 'Poco', label: 'Pessimista' },
        { value: 'Niente', label: 'Molto pessimista' }
      ]
    },
    {
      id: 'ottimismo_pessimismo_aperta',
      label: 'Vuoi motivare la tua risposta? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'istruzione_scolastica',
      label: 'Quanto l\'istruzione sul tema dell\'IA, pensi debba essere parte del curriculum scolastico?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto presente' },
        { value: 'Abbastanza', label: 'Abbastanza presente' },
        { value: 'Poco', label: 'Poco presente' },
        { value: 'Niente', label: 'Non presente' }
      ]
    },
    {
      id: 'istruzione_scolastica_aperta',
      label: 'Se pensi debba essere presente, per quali motivi? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    },
    {
      id: 'esperienza_utilizzo_ia',
      label: 'Quanto hai utilizzato personalmente un sistema basato sull\'IA (come assistenti vocali, algoritmi di raccomandazione, etc.)?',
      type: 'select',
      options: [
        { value: 'Molto', label: 'Molto' },
        { value: 'Abbastanza', label: 'Abbastanza' },
        { value: 'Poco', label: 'Poco' },
        { value: 'Niente', label: 'Niente' }
      ]
    },
    {
      id: 'esperienza_utilizzo_ia_aperta',
      label: 'Se utilizzato, quale è stata la tua esperienza? (Max 255 caratteri)',
      type: 'textarea',
      maxLength: 255,
      disabled: true
    }
  ];
  

module.exports = domande;