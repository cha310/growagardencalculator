export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <main>
        {children}
      </main>
    </div>
  )
}