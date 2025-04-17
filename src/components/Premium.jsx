import api from "../utils/axiosInterceptor"
const Premium = () => {
    const handleBuy = async (type) => {
        //TODO: handle buy
        const order=await api.post("/payment/create",{
            memberShipType:type
        });
        const {keyId,amount,currency,notes,orderId}=order;
        const {firstName,lastName,email}=notes;
        const options = {
            "key": keyId, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": currency,
            "name": "Dev Tinder", //your business name
            "description": "Test Transaction",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": firstName+" "+lastName, //your customer's name
                "email": email,
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        //It should  open the razorpay Dialog Box
        const rzp = new window.Razorpay(options);
        rzp.open();
    }
    return (
        <div className="m-10">
            <div className="flex w-full">
                <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                    <h1 className="font-bold text-3xl">Silver Membership</h1>
                    <ul>
                        <li>-Chat with other people</li>
                        <li>-100 Connection requests per day with other people</li>
                        <li>-Blue Tick</li>
                        <li>-3 months</li>
                    </ul>
                    <button onClick={()=>handleBuy("silver")} className="btn btn-secondary">Get Silver</button>
                </div>
                <div className="divider divider-horizontal">OR</div>
                <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                <h1 className="font-bold text-3xl">Gold Membership</h1>
                    <ul>
                        <li>-Chat with other people</li>
                        <li>-100 Connection requests per day with other people</li>
                        <li>-Blue Tick</li>
                        <li>-6 months</li>
                    </ul>
                    <button onClick={()=>handleBuy("gold")} className="btn btn-primary">Get Gold</button></div>
            </div>
        </div>
    )
}
export default Premium;