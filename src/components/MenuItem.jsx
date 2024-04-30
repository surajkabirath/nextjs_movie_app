import Link from 'next/link'


const MenuItem = ({title, address}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem