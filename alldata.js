class DisplayTable extends React.Component{

}

function AllData(){
    
    const ctx = React.useContext(UserContext);
    //const userCount = ctx.users.length;
    //console.log('User count: ', userCount);

    let tableData = ctx.users.map((user, index) => {
        return (
            <tr id={index}>
                <td> {index + 1} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.password} </td>
                <td> {user.balance} </td>
            </tr>
        )
    });

    return (
        <>
        <h4>Only at <b>BadBank</b> will you find a list of our users, their passwords, and their holdings.</h4>
        <div>
            {ctx.users.map((user, index) => (
                <Card 
                    key = {index}
                    header = {`User ${index + 1}`}
                    body = {
                        <>
                        Name: {user.name} <br />
                        Email: {user.email} <br />
                        Password: {user.password} <br />
                        Balance: {user.balance} <br />
                        </>
                    }
                />
            ))}
        </div>
        
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
        </>
       // <h1>All Data<br/>
       //     {JSON.stringify(ctx)}
       // </h1>
    );
}