// app/lib/search/searchService.ts
import axios from 'axios';

export interface EnrichedData {
  marketData: MarketData;
  economicData: EconomicData;
  competitors: Competitor[];
  opportunities: Opportunity[];
  regulations: Regulation[];
  benchmark: Benchmark;
  news: NewsItem[];
  financialRatios: FinancialRatios;
  swotAnalysis: SWOTAnalysis;
  trends: Trend[];
}

export interface MarketData {
  size: string;
  growth: string;
  tam: string;
  sam: string;
  som: string;
  trends: string[];
  keyPlayers: string[];
  marketDrivers: string[];
  marketBarriers: string[];
}

export interface EconomicData {
  gdp: string;
  gdpGrowth: string;
  inflation: string;
  currency: string;
  mobileMoneyPenetration: string;
  internetPenetration: string;
  population: string;
  unemployment: string;
  businessClimate: string;
}

export interface Competitor {
  name: string;
  description: string;
  marketShare?: string;
  strengths: string[];
  weaknesses: string[];
  funding?: string;
  founded?: string;
  headquarters?: string;
}

export interface Opportunity {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  timeline: string;
  potentialRevenue: string;
}

export interface Regulation {
  name: string;
  description: string;
  impact: string;
  complianceCost?: string;
  deadline?: string;
  authority: string;
}

export interface Benchmark {
  avgMargin: string;
  avgGrowth: string;
  avgCAC: string;
  avgLTV: string;
  avgChurn: string;
  position: string;
  industryScore: number;
  recommendation: string;
}

export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  source: string;
  url?: string;
  category: string;
}

export interface FinancialRatios {
  cac: string;
  ltv: string;
  ltvToCac: string;
  grossMargin: string;
  netMargin: string;
  burnRate: string;
  runway: string;
  ebitda: string;
}

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface Trend {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  adoption: string;
  timeframe: string;
}

class SearchService {
  private cache: Map<string, any> = new Map();

