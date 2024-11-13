"use client"

import Head from 'next/head'
import './styles.css'

const OptInPage = () => {
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
        email: { value: string };
        };
        const email = target.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
        }
        // Proceed with form submission or AJAX call here
    };

  return (
    <>
      <Head>
        <title>Beauty Salon Marketing</title>
      </Head>

      <section className="relative py-6 bg-gradient-to-r from-pink-50 to-purple-50 sm:py-8 lg:py-10 lg:pb-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-pink-800 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                  Stop Wasting Money on Ineffective Beauty Salon Ads
                </h1>
                <p className="mt-2 text-lg text-pink-600 sm:mt-8">
                  Our proven marketing checklist helps you optimize your ad spend, attract more clients, and grow your salon business. Discover the strategies that work, and start seeing a positive return on your advertising investment.
                </p>
                <form action="#" method="POST" onSubmit={handleFormSubmit} className="mt-2 sm:mt-8">
                  <div className="relative p-2 sm:border sm:border-pink-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-pink-800 sm:focus-within:border-pink-800">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="block w-full px-4 py-4 text-pink-800 placeholder-pink-600 bg-transparent border border-pink-400 outline-none focus:border-pink-800 focus:ring-1 focus:ring-pink-800 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-red-600 rounded-lg focus:outline-none focus:bg-red-700 hover:bg-red-700">
                        Get My Free Checklist
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-center text-pink-900">
                    Your privacy is our priority. We will never share or sell your personal information to third parties.
                  </p>
                </form>
              </div>
              <div className="flex flex-col items-center justify-center mt-10 space-y-6">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-pink-800 sm:text-4xl">193</p>
                    <p className="ml-3 text-sm text-pink-800">
                      Salons
                      <br />
                      Helped
                    </p>
                  </div>
                  <svg className="text-pink-600" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                  </svg>
                  <div className="flex items-center">
                    <p className="text-3xl font-medium text-pink-800 sm:text-4xl">34%</p>
                    <p className="ml-3 text-sm text-pink-800">
                      Average
                      <br />
                      Revenue Boost
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-8">
                <div className="mb-6">
                  <p className="text-xl text-center text-pink-700 lg:text-2xl"> "Thanks to the marketing checklist, we cut our ad spend by <span className="font-bold text-pink-800">30%</span> and increased our profit by <span className="font-bold text-pink-800">35%</span>. It's a game-changer for any salon!" </p>
                </div>
                <div className="flex items-center justify-center">
                  <img className="w-16 h-16 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer Avatar" />
                  <div className="ml-4">
                    <p className="text-lg font-bold text-pink-800">Emily Parker</p>
                    <p className="text-sm text-pink-600">Owner, Radiant Beauty Salon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-2 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-700 sm:transform sm:-rotate-6 rounded-lg"></div>
              <img className="w-full h-[70vh] object-cover rounded-lg relative z-10" src="/img/opt-in/hero.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>

    <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-pink-800 sm:text-4xl lg:text-5xl">Maximize Your Salon's Potential</h2>
                <p className="mt-4 text-lg text-pink-700 sm:mt-8">Solve your biggest challenges and grow your business</p>
            </div>
    
            <div className="relative mt-12">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-pink-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 text-2xl font-bold text-pink-800 bg-pink-100">&#x2766;</span>
                </div>
            </div>
    
            <div className="grid max-w-lg grid-cols-1 mx-auto mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <div className="mb-6 px-6 py-8 bg-pink-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500 fill-none mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-pink-800 mt-4">Struggling to get noticed in a competitive market? <span className="text-red-500 text-xl">Stand out with targeted ads.</span></h3>
                        <p className="mt-4 text-pink-700">Our expertly crafted ad campaigns will help you reach your ideal clients and showcase what makes your salon unique. Say goodbye to wasted ad spend and hello to a steady stream of new business.</p>
                    </div>
                </div>
                
                <div className="mb-6 px-6 py-8 bg-pink-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500 fill-none mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-pink-800 mt-4">Tired of pouring money into marketing that doesn't work? <span className="text-red-500 text-xl">Get better results with less spend.</span></h3>
                        <p className="mt-4 text-pink-700">Our proven marketing checklist and ad management services will optimize your efforts and maximize your return on investment. Stop wasting money on ineffective strategies and start seeing real growth.</p>
                    </div>
                </div>
                
                <div className="mb-6 px-6 py-8 bg-pink-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500 fill-none mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="text-center">
                    <h3 className="text-2xl font-semibold text-pink-800 mt-4">Can't seem to keep a consistent flow of new clients? <span className="text-red-500 text-xl">Attract a reliable stream of customers.</span></h3>
                    <p className="mt-4 text-pink-700">Our expert guidance and comprehensive marketing solutions will help you build a dependable pipeline of new business. With our support, you'll never have to worry about empty appointment books again.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gradient-to-r from-pink-200 to-purple-200 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-pink-800 sm:text-4xl lg:text-5xl">What Our Clients Say</h2>
                <p className="mt-4 text-lg text-pink-700 sm:mt-8">Discover how our marketing checklist and ad management services have transformed beauty salons across the country.</p>
            </div>
    
            <div className="relative mt-12">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-pink-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 text-2xl font-bold text-pink-800 bg-gradient-to-r from-pink-200 to-purple-200">&#x2766;</span>
                </div>
            </div>
    
            <div className="grid max-w-lg grid-cols-1 mx-auto mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <div className="px-6 py-8 bg-white rounded-lg shadow-2xl lg:px-8 lg:py-10 lg:col-span-3 lg:flex lg:items-center border-4 border-pink-500/50 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="lg:w-1/3 flex flex-col items-center space-y-4">
                        <img src="https://i.pravatar.cc/150?img=32" alt="Samantha Johnson" className="w-32 h-32 rounded-full mx-auto ring-4 ring-pink-500/50" />
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-pink-800">Samantha Johnson</h4>
                            <p className="text-pink-600">Owner, Luxe Beauty Lounge</p>
                            <div className="flex justify-center mt-2">
                                <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                                <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                                <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                                <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                                <span className="inline-block w-4 h-4 bg-pink-500 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-2/3">
                        <p className="text-lg text-pink-700 lg:text-xl">"I was blown away by the results! 🎉 After implementing the strategies from the <span className="font-bold text-pink-800">marketing checklist</span>, our salon saw a <span className="font-bold text-pink-800">40% increase in new clients</span> within the first month. The ad management services helped us <span className="font-bold text-pink-800">reduce our ad spend by 25%</span> while still driving incredible growth. I can't recommend this enough!"</p>
                    </div>
                </div>
    
                <div className="px-6 py-8 mt-8 bg-pink-50 rounded-lg shadow-md lg:mt-0">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Emily Thompson" className="mx-auto rounded-full" />
                    <div className="mt-4 text-center">
                        <h4 className="text-xl font-bold text-pink-800">Emily Thompson</h4>
                        <p className="text-pink-600">Owner, Serenity Spa</p>
                        <div className="mt-2">
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 bg-pink-300 rounded-full"></span>
                        </div>
                    </div>
                    <p className="mt-4 text-pink-700">"The marketing checklist was a game-changer for our spa. It provided a clear roadmap to attract our ideal clients and increase bookings. We've seen a <span className="font-bold text-pink-800">steady 20% growth</span> in revenue since working with this team."</p>
                </div>
    
                <div className="px-6 py-8 mt-8 bg-white rounded-lg shadow-md lg:mt-0">
                    <img src="https://i.pravatar.cc/150?img=51" alt="Rachel Davis" className="mx-auto rounded-full" />
                    <div className="mt-4 text-center">
                        <h4 className="text-xl font-bold text-pink-800">Rachel Davis</h4>
                        <p className="text-pink-600">Owner, Bella Beauty Bar</p>
                        <div className="mt-2">
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 bg-pink-500 rounded-full"></span>
                        </div>
                    </div>
                    <p className="mt-4 text-pink-700">"I was hesitant to invest in marketing, but the ad management services have been worth every penny. Our salon is consistently booked out weeks in advance, and we've been able to <span className="font-bold text-pink-800">expand our team</span> to keep up with the demand. I'm so grateful for the expert guidance!"</p>
                </div>

                <div className="px-6 py-8 mt-8 bg-pink-50 rounded-lg shadow-md lg:mt-0">
                    <img src="https://i.pravatar.cc/150?img=63" alt="Jessica Torres" className="mx-auto rounded-full" />
                    <div className="mt-4 text-center">
                        <h4 className="text-xl font-bold text-pink-800">Jessica Torres</h4>
                        <p className="text-pink-600">Owner, Glamour Studio</p>
                        <div className="mt-2">
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                            <span className="inline-block w-4 h-4 mr-1 bg-pink-500 rounded-full"></span>
                        </div>
                    </div>
                    <p className="mt-4 text-pink-700">"I was struggling to stand out in a crowded market, but the <span className="font-bold text-pink-800">targeted ad campaigns</span> created by this team helped me reach my ideal clients effortlessly. The <span className="font-bold text-pink-800">marketing checklist</span> provided invaluable insights that transformed my approach. My bookings have <span className="font-bold text-pink-800">increased by 35%</span>, and I've gained a loyal customer base. I couldn't be happier with the results! 🌟"</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-pink-800 sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-pink-700 sm:mt-8">Get answers to your most pressing questions about our marketing checklist and ad management services.</p>
            </div>
    
            <div className="relative mt-12">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-pink-300"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 text-2xl font-bold text-pink-800 bg-gradient-to-r from-pink-100 to-purple-100">&#x2766;</span>
                </div>
            </div>
    
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        How is your marketing checklist different from others?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>Our checklist is created by beauty industry experts and has been proven effective for salons of all sizes. It covers all essential aspects of salon marketing, from branding to client retention.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        What if I'm not tech-savvy? Can I still use your ad management services?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>Absolutely! Our user-friendly platform and dedicated support team will guide you through the process and ensure your ads are set up for success, no technical expertise needed.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        What kind of results can I expect from using your marketing checklist and ad services?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>While results may vary, our clients typically see a 20-40% increase in new client bookings within the first 3 months of implementing our strategies and ads.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        How long does it take to see results from your marketing strategies?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>Most of our clients start seeing noticeable results within the first 4-6 weeks of implementing our marketing checklist and ad strategies. However, sustainable growth and long-term results require consistent effort and optimization.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        Do you offer any guarantees or refunds?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>While we can't offer guarantees due to the many variables involved in marketing, we're confident in our strategies and have a proven track record of success. If you're not satisfied with our services, we'll work with you to find a solution or provide a refund for unused portions of our plans.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        How do I get started with your marketing checklist and ad services?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>Getting started is easy! Simply sign up for our services, and our team will reach out to you to discuss your salon's specific needs and goals. We'll work with you to create a customized marketing plan and set up your ad campaigns for maximum impact.</p>
                    </div>
                </details>
            
                <details className="overflow-visible bg-white rounded-lg shadow-md">
                    <summary className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-left text-pink-800 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                        What makes your marketing strategies unique for beauty salons?
                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="px-6 py-4 text-pink-700">
                        <p>Our marketing strategies are tailored specifically for beauty salons, taking into account the unique challenges and opportunities in the industry. We focus on proven tactics that attract high-value clients, increase brand awareness, and drive revenue growth. Our team stays up-to-date with the latest trends and best practices to ensure your salon stays ahead of the competition.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
    
    <section className="relative py-12 bg-gradient-to-r from-pink-100 to-purple-100 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-30"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-pink-800 sm:text-4xl lg:text-5xl">Ready to Take Your Salon's Marketing to the Next Level?</h2>
                <p className="max-w-lg mx-auto mt-4 text-lg leading-relaxed text-pink-600">Speak with one of our beauty industry marketing experts to learn how we can help you achieve your salon's growth goals.</p>
            </div>
            <div className="max-w-4xl px-4 pt-12 pb-16 mx-auto mt-12 bg-white rounded-lg shadow-lg lg:max-w-5xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h3 className="text-2xl font-semibold text-pink-800">Schedule a Free Consultation</h3>
                        <p className="mt-4 text-base text-pink-600">Take the first step towards transforming your salon's marketing and boosting your revenue. Fill out the form to schedule a free consultation with our experts.</p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="ml-3 text-base text-pink-600">Optimize your ad spend and maximize ROI</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="ml-3 text-base text-pink-600">Attract a steady stream of new clients</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="ml-3 text-base text-pink-600">Increase brand awareness and client loyalty</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form action="#" method="POST" className="mt-8" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Full name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter your full name" required className="block w-full px-4 py-3 text-pink-800 placeholder-pink-600 bg-white border border-pink-400 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email address" required className="block w-full px-4 py-3 text-pink-800 placeholder-pink-600 bg-white border border-pink-400 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                                </div>
                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default OptInPage
