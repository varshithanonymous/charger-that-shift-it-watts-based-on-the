"use client";
import { motion } from "framer-motion";

const content = {
  "brand_name": "PowerTune",
  "tagline": "Smart Charging, Seamlessly Adapted",
  "hero_headline": "Optimized Power for Every Device.",
  "hero_subheadline": "PowerTune dynamically adjusts wattage to deliver the fastest, safest charge for any gadget\u2014extending battery life and maximizing efficiency.",
  "primary_cta": "Get Started",
  "secondary_cta": "Learn More",
  "features": [
    {
      "title": "Adaptive Power",
      "description": "Automatically shifts wattage to match your device's needs, ensuring optimal charging every time.",
      "icon": "\u26a1"
    },
    {
      "title": "Universal Compatibility",
      "description": "Works flawlessly with phones, laptops, tablets, and more\u2014no matter the brand or model.",
      "icon": "\ud83c\udf0d"
    },
    {
      "title": "Battery Health First",
      "description": "Prevents overheating and overcharging, preserving your device\u2019s battery life for the long haul.",
      "icon": "\ud83d\udd0b"
    },
    {
      "title": "Compact & Portable",
      "description": "Lightweight design makes it perfect for travel, so you stay powered up wherever you go.",
      "icon": "\u2708\ufe0f"
    }
  ],
  "pricing": {
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "features": [
          "Basic features",
          "Community support"
        ]
      },
      {
        "name": "Pro",
        "price": "$29",
        "features": [
          "All features",
          "Priority support",
          "Advanced analytics"
        ]
      }
    ]
  }
};
const design = {
  "colors": {
    "primary": "#addadb",
    "secondary": "#ff6b35",
    "accent": "#f7931e",
    "background": "#ffffff",
    "surface": "#f5f5f5",
    "text": "#0a0a0a"
  },
  "vibe": "warm",
  "fonts": [
    "font-mono",
    "font-sans"
  ],
  "layout": "centered",
  "animation": "minimal",
  "spacing": "spacious",
  "borders": "rounded-md",
  "shadows": "shadow-xl",
  "color_temp": "warm",
  "type_scale": "dramatic",
  "card_style": "elevated",
  "nav_style": "top",
  "cta_placement": "sticky",
  "section_dividers": false,
  "gradient_direction": "to-b",
  "unique_id": "7079"
};

export default function Page() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="font-mono text-2xl font-bold">{content.brand_name}</h1>
        <button className="rounded-md px-6 py-2 font-semibold shadow-xl" 
                style={{background: design.colors.primary}}>
          {content.primary_cta}
        </button>
      </nav>
      
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center py-36">
        <h1 className="font-mono text-6xl font-bold mb-6">
          {content.hero_headline}
        </h1>
        <p className="text-xl mb-8 opacity-80">{content.hero_subheadline}</p>
        <div className="flex gap-16 justify-center">
          <button className="rounded-md shadow-xl px-8 py-4 text-lg font-bold" 
                  style={{background: "#addadb"}}>
            {content.primary_cta}
          </button>
          <button className="rounded-md border px-8 py-4 text-lg">
            {content.secondary_cta}
          </button>
        </div>
      </motion.section>

      
      <section className="max-w-6xl mx-auto py-36">
        <h2 className="font-mono text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-16">
          {content.features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-md shadow-xl p-8"
              style={{background: design.colors.surface}}
            >
              <div className="text-4xl mb-4">{f.icon || '✨'}</div>
              <h3 className="font-mono text-xl font-bold mb-3">{f.title}</h3>
              <p className="opacity-70">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {content.pricing && (
        <section className="max-w-6xl mx-auto py-36">
          <h2 className="font-mono text-4xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {content.pricing.tiers?.map((tier, i) => (
              <div key={i} className="rounded-md shadow-xl p-8" 
                   style={{background: design.colors.surface}}>
                <h3 className="font-mono text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-6">{tier.price}</div>
                <ul className="space-y-2 mb-8">
                  {tier.features?.map((feat, j) => (
                    <li key={j}>✓ {feat}</li>
                  ))}
                </ul>
                <button className="rounded-md w-full py-3 font-semibold shadow-xl" 
                        style={{background: design.colors.primary}}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <footer className="text-center py-12 border-t mt-20 opacity-60">
        <p>© 2024 {content.brand_name} • Generated with AI</p>
        <p className="text-sm mt-2">Design ID: 7079</p>
      </footer>
    </div>
  );
}
