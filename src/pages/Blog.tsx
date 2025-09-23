import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Sofa for Your Living Room',
      excerpt: 'Discover the key factors to consider when selecting a sofa that combines comfort, style, and functionality for your space.',
      content: 'When choosing a sofa, consider the size of your room, your lifestyle, and the overall aesthetic you want to achieve...',
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Furniture Guide',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['Sofa', 'Living Room', 'Interior Design']
    },
    {
      id: 2,
      title: '10 Interior Design Trends for 2024',
      excerpt: 'Stay ahead of the curve with these emerging interior design trends that will define homes in 2024.',
      content: 'This year brings exciting new trends in interior design, from sustainable materials to bold color choices...',
      image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design Trends',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      tags: ['Trends', 'Interior Design', '2024']
    },
    {
      id: 3,
      title: 'Creating a Productive Home Office Space',
      excerpt: 'Transform any corner of your home into a productive workspace with the right furniture and design choices.',
      content: 'Working from home requires a dedicated space that promotes productivity and comfort...',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Home Office',
      author: 'Emily Davis',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Home Office', 'Productivity', 'Workspace']
    },
    {
      id: 4,
      title: 'Sustainable Furniture: Why It Matters',
      excerpt: 'Learn about the importance of sustainable furniture and how to make eco-friendly choices for your home.',
      content: 'Sustainable furniture is not just a trend; it\'s a responsibility towards our planet...',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sustainability',
      author: 'Sarah Johnson',
      date: '2024-01-08',
      readTime: '4 min read',
      tags: ['Sustainability', 'Eco-friendly', 'Environment']
    },
    {
      id: 5,
      title: 'Small Space, Big Style: Maximizing Your Apartment',
      excerpt: 'Discover clever furniture solutions and design tricks to make your small apartment feel spacious and stylish.',
      content: 'Living in a small space doesn\'t mean compromising on style or functionality...',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Small Spaces',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '8 min read',
      tags: ['Small Spaces', 'Apartment', 'Space Saving']
    },
    {
      id: 6,
      title: 'The Art of Mixing Furniture Styles',
      excerpt: 'Learn how to successfully combine different furniture styles to create a unique and cohesive look.',
      content: 'Mixing furniture styles can create a dynamic and personalized interior...',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design Tips',
      author: 'Emily Davis',
      date: '2024-01-03',
      readTime: '5 min read',
      tags: ['Design Tips', 'Styling', 'Mixing Styles']
    },
    {
      id: 7,
      title: 'Caring for Your Wooden Furniture',
      excerpt: 'Essential tips and techniques to keep your wooden furniture looking beautiful for years to come.',
      content: 'Proper care and maintenance can extend the life of your wooden furniture significantly...',
      image: 'https://images.pexels.com/photos/1854037/pexels-photo-1854037.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Furniture Care',
      author: 'Sarah Johnson',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['Furniture Care', 'Wood', 'Maintenance']
    },
    {
      id: 8,
      title: 'Color Psychology in Interior Design',
      excerpt: 'Understand how colors affect mood and atmosphere, and learn to use them effectively in your home.',
      content: 'Colors have a profound impact on our emotions and the overall feel of a space...',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design Psychology',
      author: 'Michael Chen',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Color Psychology', 'Interior Design', 'Mood']
    }
  ];

  const categories = ['All', 'Furniture Guide', 'Design Trends', 'Home Office', 'Sustainability', 'Small Spaces', 'Design Tips', 'Furniture Care', 'Design Psychology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Furniture & Design Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, design inspiration, and the latest trends in furniture and interior design
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-gray-600 mt-4">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-emerald-800 px-2 py-1 rounded text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-stone-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-emerald-800 hover:text-emerald-600 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-emerald-800 rounded-lg p-8 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest furniture tips, design trends, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;