// Added React import to resolve the React namespace used in the ServiceItem interface
import React from 'react';

export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
  icon?: React.ReactNode;
}

export interface Step {
  step: string;
  title: string;
  text: string;
}

export interface NavLink {
  label: string;
  href: string;
}