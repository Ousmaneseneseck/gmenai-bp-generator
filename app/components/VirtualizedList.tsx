// app/components/VirtualizedList.tsx
'use client';

import { FixedSizeList as List } from 'react-window';
import { memo } from 'react';

interface VirtualizedListProps {
  items: any[];
  height: number;
  itemHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  emptyMessage?: string;
}

const Row = memo(({ data, index, style }: any) => {
  const { items, renderItem } = data;
  return (
    <div style={style}>
      {renderItem(items[index], index)}
    </div>
  );
});

Row.displayName = 'Row';

export default function VirtualizedList({ 
  items, 
  height, 
  itemHeight, 
  renderItem,
  emptyMessage = "Aucun résultat"
}: VirtualizedListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        {emptyMessage}
      </div>
    );
  }

  return (
    <List
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
      itemData={{ items, renderItem }}
    >
      {Row}
    </List>
  );
}
