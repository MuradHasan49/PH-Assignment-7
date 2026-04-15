import ProfileDetails from "@/components/shared/ui/ProfileDetails/ProfileDetails";

const friendDetailsProfile = async ({ params }) => {
    const { friendId } = await params
    const dataPromise = await fetch(`http://localhost:3000/apidata.json/`)
    const data = await dataPromise.json();

    const specificUser = data.find(item => item.id == friendId)


    return (
        <>
            <ProfileDetails specificUser={specificUser} />
        </>
    )
}

export default friendDetailsProfile