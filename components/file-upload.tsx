"use client"

import React from 'react'
import "@uploadthing/react/styles.css"
import { UploadDropzone } from '@/lib/uploadThing';
import Image from 'next/image';
import { Button } from './ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';

interface FileUploadProps {
     onChange: (url?: string) => void;
     value: string;
     endpoint: "messageFile" | "serverImage"
}

const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
     const fileType = value?.split(".").pop();
     if (value && fileType !== "pdf") {
          return <div className='relative h-20 w-20'>
               <Image fill src={value} alt="Upload" className='rounded-full' />
               <Button onClick={() => onChange('')} className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm' type="button"><Cross1Icon className='h-2 w-2' /></Button>
          </div>
     }
     return (
          <UploadDropzone
               endpoint={endpoint}
               onClientUploadComplete={(res) => {
                    onChange(res?.[0].url)
               }}
               onUploadError={(error: Error) => {
                    console.log(error)
               }}
          />
     )
}

export default FileUpload