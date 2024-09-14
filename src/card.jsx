import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a simple card component.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Here's some content for the card. You can put any information or components you want in this section.</p>
      </CardContent>
      <CardFooter>
        <Button>Action Button</Button>
      </CardFooter>
    </Card>
  )
}