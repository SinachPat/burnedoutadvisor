export const checkoutPage = {
  title: "Reserve your seat",
  intro: "Tell us who's coming. You'll pay on Stripe's secure page next.",
  detailsTitle: "Your details",
  submit: "Continue to payment",
  paymentNote: "Payments are processed by Stripe. We never see your card number.",
  couponNote: "Have a coupon? Enter it on the payment page.",
  terms: { before: "By continuing you agree to the", link: "Terms and Conditions" },
  summaryTitle: "Order summary",
  totalLabel: "Total",
  cancelled: "Payment wasn't completed, so you haven't been charged. Your seat isn't reserved yet.",
  unavailable: "We couldn't start checkout just now. Try again in a minute.",
} as const;

export const bookedPage = {
  title: "You're booked.",
  paid: (amount: string) => `Your payment of ${amount} went through. Keep this page for your records.`,
  receipt: (email: string) => `Stripe will send your receipt to ${email}.`,
  unpaidTitle: "We haven't received your payment",
  unpaidBody: "If you were charged, contact us and we'll sort it out. Otherwise you can try again.",
  retry: "Back to checkout",
  contact: "Contact us",
} as const;
