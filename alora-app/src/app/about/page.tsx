export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Alora</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Alora is a personalized menstrual cycle wellness companion designed to help you understand 
          and optimize your well-being throughout your cycle.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
        <p className="mb-4">
          We believe that your menstrual cycle is more than just a monthly occurrence—it's a vital sign 
          that can provide insights into your overall health. By tracking your cycle and symptoms, 
          Alora helps you identify patterns and provides personalized recommendations for nutrition, 
          exercise, and self-care based on your current cycle phase.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">The Four Cycle Phases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="card border-l-4 border-menstrual">
            <h3 className="text-xl font-medium mb-2">Menstrual Phase</h3>
            <p>The phase when menstruation occurs, typically lasting 3-7 days. Energy levels may be lower, and the body is shedding the uterine lining.</p>
          </div>
          
          <div className="card border-l-4 border-follicular">
            <h3 className="text-xl font-medium mb-2">Follicular Phase</h3>
            <p>Following menstruation until ovulation, lasting about 7-10 days. Energy levels begin to rise, and the body prepares for potential pregnancy.</p>
          </div>
          
          <div className="card border-l-4 border-ovulatory">
            <h3 className="text-xl font-medium mb-2">Ovulatory Phase</h3>
            <p>The release of an egg from the ovary, typically occurring around day 14 of a 28-day cycle. Energy and confidence levels are often at their peak.</p>
          </div>
          
          <div className="card border-l-4 border-luteal">
            <h3 className="text-xl font-medium mb-2">Luteal Phase</h3>
            <p>Following ovulation until the next menstruation, lasting about 10-14 days. Energy may decrease, and the body prepares for either pregnancy or menstruation.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How Alora Helps You</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track your cycle and symptoms in one place</li>
          <li>Receive personalized recommendations based on your current cycle phase</li>
          <li>Learn about how your cycle affects your energy, mood, and physical well-being</li>
          <li>Optimize your nutrition, exercise, and self-care routines throughout your cycle</li>
        </ul>
      </div>
    </div>
  );
}