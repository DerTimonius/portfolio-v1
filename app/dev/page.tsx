export default async function Dev() {
  const res = await fetch('https://api.github.com/users/dertimonius/repos');
  const data = await res.json();

  return <p className="pt-20">{data.length}</p>;
}
