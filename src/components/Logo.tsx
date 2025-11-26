import { FaDumbbell } from 'react-icons/fa6';
import { Link } from 'react-router';


const Logo = () => {
  return (
        <Link to={'/'} className='font-bold text-lg scale-y-125 flex items-baseline hover:text-white duration-300'>
            <FaDumbbell className='-rotate-45'/>
            <p>Pam-Fitness</p>
        </Link>
    )
}

export default Logo