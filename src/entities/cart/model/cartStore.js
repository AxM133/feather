const STORAGE_KEY = 'feather:cart'

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

const write = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // хранилище недоступно (приватный режим и т.п.) — корзина живёт только в памяти
  }
}

let items = read()
const listeners = new Set()

const emit = () => {
  write(items)
  listeners.forEach((listener) => listener())
}

export const cartStore = {
  subscribe(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },
  getSnapshot() {
    return items
  },
  add(product) {
    const existing = items.find((item) => item.id === product.id)
    items = existing
      ? items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      : [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }]
    emit()
  },
}
