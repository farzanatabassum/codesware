import React from 'react'
import Link from 'next/link'

const Signup
 = () => {
  return (
    <div>
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
    <h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Regalia</h1>
      <h2 class="mt-6 text-center text-lg font-bold tracking-tight text-gray-900">SIGN UP FOR AN ACCOUNT</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
       <Link href='/login'><a href="#" class="font-medium text-gray-800 hover:text-gray-600"> LOGIN</a></Link>
      </p>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
      <div>
          <label for="name" class="sr-only">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Your name"/>
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="address" class="sr-only">Address</label>
          <input id="address" name="address" type="text" autocomplete="address" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Address"/>
        </div>
        <div>
          <label for="phone-number" class="sr-only">Phone number</label>
          <input id="phone-number" name="phone" type="number" autocomplete="phone" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Phone number"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>
      {/* <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-gray-600 hover:text-gray-500">Forgot your password?</a>
        </div>
      </div> */}

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          SIGN UP
        </button>
      </div>
    </form>
  </div>
</div>
    
    </div>
  )
}

export default Signup

