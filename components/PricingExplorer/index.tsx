'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Package, Truck, Warehouse, Settings, RefreshCcw, Plane } from 'lucide-react';

const PricingExplorer = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Initial Set-Up',
      icon: Settings,
      color: 'bg-sky-500',
      details: [
        { name: 'One-time Setup Fee', range: '$150 - $1,500', avg: '$385' },
        { name: 'Monthly Maintenance', range: '$10 - $500', avg: '$198' },
        { name: 'Custom Reporting', range: '$100 - $500', avg: 'Varies' }
      ]
    },
    {
      id: 2,
      title: 'Receiving',
      icon: Truck,
      color: 'bg-sky-500',
      details: [
        { name: 'Hourly Rate', range: '$35 - $45', avg: '$40.79' },
        { name: 'Per Pallet', range: '$4 - $15', avg: '$12.91' },
        { name: 'Per Item', range: '$0.20 - $0.45', avg: '$0.33' },
        { name: '20-ft Container', range: '$350', avg: '$350' },
        { name: '40-ft Container', range: '$425', avg: '$425' }
      ]
    },
    {
      id: 3,
      title: 'Storage',
      icon: Warehouse,
      color: 'bg-sky-500',
      details: [
        { name: 'Per Pallet/Month', range: '$8 - $40', avg: '$20.37' },
        { name: 'Cubic Foot', range: '$0.45 - $0.55', avg: '$0.50' },
        { name: 'Bin Storage/Month', range: '$2.67', avg: '$2.67' },
        { name: 'Climate-Controlled', range: '$25 - $35', avg: '$30' }
      ]
    },
    {
      id: 4,
      title: 'Fulfillment',
      icon: Package,
      color: 'bg-sky-500',
      details: [
        { name: 'B2C Order', range: '$2.97 - $3.18', avg: '$3.08' },
        { name: 'B2B Order', range: '$4.31 - $4.79', avg: '$4.55' },
        { name: 'Per Item', range: '$0.68', avg: '$0.68' },
        { name: 'Packaging', range: '$1.19', avg: '$1.19' },
        { name: 'Order Insert', range: '$0.25', avg: '$0.25' }
      ]
    },
    {
      id: 5,
      title: 'Shipping',
      icon: Plane,
      color: 'bg-sky-500',
      details: [
        { name: 'Ground Shipping', range: '15-25% off rates', avg: '20%' },
        { name: 'Express Shipping', range: '20-30% off rates', avg: '25%' },
        { name: 'LTL Shipping', range: '45-60% off rates', avg: '52.5%' },
        { name: 'Inbound Shipping', range: 'Carrier dependent', avg: 'Varies' },
        { name: 'Outbound Shipping', range: '19.90-23.04% off rates', avg: '21.47%' }
      ]
    },
    {
      id: 6,
      title: 'Returns & Support',
      icon: RefreshCcw,
      color: 'bg-sky-500',
      details: [
        { name: 'Per Return', range: '$3.95', avg: '$3.95' },
        { name: 'Account Management', range: '$30 - $1,000+', avg: '$236.67' },
        { name: 'Call Center (per min)', range: '$1.19', avg: '$1.19' },
        { name: 'Customer Support', range: '$1 - $3', avg: '$2' }
      ]
    }
  ];

  const toggleCategory = (id: number) => {
    setExpandedCategory(prev => prev === id ? null : id);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center gap-2 text-2xl text-black">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-sky-500" />
            Quetico 3PL Services Pricing Explorer
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedCategory === service.id;
            
            return (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleCategory(service.id)}
                  className={`w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-sky-500" />
                    <span className="font-semibold text-black">{service.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-sky-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-sky-500" />
                  )}
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 bg-white">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm text-black">
                          <th className="pb-2 font-semibold">Service</th>
                          <th className="pb-2 font-semibold">Price Range</th>
                          <th className="pb-2 font-semibold">Average</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.details.map((detail, idx) => (
                          <tr
                            key={idx}
                            className="border-t border-gray-200"
                          >
                            <td className="py-2 text-black">{detail.name}</td>
                            <td className="py-2 text-black">{detail.range}</td>
                            <td className="py-2 text-black">{detail.avg}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingExplorer;
