// Заглушка запроса. Заменить на реальный эндпоинт, когда появится бэкенд.
export function subscribeToNewsletter(email) {
  return new Promise((resolve) => setTimeout(() => resolve({ email }), 900))
}
