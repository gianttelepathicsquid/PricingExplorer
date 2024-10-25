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
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="border-b border-gray-200 bg-white">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-sky-500" />
              <span className="font-bold text-gray-800">Quetico 3PL Services Pricing Explorer</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 bg-white">
          <div className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedCategory === service.id;
              
              return (
                <div
                  key={service.id}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleCategory(service.id)}
                    className={`w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-sky-100 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-sky-600" />
                      </div>
                      <span className="font-semibold text-gray-800">{service.title}</span>
                    </div>
                    <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-sm text-gray-600">
                            <th className="pb-3 font-semibold">Service</th>
                            <th className="pb-3 font-semibold">Price Range</th>
                            <th className="pb-3 font-semibold">Average</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {service.details.map((detail, idx) => (
                            <tr
                              key={idx}
                              className="text-sm"
                            >
                              <td className="py-3 text-gray-800">{detail.name}</td>
                              <td className="py-3 text-gray-800">{detail.range}</td>
                              <td className="py-3 text-gray-800">{detail.avg}</td>
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
    </div>
  );
};

export default PricingExplorer;
