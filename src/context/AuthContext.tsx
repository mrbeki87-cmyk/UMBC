import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check sessionStorage on mount
    const demoAuth = sessionStorage.getItem('demoAuthenticated');
    const email = sessionStorage.getItem('demoEmail');
    if (demoAuth === 'true') {
      setIsAuthenticated(true);
      setUserEmail(email);
    }
  }, []);

  const login = (email: string) => {
    sessionStorage.setItem('demoAuthenticated', 'true');
    sessionStorage.setItem('demoEmail', email);
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const logout = () => {
    sessionStorage.removeItem('demoAuthenticated');
    sessionStorage.removeItem('demoEmail');
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
