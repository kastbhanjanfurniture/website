import React from 'react';
import { Award, Users, Truck, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We source only the finest materials and work with skilled craftsmen to create furniture that lasts generations.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service from browsing to delivery and beyond.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Reliable Delivery',
      description: 'Professional white-glove delivery service ensures your furniture arrives safely and is set up perfectly.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Design',
      description: 'We believe furniture should be both beautiful and functional, enhancing the way you live and work.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Sold' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Furnish
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over a decade, we've been transforming homes with carefully curated, premium furniture that combines timeless design with exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014, Furnish began as a small family business with a simple mission: to make beautiful, high-quality furniture accessible to everyone. What started in a small workshop has grown into a trusted name in home furnishing.
                </p>
                <p>
                  We believe that your home should reflect your personality and lifestyle. That's why we carefully curate our collection to offer a diverse range of styles, from modern minimalist to classic traditional, ensuring there's something perfect for every space.
                </p>
                <p>
                  Today, we're proud to serve customers across the country, but we haven't forgotten our roots. Every piece in our collection is chosen with the same care and attention to detail that has defined us from the beginning.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our showroom"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-800">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            To help people create homes they love by providing exceptional furniture that combines quality, style, and value. We believe everyone deserves a beautiful living space that reflects their unique personality and enhances their daily life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;