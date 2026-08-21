"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { CheckCircle2, AlertCircle, Loader2, MessageSquareQuote, X } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ScrollInquiryPopup() {
  const [open, setOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

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

  useEffect(() => {
    // Check if dismissed or submitted in this session
    const dismissed = sessionStorage.getItem("tobekin_inquiry_popup_dismissed")
    if (dismissed) {
      setHasTriggered(true)
      return
    }

    const handleScroll = () => {
      if (hasTriggered) return

      // Trigger after scrolling 3 screen heights (2.5 ~ 3 screen heights down)
      const scrollThreshold = window.innerHeight * 2.5
      if (window.scrollY >= scrollThreshold) {
        setOpen(true)
        setHasTriggered(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasTriggered])

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      // Remember dismissal in session so it doesn't pop up again during this browsing session
      sessionStorage.setItem("tobekin_inquiry_popup_dismissed", "true")
    }
  }

  const handleClose = () => {
    handleOpenChange(false)
  }

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
      sessionStorage.setItem("tobekin_inquiry_popup_dismissed", "true")
      setFormData({ name: "", email: "", pickupModel: "", phone: "", message: "" })
    } catch (err) {
      console.error("Popup inquiry form error:", err)
      setErrorMessage("Network error. Please check your connection and try again.")
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-top-[12%] data-[state=closed]:slide-out-to-bottom-[40%]"
      >
        {/* Prominent customized close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close inquiry modal"
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <X size={20} />
        </button>

        <DialogHeader className="text-left space-y-2 pr-6">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <MessageSquareQuote size={18} />
            <span>Direct Wholesale & Sourcing</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Request B2B Quote / Catalog
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Looking for tonneau covers or custom truck accessories? Get factory-direct pricing and catalog within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-green-600" size={28} />
            </div>
            <h4 className="text-xl font-bold text-foreground">Inquiry Received!</h4>
            <p className="text-muted-foreground text-sm max-w-xs">
              Thank you! Our sales team will get back to you with wholesale pricing and specs shortly.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {status === "error" && errorMessage && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-xs">
                <AlertCircle className="shrink-0 mt-0.5" size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="popup-name" className="block text-xs font-medium text-foreground mb-1">
                  Name / Company *
                </label>
                <Input
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name / Company"
                  className={`h-9 text-sm ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-xs font-medium text-foreground mb-1">
                  Business Email *
                </label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="buyer@company.com"
                  className={`h-9 text-sm ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="popup-pickupModel" className="block text-xs font-medium text-foreground mb-1">
                  Product / Pickup Model
                </label>
                <Input
                  id="popup-pickupModel"
                  name="pickupModel"
                  value={formData.pickupModel}
                  onChange={handleChange}
                  placeholder="e.g. F-150 / Tri-Fold"
                  className="h-9 text-sm"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="block text-xs font-medium text-foreground mb-1">
                  Phone / WhatsApp
                </label>
                <Input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="h-9 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-message" className="block text-xs font-medium text-foreground mb-1">
                B2B Inquiry / Requirements *
              </label>
              <Textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Target quantity, delivery country, product type, fitments..."
                className={`text-sm ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-[11px] text-red-600 mt-0.5">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 h-10 font-semibold"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Inquiry...
                </>
              ) : (
                "Get Instant B2B Quote"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
