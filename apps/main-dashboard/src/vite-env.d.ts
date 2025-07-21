/// <reference types="vite/client" />

declare module 'item_module/ItemModule' {
  const ItemModule: React.ComponentType;
  export default ItemModule;
}

declare module 'item_module/store' {
  import { StoreApi, UseBoundStore } from 'zustand';

  interface Item {
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

  export const useProductStore: UseBoundStore<StoreApi<ItemState>>;
}
