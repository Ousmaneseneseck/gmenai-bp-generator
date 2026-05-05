// app/lib/exports/wordExport.ts
import { Document, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

export async function exportToWord(businessPlanData: any, companyName: string) {
  // Créer le document
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: companyName,
          heading: HeadingLevel.TITLE,
          spacing: { after: 200 },
        }),
        new Paragraph({
          text: `Business Plan - ${new Date().toLocaleDateString()}`,
          spacing: { after: 400 },
        }),
        
        // Résumé exécutif
        new Paragraph({
          text: "Résumé exécutif",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun("Votre business plan complet généré par IA. "),
            new TextRun({
              text: "Prévisions financières sur 5 ans.",
              italics: true,
            }),
          ],
        }),
        
        // Étude de marché
        new Paragraph({
          text: "Étude de marché",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph(`Taille du marché: ${businessPlanData.marketSize || "850M FCFA"}`),
        new Paragraph(`Croissance annuelle: ${businessPlanData.marketGrowth || "28%"}`),
        
        // Modèle de revenus
        new Paragraph({
          text: "Modèle de revenus",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph(`Pricing: ${businessPlanData.pricing || "49 500 FCFA/mois"}`),
        new Paragraph(`ARR: ${businessPlanData.arr || "250M FCFA"} | MRR: ${businessPlanData.mrr || "25M FCFA"}`),
        
        // Projections
        new Paragraph({
          text: "Projections financières",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),
        new Paragraph("N+1: CA 100M FCFA | Résultat -50M FCFA"),
        new Paragraph("N+2: CA 250M FCFA | Résultat +50M FCFA"),
        new Paragraph("N+3: CA 500M FCFA | Résultat +150M FCFA"),
        new Paragraph("N+4: CA 800M FCFA | Résultat +300M FCFA"),
        new Paragraph("N+5: CA 1200M FCFA | Résultat +480M FCFA"),
      ],
    }],
  });

  // Générer et télécharger
  const blob = await doc.save();
  saveAs(blob, `${companyName}-Business-Plan.docx`);
}
