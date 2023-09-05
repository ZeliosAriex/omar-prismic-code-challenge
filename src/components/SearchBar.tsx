type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type='text'
      placeholder='Search...'
      className='p-2 border border-gray-300 rounded mb-4 w-full'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBar
