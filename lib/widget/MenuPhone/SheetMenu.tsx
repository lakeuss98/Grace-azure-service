'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { menus } from "@/lib/const/menuList"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MenuPhone() {
  const [isOpen, setIsOpen] = useState(false)
  const closeSheet = () => {
    setIsOpen(false)
  }
  

  return (
    <Sheet defaultOpen={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
         <Menu size={50} className="lg:hidden" />
        {/* <Button variant="outline">Open</Button> */}
      </SheetTrigger>
      <SheetContent side="right" className="w-3/4">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col px-4">
          {
            menus.map((menu,i) => ( <li onClick={closeSheet}  className="flex text-[20px] font-bold   " key={i+menu.path} >  <Link className=" flex flex-row w-full py-4 border-t-1 "  href={menu.path} title={menu.title} > {menu.title} </Link> </li>  ))
          }
        </div>
        {/* <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
