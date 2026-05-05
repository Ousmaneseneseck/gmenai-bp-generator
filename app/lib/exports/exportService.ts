// app/lib/exports/exportService.ts

export interface ExportOptions {
  companyName: string;
  data: any;
  type: 'full' | 'executive' | 'pitch' | 'bank';
}

export class ExportService {
  static async generateBusinessPlanPDF(data: any, companyName: string): Promise<void> {
    // Logique de génération PDF full
    const content = this.generateFullContent(data, companyName);
    this.downloadPDF(content, `${companyName}-BusinessPlan.pdf`);
  }

  static async generateExecutiveSummary(data: any, companyName: string): Promise<void> {
    const content = this.generateExecutiveContent(data, companyName);
    this.downloadPDF(content, `${companyName}-ExecutiveSummary.pdf`);
  }

  static async generatePitchDeck(data: any, companyName: string): Promise<void> {
    const content = this.generatePitchContent(data, companyName);
    this.downloadPDF(content, `${companyName}-PitchDeck.pdf`);
  }

  static async generateBankDossier(data: any, companyName: string): Promise<void> {
    const content = this.generateBankContent(data, companyName);
    this.downloadPDF(content, `${companyName}-DossierBanque.pdf`);
  }

  private static generateFullContent(data: any, companyName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head><title>${companyName} - Business Plan Complet</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2cm; }
        h1 { color: #0A66C2; }
        .section { margin-bottom: 30px; }
        .header { text-align: center; margin-bottom: 50px; }
        .footer { text-align: center; margin-top: 50px; font-size: 12px; color: gray; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      </style>
      </head>
      <body>
        <div class="header">
          <h1>${companyName}</h1>
          <h2>Business Plan Complet</h2>
          <p>Généré par GMENAI IA - ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="section">
          <h2>📊 Résumé exécutif</h2>
          <p>${data?.executiveSummary?.vision || 'Devenir le leader panafricain de la transformation digitale'}</p>
          <ul>
            <li>Objectif CA N+3: 500M FCFA</li>
            <li>Objectif clients: 5000</li>
            <li>Expansion: 10 pays</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>📈 Étude de marché</h2>
          <p><strong>Taille du marché:</strong> ${data?.marketStudy?.size || '850M FCFA'}</p>
          <p><strong>Croissance annuelle:</strong> ${data?.marketStudy?.growth || '28%'}</p>
          <p><strong>TAM/SAM/SOM:</strong> 2500M / 850M / 120M FCFA</p>
        </div>
        
        <div class="section">
          <h2>💰 Prévisions financières 5 ans</h2>
          <table>
            <thead><tr><th>Année</th><th>CA (M FCFA)</th><th>Charges</th><th>Résultat</th><th>Marge</th></tr></thead>
            <tbody>
              <tr><td>N+1</td><td>100</td><td>150</td><td class="negative">-50</td><td>-50%</td></tr>
              <tr><td>N+2</td><td>250</td><td>200</td><td class="positive">+50</td><td>20%</td></tr>
              <tr><td>N+3</td><td>500</td><td>350</td><td class="positive">+150</td><td>30%</td></tr>
              <tr><td>N+4</td><td>800</td><td>500</td><td class="positive">+300</td><td>38%</td></tr>
              <tr><td>N+5</td><td>1200</td><td>720</td><td class="positive">+480</td><td>40%</td></tr>
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h2>🎯 Analyse SWOT</h2>
          <ul><li><strong>Forces:</strong> Équipe expérimentée, Tech propriétaire, Partenariats Mobile Money</li>
          <li><strong>Faiblesses:</strong> Jeune marque, Ressources limitées</li>
          <li><strong>Opportunités:</strong> Marché en croissance 28%/an, Digitalisation post-COVID</li>
          <li><strong>Menaces:</strong> Concurrence internationale, Instabilité économique</li></ul>
        </div>
        
        <div class="footer">
          <p>Document confidentiel généré par GMENAI IA</p>
          <p>Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</p>
          <p>📧 contact@gmenai.com | 🌐 www.gmenai.com | 📞 +221 78 123 45 67</p>
        </div>
      </body>
      </html>
    `;
  }

  private static generateExecutiveContent(data: any, companyName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head><title>${companyName} - Executive Summary</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2cm; }
        h1 { color: #0A66C2; }
        .highlight { background: #f0f8ff; padding: 15px; border-left: 4px solid #0A66C2; }
      </style>
      </head>
      <body>
        <h1>${companyName}</h1>
        <h2>Executive Summary</h2>
        <p>Généré par GMENAI IA - ${new Date().toLocaleDateString()}</p>
        
        <div class="highlight">
          <h3>🎯 Vision</h3>
          <p>Devenir la référence panafricaine de la transformation digitale dans le secteur technologique.</p>
        </div>
        
        <h3>📊 Opportunité de marché</h3>
        <p>Marché adressable de 850M FCFA avec une croissance annuelle de 28%.</p>
        
        <h3>🚀 Proposition de valeur unique</h3>
        <p>Solution IA combinée à Mobile Money, adaptée aux spécificités africaines.</p>
        
        <h3>💰 Projections clés</h3>
        <ul>
          <li>CA N+3: 500M FCFA</li>
          <li>CA N+5: 1200M FCFA</li>
          <li>Seuil de rentabilité: 18 mois</li>
          <li>ROI 5 ans: 425%</li>
        </ul>
        
        <h3>💸 Besoin de financement</h3>
        <p>120M FCFA pour couvrir développement, marketing et infrastructure.</p>
      </body>
      </html>
    `;
  }

  private static generatePitchContent(data: any, companyName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head><title>${companyName} - Pitch Deck</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2cm; text-align: center; }
        .slide { page-break-after: always; margin-bottom: 50px; }
        h1 { color: #0A66C2; font-size: 48px; }
        .metric { font-size: 36px; font-weight: bold; color: #0A66C2; }
      </style>
      </head>
      <body>
        <div class="slide">
          <h1>${companyName}</h1>
          <h2>Transformer la gestion des entreprises en Afrique</h2>
          <p>Généré par GMENAI IA</p>
        </div>
        
        <div class="slide">
          <h2>Le problème</h2>
          <p>70% des entreprises africaines n'ont pas accès à des outils digitaux adaptés et abordables.</p>
        </div>
        
        <div class="slide">
          <h2>La solution</h2>
          <p>Une plateforme SaaS tout-en-un avec IA et Mobile Money, spécifiquement conçue pour l'Afrique.</p>
        </div>
        
        <div class="slide">
          <h2>Opportunité de marché</h2>
          <p class="metric">850M FCFA</p>
          <p>Taille de marché adressable</p>
          <p class="metric">28%</p>
          <p>Croissance annuelle</p>
        </div>
        
        <div class="slide">
          <h2>Traction</h2>
          <p class="metric">2000+</p>
          <p>Entrepreneurs utilisateurs</p>
          <p class="metric">50M+ FCFA</p>
          <p>Levés via la plateforme</p>
        </div>
        
        <div class="slide">
          <h2>Demande de financement</h2>
          <p class="metric">120M FCFA</p>
          <p>Pour accélérer notre croissance</p>
        </div>
      </body>
      </html>
    `;
  }

  private static generateBankContent(data: any, companyName: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head><title>${companyName} - Dossier de prêt bancaire</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2cm; }
        h1 { color: #0A66C2; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        .approved { background: #e8f5e9; }
      </style>
      </head>
      <body>
        <h1>${companyName}</h1>
        <h2>Dossier de demande de prêt - ${new Date().toLocaleDateString()}</h2>
        
        <h3>📋 Informations générales</h3>
        <table>
          <tr><th>Entreprise</th><td>${companyName}</td></tr>
          <tr><th>Secteur</th><td>Technologie / SaaS</td></tr>
          <tr><th>Année de création</th><td>2023</td></tr>
          <tr><th>Localisation</th><td>Sénégal</td></tr>
        </table>
        
        <h3>💰 Montant demandé</h3>
        <p class="approved">120 000 000 FCFA</p>
        
        <h3>📈 Capacité de remboursement</h3>
        <table>
          <tr><th>Année</th><th>CA projeté</th><th>Marge nette</th><th>Capacité remboursement</th></tr>
          <tr><td>N+1</td><td>100M</td><td>-50M</td><td>0M</td></tr>
          <tr><td>N+2</td><td>250M</td><td>+50M</td><td>25M</td></tr>
          <tr><td>N+3</td><td>500M</td><td>+150M</td><td>75M</td></tr>
          <tr><td>N+4</td><td>800M</td><td>+300M</td><td>150M</td></tr>
          <tr><td>N+5</td><td>1200M</td><td>+480M</td><td>240M</td></tr>
        </table>
        
        <h3>🛡️ Garanties proposées</h3>
        <ul>
          <li>Caution personnelle des fondateurs</li>
          <li>Nantissement du fonds de commerce</li>
          <li>Assurance crédit</li>
        </ul>
        
        <div class="footer">
          <p>Document préparé par GMENAI IA - ${new Date().toLocaleDateString()}</p>
        </div>
      </body>
      </html>
    `;
  }

  private static downloadPDF(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
