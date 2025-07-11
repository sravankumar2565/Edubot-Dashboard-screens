import { createFileRoute } from '@tanstack/react-router'
import Submissions4 from '@/pages/Submissions/Submissions4'
export const Route = createFileRoute('/Submissions/Submissions4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Submissions4></Submissions4></div>
}
