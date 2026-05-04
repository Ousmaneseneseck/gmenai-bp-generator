import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Nom trop court (minimum 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
});

export type SignupFormData = z.infer<typeof signupSchema>;