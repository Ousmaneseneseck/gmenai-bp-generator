// app/components/VirtualizedList.tsx - Version simplifiée
'use client';

import { memo } from 'react';

interface VirtualizedListProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  emptyMessage?: string;
}

const ListItem = memo(({ item, index, renderItem }: any) => {
  return renderItem(item, index);
});

ListItem.displayName = 'ListItem';

export default function VirtualizedList({ 
  items, 
  renderItem,
  emptyMessage = "Aucun résultat"
}: VirtualizedListProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <ListItem key={index} item={item} index={index} renderItem={renderItem} />
      ))}
    </div>
  );
}
