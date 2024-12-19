export function Testimonials() {
    const testimonials = [
      {
        quote: "StocksHere revolutionized my trading game. It's like stepping into the future!",
        author: "Marty McFly",
        company: "Time Travelers Inc."
      },
      {
        quote: "The 80s-inspired interface brings back memories, but the features are cutting-edge.",
        author: "Alex P. Keaton",
        company: "Yuppie Enterprises"
      },
      {
        quote: "I've never felt more in control of my investments. StocksHere is totally tubular!",
        author: "Madonna",
        company: "Material Girl Investments"
      }
    ]
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Rad Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  