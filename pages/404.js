import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>It seems you are trying to see an non-existent page</p>
      <Link href="/"><a>Back</a></Link>
    </>
  );
}
