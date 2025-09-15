import { prisma } from '@/prisma/prisma-client'
import { ProfileForm } from '@/shared/components'
import { getUserSession } from '@/shared/lib/get-user-session'
import type { Metadata } from 'next';
import { redirect } from 'next/navigation'

 export const metadata:Metadata = {
 title: ''
}


const ProfilePage = async () => {


  const session = await getUserSession();

  if(!session){
    return redirect('/not-auth')
  }


  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id) 
    }
  })

  if(!user){
    return redirect('/not-auth')
  }

  return (
     <ProfileForm data={user} />
  );
};

export default ProfilePage