'use client';

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { GetServerSideProps } from 'next';




interface ToggleProps {
  initialPlan: string;
}

const Toggle = ({ initialPlan }: ToggleProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [subscriptions, setSubscriptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const query = `*[_type == "suborder"] | order(name asc) {
          name,
          email,
          address,
          subscription-> {
            name,        
            description,
            price,       
            features,   
            isPopular
          },
          date
        }`;

        const fetchedSubscriptions = await client.fetch(query);

        if (!Array.isArray(fetchedSubscriptions)) {
          throw new Error('Invalid data structure returned.');
        }

        setSubscriptions(fetchedSubscriptions);
      } catch (err) {
        console.error('Error fetching subscriptions:', err);
        setError('Failed to fetch subscriptions.');
      }
    };

    fetchSubscriptions();
  }, []);

  const handleToggle = async () => {
    const newPlan =
      selectedPlan === 'free'
        ? 'standard'
        : selectedPlan === 'standard'
        ? 'premium'
        : 'free';

    setSelectedPlan(newPlan);

    try {
      setLoading(true);
      const response = await fetch('/api/suborder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: newPlan,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error('Failed to update subscription.');
      }
    } catch (err) {
      console.error('Error updating subscription:', err);
      setError('Failed to update subscription.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
       {loading && <div className="text-gray-600">Loading...</div>}
       {error && <div className="text-red-500">{error}</div>}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        {/* Header Section */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Your Plan</h1>
        <p className="text-center text-gray-600 max-w-lg">
        Toggle between plans to find the one that suits you best.
        </p>

        {/* Toggle Section */}
        <div className="mt-10">
          
          <ul className="space-y-4">
            {subscriptions.map((sub, index) => (
              <li key={index} className="flex justify-between items-center w-full">
                
                
                <div className="flex items-center space-x-4">
                  {/* Toggle Switch */}
                  <span className={`text-gray-700 font-medium ${selectedPlan === 'free' ? 'text-blue-600' : ''}`}>
                    Free
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="sr-only"
                      onChange={handleToggle}
                      disabled={loading}
                    />
                    <div
                      className={`block w-20 h-10 rounded-full transition-all duration-300 ${
                        selectedPlan === 'free'
                          ? 'bg-gray-400'
                          : selectedPlan === 'standard'
                          ? 'bg-blue-100'
                          : 'bg-blue-300'
                      }`}
                    ></div>
                    <div
                      className={`dot absolute top-1 w-8 h-8 rounded-full transition-all duration-300 ${
                        selectedPlan === 'free'
                          ? 'bg-gray-500 left-1'
                          : selectedPlan === 'standard'
                          ? 'bg-blue-200 left-6'
                          : 'bg-blue-700 left-12'
                      }`}
                    ></div>
                  </div>
                  <span className={`text-gray-700 font-medium ${selectedPlan === 'premium' ? 'text-blue-600' : ''}`}>
                    {sub.subscription.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;

  const response = await fetch(`http://localhost:3000/api/suborder?userId=${userId}`);
  const data = await response.json();

  return {
    props: {
      initialPlan: data.success && data.subscription ? data.subscription.name : 'free',
    },
  };
};

export default Toggle;

