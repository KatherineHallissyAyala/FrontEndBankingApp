function Deposit(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');
    //const [balance, setBalance] = React.useState(100);
    const [depositAmount, setDepositAmount] = React.useState(0);
   
    const ctx = React.useContext(UserContext);
    const disableButton = !depositAmount;
    const negativeDeposit = depositAmount <= 0;
    console.log("negativeDeposit: ", negativeDeposit);

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function executeDeposit(){
        console.log(depositAmount);
        console.log(ctx.users[0]);
        console.log(ctx.users[0]!=null);
        if (!validate(depositAmount, 'Please enter the amount you wish to deposit.')) return;
        if (!validate((ctx.users[0]!=null), 'You must create an account before you can make a deposit.' )) return;
        if (!validate((!negativeDeposit), 'Please enter positive numbers only.')) return;
        let newBalance = Number(ctx.users[0].balance) + Number(depositAmount);
        //setBalance(newBalance);
        ctx.users[0].balance = newBalance;
        console.log(ctx.users[0]);
        setShow(false);
        alert("Transaction Successful!");
    }

    function clearForm(){
        setDepositAmount('');
        setShow(true);
    }
 
    return (
        <div className="justify-content-center align-items-center">
            <Card 
                bgcolor="success"
                header="Deposit"
                status={status}
                body={show ? (
                    <>
                    Balance {ctx.users[0].balance}<br />
                    <br/> 
                    Deposit Amount<br/>
                    <input type="number" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                    <br/>
                    <button type="submit" disabled={disableButton} className="btn btn-light" onClick={executeDeposit}>Deposit</button>
                    </>
                ):(
                    <>
                    <h5>Transaction Successful!</h5>
                    <h5>Your new balance is: {ctx.users[0].balance}</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit...</button>
                    </>
                )}
            />
        </div>
    );
}