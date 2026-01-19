
import { DemographicData, DisabilityData, SanitationData } from './types';

export const SUMMARY = {
  users: 7683,
  households: 3640,
  families: 2832,
  otherProperties: 537,
  homeless: 3
};

export const DEMOGRAPHICS: DemographicData[] = [
  { range: '0-4 anos', masc: 37 + 33 + 25 + 42 + 37, fem: 39 + 26 + 21 + 35 + 47, total: 76 + 59 + 46 + 77 + 84 },
  { range: '05-14 anos', masc: 192 + 240, fem: 195 + 202, total: 387 + 442 },
  { range: '15-24 anos', masc: 223 + 254, fem: 227 + 227, total: 450 + 481 },
  { range: '25-34 anos', masc: 274 + 237, fem: 244 + 246, total: 518 + 483 },
  { range: '35-44 anos', masc: 258 + 302, fem: 285 + 297, total: 543 + 599 },
  { range: '45-54 anos', masc: 282 + 276, fem: 303 + 299, total: 585 + 575 },
  { range: '55-64 anos', masc: 244 + 220, fem: 263 + 237, total: 507 + 457 },
  { range: '65-74 anos', masc: 209 + 162, fem: 219 + 194, total: 428 + 356 },
  { range: '75+ anos', masc: 118 + 110, fem: 131 + 171, total: 249 + 281 },
];

export const DISABILITIES: DisabilityData[] = [
  { type: 'Intelectual', count: 44 },
  { type: 'Física', count: 35 },
  { type: 'Auditiva', count: 31 },
  { type: 'Visual', count: 25 },
  { type: 'Outras', count: 17 },
];

export const WATER_TREATMENT: SanitationData[] = [
  { label: 'Sem Tratamento', value: 3008 },
  { label: 'Clorada', value: 330 },
  { label: 'Mineral', value: 128 },
  { label: 'Filtrada', value: 41 + 82 + 12 },
  { label: 'Outros', value: 20 + 19 },
];

export const WASTE_DESTINATION: SanitationData[] = [
  { label: 'Coletado', value: 3620 },
  { label: 'Não Informado', value: 20 },
];

export const ELECTRICITY: SanitationData[] = [
  { label: 'Com Energia', value: 3454 },
  { label: 'Sem Energia', value: 10 },
  { label: 'Não Inf.', value: 176 },
];

export const COLORS = {
  primary: '#0f172a', // Slate 900
  secondary: '#3b82f6', // Blue 500
  success: '#10b981', // Emerald 500
  warning: '#f59e0b', // Amber 500
  danger: '#ef4444', // Red 500
  masc: '#3b82f6',
  fem: '#ec4899',
  chartColors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1']
};
