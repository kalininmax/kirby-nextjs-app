export default async function Page({ params }) {
  return (
    <>
      <h1>Post slug: {params.slug}</h1>
    </>
  );
}
