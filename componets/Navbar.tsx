import { checkUser } from '@/lib/checkUser';

export default function Navbar() {
    const User = checkUser();
    return <div>Navbar</div>
}