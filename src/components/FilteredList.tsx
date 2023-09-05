import { useState, useMemo } from 'react'

import { Item } from '@/model'
import { SearchBar, ItemList } from '@/components'

type FilteredListProps = {
  items: Item[]
}

const FilteredList = ({ items }: FilteredListProps) => {
  const [search, setSearch] = useState<string>('')

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  }, [items, search])

  return (
    <div className='p-4'>
      <SearchBar value={search} onChange={setSearch} />
      <ItemList items={filteredItems} />
    </div>
  )
}

export default FilteredList
