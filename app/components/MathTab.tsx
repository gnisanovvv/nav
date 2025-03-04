interface MathTabProps {
  url?: string
}

export default function MathTab({ url }: MathTabProps) {
  if (!url) return null

  return (
    <div className="w-full h-full">
      <iframe src={url} className="w-full h-full border-none" title="Математика" />
    </div>
  )
}

