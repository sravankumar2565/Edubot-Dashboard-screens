import Submissions5 from '@/pages/Submissions/Submissions5'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Submissions/Submissions5')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Submissions5></Submissions5></div>
}
