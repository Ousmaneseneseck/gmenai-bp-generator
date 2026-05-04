// app/lib/search/searchService.ts
export interface EnrichedData {
  marketData: any;
  economicData: any;
  competitors: any[];
  opportunities: any[];
  regulations: any[];
  benchmark: any;
  news: any[];
  financialRatios: any;
  swotAnalysis: any;
  trends: any[];
}

class SearchService {
  async enrichBusinessPlan(sector: string, country: string): Promise<EnrichedData> {
    return {
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
  }

  async getMarketData(sector: string, country: string): Promise<any> {
    const data: Record<string, any> = {
      'Technologie/SaaS': {
        size: '850M FCFA',
        growth: '28%',
        tam: '2500M FCFA',
        sam: '850M FCFA',
        som: '120M FCFA',
        trends: ['Cloud adoption +35%', 'IA generative', 'API economie', 'SaaS penetration 15% to 35%'],
        keyPlayers: ['Microsoft Afrique 35%', 'Oracle 20%', 'Salesforce 15%', 'Startups locales 30%']
      },
      'Agriculture': {
        size: '1200M FCFA',
        growth: '15%',
        tam: '3500M FCFA',
        sam: '1200M FCFA',
        som: '180M FCFA',
        trends: ['AgriTech x3', 'Drone farming', 'Mobile payments 85%', 'Smart farming'],
        keyPlayers: ['Twingo 25%', 'AgriData 20%', 'FarmTech 15%']
      },
    };
    return data[sector] || {
      size: '500M FCFA',
      growth: '20%',
      tam: '1500M FCFA',
      sam: '500M FCFA',
      som: '75M FCFA',
      trends: ['Digitalisation', 'Mobile first', 'Innovation'],
      keyPlayers: ['Acteurs locaux', 'Startups innovantes']
    };
  }

  async getEconomicData(country: string): Promise<any> {
    const data: Record<string, any> = {
      'Senegal': {
        gdp: '27.5Mds EUR',
        gdpGrowth: '5.8%',
        inflation: '3.2%',
        currency: 'FCFA',
        mobileMoneyPenetration: '78%',
        internetPenetration: '42%',
        population: '17.5M',
        unemployment: '6.5%'
      },
      "Cote d'Ivoire": {
        gdp: '70.1Mds EUR',
        gdpGrowth: '6.2%',
        inflation: '3.5%',
        currency: 'FCFA',
        mobileMoneyPenetration: '82%',
        internetPenetration: '48%',
        population: '26.4M',
        unemployment: '4.2%'
      },
      'Cameroon': {
        gdp: '44.5Mds EUR',
        gdpGrowth: '4.5%',
        inflation: '3.0%',
        currency: 'FCFA',
        mobileMoneyPenetration: '65%',
        internetPenetration: '35%',
        population: '26.5M',
        unemployment: '4.8%'
      },
    };
    return data[country] || {
      gdp: 'N/A',
      gdpGrowth: '4.0%',
      inflation: 'N/A',
      currency: 'FCFA',
      mobileMoneyPenetration: '70%',
      internetPenetration: '40%',
      population: 'N/A',
      unemployment: 'N/A'
    };
  }

  async getCompetitors(sector: string, country: string): Promise<any[]> {
    return [
      {
        name: 'TechLeader Afrique',
        description: 'Leader historique avec 35% de parts de marche',
        marketShare: '35%',
        strengths: ['Reseau etendu 15 pays', 'Marque forte', 'Support 24/7'],
        weaknesses: ['Innovation lente', 'Prix eleves +30%'],
        funding: '50M EUR',
        founded: '2010',
        headquarters: 'Dakar'
      },
      {
        name: 'DigitalSolutions',
        description: 'Innovateur local reconnu 20% PDM',
        marketShare: '20%',
        strengths: ['Agilite', 'Support local', 'Prix competitifs'],
        weaknesses: ['Scale limitee', 'Presence 3 pays'],
        funding: '15M EUR',
        founded: '2015',
        headquarters: 'Abidjan'
      }
    ];
  }

  async getOpportunities(sector: string, country: string): Promise<any[]> {
    const economic = await this.getEconomicData(country);
    return [
      {
        title: 'Mobile Money en forte croissance',
        description: `${country} atteint un taux de penetration de ${economic.mobileMoneyPenetration}`,
        impact: 'High',
        timeline: '0-6 mois',
        potentialRevenue: '50-100M FCFA'
      },
      {
        title: 'Digitalisation acceleree',
        description: `Le secteur ${sector} connait une transformation digitale rapide`,
        impact: 'High',
        timeline: '0-12 mois',
        potentialRevenue: '80-150M FCFA'
      }
    ];
  }

  async getRegulations(sector: string, country: string): Promise<any[]> {
    return [
      {
        name: 'Protection des donnees RGPD local',
        description: 'Cadre legal pour la collecte et traitement des donnees personnelles',
        impact: 'Conformite obligatoire',
        complianceCost: '2M FCFA',
        deadline: '2025',
        authority: 'ARTP'
      },
      {
        name: 'Loi sur les FinTech',
        description: 'Encadrement des services financiers digitaux et Mobile Money',
        impact: 'Opportunite d integration',
        complianceCost: '500k FCFA',
        deadline: '2024',
        authority: 'BCEAO'
      }
    ];
  }

  async getSectorBenchmark(sector: string): Promise<any> {
    const benchmarks: Record<string, any> = {
      'Technologie/SaaS': {
        avgMargin: '65%',
        avgGrowth: '35%',
        avgCAC: '45k FCFA',
        avgLTV: '540k FCFA',
        avgChurn: '5%',
        position: 'Tres attractif - Forte croissance',
        industryScore: 85,
        recommendation: 'Concentrez-vous sur la reduction du churn'
      }
    };
    return benchmarks[sector] || {
      avgMargin: '50%',
      avgGrowth: '25%',
      avgCAC: '40k FCFA',
      avgLTV: '400k FCFA',
      avgChurn: '10%',
      position: 'Porteur - Bon potentiel',
      industryScore: 75,
      recommendation: 'Bon potentiel de croissance'
    };
  }

  async getFinancialRatios(sector: string): Promise<any> {
    return {
      cac: '45 000 FCFA',
      ltv: '540 000 FCFA',
      ltvToCac: '12x Excellent - Objectif >3x',
      grossMargin: '75%',
      netMargin: '25%',
      burnRate: '8M FCFA/mois',
      runway: '12-18 mois',
      ebitda: '15%'
    };
  }

  async getSWOTAnalysis(sector: string, country: string): Promise<any> {
    return {
      strengths: ['Equipe experimentee', 'Tech proprietaire', 'Partenariats Mobile Money', 'Support local', 'Agilite'],
      weaknesses: ['Jeune marque', 'Ressources limitees', 'Scale a prouver', 'Visibilite faible'],
      opportunities: ['Marche en croissance 20-30%/an', 'Digitalisation post-COVID', 'Subventions etatiques', 'Mobile Money mature'],
      threats: ['Concurrence internationale', 'Instabilite economique', 'Fragmentation reglementaire', 'Talents rares']
    };
  }

  async getTrends(sector: string, country: string): Promise<any[]> {
    return [
      { title: 'IA Generative', description: 'L IA transforme les processus metier', impact: 'High', adoption: 'Emergent', timeframe: '1-2 ans' },
      { title: 'Mobile-First', description: 'Solutions adaptees au mobile', impact: 'High', adoption: 'Accelere', timeframe: '0-1 an' },
      { title: 'Low-Code/No-Code', description: 'Developpement accelere', impact: 'Medium', adoption: 'Croissant', timeframe: '1-2 ans' }
    ];
  }

  async getNews(sector: string, country: string): Promise<any[]> {
    return [
      {
        title: `Le secteur ${sector} en pleine croissance en Afrique de l Ouest`,
        date: new Date().toLocaleDateString(),
        summary: 'Investissements record dans le secteur cette annee',
        source: 'EcoActu',
        category: 'Economie'
      },
      {
        title: 'Nouvelle reglementation favorisant l innovation',
        date: new Date().toLocaleDateString(),
        summary: 'Le gouvernement annonce des mesures de soutien aux startups tech',
        source: 'Financial Afrik',
        category: 'Reglementation'
      },
      {
        title: `${country} accelere sa transformation digitale`,
        date: new Date().toLocaleDateString(),
        summary: 'Taux de penetration Mobile Money en forte hausse',
        source: 'Jeune Afrique',
        category: 'Digital'
      }
    ];
  }
}

export const searchService = new SearchService();
