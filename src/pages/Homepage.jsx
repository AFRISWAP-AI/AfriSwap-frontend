import React from "react";
import { Button } from "./../components/Button";
import { Card, CardContent } from "./../components/Card";
import { Badge } from "./../components/Badge";
import {
  ArrowRight,
  Zap,
  Globe,
  Smartphone,
  MessageSquare,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

import PropTypes from "prop-types";

export default function LandingPage({ onEnterApp }) {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI-Powered Commands",
      description:
        "Just say 'Swap 2 AVAX to SUI' and our AI handles everything. No complex interfaces.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Chain Swaps",
      description:
        "Bridge between 15+ blockchains using Wormhole technology. AVAX, SUI, ETH, BNB and more.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Airtime & Data",
      description:
        "Buy mobile credit across Africa. MTN, Airtel, Safaricom, Vodacom - all supported.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Insights",
      description:
        "AI analyzes market conditions to suggest optimal trading times and save you money.",
    },
  ];

  const stats = [
    { value: "15+", label: "Blockchain Networks" },
    { value: "$2M+", label: "Volume Processed" },
    { value: "50+", label: "African Countries" },
    { value: "99.9%", label: "Uptime" },
  ];

  const testimonials = [
    {
      name: "Kwame Asante",
      location: "Ghana",
      // flag: "🇬🇭",
      text: "Finally, a crypto platform that understands Africa. Buying airtime with USDC is a game-changer!",
    },
    {
      name: "Amina Hassan",
      location: "Nigeria",
      // flag: "🇰🇪",
      text: "The AI assistant makes crypto trading so simple. I can swap tokens just by typing what I want.",
    },
    {
      name: "Thabo Mthembu",
      location: "South Africa",
      // flag: "🇿🇦",
      text: "Best fees I've found for cross-chain swaps. The USSD feature is brilliant for my rural customers.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Africa's First
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                AI DeFi Bridge
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Swap crypto, buy airtime, send money across 15+ blockchains using
              simple English. Built for Africa, powered by Wormhole.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onEnterApp}
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold"
              >
                Launch App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-red-400/30 to-pink-400/30 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700 px-4 py-2">
              Powered by AI
              {/* & Wormhole */}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DeFi Made Simple for Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No more complex interfaces or technical jargon. Just tell our AI
              what you want to do, and we handle the rest across multiple
              blockchains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-orange-200 hover:border-orange-400 transition-colors group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to access DeFi across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect Your Wallet
              </h3>
              <p className="text-gray-600">
                Link your MetaMask, Trust Wallet, or any Web3 wallet. We support
                all major wallets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tell Our AI What You Want
              </h3>
              <p className="text-gray-600">
                Type "Swap 1 ETH to AVAX" or "Buy 1000 naira airtime". Our AI
                understands natural language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                We Handle Everything
              </h3>
              <p className="text-gray-600">
                Cross-chain bridging, optimal routing, airtime delivery - all
                automated with AI insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Africa
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of users already using AfricaBridge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.flag}</div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Bridge the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the DeFi revolution built for Africa. Start swapping, earning,
            and connecting across blockchains today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onEnterApp}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold"
            >
              Launch AfriSwap Ai
              {/* AfricaBridge
              BridgeAfrik */}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full"
            >
              Join Community
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AfriSwap Ai</span>
          </div>

          <div className="text-center text-gray-400">
            <p>© 2025 AfriSwap Ai. Built with ❤️ for Africa.</p>
            <p className="mt-2">• Secured by AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

LandingPage.propTypes = {
  onEnterApp: PropTypes.func.isRequired,
};
