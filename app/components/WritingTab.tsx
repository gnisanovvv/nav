interface WritingTabProps {
  url?: string
}

export default function WritingTab({ url }: WritingTabProps) {
  if (!url) return null

  return (
    <div className="w-full h-full">
      <iframe src={url} className="w-full h-full border-none" title="Письмо" />
    </div>
  )
}

