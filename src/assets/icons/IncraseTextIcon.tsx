function IncraseTextIcon({ wrapperClassName = ''}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      stroke="currentColor"  strokeWidth="2"
      strokeLinecap="round"  strokeLinejoin="round"
      className={`${wrapperClassName} icon icon-tabler icons-tabler-outline icon-tabler-text-size`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 7v-2h13v2" />
        <path d="M10 5v14" />
        <path d="M12 19h-4" />
        <path d="M15 13v-1h6v1" />
        <path d="M18 12v7" />
        <path d="M17 19h2" />
    </svg>
  )
}

export default IncraseTextIcon