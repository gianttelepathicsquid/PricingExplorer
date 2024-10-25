import { LucideIcon } from 'lucide-react';

export interface ServiceDetail {
  name: string;
  range: string;
  avg: string;
}

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  details: ServiceDetail[];
}
