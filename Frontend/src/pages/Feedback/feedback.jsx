import React from 'react'
import picture1 from '../../assets/background.jpg';
export default function feedback() {
  return (
    <div className='container-fluid' style={{backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-grey py-3 py-md-5">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h1 className="mb-4 display-5 text-center text-light"><b>Feedback Form</b></h1>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-light-subtle"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-lg-center">
                    <div className="col-12 col-lg-9">
                        <div className="bg-light border rounded shadow-sm overflow-hidden">

                        <form action="#!">
                            <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                            <div className="dropdown col-12">
                                <label for="feedback" className="form-label">Feedback <span className="text-danger">*</span></label><br />
                                <select class="form-select bg-danger" aria-label="Default select example">
                                <option selected>Select Issue / Report</option>
                                <option value="1">Hate Speech</option>
                                <option value="2">Nudity or Sexual Content</option>
                                <option value="3">Unauthorized Sale</option>
                                <option value="4">Harassment</option>
                                <option value="5">Fraud or Scam</option>
                                <option value="6">Voilence</option>
                                <option value="7">Something Else</option>
                            </select>
                            </div>

                            <div className="col-12">
                                <label for="message" className="form-label">Message <span className="text-danger">*</span></label>
                                <textarea className="form-control" placeholder='Enter briefly about the issue or Feedback' id="message" name="message" rows="7" required></textarea>
                            </div>
                            <div className="col-12">
                                <div className="d-grid">
                                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                                </div>
                            </div>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
