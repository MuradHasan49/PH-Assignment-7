"use client";
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { InteractionsDataCotext } from '@/components/ContextApi/GlobalsContext';


const RechartPags = () => {
  const { interactionsData, setInteractionsData } = useContext(InteractionsDataCotext)

  const Calls = interactionsData.filter(item => item.action == "call")
  const Texts = interactionsData.filter(item => item.action == "text")
  const Videos = interactionsData.filter(item => item.action == "video")
  const data = [
    { name: 'Calls', value: Calls.length, color: '#0088FE' },
    { name: 'Texts', value: Texts.length, color: '#00C49F' },
    { name: 'Videos', value: Videos.length, color: '#FFBB28' },
  ];

  return (

    <div className="container mx-auto h-[50vh]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            paddingAngle={5}
            cornerRadius={10}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />

          <RechartsDevtools />
        </PieChart>
      </ResponsiveContainer>
    </div>

  );
}

export default RechartPags