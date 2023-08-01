function Home(){
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="The Bad Bank"
            title="Welcome to The Bad Bank"
            text="We are here for all of your banking needs, except security."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}