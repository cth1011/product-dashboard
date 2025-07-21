import { create } from 'zustand';

export interface Item {
  id: number;
  title: string;
  sku: string;
  price: number;
  status: 'Active' | 'Inactive';
}

interface ItemState {
  items: Item[];
  addItem: (item: Omit<Item, 'id'>) => void;
  toggleStatus: (id: number) => void;
}

export const useProductStore = create<ItemState>((set) => ({
  items: [
    {
      id: 1,
      title: 'Ergonomic Mouse',
      sku: 'SKU001',
      price: 79.99,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Mechanical Keyboard',
      sku: 'SKU002',
      price: 129.99,
      status: 'Inactive',
    },
    { id: 3, title: '4K Webcam', sku: 'SKU003', price: 99.5, status: 'Active' },
  ],
  addItem: (newItem) =>
    set((state) => ({
      items: [...state.items, { ...newItem, id: Date.now() }],
    })),
  toggleStatus: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'Active' ? 'Inactive' : 'Active',
            }
          : item
      ),
    })),
}));
