import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin, GraduationCap, BookOpen, Users, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './ContactPage.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What courses does the university offer?",
    answer: "We currently focus on five core technology areas: Introduction to Programming, Web Development, Computer Architecture, Networking, and Cybersecurity."
  },
  {
    question: "How do I enroll in a course?",
    answer: "Browse our courses, select the course you are interested in, review the course details, and follow the enrollment process."
  },
  {
    question: "Can I access my course after enrollment?",
    answer: "After completing the enrollment process, you can access your available course from the My Courses area."
  },
  {
    question: "How can I contact the university?",
    answer: "You can contact us using the contact information or message form on this page."
  },
  {
    question: "Where can I find my course materials?",
    answer: "Enrolled students can access their available course materials through the My Courses section."
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Tech University';
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    if (isSuccess) setIsSuccess(false);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* 1. CONTACT HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              Have a question about our courses, enrollment, or learning experience? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION & FORM */}
      <section className="contact-section contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left: Info */}
            <div className="contact-info-wrapper">
              <h2 className="section-title">Get in Touch</h2>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h3 className="info-title">General Inquiries</h3>
                    <p className="info-text">admissions@techuniversity.edu</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h3 className="info-title">Phone</h3>
                    <p className="info-text">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon"><Clock size={24} /></div>
                  <div>
                    <h3 className="info-title">Office Hours</h3>
                    <p className="info-text">Monday – Friday<br />9:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h3 className="info-title">Location</h3>
                    <p className="info-text">University Campus<br />Technology District</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={errors.subject ? 'input-error' : ''}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="How can we help you?"
                    rows={5}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                {isSuccess && (
                  <div className="success-message">
                    Your message has been submitted successfully.
                  </div>
                )}
                
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. HOW CAN WE HELP? */}
      <section className="contact-section bg-gray-50">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">How Can We Help?</h2>
          </div>
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon"><GraduationCap size={28} /></div>
              <h3 className="help-title">Admissions</h3>
              <p className="help-text">Questions about enrollment, course availability, and getting started.</p>
            </div>
            <div className="help-card">
              <div className="help-icon"><BookOpen size={28} /></div>
              <h3 className="help-title">Courses</h3>
              <p className="help-text">Questions about our technology courses and learning materials.</p>
            </div>
            <div className="help-card">
              <div className="help-icon"><Users size={28} /></div>
              <h3 className="help-title">Student Support</h3>
              <p className="help-text">Help with accessing courses and student resources.</p>
            </div>
            <div className="help-card">
              <div className="help-icon"><HelpCircle size={28} /></div>
              <h3 className="help-title">General Inquiries</h3>
              <p className="help-text">For questions that do not fit the categories above.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="contact-section faq-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className="faq-answer-wrapper" style={{ height: openFaqIndex === index ? 'auto' : 0 }}>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content center">
            <h2 className="cta-title">Start Your Technology Journey</h2>
            <p className="cta-subtitle">Explore our courses and discover a focused path toward building practical technology skills.</p>
            <div className="cta-actions">
              <Link to="/#courses" className="btn btn-primary">Explore Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
