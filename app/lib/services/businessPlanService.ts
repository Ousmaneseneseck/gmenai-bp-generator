// app/lib/services/businessPlanService.ts

export interface BusinessPlanInput {
  companyName: string;
  sector: string;
  location: string;
  revenueModel: 'saas' | 'transactionnel' | 'abonnement' | 'marketplace';
  targetCustomers: string;
  hasMobileMoney: boolean;
}

export interface BusinessPlanOutput {
  marketStudy: MarketStudy;
  valueProposition: ValueProposition;
  goToMarket: GoToMarket;
  revenueModel: RevenueModel;
  organization: Organization;
  operations: Operations;
  partnerships: Partnership[];
  costs: CostStructure;
}

export interface MarketStudy {
  size: string;
  growth: string;
  competitors: string[];
  opportunities: string[];
  risks: string[];
}

export interface ValueProposition {
  uniqueValue: string;
  benefits: string[];
  differentiators: string[];
}

export interface GoToMarket {
  channels: string[];
  budget: string;
  timeline: string;
  kpis: string[];
}

export interface RevenueModel {
  pricing: string;
  arr: number;
  mrr: number;
  projections: number[];
}

export interface Organization {
  structure: string[];
  keyRoles: string[];
  payroll: number;
}

export interface Operations {
  workflows: string[];
  kpis: string[];
  tools: string[];
}

export interface Partnership {
  name: string;
  type: string;
  value: string;
}

export interface CostStructure {
  capex: number;
  opex: number;
  scenarios: {
    pessimistic: number;
    realistic: number;
    optimistic: number;
  };
}

export class BusinessPlanService {
  async generate(input: BusinessPlanInput): Promise<BusinessPlanOutput> {
    // Simulation d'appel IA (à remplacer par vos vrais modèles)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      marketStudy: {
        size: `${Math.floor(Math.random() * 1000) + 100}M FCFA`,
        growth: `${Math.floor(Math.random() * 30) + 10}% annuel`,
        competitors: ['Concurrent A', 'Concurrent B', 'Concurrent C'],
        opportunities: ['Digitalisation', 'Mobile Money', 'Marché inexploité'],
        risks: ['Concurrence', 'Régulation', 'Saisonnalité']
      },
      valueProposition: {
        uniqueValue: `Simplifiez la gestion de ${input.sector} avec ${input.companyName}`,
        benefits: ['Gain de temps', 'Réduction des coûts', 'Meilleure visibilité'],
        differentiators: ['IA exclusive', 'Adapté FCFA', 'Support local']
      },
      goToMarket: {
        channels: ['Social Media', 'Partenaires locaux', 'Mobile Money'],
        budget: `${Math.floor(Math.random() * 50) + 10}M FCFA`,
        timeline: '3 mois',
        kpis: ['1000 utilisateurs', '50M FCFA CA', 'Taux conversion 5%']
      },
      revenueModel: {
        pricing: input.revenueModel === 'saas' ? '49 500 FCFA/mois' : 'Commission 5%',
        arr: Math.floor(Math.random() * 500) + 100,
        mrr: Math.floor(Math.random() * 50) + 10,
        projections: [100, 250, 500, 1000, 2000]
      },
      organization: {
        structure: ['Direction', 'Commercial', 'Tech', 'Support'],
        keyRoles: ['CEO', 'CTO', 'CMO', 'Lead Dev'],
        payroll: Math.floor(Math.random() * 100) + 50
      },
      operations: {
        workflows: ['Onboarding client', 'Support technique', 'Facturation'],
        kpis: ['SLA < 2h', 'Satisfaction > 90%'],
        tools: ['CRM', 'Dashboard', 'Automation']
      },
      partnerships: [
        { name: 'Orange Money', type: 'Mobile Money', value: 'Intégration paiement' },
        { name: 'Wave', type: 'Mobile Money', value: 'API transaction' },
        { name: 'Incubateur Local', type: 'Support', value: 'Accès réseau' }
      ],
      costs: {
        capex: Math.floor(Math.random() * 50) + 20,
        opex: Math.floor(Math.random() * 30) + 10,
        scenarios: {
          pessimistic: Math.floor(Math.random() * 40) + 30,
          realistic: Math.floor(Math.random() * 30) + 20,
          optimistic: Math.floor(Math.random() * 20) + 10
        }
      }
    };
  }
}
