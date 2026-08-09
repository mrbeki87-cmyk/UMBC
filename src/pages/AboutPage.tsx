import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Target, Lightbulb, Zap, LayoutGrid, Terminal, Cpu } from 'lucide-react';
import { courses } from '../data/courses';
import { CourseCard } from '../components/home/CourseCard';
import './AboutPage.css';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Tech University';
  }, []);

  return (
    <div className="about-page">
      {/* 1. ABOUT HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">Shaping the Next Generation of Technology Professionals</h1>
            <p className="about-hero-subtitle">
              We are a technology-focused university dedicated to practical education in programming, web development, computer architecture, networking, and cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="about-section about-who">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Who We Are</h2>
          </div>
          <div className="who-content">
            <p>
              We are a modern technology-focused institution built around one simple belief: technology education should prepare students not only to understand how technology works, but to build, secure, and apply it in the real world.
            </p>
            <p>
              Our curriculum emphasizes practical technical education, providing students with a comprehensive foundation across software, hardware, networking, and cybersecurity. We focus strictly on the core competencies required to succeed in modern technical roles.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR PURPOSE */}
      <section className="about-section about-purpose bg-gray-50">
        <div className="container">
          <div className="purpose-grid">
            <div className="purpose-left">
              <h2 className="section-title">Our Purpose</h2>
              <p>
                Our institution exists to provide focused technology education that connects fundamental knowledge with practical, hands-on skills. We bridge the gap between academic theory and real-world application.
              </p>
            </div>
            <div className="purpose-right">
              <blockquote className="purpose-highlight">
                "Learn the fundamentals. Build practical skills. Prepare for the future."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION & 5. OUR VISION */}
      <section className="about-section about-mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-wrapper">
                <Target size={32} />
              </div>
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-text">
                Our mission is to provide accessible, practical, and focused technology education that equips learners with the knowledge, problem-solving skills, and technical confidence needed to build meaningful solutions in a rapidly changing digital world.
              </p>
              <ul className="mv-list">
                <li>Practical learning</li>
                <li>Technical foundations</li>
                <li>Problem solving</li>
                <li>Responsible technology</li>
                <li>Continuous learning</li>
              </ul>
            </div>
            
            <div className="mv-card vision-card">
              <div className="mv-icon-wrapper">
                <Lightbulb size={32} />
              </div>
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-text">
                To become a trusted center for technology education, empowering a new generation of skilled professionals who can build, connect, and protect the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR VALUES */}
      <section className="about-section about-values bg-gray-50">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Star size={24} /></div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">Maintain high standards in learning, technical practice, and personal growth.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Terminal size={24} /></div>
              <h3 className="value-title">Practicality</h3>
              <p className="value-text">Turn knowledge into practical skills through hands-on learning and real-world problem solving.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><LayoutGrid size={24} /></div>
              <h3 className="value-title">Curiosity</h3>
              <p className="value-text">Encourage students to ask questions, explore new ideas, and continuously learn.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={24} /></div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-text">Promote responsible, ethical, and trustworthy use of technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Zap size={24} /></div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-text">Encourage creative thinking and the development of better solutions to real problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT WE TEACH */}
      <section className="about-section about-courses">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Focused on the Technologies That Matter</h2>
            <p className="section-subtitle">
              Our curriculum is built around five core areas that form a strong foundation for modern technology careers.
            </p>
          </div>
          <div className="courses-grid">
            {courses.map(course => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR APPROACH TO LEARNING */}
      <section className="about-section about-approach bg-primary text-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-white">Learning Built for the Real World</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon"><Cpu size={32} /></div>
              <h3 className="approach-title">Foundations</h3>
              <p className="approach-text">Understand the principles behind modern computing and technology.</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon"><Terminal size={32} /></div>
              <h3 className="approach-title">Practice</h3>
              <p className="approach-text">Apply concepts through practical exercises and technology-focused learning.</p>
            </div>
            <div className="approach-card">
              <div className="approach-icon"><Target size={32} /></div>
              <h3 className="approach-title">Progression</h3>
              <p className="approach-text">Build knowledge step by step and develop skills that support continued growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content center">
            <h2 className="cta-title">Ready to Build Your Future in Technology?</h2>
            <p className="cta-subtitle">Explore our courses and start developing the technical foundation for your future.</p>
            <div className="cta-actions">
              <Link to="/#courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
