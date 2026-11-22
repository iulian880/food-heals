import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle,
  Clock,
  MapPin,
  Quotes,
  WarningCircle,
} from '@phosphor-icons/react';
import {
  DELIVERY_ZONES,
  DINER_NOTES,
  DISHES,
  UI_COPY,
  type DeliveryZoneId,
  type Dish,
  type Lang,
} from '../data/content';

interface DinerNotesAndConciergeProps {
  lang: Lang;
  activeZoneId: DeliveryZoneId;
  onInspectDish: (dish: Dish) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function DinerNotesAndConcierge({
  lang,
  activeZoneId,
  onInspectDish,
}: DinerNotesAndConciergeProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zone, setZone] = useState<DeliveryZoneId>(activeZoneId);
  const [topic, setTopic] = useState<'subscription' | 'corporate' | 'dietary' | 'partnership'>('subscription');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setZone(activeZoneId);
  }, [activeZoneId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = UI_COPY.concierge.errors.name[lang];
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = UI_COPY.concierge.errors.email[lang];
    }
    if (message.trim().length < 10) {
      nextErrors.message = UI_COPY.concierge.errors.message[lang];
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      window.setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 20);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const errorEntries = Object.entries(errors) as [keyof FormErrors, string][];

  return (
    <section className="chalk-surface">
      {/* Diner Notes Editorial Band */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-20 sm:py-24 border-b border-[var(--hairline-chalk)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--hairline-chalk)]">
          <h2 className="font-display text-[2.15rem] sm:text-[2.75rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-chalk)]">
            {UI_COPY.notes.heading[lang]}
          </h2>
          <p className="text-xs font-mono-tabular text-[var(--ink-on-chalk-subtle)] max-w-[46ch]">
            {UI_COPY.notes.illustrativeNotice[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {DINER_NOTES.map((note) => {
            const matchedDish =
              DISHES.find((d) => d.id === note.dishId) ?? DISHES[0];
            return (
              <figure
                key={note.id}
                className="flex flex-col justify-between pt-6 border-t border-[var(--hairline-chalk-strong)]"
              >
                <div>
                  <Quotes
                    size={22}
                    weight="fill"
                    className="text-[var(--surface-lacquer)]"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-4 text-[15px] sm:text-base leading-[1.68] text-[var(--ink-on-chalk)]">
                    “{note.quote[lang]}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 pt-4 border-t border-[var(--hairline-chalk)] flex items-end justify-between gap-3">
                  <div>
                    <div className="font-semibold text-sm text-[var(--ink-on-chalk)]">
                      {note.author}
                    </div>
                    <div className="font-mono-tabular text-[11px] text-[var(--ink-on-chalk-subtle)]">
                      {note.zone}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onInspectDish(matchedDish)}
                    className="text-right cursor-pointer group"
                  >
                    <span className="block font-mono-tabular text-[10px] uppercase tracking-[0.06em] text-[var(--ink-on-chalk-subtle)]">
                      {UI_COPY.notes.favoriteLabel[lang]}
                    </span>
                    <span className="text-xs font-medium text-[var(--accent-jade)] group-hover:underline">
                      {note.favoriteDish[lang]}
                    </span>
                  </button>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Kitchen Concierge & Validated Contact Form */}
      <div
        id="contact"
        className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-20 sm:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Concierge Info */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-[2.15rem] sm:text-[2.85rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-chalk)]">
              {UI_COPY.concierge.heading[lang]}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-on-chalk-muted)] max-w-[54ch]">
              {UI_COPY.concierge.lead[lang]}
            </p>

            <div className="mt-8 border-t border-[var(--hairline-chalk-strong)] divide-y divide-[var(--hairline-chalk)] text-sm">
              <div className="py-4 flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[var(--accent-jade)] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <span className="block font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-chalk-subtle)]">
                    {UI_COPY.footer.kitchenHeading[lang]}
                  </span>
                  <span className="mt-1 block font-medium text-[var(--ink-on-chalk)]">
                    {UI_COPY.footer.address[lang]}
                  </span>
                </div>
              </div>

              <div className="py-4 flex items-start gap-3">
                <Clock
                  size={18}
                  className="text-[var(--accent-jade)] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <span className="block font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-chalk-subtle)]">
                    {UI_COPY.zones.hoursLabel[lang]}
                  </span>
                  <span className="mt-1 block font-medium text-[var(--ink-on-chalk)]">
                    {UI_COPY.footer.hours[lang]} · Timișoara, Giroc, Dumbrăvița, Moșnița, Ghiroda
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7 border border-[var(--hairline-chalk-strong)] rounded-[var(--radius-sharp)] bg-[var(--surface-chalk-card)] p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="py-8 text-center sm:text-left"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-jade-light)] text-[var(--accent-jade)]">
                  <CheckCircle size={26} weight="fill" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--ink-on-chalk)]">
                  {UI_COPY.concierge.successTitle[lang]}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[var(--ink-on-chalk-muted)] max-w-[54ch]">
                  {UI_COPY.concierge.successBody[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 inline-flex items-center px-5 py-2.5 rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)] text-sm font-semibold cursor-pointer hover:bg-[#3a0f1e] transition-colors"
                >
                  {UI_COPY.concierge.sendAnother[lang]}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {errorEntries.length > 0 && (
                  <div
                    ref={errorSummaryRef}
                    tabIndex={-1}
                    role="alert"
                    className="p-4 rounded-[var(--radius-sharp)] border border-[var(--accent-danger)] bg-[var(--accent-danger-soft)] text-[var(--accent-danger)] text-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <WarningCircle size={18} weight="fill" aria-hidden="true" />
                      <span>{UI_COPY.concierge.errorSummaryTitle[lang]}</span>
                    </div>
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      {errorEntries.map(([field, msg]) => (
                        <li key={field}>
                          <a
                            href={`#concierge-${field}`}
                            className="underline font-medium text-[var(--accent-danger)]"
                          >
                            {msg}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="concierge-name"
                      className="block text-xs font-mono-tabular uppercase tracking-[0.06em] text-[var(--ink-on-chalk-muted)] mb-1.5"
                    >
                      {UI_COPY.concierge.nameLabel[lang]}
                    </label>
                    <input
                      id="concierge-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={UI_COPY.concierge.namePlaceholder[lang]}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'concierge-name-err' : undefined}
                      className={`w-full rounded-[var(--radius-sharp)] border px-3.5 py-2.5 text-sm bg-white text-[var(--ink-on-chalk)] placeholder:text-[#7c656b] ${
                        errors.name
                          ? 'border-[var(--accent-danger)]'
                          : 'border-[var(--hairline-chalk-strong)] focus:border-[var(--surface-lacquer)]'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="concierge-name-err"
                        className="mt-1.5 text-xs font-medium text-[var(--accent-danger)]"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="concierge-email"
                      className="block text-xs font-mono-tabular uppercase tracking-[0.06em] text-[var(--ink-on-chalk-muted)] mb-1.5"
                    >
                      {UI_COPY.concierge.emailLabel[lang]}
                    </label>
                    <input
                      id="concierge-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder={UI_COPY.concierge.emailPlaceholder[lang]}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'concierge-email-err' : undefined}
                      className={`w-full rounded-[var(--radius-sharp)] border px-3.5 py-2.5 text-sm bg-white text-[var(--ink-on-chalk)] placeholder:text-[#7c656b] ${
                        errors.email
                          ? 'border-[var(--accent-danger)]'
                          : 'border-[var(--hairline-chalk-strong)] focus:border-[var(--surface-lacquer)]'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="concierge-email-err"
                        className="mt-1.5 text-xs font-medium text-[var(--accent-danger)]"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="concierge-zone"
                      className="block text-xs font-mono-tabular uppercase tracking-[0.06em] text-[var(--ink-on-chalk-muted)] mb-1.5"
                    >
                      {UI_COPY.concierge.zoneLabel[lang]}
                    </label>
                    <select
                      id="concierge-zone"
                      value={zone}
                      onChange={(e) => setZone(e.target.value as DeliveryZoneId)}
                      className="w-full rounded-[var(--radius-sharp)] border border-[var(--hairline-chalk-strong)] px-3.5 py-2.5 text-sm bg-white text-[var(--ink-on-chalk)] cursor-pointer"
                    >
                      {DELIVERY_ZONES.map((z) => (
                        <option key={z.id} value={z.id}>
                          {z.name} ({z.etaMinutes} min)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="concierge-topic"
                      className="block text-xs font-mono-tabular uppercase tracking-[0.06em] text-[var(--ink-on-chalk-muted)] mb-1.5"
                    >
                      {UI_COPY.concierge.topicLabel[lang]}
                    </label>
                    <select
                      id="concierge-topic"
                      value={topic}
                      onChange={(e) =>
                        setTopic(
                          e.target.value as
                            | 'subscription'
                            | 'corporate'
                            | 'dietary'
                            | 'partnership'
                        )
                      }
                      className="w-full rounded-[var(--radius-sharp)] border border-[var(--hairline-chalk-strong)] px-3.5 py-2.5 text-sm bg-white text-[var(--ink-on-chalk)] cursor-pointer"
                    >
                      <option value="subscription">
                        {UI_COPY.concierge.topics.subscription[lang]}
                      </option>
                      <option value="corporate">
                        {UI_COPY.concierge.topics.corporate[lang]}
                      </option>
                      <option value="dietary">
                        {UI_COPY.concierge.topics.dietary[lang]}
                      </option>
                      <option value="partnership">
                        {UI_COPY.concierge.topics.partnership[lang]}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="concierge-message"
                    className="block text-xs font-mono-tabular uppercase tracking-[0.06em] text-[var(--ink-on-chalk-muted)] mb-1.5"
                  >
                    {UI_COPY.concierge.messageLabel[lang]}
                  </label>
                  <textarea
                    id="concierge-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder={UI_COPY.concierge.messagePlaceholder[lang]}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'concierge-message-err' : undefined}
                    className={`w-full rounded-[var(--radius-sharp)] border px-3.5 py-2.5 text-sm bg-white text-[var(--ink-on-chalk)] placeholder:text-[#7c656b] resize-y ${
                      errors.message
                        ? 'border-[var(--accent-danger)]'
                        : 'border-[var(--hairline-chalk-strong)] focus:border-[var(--surface-lacquer)]'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="concierge-message-err"
                      className="mt-1.5 text-xs font-medium text-[var(--accent-danger)]"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <label className="flex items-start gap-2.5 text-sm text-[var(--ink-on-chalk-muted)] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 accent-[#260811] w-4 h-4 cursor-pointer"
                  />
                  <span>{UI_COPY.concierge.newsletterLabel[lang]}</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] hover:bg-[#3a0f1e] text-[var(--ink-on-lacquer)] font-semibold text-sm px-7 py-3.5 transition-colors cursor-pointer"
                >
                  {UI_COPY.concierge.submitBtn[lang]}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
