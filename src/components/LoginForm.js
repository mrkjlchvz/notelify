import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../config/routes'

const LoginForm = ({ loading, email, password, emailChanged, passwordChanged, onSubmit }) => (
  <form onSubmit={onSubmit} className="bg-white border-4 border-black shadow-md px-8 pt-6 pb-8 mb-4">

    <div className="mb-4">
      <label className="block font-bold mb-2 text-lg" htmlFor="email">
        EMAIL
      </label>
      <input type="text" value={email} onChange={emailChanged} className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" placeholder="What's your email?" />
    </div>

    <div className="mb-6">
      <label className="block font-bold mb-2 text-lg" htmlFor="password">
        PASSWORD
      </label>
      <input type="password" value={password} onChange={passwordChanged} className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" placeholder="*********" />
    </div>

    <div className="text-center">
      {
        loading
          ? <span className="font-bold text-xl">PLEASE WAIT...</span>
          : (<button type="submit" className="border-4 border-black hover:bg-black hover:text-white font-bold py-3 px-3 w-32">
              LOGIN
            </button>)
      }
    </div>

    <div className="mt-4 text-right">
      <Link to={routes.REGISTRATION}> 
        <span className="text-black font-bold">create an account</span> 
      </Link>
    </div>

  </form>
)

export default LoginForm
