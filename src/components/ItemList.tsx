import { Item } from '@/model'

type ItemListProps = {
  items: Item[]
}

const ItemList = ({ items }: ItemListProps) => {
  if (items.length === 0) {
    return <p className="text-red-500 mt-2">No items matched your search.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className='p-2 border-b border-gray-200'>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default ItemList
