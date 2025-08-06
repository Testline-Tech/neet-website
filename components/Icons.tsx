
import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#4F46E5"/>
        <path d="M12 12H28V16H12V12Z" fill="white"/>
        <path d="M12 24H28V28H12V24Z" fill="white"/>
        <path d="M12 18H20V22H12V18Z" fill="white"/>
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const LightningIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
);

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.586l-2.29-2.29a3.75 3.75 0 0 0-5.304-5.304L7.5 15.25l-2.25 2.25a9.094 9.094 0 0 0 3.742-.586M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

export const FilmIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
    </svg>
);

export const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-5.112-4.11a2.25 2.25 0 0 0-2.818.156l-2.016 1.73c-.563.484-1.353.64-2.028.324A14.204 14.204 0 0 1 4.42 8.358c-.316-.675-.16-1.465.324-2.028l1.73-2.016a2.25 2.25 0 0 0 .156-2.818L5.348 2.802A2.25 2.25 0 0 0 4.998 2.25H3.628a2.25 2.25 0 0 0-2.25 2.25v1.875Z" />
    </svg>
);

export const LockClosedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.385 5.043a15.998 15.998 0 00-1.622-3.385m-5.043-.025a15.998 15.998 0 01-3.388-1.621m7.704 4.242a3 3 0 00-1.128 5.78 2.25 2.25 0 01-2.245 2.4 4.5 4.5 0 002.245-8.4c.399 0 .78.078 1.128.22z" />
    </svg>
);

export const SmartphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H5.25A2.25 2.25 0 003 3.75v16.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 20.25V3.75A2.25 2.25 0 0018.75 1.5m-3.75 0V6.75m0 0L12 3.75m3 3L12 3.75m0 12.75v3.75m0 0h-3.75m3.75 0h3.75" />
    </svg>
);

export const CalendarDaysIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6667 32C8.52 32 5.72 30.7733 3.46667 28.5333C1.21333 26.2933 0 23.4933 0 20.2667C0 16.32 1.10667 12.64 3.32 9.41333C5.53333 6.18667 8.70667 3.12 12.64 0.426667L16.2133 4.8C13.2267 6.61333 11.0267 8.64 9.81333 10.6667C8.6 12.6933 8 14.8267 8 17.0667H11.6667V32ZM33.3333 32C30.1867 32 27.3867 30.7733 25.1333 28.5333C22.88 26.2933 21.6667 23.4933 21.6667 20.2667C21.6667 16.32 22.7733 12.64 25 9.41333C27.1467 6.18667 30.32 3.12 34.3067 0.426667L37.88 4.8C34.8933 6.61333 32.6933 8.64 31.48 10.6667C30.2667 12.6933 29.6667 14.8267 29.6667 17.0667H33.3333V32Z" fill="currentColor"/>
    </svg>
);

export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.1 0 183.1 0 256.4c0 45.5 13.7 91.4 39.6 122.9 22.9 28.6 50.6 54.7 85.8 54.7 25.4 0 49.4-18.4 76.4-18.4 26.9 0 52.2 18.4 78.3 18.4 35.5 0 61.4-28.3 78.2-56.1-33.1-23.2-50.8-54-50.8-90.4zM245.2 105.7c15.4-17.5 24.3-40.3 23.4-64-24.3 1.3-51.1 15.6-66.5 32.4-13.7 15.6-28.2 38.3-24.9 61.4C198.8 139.6 228.6 124.4 245.2 105.7z"/>
    </svg>
);

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M325.3 234.3L104.6 13l-88.2 88.2 226.6 226.6-114.9 114.9s28.2 28.2 55.3 55.3l137.2-137.2 88.2 88.2s28.2-28.2 55.3-55.3L325.3 234.3z"/>
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7.1-4.2-73.3 19.3 19.7-71.8-4.6-7.4c-18.7-29.9-28.7-65.5-28.7-102.3 0-108.6 88.4-197 197-197s197 88.4 197 197-88.4 197-197 197zm108.9-158.9c-5.8-2.9-34.2-16.9-39.6-18.8-5.4-1.9-9.4-2.9-13.3 2.9-3.9 5.8-15.1 18.8-18.5 22.7-3.4 3.9-6.9 4.4-12.6 1.5-5.8-2.9-24.4-9-46.6-28.8-17.3-15.4-29-34.4-32.5-40.2-3.4-5.8-.4-9 2.5-11.8 2.6-2.5 5.8-6.9 8.7-10.3 2.9-3.4 3.9-5.8 5.8-9.8 1.9-3.9.9-7.3-1-10.3-1.9-2.9-13.3-31.9-18.2-43.7-4.9-11.8-9.8-10.3-13.7-10.3-3.9 0-8.3-.5-12.6-.5-4.4 0-11.3 1.5-17 7.3-5.8 5.8-22.1 21.8-22.1 53.3 0 31.5 22.6 61.9 25.8 66.2 3.1 4.4 44.5 68.3 108.2 95.3 15.2 6.4 27.2 10.2 36.4 13.2 14.3 4.8 27.3 4.2 37.5 2.5 11.3-1.9 34.2-14 39-27.5 4.9-13.5 4.9-25 3.4-27.5z"/>
    </svg>
);

export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l4.25-6.5a1.012 1.012 0 0 1 1.601-.312l4.25 6.5a1.012 1.012 0 0 1 0 .639l-4.25 6.5a1.012 1.012 0 0 1-1.601-.312l-4.25-6.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);