import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';



const About = () => {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 transition-colors">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white">About Me</h1>
            <div className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto">
              <Image
                src="/assets/avatar.svg"
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full object-cover shadow-lg ring-2 ring-blue-500/20 dark:ring-blue-400/30"
              />
            </div>
          </div>
  
          {/* Bio Section */}
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">Hello, I'm Aayush Budhathoki</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm a dedicated web developer with a passion for full-stack development, always eager to explore new technologies.
                I love building dynamic web apps, especially in the MERN stack. When I’m not coding, you can find me catching up on
                the latest TV shows or refining my skills on side projects.
              </p>
            </CardContent>
          </Card>
  
          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Frontend Development', 'Backend Development'].map((skill) => (
              <Card key={skill} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium dark:text-white text-sm sm:text-base">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default About;