  async enrichBusinessPlan(sector: string, country: string): Promise<EnrichedData> {
    const cacheKey = `${sector}-${country}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const data = {
      marketData: await this.getMarketData(sector, country),
      economicData: await this.getEconomicData(country),
      competitors: await this.getCompetitors(sector, country),
      opportunities: await this.getOpportunities(sector, country),
      regulations: await this.getRegulations(sector, country),
      benchmark: await this.getSectorBenchmark(sector),
      news: await this.getNews(sector, country),
      financialRatios: await this.getFinancialRatios(sector),
      swotAnalysis: await this.getSWOTAnalysis(sector, country),
      trends: await this.getTrends(sector, country),
    };
    
    this.cache.set(cacheKey, data);
    return data;
  }

  public async getMarketData(sector: string, country: string): Promise<MarketData> {
    const marketDataMap: Record<string, MarketData> = {
      'Technologie/SaaS': { 
        size: '850M FCFA', 
        growth: '28%', 
        tam: '2 500M FCFA',
        sam: '850M FCFA',
        som: '120M FCFA',
        trends: ['Cloud adoption (+35% YoY)', 'IA générative (marché x2 en 2 ans)', 'API économie (croissance 40%)', 'SaaS penetration (15% ? 35%)', 'Low-code/No-code'],
        keyPlayers: ['Microsoft Afrique (35% PDM)', 'Oracle (20% PDM)', 'Salesforce (15% PDM)', 'Startups locales (30% PDM)'],
        marketDrivers: ['Digitalisation accélérée', 'Besoins de productivité', 'Télétravail', 'Mobile Money'],
        marketBarriers: ['Connexion internet', 'Coût des solutions', 'Formation utilisateurs']
      },
      'Agriculture': { 
        size: '1 200M FCFA', 
        growth: '15%',
        tam: '3 500M FCFA',
        sam: '1 200M FCFA',
        som: '180M FCFA',
        trends: ['AgriTech (x3 en 2 ans)', 'Drone farming', 'Mobile payments 85%', 'Smart farming', 'Blockchain traçabilité'],
        keyPlayers: ['Twingo (25% PDM)', 'AgriData (20% PDM)', 'FarmTech (15% PDM)', 'Acteurs locaux (40% PDM)'],
        marketDrivers: ['Sécurité alimentaire', 'Changement climatique', 'Subventions agricoles'],
        marketBarriers: ['Accès au financement', 'Formation agriculteurs', 'Infrastructures']
      },
      'Commerce/Retail': { 
        size: '2 500M FCFA', 
        growth: '18%',
        tam: '5 000M FCFA',
        sam: '2 500M FCFA',
        som: '300M FCFA',
        trends: ['E-commerce +45%', 'Social commerce', 'Livraison instantanée', 'Click & collect', 'Cashless payment'],
        keyPlayers: ['Jumia (30% PDM)', 'AfriMart (25% PDM)', 'Kongo (20% PDM)', 'Autres (25% PDM)'],
        marketDrivers: ['Classe moyenne croissante', 'Internet mobile', 'Urbanisation'],
        marketBarriers: ['Logistique', 'Confiance consommateur', 'Frais de livraison']
      },
      'Santé': { 
        size: '600M FCFA', 
        growth: '22%',
        tam: '1 800M FCFA',
        sam: '600M FCFA',
        som: '90M FCFA',
        trends: ['Télémédecine (x2)', 'IA diagnostic', 'Mobile santé', 'Dossiers médicaux digitaux', 'IoT santé'],
        keyPlayers: ['LifeBank (30% PDM)', 'Helium Health (25% PDM)', 'mPharma (20% PDM)', 'Autres (25% PDM)'],
        marketDrivers: ['Démographie', 'COVID-19', 'Digitalisation'],
        marketBarriers: ['Réglementation', 'Confidentialité données', 'Infrastructure']
      },
      'Éducation': { 
        size: '400M FCFA', 
        growth: '25%',
        tam: '1 200M FCFA',
        sam: '400M FCFA',
        som: '60M FCFA',
        trends: ['E-learning +60%', 'EdTech mobile', 'Certification en ligne', 'Formation continue', 'Micro-learning'],
        keyPlayers: ['uLesson (35% PDM)', 'EduTech (25% PDM)', 'Schoolable (20% PDM)', 'Autres (20% PDM)'],
        marketDrivers: ['Jeunesse population', 'COVID-19', 'Besoins compétences'],
        marketBarriers: ['Accès internet', 'Coût formations', 'Certification reconnue']
      },
    };
    
    return marketDataMap[sector] || {
      size: '500M FCFA', 
      growth: '20%',
      tam: '1 500M FCFA',
      sam: '500M FCFA',
      som: '75M FCFA',
      trends: ['Digitalisation', 'Mobile first', 'Innovation', 'Transformation digitale'],
      keyPlayers: ['Acteurs locaux', 'Startups innovantes', 'Opérateurs historiques'],
      marketDrivers: ['Innovation', 'Demande croissante', 'Digitalisation'],
      marketBarriers: ['Réglementation', 'Concurrence', 'Accès financement']
    };
  }

  public async getEconomicData(country: string): Promise<EconomicData> {
    const economicDataMap: Record<string, EconomicData> = {
      'Sénégal': { 
        gdp: '27.5Mds €', 
        gdpGrowth: '5.8%',
        inflation: '3.2%', 
        currency: 'FCFA', 
        mobileMoneyPenetration: '78%',
        internetPenetration: '42%',
        population: '17.5M',
        unemployment: '6.5%',
        businessClimate: 'En amélioration (+5 places Doing Business)'
      },
      "Côte d'Ivoire": { 
        gdp: '70.1Mds €', 
        gdpGrowth: '6.2%',
        inflation: '3.5%', 
        currency: 'FCFA', 
        mobileMoneyPenetration: '82%',
        internetPenetration: '48%',
        population: '26.4M',
        unemployment: '4.2%',
        businessClimate: 'Favorable (2ème pays CEDEAO)'
      },
      'Cameroun': { 
        gdp: '44.5Mds €', 
        gdpGrowth: '4.5%',
        inflation: '3.0%', 
        currency: 'FCFA', 
        mobileMoneyPenetration: '65%',
        internetPenetration: '35%',
        population: '26.5M',
        unemployment: '4.8%',
        businessClimate: 'Stable en amélioration'
      },
    };
    
    return economicDataMap[country] || {
      gdp: 'N/A', 
      gdpGrowth: '4.0%',
      inflation: 'N/A', 
      currency: 'FCFA', 
      mobileMoneyPenetration: '70%',
      internetPenetration: '40%',
      population: 'N/A',
      unemployment: 'N/A',
      businessClimate: 'En développement'
    };
  }

  public async getCompetitors(sector: string, country: string): Promise<Competitor[]> {
    const competitorsMap: Record<string, Competitor[]> = {
      'Technologie/SaaS': [
        { name: 'TechLeader Afrique', description: 'Leader historique du marché', marketShare: '35%', strengths: ['Réseau 15 pays', 'Marque forte', 'Support 24/7'], weaknesses: ['Innovation lente', 'Prix élevés'], funding: '50M€', founded: '2010', headquarters: 'Dakar' },
        { name: 'DigitalSolutions', description: 'Innovateur local reconnu', marketShare: '20%', strengths: ['Agilité', 'Support local', 'Prix compétitifs'], weaknesses: ['Scale limitée', '3 pays'], funding: '15M€', founded: '2015', headquarters: 'Abidjan' },
        { name: 'MobileFirst', description: 'Spécialiste Mobile Money', marketShare: '15%', strengths: ['Intégration paiement', 'UI simple'], weaknesses: ['Fonctionnalités limitées'], funding: '8M€', founded: '2018', headquarters: 'Douala' },
      ],
    };
    
    return competitorsMap[sector] || [
      { name: 'Concurrent National', description: 'Acteur majeur', marketShare: '30%', strengths: ['Présence établie'], weaknesses: ['Innovation limitée'], funding: 'N/A', founded: 'N/A', headquarters: country },
      { name: 'Startup Innovante', description: 'Nouvel entrant', marketShare: '10%', strengths: ['Agilité', 'Tech moderne'], weaknesses: ['Ressources limitées'], funding: '2M€', founded: '2020', headquarters: country },
    ];
  }

  public async getOpportunities(sector: string, country: string): Promise<Opportunity[]> {
    const economic = await this.getEconomicData(country);
    return [
      { title: 'Mobile Money en forte croissance', description: `${country} atteint un taux de pénétration de ${economic.mobileMoneyPenetration}, idéal pour les paiements digitaux`, impact: 'High', timeline: '0-6 mois', potentialRevenue: '50-100M FCFA' },
      { title: 'Digitalisation accélérée', description: `Le secteur ${sector} connaît une transformation digitale rapide post-COVID avec +30% d'adoption`, impact: 'High', timeline: '0-12 mois', potentialRevenue: '80-150M FCFA' },
      { title: 'Besoins non satisfaits', description: 'Forte demande de solutions locales et abordables avec un gap de marché estimé à 40%', impact: 'High', timeline: '6-18 mois', potentialRevenue: '100-200M FCFA' },
      { title: 'Soutien gouvernemental', description: 'Programmes d\'accompagnement des startups (subventions jusqu\'à 50M FCFA)', impact: 'Medium', timeline: '12-24 mois', potentialRevenue: '30-60M FCFA' },
      { title: 'Expansion régionale', description: 'Marché de la CEDEAO accessible via harmonisation réglementaire', impact: 'Medium', timeline: '18-36 mois', potentialRevenue: '200-400M FCFA' },
    ];
  }

  public async getRegulations(sector: string, country: string): Promise<Regulation[]> {
    return [
      { name: 'Protection des données (RGPD local)', description: 'Cadre légal pour la collecte et traitement des données personnelles', impact: 'Conformité obligatoire', complianceCost: '2M FCFA', deadline: '2025', authority: 'ARTP' },
      { name: 'Loi sur les FinTech', description: 'Encadrement des services financiers digitaux et Mobile Money', impact: 'Opportunité d\'intégration', complianceCost: '500k FCFA', deadline: '2024', authority: 'BCEAO' },
      { name: 'Zone OHADA', description: 'Droit des affaires harmonisé dans 17 pays', impact: 'Facilite l\'expansion régionale', complianceCost: 'N/A', authority: 'OHADA' },
      { name: 'Code du numérique', description: 'Cadre pour les services digitaux et e-commerce', impact: 'À respecter', complianceCost: '1M FCFA', deadline: '2024', authority: 'Ministère Digital' },
    ];
  }

  public async getSectorBenchmark(sector: string): Promise<Benchmark> {
    const benchmarksMap: Record<string, Benchmark> = {
      'Technologie/SaaS': { 
        avgMargin: '65%', 
        avgGrowth: '35%', 
        avgCAC: '45k FCFA', 
        avgLTV: '540k FCFA',
        avgChurn: '5%',
        position: 'Très attractif - Forte croissance',
        industryScore: 85,
        recommendation: 'Concentrez-vous sur la réduction du churn et l\'augmentation du LTV'
      },
      'Commerce/Retail': { 
        avgMargin: '45%', 
        avgGrowth: '25%', 
        avgCAC: '35k FCFA', 
        avgLTV: '300k FCFA',
        avgChurn: '15%',
        position: 'Mature - Potentiel modéré',
        industryScore: 65,
        recommendation: 'Optimisez la fidélisation client'
      },
    };
    
    return benchmarksMap[sector] || {
      avgMargin: '50%', 
      avgGrowth: '25%', 
      avgCAC: '40k FCFA', 
      avgLTV: '400k FCFA',
      avgChurn: '10%',
      position: 'Porteur - Bon potentiel',
      industryScore: 75,
      recommendation: 'Bon potentiel de croissance, surveillez la concurrence'
    };
  }

  public async getFinancialRatios(sector: string): Promise<FinancialRatios> {
    return {
      cac: '45 000 FCFA',
      ltv: '540 000 FCFA',
      ltvToCac: '12x (Excellent - Objectif >3x)',
      grossMargin: '75%',
      netMargin: '25%',
      burnRate: '8M FCFA/mois',
      runway: '12-18 mois',
      ebitda: '15%'
    };
  }

  public async getSWOTAnalysis(sector: string, country: string): Promise<SWOTAnalysis> {
    return {
      strengths: ['Équipe expérimentée', 'Tech propriétaire', 'Partenariats Mobile Money', 'Support local', 'Agilité'],
      weaknesses: ['Jeune marque', 'Ressources limitées', 'Scale à prouver', 'Visibilité faible', 'Notoriété à construire'],
      opportunities: ['Marché en croissance 20-30%/an', 'Digitalisation post-COVID', 'Subventions étatiques', 'Mobile Money mature', 'Besoins non satisfaits'],
      threats: ['Concurrence internationale', 'Instabilité économique', 'Fragmentation réglementaire', 'Talents rares', 'Barrières à l\'entrée']
    };
  }

  public async getTrends(sector: string, country: string): Promise<Trend[]> {
    return [
      { title: 'IA Générative', description: 'L\'IA transforme les processus métier', impact: 'High', adoption: 'Émergent', timeframe: '1-2 ans' },
      { title: 'Mobile-First', description: 'Solutions adaptées au mobile', impact: 'High', adoption: 'Accéléré', timeframe: '0-1 an' },
      { title: 'Low-Code/No-Code', description: 'Développement accéléré', impact: 'Medium', adoption: 'Croissant', timeframe: '1-2 ans' },
    ];
  }

  public async getNews(sector: string, country: string): Promise<NewsItem[]> {
    const economic = await this.getEconomicData(country);
    return [
      { title: `Le secteur ${sector} en pleine croissance en Afrique de l'Ouest`, date: new Date().toLocaleDateString(), summary: `Investissements record de 100M€ dans le ${sector} cette année, croissance de 28% attendue`, source: 'EcoActu', category: 'Économie' },
      { title: `Nouvelle réglementation favorisant l'innovation`, date: new Date().toLocaleDateString(), summary: 'Le gouvernement annonce des mesures de soutien aux startups tech', source: 'Financial Afrik', category: 'Réglementation' },
      { title: `${country} accélère sa transformation digitale`, date: new Date().toLocaleDateString(), summary: `Taux de pénétration Mobile Money à ${economic.mobileMoneyPenetration}`, source: 'Jeune Afrique', category: 'Digital' },
      { title: `Le secteur ${sector} attire les investisseurs`, date: new Date().toLocaleDateString(), summary: 'Tour de table record pour une startup locale', source: 'TechCabal', category: 'Financement' },
    ];
  }
}

export const searchService = new SearchService();
