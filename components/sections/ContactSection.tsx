import Image from 'next/image';
import { Button } from '@/components/ui/button';

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactItems = [
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 8200488963',
    color: '#6f8cff',
    actions: [
      { text: 'Call Me', href: 'tel:+918200488963' },
      { text: 'WhatsApp', href: 'https://wa.me/918200488963' },
    ],
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'krunalbaldha1@gmail.com',
    color: '#ec4899',
    actions: [{ text: 'Send a mail', href: 'mailto:krunalbaldha1@gmail.com' }],
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/krunalbaldha',
    color: '#0a66c2',
    actions: [{ text: "Let's Connect", href: 'https://linkedin.com/in/krunalbaldha' }],
  },
] as const;

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-anchor pt-3 pb-10 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-16 px-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[30px] p-5 glass-card-strong sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left: CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] glass-card sm:mb-6 sm:h-14 sm:w-14">
              <Image
                src="/images/icons/connect.svg"
                alt="Connect icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h2
              id="contact-heading"
              className="max-w-[420px] text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#1f2a44] sm:text-[38px] lg:text-[46px]"
            >
              Let&apos;s build something meaningful together.
            </h2>
            <p className="mt-4 max-w-[380px] text-[15px] leading-[1.8] text-[#5b657c]">
              I&apos;m open to new product roles, consulting, and collaborations. Feel free to reach out.
            </p>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-[20px] px-4 py-4 transition-all duration-200 hover:scale-[1.01] glass-card
                           sm:flex-row sm:items-center sm:justify-between sm:rounded-[22px] sm:px-6 sm:py-5"
              >
                {/* Icon + info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] sm:h-11 sm:w-11 sm:rounded-[12px]"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-[#2f3b52] sm:text-[15px]">
                      {item.value}
                    </p>
                    <p className="text-[12px] text-[#7b879d] sm:text-[13px]">{item.label}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:shrink-0 sm:gap-3">
                  {item.actions.map((action) => (
                    <Button
                      key={action.text}
                      variant="darkPremium"
                      size="sm"
                      asChild
                    >
                      <a
                        href={action.href}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {action.text}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
