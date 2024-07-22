import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const ticket = () => {
  return (
    <div> <Button> <Link href='/ticket/new'>new ticket</Link></Button></div>
  )
}

export default ticket