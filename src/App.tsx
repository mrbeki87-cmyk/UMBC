import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { CourseDetail } from './pages/CourseDetail';
import { PaymentMethodPage } from './pages/PaymentMethodPage';
import { CardCheckoutPage } from './pages/checkout/CardCheckoutPage';
import { PayPalCheckoutPage } from './pages/checkout/PayPalCheckoutPage';
import { ApplePayCheckoutPage } from './pages/checkout/ApplePayCheckoutPage';
import { CheckoutSuccessPage } from './pages/checkout/CheckoutSuccessPage';
import { StudentCoursesPage } from './pages/StudentCoursesPage';
import { LoginPage } from './pages/auth/LoginPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
// Placeholder component for routes that aren't implemented yet
const Placeholder = ({ title }: { title: string }) => (
  <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p style={{ marginTop: '1rem', color: 'var(--color-gray-500)' }}>This page will be implemented in a future part.</p>
    </div>
  </div>
);

const MainLayout = () => (
  <>
    <AnnouncementBar />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-wrapper">
          <Routes>
            {/* Main website layout with header and footer */}
            <Route element={<MainLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<Placeholder title="Sign Up" />} />
              
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/courses/:slug" element={<CourseDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/student/courses" element={<StudentCoursesPage />} />
              </Route>
              
              <Route path="*" element={<Placeholder title="Page Not Found" />} />
            </Route>
            
            {/* Checkout layout (isolated, no main header/footer) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout/payment-method" element={<PaymentMethodPage />} />
              <Route path="/checkout/card" element={<CardCheckoutPage />} />
              <Route path="/checkout/paypal" element={<PayPalCheckoutPage />} />
              <Route path="/checkout/apple-pay" element={<ApplePayCheckoutPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
