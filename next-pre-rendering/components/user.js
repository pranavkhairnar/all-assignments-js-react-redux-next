function User(props) {
    return (
        <>
            <h5>{props.user.name}</h5>
            <h4>{props.user.email}</h4>
        </>
    )
}

export default User;