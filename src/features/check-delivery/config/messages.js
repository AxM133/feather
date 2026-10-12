export const deliveryMessages = {
  title: 'Check if we deliver',
  description: 'Enter your ZIP code and we will let you know if Feather is available in your area.',
  placeholder: 'ZIP code',
  submit: 'Check',
  invalid: 'Please enter a 5-digit ZIP code.',
  available: (city) => `Great news! We deliver to ${city}.`,
  unavailable: "We don't deliver there yet — but we're growing fast.",
}
