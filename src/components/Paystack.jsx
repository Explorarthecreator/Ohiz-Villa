import { usePaystackPayment } from "react-paystack"

const Paystack = ({email,price,name,phoneNumber}) => {
    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        firstname:name,
        phone: phoneNumber,
        amount: price*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_0d2221fbbb608ceee7f64ef5285414ce4717c1ae',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      alert("God is good")
      console.log("My name is Explorar");

    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <button className="btn btn-square btn-wide" onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Paystack</button>
      </div>
    );
}

export default Paystack