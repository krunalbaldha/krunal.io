const contactItems = [
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 8200488963',
    actions: [
      { text: 'Call Me',   href: 'tel:+918200488963' },
      { text: 'WhatsApp',  href: 'https://wa.me/918200488963' },
    ],
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'krunalbaldha1@gmail.com',
    actions: [{ text: 'Send a mail', href: 'mailto:krunalbaldha1@gmail.com' }],
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/krunalbaldha',
    actions: [{ text: "Let's Connect", href: 'https://linkedin.com/in/krunalbaldha' }],
  },
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-16 sm:px-5 md:pb-20 lg:px-6">
      <div className="mx-auto max-w-[1200px] rounded-[30px] p-5 glass-card-strong sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left: CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] glass-card sm:mb-6 sm:h-14 sm:w-14">
              <img
                src="/images/icons/connect.svg"
                alt="Connect icon"
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              />
            </div>
            <h2 className="max-w-[420px] text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1f2a44] sm:text-[44px] lg:text-[54px]">
              Let&apos;s build something meaningful together.
            </h2>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-[20px] px-4 py-4 glass-card
                           sm:flex-row sm:items-center sm:justify-between sm:rounded-[22px] sm:px-6 sm:py-5"
              >
                {/* Icon + info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] glass-badge text-[#6f8cff] sm:h-11 sm:w-11 sm:rounded-[12px]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-medium text-[#2f3b52] sm:text-[16px]">
                      {item.value}
                    </p>
                    <p className="text-[12px] text-[#7b879d] sm:text-[13px]">{item.label}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 sm:shrink-0 sm:gap-3">
                  {item.actions.map((action) => (
                    <a
                      key={action.text}
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="rounded-[12px] bg-[#1f2937] px-4 py-2 text-[13px] font-medium
                                 text-white shadow-[0_4px_0_rgba(15,20,35,0.25)] transition
                                 hover:-translate-y-0.5 sm:rounded-[14px] sm:text-[14px]"
                    >
                      {action.text}
                    </a>
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
