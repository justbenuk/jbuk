import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FrontContactForm() {
  return (
    <form className="bg-white rounded-2xl px-6 lg:px-12 py-12 flex flex-col space-y-12">
      <div>
        <Label htmlFor="name" className="text-gray-500 pb-2">Name</Label>
        <Input id="name" placeholder="Enter Your Name" className="p-6 bg-gray-200 text-gray-900" />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-500 pb-2">Email</Label>
        <Input id="email" placeholder="Enter Your Email" className="p-6 bg-gray-200 text-gray-900" />
      </div>
      <div>
        <Label htmlFor="message" className="text-gray-500 pb-2">Message</Label>
        <Textarea id="message" placeholder="Whats Your Message" className="p-6 bg-gray-200 text-gray-900 h-64" />
      </div>
      <div className="flex justify-center lg:justify-end">
        <Button className="py-6 px-12 bg-green-500 uppercase font-semibold">Send Message</Button>
      </div>
    </form>
  )
}
