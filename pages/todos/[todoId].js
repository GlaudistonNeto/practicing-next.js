import Link from 'next/link'

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  );

  const todo = await data.json();

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }) {

  return (
    <>
      <Link href="/todos"><a>Back</a></Link>
      <h1>This is the todo: {todo.id}</h1>
      <h3>Text: {todo.title}</h3>
      <p>Comment: gbjhygtgb...
        <Link href={`/todos/${todo.id}/comment/1`}>
          <a>Details</a>
        </Link>
      </p>
      <p>Comment: gbjhygtgb...
        <Link href={`/todos/${todo.id}/comment/2`}>
          <a>Details</a>
        </Link>
      </p>
      <p>Comment: gbjhygtgb...
        <Link href={`/todos/${todo.id}/comment/3`}>
          <a>Details</a>
        </Link>
      </p>
    </>
  );
}
