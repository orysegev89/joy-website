import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About</h1>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Joy is an AI production company built by people who have spent their
              careers making commercials. We are powered by AI, and driven by Joy.
            </p>
            
            <p>
              Our team combines decades of experience in commercial production with
              cutting-edge AI technology to create compelling visual stories that
              resonate with audiences.
            </p>
            
            <p>
              We work with brands and agencies to bring their visions to life,
              leveraging the power of artificial intelligence to push the boundaries
              of what's possible in commercial filmmaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
