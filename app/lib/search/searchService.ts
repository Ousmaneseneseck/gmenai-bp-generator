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
        trends: ['Cloud adoption +35%', 'IA generative', 'API economie'],
        keyPlayers: ['Microsoft Afrique 35%', 'Oracle 20%', 'Salesforce 15%']
      },
    };
    return data[sector] || {
      size: '500M FCFA',
      growth: '20%',
      tam: '1500M FCFA',
      sam: '500M FCFA',
      som: '75M FCFA',
      trends: ['Digitalisation', 'Mobile first'],
      keyPlayers: ['Acteurs locaux']
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
        internetPenetration: '42%'
      },
    };
    return data[country] || {
      gdp: 'N/A',
      gdpGrowth: '4.0%',
      inflation: 'N/A',
      currency: 'FCFA',
      mobileMoneyPenetration: '70%',
      internetPenetration: '40%'
    };
  }

  async getCompetitors(sector: string, country: string): Promise<any[]> {
    return [
      {
        name: 'TechLeader Afrique',
        description: 'Leader historique',
        marketShare: '35%',
        strengths: ['Reseau etendu', 'Marque forte'],
        weaknesses: ['Innovation lente']
      }
    ];
  }

  async getOpportunities(sector: string, country: string): Promise<any[]> {
    return [
      {
        title: 'Mobile Money en forte croissance',
        description: 'Opportunite majeure',
        impact: 'High',
        timeline: '0-6 mois'
      }
    ];
  }

  async getRegulations(sector: string, country: string): Promise<any[]> {
    return [
      {
        name: 'Protection des donnees RGPD local',
        description: 'Cadre legal',
        impact: 'Conformite obligatoire',
        complianceCost: '2M FCFA'
      }
    ];
  }

  async getSectorBenchmark(sector: string): Promise<any> {
    return {
      avgMargin: '65%',
      avgGrowth: '35%',
      avgCAC: '45k FCFA',
      avgLTV: '540k FCFA',
      avgChurn: '5%',
      position: 'Tres attractif',
      industryScore: 85
    };
  }

  async getFinancialRatios(sector: string): Promise<any> {
    return {
      cac: '45 000 FCFA',
      ltv: '540 000 FCFA',
      ltvToCac: '12x',
      grossMargin: '75%',
      netMargin: '25%',
      burnRate: '8M FCFA/mois',
      runway: '12-18 mois'
    };
  }

  async getSWOTAnalysis(sector: string, country: string): Promise<any> {
    return {
      strengths: ['Equipe experimentee', 'Tech proprietaire'],
      weaknesses: ['Jeune marque'],
      opportunities: ['Marche en croissance'],
      threats: ['Concurrence internationale']
    };
  }

  async getTrends(sector: string, country: string): Promise<any[]> {
    return [
      { title: 'IA Generative', description: 'L IA transforme les processus', impact: 'High' }
    ];
  }

  async getNews(sector: string, country: string): Promise<any[]> {
    return [
      {
        title: 'Le secteur en pleine croissance',
        date: new Date().toLocaleDateString(),
        summary: 'Investissements record',
        source: 'EcoActu',
        category: 'Economie'
      }
    ];
  }
}

export const searchService = new SearchService();
