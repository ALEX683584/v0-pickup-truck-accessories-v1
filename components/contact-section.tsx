"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check,
  MessageCircle,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  WhatsApp brand icon (lucide-react does not ship brand icons)      */
/*  Filled version — used on the card for brand recognition            */
/* ------------------------------------------------------------------ */
function WhatsAppIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  White hollow (outline) icons for the black confirm buttons         */
/*  Keyed by contact type — all lucide stroke icons, rendered white    */
/* ------------------------------------------------------------------ */
function ConfirmButtonIcon({ type }: { type: ContactType }) {
  const icons: Record<ContactType, React.ReactNode> = {
    email: <Mail className="mr-2 h-4 w-4" strokeWidth={2} />,
    phone: <Phone className="mr-2 h-4 w-4" strokeWidth={2} />,
    whatsapp: <MessageCircle className="mr-2 h-4 w-4" strokeWidth={2} />,
  }
  return <>{icons[type]}</>
}

/* ------------------------------------------------------------------ */
/*  Reusable contact-action card                                       */
/*                                                                    */
/*  Flow:                                                             */
/*    1. Click anywhere on card → immediately copies value to         */
/*       clipboard AND opens a redirect-confirmation dialog           */
/*    2. Dialog shows the value + "Copied!" indicator                  */
/*    3. Black confirm button (white hollow icon) → tracked event     */
/*       This is the secondary confirmation that filters out           */
/*       accidental touches on the card itself                        */
/* ------------------------------------------------------------------ */

type ContactType = "email" | "phone" | "whatsapp"

interface ContactActionCardProps {
  type: ContactType
  icon: React.ReactNode
  title: string
  value: string
  /** Text on the black confirm button, e.g. "Open Email Client" */
  openLabel: string
  /** href that launches the platform — mailto:, tel:, or https://wa.me/... */
  openHref: string
  /** If true, opens in a new tab (used for WhatsApp web) */
  openInNewTab?: boolean
}

function ContactActionCard({
  type,
  icon,
  title,
  value,
  openLabel,
  openHref,
  openInNewTab = false,
}: ContactActionCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  /* ---- click card: copy immediately + open redirect dialog ---- */
  const handleCardClick = useCallback(async () => {
    // 1. Copy to clipboard (instant, no confirmation)
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        // Fallback for older browsers / non-secure contexts
        const ta = document.createElement("textarea")
        ta.value = value
        ta.style.position = "fixed"
        ta.style.opacity = "0"
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
      }
      setCopied(true)
    } catch {
      // silently ignore — user can still read the value and copy manually
    }

    // 2. Open the redirect-confirmation dialog
    setDialogOpen(true)
  }, [value])

  /* ---- confirm redirect: the tracked conversion button ---- */
  const handleConfirmRedirect = useCallback(() => {
    setDialogOpen(false)
    // small delay so the dialog close animation doesn't get cut off
    setTimeout(() => {
      if (openInNewTab) {
        window.open(openHref, "_blank", "noopener,noreferrer")
      } else {
        window.location.href = openHref
      }
    }, 150)
  }, [openHref, openInNewTab])

  /* ---- reset copied state when dialog closes ---- */
  const handleDialogChange = useCallback((open: boolean) => {
    setDialogOpen(open)
    if (!open) {
      setTimeout(() => setCopied(false), 300)
    }
  }, [])

  const eventPrefix = `contact_${type}`

  return (
    <>
      {/* ---------- Card (entire card is clickable) ---------- */}
      <Card className="cursor-pointer transition-shadow hover:shadow-md">
        <CardContent className="p-6">
          <button
            type="button"
            className="flex items-start gap-4 w-full text-left"
            onClick={handleCardClick}
            data-event={`${eventPrefix}_copy`}
            aria-label={`${title}: ${value}`}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground break-all">{value}</p>
            </div>
          </button>
        </CardContent>
      </Card>

      {/* ---------- Redirect confirmation dialog ---------- */}
      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <DialogTitle className="text-xl">{title}</DialogTitle>
            </div>
          </DialogHeader>

          {/* Contact value + copied indicator */}
          <DialogDescription asChild>
            <div className="space-y-2">
              <div className="px-4 py-3 bg-muted rounded-lg">
                <p className="text-base text-foreground font-medium break-all select-all">
                  {value}
                </p>
              </div>
              {copied && (
                <div className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                  <Check className="h-4 w-4" />
                  Copied to clipboard
                </div>
              )}
            </div>
          </DialogDescription>

          {/* Black confirm button with white hollow icon */}
          <Button
            type="button"
            className="w-full bg-black text-white hover:bg-black/90 border-0"
            onClick={handleConfirmRedirect}
            data-event={`${eventPrefix}_confirm`}
            id={`contact-${type}-confirm`}
          >
            <ConfirmButtonIcon type={type} />
            {openLabel}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ================================================================== */
/*  Main contact section                                               */
/* ================================================================== */

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupModel: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<FormErrors>({})
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrors({})
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        if (data.errors) {
          setErrors(data.errors)
        }
        setErrorMessage(data.error || "Failed to send message. Please try again.")
        setStatus("error")
        return
      }

      setStatus("success")
      setFormData({ name: "", email: "", pickupModel: "", phone: "", message: "" })
    } catch (err) {
      console.error("Contact form error:", err)
      setErrorMessage("Network error. Please check your connection and try again.")
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear field-level error when user types
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  /* ---- Contact info constants ---- */
  const EMAIL = "support@tobekin.com"
  const PHONE_DISPLAY = "+86 190-3219-6829"
  const PHONE_HREF = "tel:+8619032196829"
  const WHATSAPP_HREF = "https://wa.me/8619032196829"

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Send a B2B Purchase Inquiry</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tell us about your wholesale, distributor, dealer, or bulk order needs. TOBEKIN supports B2B buyers looking for tonneau covers and pickup truck bed accessories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email — click to copy + confirm redirect */}
            <ContactActionCard
              type="email"
              icon={<Mail className="text-primary" size={24} />}
              title="Email Us"
              value={EMAIL}
              openLabel="Open Email Client"
              openHref={`mailto:${EMAIL}`}
            />

            {/* Phone — click to copy + confirm redirect */}
            <ContactActionCard
              type="phone"
              icon={<Phone className="text-primary" size={24} />}
              title="Call Us"
              value={PHONE_DISPLAY}
              openLabel="Call Now"
              openHref={PHONE_HREF}
            />

            {/* WhatsApp — same number, click to copy + confirm redirect */}
            <ContactActionCard
              type="whatsapp"
              icon={<WhatsAppIcon className="text-[#25D366]" size={24} />}
              title="WhatsApp"
              value={PHONE_DISPLAY}
              openLabel="Open WhatsApp"
              openHref={WHATSAPP_HREF}
              openInNewTab
            />

            {/* Visit Us (no external action) */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Zhejiang, China
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground max-w-md">
                    Your B2B inquiry has been sent successfully. Our team will review your quantity, fitment, and sourcing needs, then get back to you within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && errorMessage && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name / Company *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name or company"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Business Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="buyer@company.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pickupModel" className="block text-sm font-medium text-foreground mb-2">
                        Product / Pickup Model
                      </label>
                      <Input
                        id="pickupModel"
                        name="pickupModel"
                        value={formData.pickupModel}
                        onChange={handleChange}
                        placeholder="e.g. Ford F-150 5.5 ft bed, soft roll-up cover"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      B2B Inquiry Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us your target quantity, market, product type, truck fitments, desired price range, and whether you are a wholesaler, dealer, distributor, Amazon seller, or fleet buyer."
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send B2B Inquiry"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
