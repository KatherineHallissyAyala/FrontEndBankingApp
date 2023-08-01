function Balance(){
    const ctx = React.useContext(UserContext);
    return (
        <>
        <h1>Balance<br/>
            {JSON.stringify(ctx)}
        </h1>
        <div class="alert alert-primary" role="alert">
        You have money in the bank!
      </div>
      </>
    );
}