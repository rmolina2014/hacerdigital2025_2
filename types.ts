import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface KpiData {
  name: string;
  value: number;
  target: number;
}

export interface AnalysisResult {
  summary: string;
  suggestedKPIs: string[];
  techStack: string[];
  geoStrategy: string;
}

export enum MapLayerType {
  HEATMAP = 'HEATMAP',
  MARKERS = 'MARKERS',
  ZONES = 'ZONES'
}