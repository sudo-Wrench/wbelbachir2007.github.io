import React, { useState, useEffect } from 'react';
import { Shield, Target, Lock, Code, Globe, Mail, Github, Linkedin, ChevronDown, Terminal, Zap, Eye, Users, Award, Wifi, Database, Bug, Search, Key, Server } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Penetration Testing', level: 95, icon: Target },
    { name: 'Vulnerability Assessment', level: 90, icon: Eye },
    { name: 'Social Engineering', level: 85, icon: Users },
    { name: 'Network Security', level: 92, icon: Globe },
    { name: 'Web Application Security', level: 88, icon: Code },
    { name: 'Digital Forensics', level: 80, icon: Shield }
  ];

  const hackingTools = [
    { name: 'Metasploit', level: 95, icon: Target, category: 'Exploitation Framework' },
    { name: 'Burp Suite', level: 92, icon: Bug, category: 'Web App Security' },
    { name: 'Nmap', level: 98, icon: Search, category: 'Network Discovery' },
    { name: 'Wireshark', level: 88, icon: Wifi, category: 'Network Analysis' },
    { name: 'SQLMap', level: 85, icon: Database, category: 'SQL Injection' },
    { name: 'John the Ripper', level: 90, icon: Key, category: 'Password Cracking' },
    { name: 'Cobalt Strike', level: 87, icon: Shield, category: 'Red Team Operations' },
    { name: 'Hashcat', level: 83, icon: Lock, category: 'Hash Cracking' },
    { name: 'Aircrack-ng', level: 80, icon: Wifi, category: 'Wireless Security' },
    { name: 'Nikto', level: 85, icon: Server, category: 'Web Vulnerability Scanner' },
    { name: 'OWASP ZAP', level: 88, icon: Zap, category: 'Security Testing' },
    { name: 'Mimikatz', level: 82, icon: Key, category: 'Credential Extraction' }
  ];

  const projects = [
    {
      title: 'Enterprise Network Penetration Test',
      description: 'Comprehensive security assessment of a Fortune 500 company\'s network infrastructure, identifying critical vulnerabilities and providing remediation strategies.',
      technologies: ['Nmap', 'Metasploit', 'Burp Suite', 'Wireshark'],
      impact: 'Prevented potential $2M data breach'
    },
    {
      title: 'Web Application Security Audit',
      description: 'In-depth security analysis of a financial services web application, uncovering SQL injection and XSS vulnerabilities.',
      technologies: ['OWASP ZAP', 'SQLMap', 'Burp Suite', 'Custom Scripts'],
      impact: 'Secured 100K+ user accounts'
    },
    {
      title: 'Red Team Engagement',
      description: 'Simulated advanced persistent threat (APT) attack against a healthcare organization to test their incident response capabilities.',
      technologies: ['Cobalt Strike', 'Empire', 'Mimikatz', 'PowerShell'],
      impact: 'Improved security posture by 40%'
    }
  ];

  const certifications = [
    { name: 'OSCP', fullName: 'Offensive Security Certified Professional', year: '2023' },
    { name: 'CEH', fullName: 'Certified Ethical Hacker', year: '2022' },
    { name: 'CISSP', fullName: 'Certified Information Systems Security Professional', year: '2021' },
    { name: 'GCIH', fullName: 'GIAC Certified Incident Handler', year: '2020' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">WB</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'tools', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-red-400 transition-colors ${
                    activeSection === section ? 'text-red-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section === 'tools' ? 'Hacking Tools' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 opacity-10 transform rotate-12">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="h-16 w-16 border border-red-500/20 rounded-lg"></div>
            ))}
          </div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-6">
            <Terminal className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Wassim Belbachir
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
            <span className="text-red-400">&gt;</span> Offensive Security Specialist
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Penetration tester and ethical hacker dedicated to identifying vulnerabilities 
            and strengthening digital defenses through offensive security methodologies.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Get In Touch</span>
            </a>
            <a href="#projects" className="border border-red-600 hover:bg-red-600/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Projects
            </a>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-red-400 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold">Offensive Security Expert</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 5 years of experience in cybersecurity, I specialize in offensive security practices 
                  including penetration testing, vulnerability assessments, and red team operations. My expertise 
                  lies in identifying and exploiting security weaknesses to help organizations strengthen their defenses.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-900 p-3 rounded">
                    <div className="text-red-400 font-semibold">Experience</div>
                    <div>5+ Years</div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded">
                    <div className="text-red-400 font-semibold">Penetration Tests</div>
                    <div>200+ Completed</div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded">
                    <div className="text-red-400 font-semibold">Vulnerabilities</div>
                    <div>1000+ Identified</div>
                  </div>
                  <div className="bg-gray-900 p-3 rounded">
                    <div className="text-red-400 font-semibold">Clients</div>
                    <div>50+ Organizations</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-3 text-red-400">Core Competencies</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <span>Advanced Penetration Testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-red-500" />
                    <span>Vulnerability Research & Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-red-500" />
                    <span>Social Engineering Assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-red-500" />
                    <span>Custom Exploit Development</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-3 text-red-400">Industries Served</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div>• Financial Services</div>
                  <div>• Healthcare</div>
                  <div>• Government</div>
                  <div>• Technology</div>
                  <div>• E-commerce</div>
                  <div>• Manufacturing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4">
                  <skill.icon className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hacking Tools Section */}
      <section id="tools" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hacking Tools Arsenal</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mastery of industry-standard penetration testing and offensive security tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackingTools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="bg-red-500/10 p-2 rounded-lg mr-3 group-hover:bg-red-500/20 transition-colors">
                    <tool.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <p className="text-xs text-gray-400">{tool.category}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Proficiency</span>
                    <span className="text-sm font-mono text-red-400">{tool.level}%</span>
                  </div>
                  
                  {/* Charging Bar Effect */}
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full transition-all duration-2000 ease-out relative"
                        style={{ width: `${tool.level}%` }}
                      >
                        {/* Charging animation effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        {/* Glowing effect */}
                        <div className="absolute inset-0 bg-red-400/30 blur-sm rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Terminal-style percentage display */}
                    <div className="flex justify-end mt-1">
                      <span className="text-xs font-mono text-green-400">
                        [{Array.from({ length: Math.floor(tool.level / 10) }).map((_, i) => '█').join('')}
                        {Array.from({ length: 10 - Math.floor(tool.level / 10) }).map((_, i) => '░').join('')}]
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Skill level indicator */}
                <div className="flex justify-between items-center text-xs">
                  <span className={`px-2 py-1 rounded-full font-semibold ${
                    tool.level >= 90 ? 'bg-green-500/20 text-green-400' :
                    tool.level >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tool.level >= 90 ? 'Expert' : tool.level >= 80 ? 'Advanced' : 'Proficient'}
                  </span>
                  <span className="text-gray-500 font-mono">
                    {tool.level >= 90 ? '🔥' : tool.level >= 80 ? '⚡' : '💪'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools Summary */}
          <div className="mt-12 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-red-400">Arsenal Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-500">{hackingTools.length}</div>
                  <div className="text-sm text-gray-400">Tools Mastered</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {Math.round(hackingTools.reduce((acc, tool) => acc + tool.level, 0) / hackingTools.length)}%
                  </div>
                  <div className="text-sm text-gray-400">Avg. Proficiency</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">
                    {hackingTools.filter(tool => tool.level >= 90).length}
                  </div>
                  <div className="text-sm text-gray-400">Expert Level</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center text-green-400 text-sm">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Impact: {project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-red-500/50 transition-colors">
                <div className="bg-red-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{cert.fullName}</p>
                <p className="text-gray-400 text-xs">Certified {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
              <div className="text-center mb-8">
                <p className="text-gray-300 text-lg mb-6">
                  Ready to strengthen your organization's security posture? Let's discuss how I can help 
                  identify and address your cybersecurity vulnerabilities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a href="mailto:wassim.belbachir@email.com" className="bg-gray-900 p-6 rounded-lg border border-gray-600 hover:border-red-500 transition-colors text-center group">
                  <Mail className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">wassim.belbachir@email.com</p>
                </a>
                
                <a href="https://github.com/wassimbelbachir" className="bg-gray-900 p-6 rounded-lg border border-gray-600 hover:border-red-500 transition-colors text-center group">
                  <Github className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400 text-sm">@wassimbelbachir</p>
                </a>
                
                <a href="https://linkedin.com/in/wassimbelbachir" className="bg-gray-900 p-6 rounded-lg border border-gray-600 hover:border-red-500 transition-colors text-center group">
                  <Linkedin className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">/in/wassimbelbachir</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Wassim Belbachir</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Wassim Belbachir. Securing the digital world, one vulnerability at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;