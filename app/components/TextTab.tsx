interface TextTabProps {
  url?: string
}

export default function TextTab({ url }: TextTabProps) {
  if (!url) return null

  return (
    <div className="w-full h-full">
      <iframe src={url} className="w-full h-full border-none" title="Текст" />
    </div>
  )
}

