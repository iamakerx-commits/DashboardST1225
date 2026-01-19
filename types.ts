
export interface DemographicData {
  range: string;
  masc: number;
  fem: number;
  total: number;
}

export interface DisabilityData {
  type: string;
  count: number;
}

export interface TerritorySummary {
  users: number;
  households: number;
  families: number;
  otherProperties: number;
  homeless: number;
}

export interface SanitationData {
  label: string;
  value: number;
}
