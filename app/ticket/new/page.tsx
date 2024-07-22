"use client"
import { TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewTicketPage = () => {
  return (
    <div className='max-w-xl space-y-5'>
        <TextField.Root>
            <TextField.Input placeholder='title'></TextField.Input>
        </TextField.Root>
        <TextArea placeholder="Description de ticket…" />
    </div>
  )
}

export default NewTicketPage