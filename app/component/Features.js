import { MonitorSmartphone, TrendingUp, Shield } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <MonitorSmartphone className="w-12 h-12 mb-4" />,
      title: "Cross-Platform Trading",
      description: "Trade seamlessly across all your devices with our responsive web and mobile apps."
    },
    {
      icon: <TrendingUp className="w-12 h-12 mb-4" />,
      title: "Real-Time Analytics",
      description: "Get instant insights with our advanced real-time stock analytics and predictive algorithms."
    },
    {
      icon: <Shield className="w-12 h-12 mb-4" />,
      title: "Secure Transactions",
      description: "Rest easy knowing your trades are protected by state-of-the-art encryption and security measures."
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Radical Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 border border-gray-200 rounded-lg shadow-lg">
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

