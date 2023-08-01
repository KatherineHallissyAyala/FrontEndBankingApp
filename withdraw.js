function Withdraw(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');
    //const [balance, setBalance] = React.useState(100);
    const [withdrawalAmount, setWithdrawalAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);  
    const disableButton = !withdrawalAmount;

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (withdrawalAmount > ctx.users[0].balance){
            setStatus('Error: Withdrawal amount exceeds balance.  Try a different amount.');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if (Number.isFinite(withdrawalAmount)){
            setStatus('Error: Please enter a number.');
            setTimeout(() => setStatus(),3000);
            return false;
        }
        return true;
    }

    function executeWithdrawal(){
        console.log(withdrawalAmount);
        if (!validate(withdrawalAmount, 'Please enter a withdrawal amount.')) return;
        let newBalance = Number(ctx.users[0].balance) - Number(withdrawalAmount);
        ctx.users[0].balance = newBalance;
        //setBalance(newBalance);
        setShow(false);
        alert("Transaction Successful!");
    }

    function clearForm(){
        setWithdrawalAmount('');
        setShow(true);
    }
 
    return (
        <Card 
            bgcolor="info"
            header="Withdrawal"
            status={status}
            body={show ? (
                <>
                Balance ${ctx.users[0].balance}<br />
                <br/> 
                Withdrawal Amount<br/>
                <input type="number" className="form-control" id="withdrawalAmount" placeholder="Withdraw Amount" value={withdrawalAmount} onChange={e => setWithdrawalAmount(e.currentTarget.value)}/><br/>
                <br/>
                <button type="submit" disabled={disableButton} className="btn btn-light" onClick={executeWithdrawal}>Withdraw</button>
                </>
            ):(
                <>
                <h5>Transaction Successful!</h5>
                <h5>Your new balance is: ${ctx.users[0].balance}</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
                </>
            )}
        />
    );
}