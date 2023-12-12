import React from 'react'

export default function Adminpanel() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center my-5' style={{fontSize: 42}}>Admin Panel</h1>
                <hr />
                <br />
                <a href="#!" className="btn bsb-btn-2xl " style={{fontSize: 30}}><ion-icon name="arrow-back-circle-outline"></ion-icon></a>
                <h2 className='my-3'style={{fontSize: 38}}>Feedbacks</h2>
                <h5 className='my-2'style={{fontSize: 20}}>Collected Feedbacks</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Sr#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Issue</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>1/3/2023</td>
                    <td>illegal Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-danger p-1 " style={{fontSize: 16}}>Delete</a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>1/3/2023</td>
                    <td>Scam Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-warning p-1 " style={{fontSize: 16}}>Pending</a></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td >1/3/2023</td>
                    <td>18+ Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-success p-1" style={{fontSize: 16}}>Done</a></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>1/3/2023</td>
                    <td>illegal Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-danger p-1 " style={{fontSize: 16}}>Delete</a></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>1/3/2023</td>
                    <td>Scam Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-warning p-1 " style={{fontSize: 16}}>Pending</a></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td >1/3/2023</td>
                    <td>18+ Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-success p-1" style={{fontSize: 16}}>Done</a></td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>1/3/2023</td>
                    <td>illegal Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-danger p-1 " style={{fontSize: 16}}>Delete</a></td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>1/3/2023</td>
                    <td>Scam Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-warning p-1 " style={{fontSize: 16}}>Pending</a></td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td >1/3/2023</td>
                    <td>18+ Post</td>
                    <td>ali@gmail.com</td>
                    <td>He is blackmailing me.</td>
                    <td><a href="#!" className="btn bsb-btn-2xl btn-success p-1" style={{fontSize: 16}}>Done</a></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}
