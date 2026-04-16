import ProfileDetails from "@/components/shared/ui/ProfileDetails/ProfileDetails";

const friendDetailsProfile = async ({ params }) => {
    const { friendId } = await params
    //  for netlify const dataPromise = await fetch("https://mhs-ph-assignment-07.netlify.app/apidata.json")
    const dataPromise = await fetch("https://ph-assignment-7-gw8u.vercel.app/apidata.json")
    const data = await dataPromise.json();

    const specificUser = data.find(item => item.id == friendId)

    return (
        <>
            <ProfileDetails specificUser={specificUser} />
        </>
    )
}

export default friendDetailsProfile