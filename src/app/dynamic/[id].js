import { useRouter } from 'next/router'
import React from 'react'

const Details = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>Page ID: {id}</div>
  )
}

export default Details

