// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: 'Indian Citizen',
    summary: 'Available for full-time opportunities. Open to relocation.',
    additionalInfo: 'Authorized to work in India. Open to international opportunities with visa sponsorship.'
  };
}
