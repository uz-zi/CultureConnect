import React from 'react'
import pic6 from "../../assets/img6.jpg";
import pic7 from "../../assets/img5.jpg";
import pic8 from "../../assets/img8.jpg";
export default function Nativeprofile() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-8 mb-5">
                <h1 className='my-5'>Dr. Ahad Raza</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias autem assumenda veniam tempora expedita iste commodi repellat voluptatibus, laboriosam, asperiores pariatur cupiditate voluptatum! Maiores delectus expedita aliquid beatae impedit? Reiciendis non eligendi provident id perferendis inventore, minus, animi facere, distinctio minima aut quasi voluptatum laboriosam. Quod, minus, consequuntur est minima earum, similique ea autem cupiditate velit neque dignissimos doloribus illum.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias autem assumenda veniam tempora expedita iste commodi repellat voluptatibus, laboriosam, asperiores pariatur cupiditate voluptatum! Maiores delectus expedita aliquid beatae impedit? Reiciendis non eligendi provident id perferendis inventore, minus, animi facere, distinctio minima aut quasi voluptatum laboriosam. Quod, minus, consequuntur est minima earum, similique ea autem cupiditate velit neque dignissimos doloribus illum.</p>
                <button class="btn btn-primary my-4" type="submit">Lets Chat</button>
            </div>
            <div className="col-md-4 my-5">
            <img className="img-fluid" style={{width: '350', height: '350' }} loading="lazy" src={pic8} alt="Taytum Elia"/>
            </div>
        </div>
      </div>
    </div>
  )
}
