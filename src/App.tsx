import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-pine-tree">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pine-tree/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="images/Logo Prosperofood.png"
                alt="Prospero Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-coffee ${
                    isScrolled ? 'text-white-coffee' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-white-coffee' : 'text-white'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-van-dyke-brown border-t border-coffee">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-white-coffee hover:text-beaver transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(images/herobg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white-coffee px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-slide-up">
            PROSPERO
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up-delay">
            Indonesian Chocolate Premium Drink
          </p>
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-coffee hover:bg-van-dyke-brown text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-slide-up-delay-2"
          >
            Discover Our Collection
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-van-dyke-brown">
        <style>
          {`
            .scroll-container::-webkit-scrollbar {
              height: 8px;
            }
            .scroll-container::-webkit-scrollbar-track {
              background: #5A3D29;
              border-radius: 4px;
            }
            .scroll-container::-webkit-scrollbar-thumb {
              background: #9A8670;
              border-radius: 4px;
            }
            .scroll-container::-webkit-scrollbar-thumb:hover {
              background: #E8DED6;
            }
          `}
        </style>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white-coffee mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-white-coffee max-w-3xl mx-auto mb-8">
              Discover our diverse range of premium products: pure chocolate powders for the perfect drink, 
              functional chocolates for health benefits, delightful snacks, and crispy fruit treats. 
              Each product is crafted with care to bring you the best in taste and quality.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              {['all', 'powder', 'functional', 'snack', 'fruit'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-coffee text-white'
                      : 'bg-pine-tree text-white-coffee hover:bg-pine-tree/80'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className={`px-4 ${
            selectedCategory === 'all' 
              ? 'flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scroll-container'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
            }`}>
            {
              [
                {
                  name: 'Realcho Box',
                  description: 'Pure chocolate bliss no milk, no sugar, no preservatives. Rich, intense flavor for hot or cold drinks.',
                  image: 'images/products/Realcho Variant Box.jpeg',
                  category: 'powder',
                  links: {
                    tokopedia: 'https://www.tokopedia.com/prosperofood/realcho-original-premium-chocolate-drink-saset-lama-1731910075665844061?extParam=src%3Dshop%26whid%3D20349806&aff_unique_id=&channel=others&chain_key=',
                    shopee: 'https://shopee.co.id/prosperofood',
                    blibli: 'https://www.blibli.com/p/realcho/ps--PRO-200001'
                  }
                },
                {
                  name: 'Realcho Original',
                  description: 'Pure chocolate bliss — no milk, no sugar, no preservatives. Rich, intense flavor for hot or cold drinks.',
                  image: 'images/products/Realcho original tube 2.jpeg',
                  category: 'powder',
                  links: {
                    tokopedia: 'https://www.tokopedia.com/prosperofood/realcho-original-premium-chocolate-drink-saset-lama-1731910075665844061?extParam=src%3Dshop%26whid%3D20349806&aff_unique_id=&channel=others&chain_key=',
                    shopee: 'https://shopee.co.id/prosperofood',
                    blibli: 'https://www.blibli.com/p/realcho/ps--PRO-200001'
                  }
                },
                // {
                  //   name: 'Realcho Fiber',
              //   description: 'Sip smart! Chocolate with Carb Blocker to support smooth digestion.',
              //   image: 'images/products/Realcho original tube 2.jpeg',
              //   category: 'functional',
              //   links: {
              //     tokopedia: 'https://www.tokopedia.com/prospero/realcho-fiber',
              //     shopee: 'https://shopee.co.id/prosperofood',
              //     blibli: 'https://www.blibli.com/p/realcho-fiber/ps--PRO-200002'
              //   }
              // },
              {
                name: 'Realcho Rewind',
                description: 'Turn back time with NAD+++ chocolate — firmer skin & anti-aging in every sip.',
                image: 'images/products/Realcho Rewind Tube.jpeg',
                category: 'functional',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/realcho-rewind',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/realcho-rewind/ps--PRO-200003'
                }
              },
              {
                name: 'Realcho Bright',
                description: 'Chocolate enriched with Vitamin A — for healthy eyes and sharper memory.',
                image: 'images/products/Realcho Bright Tube.jpg',
                category: 'functional',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/realcho-bright',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/realcho-bright/ps--PRO-200004'
                }
              },
              {
                name: 'Realcho High Fiber',
                description: 'Diabetic & diet-friendly chocolate. High fiber supports metabolism and body cleansing.',
                image: 'images/products/Prospero High Fiber.png',
                category: 'functional',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/realcho-high-fiber',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/realcho-high-fiber/ps--PRO-200005'
                }
              },
              {
                name: 'Realcho Dark Chocolate 85%',
                description: 'Bold & intense 85% dark chocolate powder that supports heart health and blood pressure.',
                image: 'images/products/Dark Chocolate 85_.jpeg',
                category: 'powder',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/realcho-dark85',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/realcho-dark85/ps--PRO-200006'
                }
              },
              {
                name: 'Chobayoo BiscuitBall',
                description: 'Crunchy biscuit balls coated in chocolate — fun for kids, tasty for adults.',
                image: 'images/products/Biscuitball @100g @60g.jpeg',
                category: 'snack',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/chobayoo-biscuitball',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/chobayoo-biscuitball/ps--PRO-200007'
                }
              },
              {
                name: 'Chobayoo CoffeeBall',
                description: 'Roasted coffee beans with a nutty crunch, coated in rich chocolate.',
                image: 'images/products/Coffeeball @100g @20g.jpeg',
                category: 'snack',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/chobayoo-coffeeball',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/chobayoo-coffeeball/ps--PRO-200008'
                }
              },
              {
                name: 'Belilagi Freeze-Dried Fruits',
                description: 'Crispy fruit chips made at –40°C to lock in natural vitamins & minerals.',
                image: 'images/products/FD Pouch.jpeg',
                category: 'fruit',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/belilagi-freeze-dried',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/belilagi-freeze-dried/ps--PRO-200009'
                }
              },
              {
                name: 'Fruttachips',
                description: 'Crunchy vacuum-fried fruit chips — long-lasting, naturally tasty snacking.',
                image: 'images/products/Fruttachips Mix.jpeg',
                category: 'fruit',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/fruttachips',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/fruttachips/ps--PRO-200010'
                }
              },
              {
                name: 'Chipsoe Snack',
                description: 'Crispy Indonesian harvest: salted egg fish skin, potato, and tempeh chips.',
                image: 'images/products/Potato Chips Pouch.jpeg',
                category: 'snack',
                links: {
                  tokopedia: 'https://www.tokopedia.com/prospero/chipsoe',
                  shopee: 'https://shopee.co.id/prosperofood',
                  blibli: 'https://www.blibli.com/p/chipsoe/ps--PRO-200011'
                }
              }
            ]

            .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
            .map((product, index) => (
              <div 
                key={product.name}
                className={`bg-white-coffee rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up ${
                  selectedCategory === 'all' ? 'flex-none w-full md:w-[calc(25%-0.75rem)] snap-center' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-center gap-3">
                    <a 
                      href={product.links.tokopedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 flex-1 bg-white hover:bg-gray-50 text-green-600 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-center border border-green-500"
                    >
                      <img 
                        src="images/marketplaces/tokopedia.png" 
                        alt="Tokopedia" 
                        className="h-6 object-contain"
                      />
                    </a>
                    <a 
                      href={product.links.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 flex-1 bg-white hover:bg-gray-50 text-orange-600 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-center border border-orange-500"
                    >
                      <img 
                        src="images/marketplaces/shopee.png" 
                        alt="Shopee" 
                        className="h-6 object-contain"
                      />
                    </a>
                    <a 
                      href={product.links.blibli}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 flex-1 bg-white hover:bg-gray-50 text-blue-600 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-center border border-blue-500"
                    >
                      <img 
                        src="images/marketplaces/blibli.png" 
                        alt="Blibli" 
                        className="h-6 object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-van-dyke-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white-coffee mb-6">
                Our Story
              </h2>
              <p className="text-lg text-white-coffee mb-6">
              Founded in 2015, ProsperoFood began with a passion for authentic chocolate. 
              Using 100% local Indonesian ingredients, our first creation a unique chocolate drink powder without milk or 
              artificial sugar quickly became our signature product for true chocolate lovers.

              </p>
              <p className="text-lg text-white-coffee mb-6">
              As time went on, we expanded into new creations such as chocolate snacks and dry snacks, especially during the pandemic. 
              Today, ProsperoFood not only reaches customers across Indonesia through social media, e-commerce, 
              and direct café partnerships but also showcases Indonesian chocolate to the world through international exhibitions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white-coffee">10+</div>
                  <div className="text-beaver">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white-coffee">50+</div>
                  <div className="text-beaver">Unique Flavors</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/3850659/pexels-photo-3850659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chocolate making process"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-van-dyke-brown mb-4">
              Our Certificates
            </h2>
            <p className="text-xl text-white-coffee max-w-3xl mx-auto">
              Quality and safety certifications that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scroll-container">
            {[
              {
                name: "Kosher Certificate",
                image: "images/certificate/kosher/Kosher Valiad 09 Aug 2025_Certificate1728629995_page-0001.jpg",
                description: "Valid until August 09, 2025 - Certifying our products meet kosher dietary requirements"
              },
              {
                name: "BPJPH Certificate - Chocolate Drinks",
                image: "images/certificate/bpjph-coklat/SERTTIFIKAT BPJPH MINUMAN COKLAT_page-0001.jpg",
                description: "Halal certification for our premium chocolate drink products"
              },
              {
                name: "BPJPH Certificate - Chocolate Praline",
                image: "images/certificate/bpjph-praline/SERTTIFIKAT BPJPH COKLAT PRALINE_page-0001.jpg",
                description: "Halal certification for our chocolate praline products"
              },
              {
                name: "NIE - Realcho Original",
                image: "images/certificate/NIE_REALCHO/realcho_page-0001.jpg",
                description: "National Industrial Registration for Realcho Original products"
              },
              {
                name: "NIE - Realcho 125g",
                image: "images/certificate/NIE_PROSPERO REALCHO 125_signed/NIE_EREG307369202200001_signed_page-0001.jpg",
                description: "Product registration certificate for Realcho 125g variant"
              },
              {
                name: "NIE - Realcho 250g",
                image: "images/certificate/NIE_PROSPERO REALCHO 250_signed/NIE_EREG307369202200010_signed_page-0001.jpg",
                description: "Product registration certificate for Realcho 250g variant"
              },
              {
                name: "NIE - Chobayoo Coffee Bean Pouch",
                image: "images/certificate/NIE_CHOBAYOO-BIJI-KOPI-POUCH/NIE_CHOBAYOO BIJI KOPI POUCH_page-0001.jpg",
                description: "Product registration for Chobayoo Coffee Bean Pouch packaging"
              },
              {
                name: "NIE - Chobayoo Coffee Bean Jar",
                image: "images/certificate/NIE_CHOBAYO BIJI KOPI TOPLES_signed/NIE_EREG307369202000015_signed_page-0001.jpg",
                description: "Product registration for Chobayoo Coffee Bean Jar packaging"
              },
              {
                name: "NIE - Chobayoo Biscuit Carton",
                image: "images/certificate/NIE_CHOBAYOO-ISI-BISKUIT-KARTON/NIE_CHOBAYOO ISI BISKUIT KARTON_page-0001.jpg",
                description: "Product registration for Chobayoo Biscuit Carton packaging"
              },
              {
                name: "NIE - Chobayoo Biscuit Jar",
                image: "images/certificate/NIE_CHOBAYO ISI BISKUIT TOPLES _signed/NIE_EREG307369202000014_signed_page-0001.jpg",
                description: "Product registration for Chobayoo Biscuit Jar packaging"
              },
              {
                name: "NIE - Chobayoo Coffee Bean Box",
                image: "images/certificate/NIE_CHOBAYO BIJI KOPI KARTON_signed/NIE_EREG307369202000008_signed_page-0001.jpg",
                description: "Product registration for Chobayoo Coffee Bean Box packaging"
              },
              {
                name: "NIE - Chobayoo Pouch",
                image: "images/certificate/NIE_CHOBAYOO-POUCH/NIE_CHOBAYOO POUCH_page-0001.jpg",
                description: "Product registration for Chobayoo Pouch products"
              },
              {
                name: "NIE - Fruttachips",
                image: "images/certificate/NIE_FRUTTACHIPS_signed/NIE_EREG307369202200024_signed_page-0001.jpg",
                description: "Product registration certificate for Fruttachips products"
              }
            ].map((certificate, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(33.333%-1rem)] lg:w-[500px] snap-center bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-[400px]">
                  <img 
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{certificate.name}</h3>
                  <p className="text-gray-600">{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* Features Section */}
      <section className="py-20 bg-pine-tree">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white-coffee mb-4">
              Why Choose Prospero?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Only the finest Belgian cocoa beans, carefully selected and processed'
              },
              {
                title: 'Healthy',
                description: 'Every piece is made with attention to health and wellness to bring out the best '
              },
              {
                title: 'Sustainable',
                description: 'Ethically sourced ingredients supporting local farming communities'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center bg-white-coffee p-12 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up min-h-[400px] flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-8 flex-1 flex items-center justify-center">
                  <img 
                    src={`images/icons/${feature.title.toLowerCase().replace(' ', '-')}.png`}
                    alt={feature.title}
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <div>
                  <p className="text-pine-tree text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-van-dyke-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white-coffee">
              Get in Touch
            </h2>
            <p className="text-xl text-beaver">
              Ready to experience the finest chocolate? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white-coffee">Call Us</h3>
              <p className="text-beaver">+62 21290003645 </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white-coffee">Email Us</h3>
              <p className="text-beaver">prosperofood.business@gmail.com</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white-coffee">Visit Us</h3>
              <p className="text-beaver">Paramount Marketplace, Ruko Tematik P52<br />Gading Serpong, Tangerang 15810</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pine-tree text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white-coffee">PROSPERO</h3>
            <p className="text-beaver mb-4">
              Crafting chocolate perfection since...
            </p>
            <div className="border-t border-coffee pt-8 mt-8">
              <p className="text-beaver">
                © 2025 Prospero All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
