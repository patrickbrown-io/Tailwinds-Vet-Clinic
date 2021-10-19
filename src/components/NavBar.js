import React from 'react'
import {GiDogHouse} from 'react-icons/gi'

export const NavBar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-red-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <GiDogHouse className="inline-block text-white-300 align-top" />
                <h1 className="text-5xl mb-3">Tailwinds Veternary Clinic</h1>
            </div>

            <div class="flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>

                    <a href="/appointments" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Appointments
                    </a>

                </div>

            
            </div>

        </nav>
    )
}
