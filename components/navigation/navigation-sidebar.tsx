import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import React from 'react'
import NavigationAction from './navigationAction'
import { Separator } from '../ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import NavigationItem from './NavigationItem'
import { ModeToggle } from '../mode-toggle'
import { UserButton } from '@clerk/nextjs'


const NaviagtionSidebar = async () => {
     const profile = await currentProfile()
     if (!profile) {
          return redirect('/')
     }

     const servers = await db.server.findMany({
          where: {
               members: {
                    some: {
                         profileId: profile.id
                    }
               }
          }
     })

     return (
          <div className='space-y-4 flex flex-col items-start h-full text-primary dark:bg-[#1E1F22] py-3'>
               <NavigationAction />
               <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto' />
               <ScrollArea className='flex-1 w-full'>
                    {
                         servers && servers.map(server => (
                              <div key={server.id} className='mb-4'>
                                   <NavigationItem id={server.id} imageUrl={server.imageUrl} name={server.name} />
                              </div>
                         ))
                    }

               </ScrollArea>
               <div className='pb-3 mt-auto flex items-center justify-center flex-col gap-y-4 w-full'>
                    <ModeToggle />
                    <UserButton afterSignOutUrl='/' appearance={{
                         elements: {
                              avatarBox: "h-[48px] w-[48px]"
                         }
                    }} />
               </div>
          </div>
     )
}

export default NaviagtionSidebar