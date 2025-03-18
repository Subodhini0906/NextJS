import React from 'react'
import Link from 'next/link'

const Page=()=> {
  return (
    <div>
        <h1>Dashboard users</h1>
        <ul className='mt-10'>
            <li><Link href="/dashboard/user/1">user 1</Link></li>
            <li><Link href="/dashboard/user/2">user 2</Link></li>
            <li><Link href="/dashboard/user/3">user 3</Link></li>
        </ul>
    </div>
  )
}

export default Page;