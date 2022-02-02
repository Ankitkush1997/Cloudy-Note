import React from "react";

const SignUp = () => {
  const onSubmit = () => {
    console.log("hero");
  };

  const onChange = () => {
    console.log("zero");
  };
  return (
    <div className="container">
      <div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              // value={creds.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Email Address
            </label>
            <input
              type="password"
              // value={creds.password}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              // onChange={onChange}
            />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Password
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                // value={creds.email}
                onChange={onChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Confirm Password
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                // value={creds.email}
                onChange={onChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
