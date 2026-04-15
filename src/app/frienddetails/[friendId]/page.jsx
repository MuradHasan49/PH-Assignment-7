
const friendId = async ({ params }) => {
    const { friendId } = await params
    const dataPromise = await fetch(`http://localhost:3000/apidata.json/`)
    const data = await dataPromise.json();

    const specificUser = data.find(item => item.id == friendId)

    console.log(specificUser)

    return (
        <div>friendId</div>
    )
}

export default friendId