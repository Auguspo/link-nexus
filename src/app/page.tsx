import api from "@/api";

export default async function Home() {
  const links = await api.links.fetch();
  
  return (
    <main>
      <ul>
        <h1>Augusto Poletti Links</h1>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target='_blank'>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
