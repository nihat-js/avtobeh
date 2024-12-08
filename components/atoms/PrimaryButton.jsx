export default function CustomButton({ name, children }) {
  return (
    <button class="rounded-xl bg-amber-600 mt-8 block text-center text-white px-4 py-2 text-sm">
      {name} 
      {children}
    </button>
  )
}