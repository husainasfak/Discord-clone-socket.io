"use client"

import CreateServerModal from '@/components/modals/createServer'
import { useEffect, useState } from 'react'
import InviteUserModal from '../modals/inviteUserModal'
import EditServerModal from '../modals/edit-server-modal'
import { MembersModal } from '../modals/members'
import { CreateChannelModal } from '../modals/createChannel'
import { LeaveServerModal } from '../modals/LeaveServer'
import { DeleteServerModal } from '../modals/DeleteServer'
import { DeleteChannelModal } from '../modals/delete-channel'
import { EditChannelModal } from '../modals/edit-channel'


export default function ModalProviders() {
     const [isMounted, setIsMounted] = useState(false)
     useEffect(() => {
          setIsMounted(true)
     }, [])
     if (!isMounted) {
          return null
     }
     return (
          <>
               <CreateServerModal />
               <InviteUserModal />
               <EditServerModal />
               <MembersModal />
               <CreateChannelModal />
               <LeaveServerModal />
               <DeleteServerModal />
               <DeleteChannelModal />
               <EditChannelModal />
          </>
     )
}