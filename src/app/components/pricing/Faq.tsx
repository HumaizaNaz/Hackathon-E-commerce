import React from 'react';
import { Montserrat } from 'next/font/google';

const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Faq2 = () => {
  return (
    <div className={`${monterrat.className}`}> 
      <div className="py-4 max-w-screen-sm mx-auto">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Subscription <span className="text-gray-900">FAQs</span>
          </h3>
        </div>

        <div className="px-10 sm:px-16">
          <div className="py-3 uppercase text-sm text-gray-500 font-medium">
            Common questions regarding our subscription plans and services
          </div>

          <div className="ml-5">
            {/* Question 1 */}
            <div className="flex items-start my-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">What is included in my subscription?</h1>
                <p className="text-gray-500 text-sm">
                  Our subscription plans include access to all premium features, priority support, and regular updates. You can also enjoy exclusive content designed to enhance your experience.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex items-start my-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">Can I cancel my subscription at any time?</h1>
                <p className="text-gray-500 text-sm">
                  Yes, you can cancel your subscription at any time through your account settings. Your subscription will remain active until the end of the current billing cycle.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex items-start my-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">Are there any discounts for long-term subscriptions?</h1>
                <p className="text-gray-500 text-sm">
                  Yes, we offer discounts for annual and multi-year subscriptions. You can view the available discounts during the checkout process.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex items-start my-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">What payment methods do you accept?</h1>
                <p className="text-gray-500 text-sm">
                  We accept major credit and debit cards, PayPal, and direct bank transfers for subscription payments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
