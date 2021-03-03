import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
    toast.success("Information sent")
  }

  const marital = watch("marital")

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <p> <label><strong>Name* </strong></label>
          <input name="names" type="text" ref={register({ required: true })} /></p>
        {errors.names && <p>Name is required</p>}
        < p > <label><strong>City </strong></label>
          <input name="city" type="text" ref={register} /></p>

        <p>  <label><strong>Email* </strong></label>
          <input name="email" type="email" ref={register({ required: true })} /></p>
        {errors.email && <p>Email is required</p>}

        < p > <label><strong>Age* </strong></label>
          <input name="age" type="number" min="18"
            ref={register({ required: true })} /></p>
        {errors.age && <p>Age is required</p>}

        <p> <label><strong>Marital Status*: </strong></label>
          <input type="radio" ref={register({ required: true })} name="marital" value="single" />
          <label>Single</label>
          <input type="radio" ref={register({ required: true })} name="marital" value="married" />
          <label>Married </label>
          {marital === "married" && (
            <>
              <input name="partner" ref={register({ required: true })} placeholder="Partner's name" />
              {errors.partner && <p>Partner's name is required</p>}
            </>
          )}</p>
        {errors.marital && <p>Marital status is required</p>}
        <p><button>Send</button></p>
        {/* {errors.names && toast.error("Name is required")}
        {errors.email && toast.error("Email is required")}
        {errors.age && toast.error("Age is required")}
        {errors.marital && toast.error("Marital status is required")}
        {errors.partner && toast.error("Partner's name is required")} */}
      </form>
    </div >
  );
}

export default App;
