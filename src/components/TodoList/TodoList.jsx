export default function TodoList({ values = [] }) {
  return (
    <ul>
      {values.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}