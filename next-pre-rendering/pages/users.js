import User from "../components/user"

function users({users}) {

    return (<>
        <h1>List of users</h1>
        {
            users.map(user => {
                return (
                    <div key = {user.id}>
                    <User user = {user}></User>
                    </div>
                )
            })
        }
    </>)

}

export default users;

export async function getStaticProps() {
    const Response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await Response.json()
    return {
        props: {
            users: data
        }
    }
}