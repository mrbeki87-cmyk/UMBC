import { useState, useEffect } from 'react';
import { siteConfig } from '../../config';
import './AnnouncementBar.css';

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(siteConfig.countdownTarget).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(interval);
      } else {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        setTimeLeft({
          months: Math.floor(totalDays / 30),
          days: totalDays % 30,
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isExpired) {
    return (
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span className="announcement-text">Enrollment for this cohort has closed. Join the waitlist!</span>
        </div>
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <span className="announcement-text">ENROLLMENT CLOSED — NEXT BATCH IN 6 MONTHS</span>
        <div className="announcement-timer">
          <span className="timer-label">Next batch in</span>
          <div className="timer-blocks">
            <div className="timer-block">{formatNumber(timeLeft.months)}<span className="timer-unit">mo</span></div>
            <span className="timer-sep">:</span>
            <div className="timer-block">{formatNumber(timeLeft.days)}<span className="timer-unit">d</span></div>
            <span className="timer-sep">:</span>
            <div className="timer-block">{formatNumber(timeLeft.hours)}<span className="timer-unit">h</span></div>
            <span className="timer-sep">:</span>
            <div className="timer-block">{formatNumber(timeLeft.minutes)}<span className="timer-unit">m</span></div>
            <span className="timer-sep">:</span>
            <div className="timer-block">{formatNumber(timeLeft.seconds)}<span className="timer-unit">s</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
